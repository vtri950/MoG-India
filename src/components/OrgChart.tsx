/**
 * OrgChart (Focus View) Component
 * Shows a selected element at the center with its parents and children arranged radially
 */

import cytoscape, { Core } from 'cytoscape';
import { useEffect, useMemo, useRef } from 'react';
import { getConnectedElements, getElementById } from '../data/elements';
import { ElementSubtype } from '../types';
import { getBorderColor, getSubtypeColor } from '../utils/colors';
import './OrgChart.css';

interface OrgChartProps {
  selectedElementId: string | null;
  onSelectElement: (id: string | null) => void;
  onElementClick: (id: string) => void;
}

function OrgChart({ selectedElementId, onSelectElement, onElementClick }: OrgChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);

  // Build elements for the focus view around the selected element
  const cyElements = useMemo(() => {
    if (!selectedElementId) return [];

    const centralElement = getElementById(selectedElementId);
    if (!centralElement) return [];

    const connections = getConnectedElements(selectedElementId);
    const nodes: cytoscape.ElementDefinition[] = [];
    const edges: cytoscape.ElementDefinition[] = [];
    const addedIds = new Set<string>();

    const makeNodeData = (el: ReturnType<typeof getElementById>, role: string) => ({
      id: el!.id,
      label: el!.abbreviation || el!.name,
      fullName: el!.name,
      category: el!.category,
      subtype: el!.subtype,
      color: getSubtypeColor(el!.subtype as ElementSubtype),
      borderColor: getBorderColor(el!.subtype as ElementSubtype),
      role,
    });

    // Add central node
    nodes.push({ data: makeNodeData(centralElement, 'center') });
    addedIds.add(centralElement.id);

    // Add parents
    connections.parents.forEach(parent => {
      if (!addedIds.has(parent.id)) {
        nodes.push({ data: makeNodeData(parent, 'parent') });
        addedIds.add(parent.id);
      }
      edges.push({
        data: {
          id: `e-${parent.id}-${centralElement.id}`,
          source: parent.id,
          target: centralElement.id,
          type: 'primary',
        },
      });

      // Add grandparents
      const grandConnections = getConnectedElements(parent.id);
      grandConnections.parents.forEach(gp => {
        if (!addedIds.has(gp.id)) {
          nodes.push({ data: makeNodeData(gp, 'grandparent') });
          addedIds.add(gp.id);
        }
        edges.push({
          data: {
            id: `e-${gp.id}-${parent.id}`,
            source: gp.id,
            target: parent.id,
            type: 'primary',
          },
        });
      });
    });

    // Add secondary parents
    connections.secondaryParents.forEach(sp => {
      if (!addedIds.has(sp.id)) {
        nodes.push({ data: makeNodeData(sp, 'secondary-parent') });
        addedIds.add(sp.id);
      }
      edges.push({
        data: {
          id: `e-sec-${sp.id}-${centralElement.id}`,
          source: sp.id,
          target: centralElement.id,
          type: 'secondary',
        },
      });
    });

    // Add children
    connections.children.forEach(child => {
      if (!addedIds.has(child.id)) {
        nodes.push({ data: makeNodeData(child, 'child') });
        addedIds.add(child.id);
      }
      edges.push({
        data: {
          id: `e-${centralElement.id}-${child.id}`,
          source: centralElement.id,
          target: child.id,
          type: 'primary',
        },
      });

      // Add grandchildren
      const gcConnections = getConnectedElements(child.id);
      gcConnections.children.forEach(gc => {
        if (!addedIds.has(gc.id)) {
          nodes.push({ data: makeNodeData(gc, 'grandchild') });
          addedIds.add(gc.id);
        }
        edges.push({
          data: {
            id: `e-${child.id}-${gc.id}`,
            source: child.id,
            target: gc.id,
            type: 'primary',
          },
        });
      });
    });

    // Add secondary children
    connections.secondaryChildren.forEach(sc => {
      if (!addedIds.has(sc.id)) {
        nodes.push({ data: makeNodeData(sc, 'secondary-child') });
        addedIds.add(sc.id);
      }
      edges.push({
        data: {
          id: `e-sec-${centralElement.id}-${sc.id}`,
          source: centralElement.id,
          target: sc.id,
          type: 'secondary',
        },
      });
    });

    return [...nodes, ...edges];
  }, [selectedElementId]);

  // Initialize or update Cytoscape
  useEffect(() => {
    if (!containerRef.current || cyElements.length === 0) return;

    // Destroy old instance
    if (cyRef.current) {
      cyRef.current.destroy();
    }

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
            'label': 'data(label)',
            'width': 26,
            'height': 26,
            'font-size': '9px',
            'font-weight': 'bold',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-margin-y': 5,
            'color': '#555',
            'text-outline-color': '#fff',
            'text-outline-width': 2,
            'text-wrap': 'ellipsis',
            'text-max-width': '90px',
          } as any,
        },
        // ── Role-based sizing ──
        {
          selector: 'node[role = "center"]',
          style: {
            'width': 55,
            'height': 55,
            'font-size': '12px',
            'font-weight': 'bold',
            'border-width': '4px',
            'border-color': '#f39c12',
            'label': 'data(fullName)',
            'text-wrap': 'wrap',
            'text-max-width': '130px',
            'color': '#1a1a1a',
            'text-background-color': 'white',
            'text-background-opacity': 0.9,
            'text-background-padding': '3px',
            'text-background-shape': 'roundrectangle',
          } as any,
        },
        {
          selector: 'node[role = "parent"], node[role = "secondary-parent"]',
          style: { 'width': 38, 'height': 38, 'font-size': '10px' } as any,
        },
        {
          selector: 'node[role = "child"], node[role = "secondary-child"]',
          style: { 'width': 32, 'height': 32, 'font-size': '9px' } as any,
        },
        {
          selector: 'node[role = "grandparent"], node[role = "grandchild"]',
          style: { 'width': 22, 'height': 22, 'font-size': '8px', 'opacity': 0.75 } as any,
        },
        // ── Category shapes ──
        {
          selector: 'node[category = "official"]',
          style: { 'shape': 'ellipse' } as any,
        },
        {
          selector: 'node[subtype = "president"]',
          style: { 'shape': 'star' } as any,
        },
        {
          selector: 'node[subtype = "vice-president"]',
          style: { 'shape': 'heptagon' } as any,
        },
        {
          selector: 'node[subtype = "prime-minister"]',
          style: { 'shape': 'heptagon' } as any,
        },
        {
          selector: 'node[subtype = "cabinet-minister"]',
          style: { 'shape': 'octagon' } as any,
        },
        {
          selector: 'node[subtype = "minister-of-state-ic"]',
          style: { 'shape': 'hexagon' } as any,
        },
        {
          selector: 'node[subtype = "minister-of-state"]',
          style: { 'shape': 'hexagon' } as any,
        },
        {
          selector: 'node[subtype = "governor"]',
          style: { 'shape': 'pentagon' } as any,
        },
        {
          selector: 'node[subtype = "chief-minister"]',
          style: { 'shape': 'octagon' } as any,
        },
        {
          selector: 'node[subtype = "constitutional-official"]',
          style: { 'shape': 'pentagon' } as any,
        },
        {
          selector: 'node[category = "ministry"]',
          style: { 'shape': 'rectangle' } as any,
        },
        {
          selector: 'node[subtype = "attached-office"], node[subtype = "subordinate-office"], node[subtype = "field-office"]',
          style: { 'shape': 'roundrectangle' } as any,
        },
        {
          selector: 'node[category = "body"]',
          style: { 'shape': 'diamond' } as any,
        },
        {
          selector: 'node[subtype = "service-cadre"]',
          style: { 'shape': 'ellipse' } as any,
        },
        {
          selector: 'node[category = "group"]',
          style: { 'shape': 'pentagon' } as any,
        },
        // ── Edges ──
        {
          selector: 'edge',
          style: {
            'width': '1.5px',
            'line-color': '#bbb',
            'target-arrow-color': '#bbb',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'opacity': 0.5,
          } as any,
        },
        {
          selector: 'edge[type = "secondary"]',
          style: {
            'line-style': 'dashed',
            'line-dash-pattern': [4, 3],
            'width': '1px',
            'opacity': 0.3,
          } as any,
        },
        {
          selector: 'node:active',
          style: { 'overlay-opacity': 0.1 } as any,
        },
      ],
      layout: {
        name: 'concentric',
        concentric: (node) => {
          const role = node.data('role');
          if (role === 'center') return 4;
          if (role === 'parent' || role === 'secondary-parent') return 3;
          if (role === 'child' || role === 'secondary-child') return 2;
          return 1; // grandparent, grandchild
        },
        levelWidth: () => 1,
        minNodeSpacing: 40,
        padding: 40,
      },
      minZoom: 0.3,
      maxZoom: 3,
      wheelSensitivity: 0.3,
    });

    // Click to navigate
    cy.on('tap', 'node', (evt) => {
      const nodeId = evt.target.id();
      onElementClick(nodeId);
    });

    cy.on('tap', (evt) => {
      if (evt.target === cy) {
        // don't deselect in focus view
      }
    });

    // Tooltip on hover
    cy.on('mouseover', 'node', (evt) => {
      const node = evt.target;
      node.style('label', node.data('fullName'));
      node.style('text-wrap', 'wrap');
      node.style('text-max-width', '150px');
    });

    cy.on('mouseout', 'node', (evt) => {
      const node = evt.target;
      const role = node.data('role');
      if (role === 'center') {
        node.style('label', node.data('fullName'));
      } else {
        node.style('label', node.data('label'));
        node.style('text-wrap', 'ellipsis');
        node.style('text-max-width', '80px');
      }
    });

    cyRef.current = cy;

    return () => {
      cy.destroy();
    };
  }, [cyElements, onElementClick, onSelectElement]);

  if (!selectedElementId) {
    return (
      <div className="org-chart">
        <div className="org-chart-empty">
          <p>Select an element to see its focus view</p>
        </div>
      </div>
    );
  }

  return (
    <div className="org-chart">
      <div ref={containerRef} className="cytoscape-container" />
    </div>
  );
}

export default OrgChart;
