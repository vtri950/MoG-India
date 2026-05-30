/**
 * Color utilities for MoG-India
 * Defines color schemes for different element categories and subtypes
 */

import { ElementCategory, ElementSubtype } from '../types';

// ============================================================================
// Category Colors
// ============================================================================

export const CATEGORY_COLORS: Record<ElementCategory, string> = {
  official: '#2563eb',    // Blue
  ministry: '#059669',    // Green
  body: '#7c3aed',        // Purple
  group: '#dc2626',       // Red
};

// ============================================================================
// Subtype Colors
// ============================================================================

export const SUBTYPE_COLORS: Record<ElementSubtype, string> = {
  // Officials
  'president': '#1e40af',
  'vice-president': '#1e40af',
  'prime-minister': '#1d4ed8',
  'cabinet-minister': '#2563eb',
  'minister-of-state-ic': '#3b82f6',
  'minister-of-state': '#60a5fa',
  'deputy-minister': '#93c5fd',
  'governor': '#1e40af',
  'chief-minister': '#2563eb',
  'civil-servant': '#64748b',
  'constitutional-official': '#1e3a8a',
  
  // Ministries
  'union-ministry': '#047857',
  'state-ministry': '#0d9488',
  'department': '#059669',
  'attached-office': '#10b981',
  'subordinate-office': '#34d399',
  'field-office': '#6ee7b7',
  
  // Bodies
  'constitutional-body': '#5b21b6',
  'statutory-body': '#6d28d9',
  'regulatory-authority': '#7c3aed',
  'psu': '#8b5cf6',
  'autonomous-body': '#a78bfa',
  'tribunal': '#c4b5fd',
  'commission': '#7c3aed',
  'authority': '#8b5cf6',
  'corporation': '#a78bfa',
  'society': '#c4b5fd',
  'trust': '#ddd6fe',
  'local-body': '#0ea5e9',
  'service-cadre': '#475569',
  
  // Groups
  'cabinet': '#b91c1c',
  'cabinet-committee': '#dc2626',
  'council': '#ef4444',
  'state-legislature': '#ea580c',
  'commission-group': '#f87171',
  'task-force': '#fca5a5',
};

// ============================================================================
// Border Colors (per-subtype, for Cytoscape node borders)
// ============================================================================

export const BORDER_COLORS: Record<ElementSubtype, string> = {
  // Officials — warm saffron-to-red spectrum
  'president': '#5c0000',
  'vice-president': '#7d1128',
  'prime-minister': '#8b0000',
  'cabinet-minister': '#922b21',
  'minister-of-state-ic': '#c0392b',
  'minister-of-state': '#cd6155',
  'deputy-minister': '#d98880',
  'governor': '#b7410e',
  'chief-minister': '#c0392b',
  'civil-servant': '#2980b9',
  'constitutional-official': '#1a5276',

  // Ministries — greens
  'union-ministry': '#196f3d',
  'state-ministry': '#1e8449',
  'department': '#27ae60',
  'attached-office': '#7d3c98',
  'subordinate-office': '#6c3483',
  'field-office': '#5b2c6f',

  // Bodies — varied blues, golds, greys
  'constitutional-body': '#1a5276',
  'statutory-body': '#2980b9',
  'regulatory-authority': '#7d3c98',
  'psu': '#884ea0',
  'autonomous-body': '#b7950b',
  'tribunal': '#5d6d7e',
  'commission': '#229954',
  'authority': '#2471a3',
  'corporation': '#1a5276',
  'society': '#b7950b',
  'trust': '#6c3483',
  'local-body': '#0e6655',
  'service-cadre': '#2c3e50',

  // Groups
  'cabinet': '#922b21',
  'cabinet-committee': '#b03a2e',
  'council': '#c0392b',
  'state-legislature': '#d4a017',
  'commission-group': '#5d6d7e',
  'task-force': '#616a6b',
};

// ============================================================================
// Node Shapes (Cytoscape shape names per subtype)
// ============================================================================

export type NodeShape =
  | 'ellipse' | 'star' | 'heptagon' | 'octagon' | 'hexagon'
  | 'pentagon' | 'rectangle' | 'roundrectangle' | 'diamond' | 'triangle';

const SUBTYPE_SHAPES: Partial<Record<ElementSubtype, NodeShape>> = {
  // Officials
  'president': 'star',
  'vice-president': 'heptagon',
  'prime-minister': 'heptagon',
  'cabinet-minister': 'octagon',
  'minister-of-state-ic': 'hexagon',
  'minister-of-state': 'hexagon',
  'deputy-minister': 'ellipse',
  'governor': 'pentagon',
  'chief-minister': 'octagon',
  'civil-servant': 'ellipse',
  'constitutional-official': 'pentagon',
  // Ministries
  'union-ministry': 'rectangle',
  'state-ministry': 'rectangle',
  'department': 'rectangle',
  'attached-office': 'roundrectangle',
  'subordinate-office': 'roundrectangle',
  'field-office': 'roundrectangle',
  // Bodies
  'local-body': 'triangle',
  'service-cadre': 'ellipse',
  // Groups
  'state-legislature': 'pentagon',
};

const CATEGORY_SHAPES: Record<ElementCategory, NodeShape> = {
  official: 'ellipse',
  ministry: 'rectangle',
  body: 'diamond',
  group: 'pentagon',
};

// ============================================================================
// Ring Colors (for concentric layout)
// ============================================================================

export const RING_COLORS = [
  '#ff6b00',  // Ring 0 - President (Orange/Saffron - India flag)
  '#2563eb',  // Ring 1 - PM, VP (Blue)
  '#dc2626',  // Ring 2 - Cabinet Ministers (Red)
  '#059669',  // Ring 3 - Ministries (Green - India flag)
  '#7c3aed',  // Ring 4 - Departments (Purple)
  '#64748b',  // Ring 5+ - Bodies (Slate)
];

// ============================================================================
// Utility Functions
// ============================================================================

export function getCategoryColor(category: ElementCategory): string {
  return CATEGORY_COLORS[category] || '#64748b';
}

export function getSubtypeColor(subtype: ElementSubtype): string {
  return SUBTYPE_COLORS[subtype] || '#64748b';
}

export function getBorderColor(subtype: ElementSubtype): string {
  return BORDER_COLORS[subtype] || '#64748b';
}

export function getNodeShape(category: ElementCategory, subtype: ElementSubtype): NodeShape {
  return SUBTYPE_SHAPES[subtype] || CATEGORY_SHAPES[category] || 'ellipse';
}

/**
 * Get the color for a ring in the concentric layout
 */
export function getRingColor(ringIndex: number): string {
  if (ringIndex < RING_COLORS.length) {
    return RING_COLORS[ringIndex];
  }
  return RING_COLORS[RING_COLORS.length - 1];
}

/**
 * Get a lighter variant of a color for backgrounds
 */
export function getLightColor(hexColor: string, opacity: number = 0.1): string {
  return `${hexColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
}

/**
 * Mix a hex colour toward white (amount 0..1) — used for the glossy highlight
 * stop of a node's "3-D sphere" radial gradient.
 */
export function lighten(hexColor: string, amount: number = 0.5): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * amount);
  return `#${[mix(r), mix(g), mix(b)].map(c => c.toString(16).padStart(2, '0')).join('')}`;
}

/**
 * Mix a hex colour toward black (amount 0..1) — used for the shaded rim stop
 * of a node's "3-D sphere" radial gradient.
 */
export function darken(hexColor: string, amount: number = 0.35): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const mix = (c: number) => Math.round(c * (1 - amount));
  return `#${[mix(r), mix(g), mix(b)].map(c => c.toString(16).padStart(2, '0')).join('')}`;
}

/**
 * Get contrasting text color (black or white) based on background
 */
export function getContrastColor(hexColor: string): string {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? '#000000' : '#ffffff';
}
