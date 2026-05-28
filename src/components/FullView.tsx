/**
 * FullView Component
 * Displays all government elements in a concentric ring layout using Cytoscape.js
 */

import cytoscape, { Core, NodeSingular } from 'cytoscape';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { getAllElements, getChildIds, getElementById } from '../data/elements';
import { jurisdictionMatchesFilter } from '../data/jurisdictions';
import { ElementCategory, ElementSubtype, JurisdictionType } from '../types';
import { getBorderColor, getNodeShape, getSubtypeColor } from '../utils/colors';
import './FullView.css';

interface FullViewProps {
  selectedElementId: string | null;
  highlightedIds: string[];
  onSelectElement: (id: string | null) => void;
  onElementClick: (id: string) => void;
  searchQuery: string;
  categoryFilters: ElementCategory[];
  jurisdictionFilter: JurisdictionType | null;
  tagFilters: string[];
}

// Build adjacency maps for ancestor-chain highlighting (built once)
const _allParents = new Map<string, Set<string>>();
const _allChildren = new Map<string, Set<string>>();

for (const el of getAllElements()) {
  if (!_allChildren.has(el.id)) _allChildren.set(el.id, new Set());
  if (!_allParents.has(el.id)) _allParents.set(el.id, new Set());
  for (const pid of el.parentIds) {
    if (!_allChildren.has(pid)) _allChildren.set(pid, new Set());
    _allChildren.get(pid)!.add(el.id);
    _allParents.get(el.id)!.add(pid);
  }
  for (const pid of el.secondaryParentIds ?? []) {
    if (!_allChildren.has(pid)) _allChildren.set(pid, new Set());
    _allChildren.get(pid)!.add(el.id);
    _allParents.get(el.id)!.add(pid);
  }
}

// Calculate ring (distance from president) for each element using BFS
function calculateRings(): Map<string, number> {
  const rings = new Map<string, number>();
  const elements = getAllElements();
  
  rings.set('president', 0);
  
  const queue: string[] = ['president'];
  const visited = new Set<string>(['president']);
  
  while (queue.length > 0) {
    const currentId = queue.shift()!;
    const currentRing = rings.get(currentId)!;
    const childIds = getChildIds(currentId);
    
    for (const childId of childIds) {
      if (!visited.has(childId)) {
        visited.add(childId);
        rings.set(childId, currentRing + 1);
        queue.push(childId);
      }
    }
  }
  
  elements.forEach(el => {
    if (!rings.has(el.id)) {
      rings.set(el.id, 5);
    }
  });
  
  return rings;
}

const NODE_SIZE = 22;

function FullView({
  selectedElementId,
  highlightedIds: _highlightedIds,
  onSelectElement,
  onElementClick,
  searchQuery,
  categoryFilters: _categoryFilters,
  jurisdictionFilter,
  tagFilters: _tagFilters,
}: FullViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipActiveRef = useRef(false);
  const pinnedIdRef = useRef<string | null>(null);
  const searchActiveRef = useRef(false);
  const rings = useMemo(() => calculateRings(), []);

  // Build Cytoscape elements
  const cyElements = useMemo(() => {
    const elements = getAllElements();
    const nodes: cytoscape.ElementDefinition[] = [];
    const edges: cytoscape.ElementDefinition[] = [];

    elements.forEach(el => {
      const ring = rings.get(el.id) || 5;
      
      nodes.push({
        data: {
          id: el.id,
          label: el.abbreviation || el.name,
          fullName: el.name,
          category: el.category,
          subtype: el.subtype,
          ring: ring,
          color: getSubtypeColor(el.subtype as ElementSubtype),
          borderColor: getBorderColor(el.subtype as ElementSubtype),
          nodeShape: getNodeShape(el.category as ElementCategory, el.subtype as ElementSubtype),
        },
      });

      el.parentIds.forEach(parentId => {
        if (getElementById(parentId)) {
          edges.push({
            data: {
              id: `${parentId}-${el.id}`,
              source: parentId,
              target: el.id,
              type: 'primary',
            },
          });
        }
      });

      el.secondaryParentIds?.forEach(parentId => {
        if (getElementById(parentId)) {
          edges.push({
            data: {
              id: `${parentId}-${el.id}-secondary`,
              source: parentId,
              target: el.id,
              type: 'secondary',
            },
          });
        }
      });
    });

    return [...nodes, ...edges];
  }, [rings]);

  // Highlight node + ancestor chain + direct children
  const highlightNode = useCallback((cy: Core, hoveredId: string | null, _pinned: boolean) => {
    if (!hoveredId) {
      // Restore everything
      cy.nodes().removeStyle('opacity z-index border-width');
      cy.edges().removeStyle('opacity line-color target-arrow-color width z-index');
      return;
    }

    // Collect nodes to highlight: hovered + full ancestor chain + direct children
    const highlight = new Set<string>([hoveredId]);

    // BFS upward through all ancestors
    const ancestorQueue = [...(_allParents.get(hoveredId) ?? [])];
    while (ancestorQueue.length > 0) {
      const pid = ancestorQueue.shift()!;
      if (!getElementById(pid) || highlight.has(pid)) continue;
      highlight.add(pid);
      (_allParents.get(pid) ?? new Set()).forEach(gid => {
        if (!highlight.has(gid)) ancestorQueue.push(gid);
      });
    }

    // Direct children only
    (_allChildren.get(hoveredId) ?? new Set()).forEach(cid => {
      if (getElementById(cid)) highlight.add(cid);
    });

    cy.nodes().forEach((n: any) => {
      const nid = n.id();
      if (highlight.has(nid)) {
        const isHovered = nid === hoveredId;
        n.style({
          'opacity': 1,
          'z-index': isHovered ? 9999 : 100,
          'border-width': isHovered ? '3px' : '2px',
        });
      } else {
        n.style({ 'opacity': 0.12, 'z-index': 0 });
      }
    });

    cy.edges().forEach((e: any) => {
      const src = e.source().id();
      const tgt = e.target().id();
      if (highlight.has(src) && highlight.has(tgt)) {
        e.style({ 'opacity': 1, 'line-color': '#555', 'target-arrow-color': '#555', 'width': '2px', 'z-index': 200 });
      } else {
        e.style({ 'opacity': 0.04 });
      }
    });
  }, []);

  // Apply search/filter highlight state
  const applyHighlightFilter = useCallback((cy: Core, ids: string[]) => {
    const idSet = new Set(ids);
    cy.nodes().forEach((n: any) => {
      const nid = n.id();
      if (idSet.has(nid)) {
        n.style({ 'opacity': 1, 'z-index': 100, 'border-width': '2px' });
      } else {
        n.style({ 'opacity': 0.07, 'z-index': 0 });
      }
    });
    cy.edges().forEach((e: any) => {
      if (idSet.has(e.source().id()) && idSet.has(e.target().id())) {
        e.style({ 'opacity': 0.4, 'line-color': '', 'target-arrow-color': '', 'width': '' });
      } else {
        e.style({ 'opacity': 0.03 });
      }
    });
  }, []);

  // Initialize Cytoscape
  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: cyElements,
      style: [
        // ── Base node style ──
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            'border-color': 'data(borderColor)',
            'border-width': '1.5px',
            'label': '',
            'width': NODE_SIZE,
            'height': NODE_SIZE,
            'font-size': '10px',
            'min-zoomed-font-size': '10px',
            'font-weight': 'bold',
            'text-valign': 'center',
            'text-halign': 'center',
            'color': '#222',
            'text-wrap': 'wrap',
            'text-max-width': '80px',
            'opacity': 0.85,
            'z-index': 1,
          } as any,
        },
        // ── Ring-based sizing ──
        {
          selector: 'node[ring = 0]',
          style: { 'width': 42, 'height': 42 } as any,
        },
        {
          selector: 'node[ring = 1]',
          style: { 'width': 32, 'height': 32 } as any,
        },
        {
          selector: 'node[ring = 2]',
          style: { 'width': 26, 'height': 26 } as any,
        },
        // ── Official shapes ──
        {
          selector: 'node[category = "official"]',
          style: { 'shape': 'ellipse' } as any,
        },
        {
          selector: 'node[subtype = "president"]',
          style: { 'shape': 'star', 'border-color': '#5c0000' } as any,
        },
        {
          selector: 'node[subtype = "vice-president"]',
          style: { 'shape': 'heptagon', 'border-color': '#7d1128' } as any,
        },
        {
          selector: 'node[subtype = "prime-minister"]',
          style: { 'shape': 'heptagon', 'border-color': '#8b0000' } as any,
        },
        {
          selector: 'node[subtype = "cabinet-minister"]',
          style: { 'shape': 'octagon', 'border-color': '#922b21' } as any,
        },
        {
          selector: 'node[subtype = "minister-of-state-ic"]',
          style: { 'shape': 'hexagon', 'border-color': '#c0392b' } as any,
        },
        {
          selector: 'node[subtype = "minister-of-state"]',
          style: { 'shape': 'hexagon', 'border-color': '#cd6155' } as any,
        },
        {
          selector: 'node[subtype = "deputy-minister"]',
          style: { 'shape': 'ellipse', 'border-color': '#d98880' } as any,
        },
        {
          selector: 'node[subtype = "governor"]',
          style: { 'shape': 'pentagon', 'border-color': '#b7410e' } as any,
        },
        {
          selector: 'node[subtype = "chief-minister"]',
          style: { 'shape': 'octagon', 'border-color': '#c0392b' } as any,
        },
        {
          selector: 'node[subtype = "civil-servant"]',
          style: { 'shape': 'ellipse', 'border-color': '#2980b9' } as any,
        },
        {
          selector: 'node[subtype = "constitutional-official"]',
          style: { 'shape': 'pentagon', 'border-color': '#1a5276' } as any,
        },
        // ── Ministry shapes ──
        {
          selector: 'node[category = "ministry"]',
          style: { 'shape': 'rectangle', 'border-color': '#196f3d' } as any,
        },
        {
          selector: 'node[subtype = "state-ministry"]',
          style: { 'shape': 'rectangle', 'border-color': '#1e8449' } as any,
        },
        {
          selector: 'node[subtype = "department"]',
          style: { 'shape': 'rectangle', 'border-color': '#27ae60' } as any,
        },
        {
          selector: 'node[subtype = "attached-office"]',
          style: { 'shape': 'roundrectangle', 'border-color': '#7d3c98' } as any,
        },
        {
          selector: 'node[subtype = "subordinate-office"]',
          style: { 'shape': 'roundrectangle', 'border-color': '#6c3483' } as any,
        },
        {
          selector: 'node[subtype = "field-office"]',
          style: { 'shape': 'roundrectangle', 'border-color': '#5b2c6f' } as any,
        },
        // ── Body shapes ──
        {
          selector: 'node[category = "body"]',
          style: { 'shape': 'diamond', 'border-color': '#229954' } as any,
        },
        {
          selector: 'node[subtype = "constitutional-body"]',
          style: { 'shape': 'diamond', 'border-color': '#1a5276' } as any,
        },
        {
          selector: 'node[subtype = "statutory-body"]',
          style: { 'shape': 'diamond', 'border-color': '#2980b9' } as any,
        },
        {
          selector: 'node[subtype = "regulatory-authority"]',
          style: { 'shape': 'diamond', 'border-color': '#7d3c98' } as any,
        },
        {
          selector: 'node[subtype = "psu"]',
          style: { 'shape': 'diamond', 'border-color': '#884ea0' } as any,
        },
        {
          selector: 'node[subtype = "autonomous-body"]',
          style: { 'shape': 'diamond', 'border-color': '#b7950b' } as any,
        },
        {
          selector: 'node[subtype = "tribunal"]',
          style: { 'shape': 'diamond', 'border-color': '#5d6d7e' } as any,
        },
        {
          selector: 'node[subtype = "service-cadre"]',
          style: { 'shape': 'ellipse', 'border-color': '#2c3e50' } as any,
        },
        {
          selector: 'node[subtype = "local-body"]',
          style: { 'shape': 'diamond', 'border-color': '#0e6655' } as any,
        },
        // ── Group shapes ──
        {
          selector: 'node[category = "group"]',
          style: { 'shape': 'pentagon', 'border-color': '#922b21' } as any,
        },
        {
          selector: 'node[subtype = "state-legislature"]',
          style: { 'shape': 'pentagon', 'border-color': '#d4a017' } as any,
        },
        // ── Selected node indicator ──
        {
          selector: 'node.fv-selected',
          style: {
            'border-width': '4px',
            'border-color': '#f39c12',
            'opacity': 1,
            'z-index': 500,
            'label': 'data(fullName)',
            'font-size': '13px',
            'font-weight': 'bold',
            'min-zoomed-font-size': '8px',
            'color': '#1a1a1a',
            'text-background-color': 'white',
            'text-background-opacity': 0.95,
            'text-background-padding': '4px',
            'text-background-shape': 'roundrectangle',
            'text-max-width': '140px',
            'text-wrap': 'wrap',
            'text-valign': 'top',
            'text-margin-y': -6,
          } as any,
        },
        // ── Edges ──
        {
          selector: 'edge',
          style: {
            'width': '1px',
            'line-color': '#aaa',
            'target-arrow-color': '#aaa',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'opacity': 0.3,
          } as any,
        },
        {
          selector: 'edge[type = "secondary"]',
          style: {
            'line-style': 'dashed',
            'line-dash-pattern': [4, 3],
            'opacity': 0.18,
          } as any,
        },
      ],
      layout: {
        name: 'concentric',
        concentric: (node: NodeSingular) => {
          const ring = node.data('ring') as number;
          return 10 - ring;
        },
        levelWidth: () => 1,
        minNodeSpacing: 50,
        padding: 50,
      },
      minZoom: 0.02,
      maxZoom: 3,
      wheelSensitivity: 0.3,
    });

    // Centre on President initially
    const presNode = cy.getElementById('president');
    if (presNode.length) {
      cy.center(presNode);
      cy.zoom({ level: 0.35, position: presNode.position() });
    }

    // Hover: highlight ancestor chain + direct children
    cy.on('mouseover', 'node', (event: any) => {
      const hid = event.target.id();
      if (pinnedIdRef.current && pinnedIdRef.current !== hid) {
        highlightNode(cy, hid, false);
      } else if (!pinnedIdRef.current) {
        highlightNode(cy, hid, false);
      }
      if (tooltipRef.current) {
        const el = getElementById(hid);
        tooltipRef.current.textContent = el?.name ?? hid;
        tooltipRef.current.style.display = 'block';
      }
      tooltipActiveRef.current = true;
    });

    cy.on('mouseout', 'node', () => {
      // Restore to filter/pinned/clear state
      if (searchActiveRef.current) {
        // Will be re-applied by the search effect
        highlightNode(cy, pinnedIdRef.current, true);
      } else if (pinnedIdRef.current) {
        highlightNode(cy, pinnedIdRef.current, true);
      } else {
        highlightNode(cy, null, false);
      }
      if (tooltipRef.current) tooltipRef.current.style.display = 'none';
      tooltipActiveRef.current = false;
    });

    // Tap on node: select + pin
    cy.on('tap', 'node', (event: any) => {
      const hid = event.target.id();
      pinnedIdRef.current = hid;
      highlightNode(cy, hid, true);
      onElementClick(hid);
    });

    // Tap background: unpin
    cy.on('tap', (event: any) => {
      if (event.target === cy) {
        pinnedIdRef.current = null;
        highlightNode(cy, null, false);
        onSelectElement(null);
      }
    });

    cyRef.current = cy;

    return () => {
      cy.destroy();
    };
  }, [cyElements, onElementClick, onSelectElement, highlightNode]);

  // Selection tracking: apply fv-selected class + label
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;

    // Clear previous selection
    cy.nodes().removeClass('fv-selected');

    if (selectedElementId) {
      const node = cy.getElementById(selectedElementId);
      if (node.length > 0) {
        node.addClass('fv-selected');
        pinnedIdRef.current = selectedElementId;
        highlightNode(cy, selectedElementId, true);
      }
    }
  }, [selectedElementId, highlightNode]);

  // Handle search highlighting
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;

    searchActiveRef.current = !!searchQuery;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchingIds: string[] = [];
      cy.nodes().forEach((node: any) => {
        const fullName = (node.data('fullName') as string || '').toLowerCase();
        const label = (node.data('label') as string || '').toLowerCase();
        if (fullName.includes(query) || label.includes(query)) {
          matchingIds.push(node.id());
        }
      });
      applyHighlightFilter(cy, matchingIds);
    } else if (!selectedElementId) {
      highlightNode(cy, null, false);
    }
  }, [searchQuery, selectedElementId, highlightNode, applyHighlightFilter]);

  // Jurisdiction filter: dim nodes that don't match the selected territory
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;

    if (!jurisdictionFilter) {
      // No filter — restore all nodes (unless search is active)
      if (!searchActiveRef.current) {
        if (pinnedIdRef.current) {
          highlightNode(cy, pinnedIdRef.current, true);
        } else {
          highlightNode(cy, null, false);
        }
      }
      return;
    }

    // Find all elements that match the jurisdiction
    const matchingIds: string[] = [];
    getAllElements().forEach(el => {
      if (jurisdictionMatchesFilter(el.jurisdictions, jurisdictionFilter)) {
        matchingIds.push(el.id);
      }
    });

    applyHighlightFilter(cy, matchingIds);
  }, [jurisdictionFilter, highlightNode, applyHighlightFilter]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltipActiveRef.current && tooltipRef.current) {
      tooltipRef.current.style.left = `${e.clientX + 14}px`;
      tooltipRef.current.style.top = `${e.clientY + 14}px`;
    }
  };

  return (
    <div className="full-view" onMouseMove={handleMouseMove}>
      <div ref={containerRef} className="cytoscape-container" />

      {/* Interactive hint */}
      <div className="full-view-hint">Hover to explore · Click to select · Scroll to zoom</div>

      {/* Cursor-following tooltip */}
      <div
        ref={tooltipRef}
        className="full-view-tooltip"
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default FullView;
