/**
 * Indian Administrative Jurisdictions
 * Defines the hierarchy of governmental jurisdictions in India
 */

import { Jurisdiction, JurisdictionType } from '../types';

// ============================================================================
// Indian States (28)
// ============================================================================

export const STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
] as const;

export type StateName = typeof STATES[number];

// ============================================================================
// Union Territories (8)
// ============================================================================

export const UNION_TERRITORIES_WITH_LEGISLATURE = [
  'Delhi',               // NCT of Delhi
  'Puducherry',
  'Jammu and Kashmir',
] as const;

export const UNION_TERRITORIES_WITHOUT_LEGISLATURE = [
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Ladakh',
  'Lakshadweep',
] as const;

export const ALL_UNION_TERRITORIES = [
  ...UNION_TERRITORIES_WITH_LEGISLATURE,
  ...UNION_TERRITORIES_WITHOUT_LEGISLATURE,
] as const;

export type UnionTerritoryName = typeof ALL_UNION_TERRITORIES[number];

// ============================================================================
// Jurisdiction Hierarchy
// ============================================================================

/**
 * Jurisdiction hierarchy for filtering:
 * 
 * All India (Union)
 * ├── States (28)
 * │   └── Individual states...
 * └── Union Territories (8)
 *     ├── With Legislature (Delhi, Puducherry, J&K)
 *     └── Without Legislature (5 others)
 */

export const JURISDICTION_LABELS: Record<JurisdictionType, string> = {
  'union': 'Union (Central)',
  'state': 'State',
  'ut-with-legislature': 'Union Territory (with Legislature)',
  'ut-without-legislature': 'Union Territory',
  'all-india': 'All India',
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Check if a jurisdiction is covered by a filter
 * e.g., filtering for "All India" should show Union elements
 */
export function jurisdictionMatchesFilter(
  elementJurisdictions: Jurisdiction[] | undefined,
  filterType: JurisdictionType,
  filterName?: string
): boolean {
  // Elements with no jurisdiction default to Union (Central)
  if (!elementJurisdictions || elementJurisdictions.length === 0) {
    return filterType === 'union' || filterType === 'all-india';
  }
  
  // Check if any of the element's jurisdictions match the filter
  return elementJurisdictions.some(jurisdiction => {
    // All-India filter matches everything
    if (filterType === 'all-india') {
      return true;
    }
    
    // If element is All-India, it matches any filter
    if (jurisdiction.type === 'all-india') {
      return true;
    }
    
    // Union filter matches union elements
    if (filterType === 'union' && jurisdiction.type === 'union') {
      return true;
    }
    
    // Specific state/UT match
    if (jurisdiction.type === filterType) {
      if (filterName) {
        return jurisdiction.name === filterName;
      }
      return true;
    }
    
    return false;
  });
}

/**
 * Get all states and UTs for dropdown/filter UI
 */
export function getAllRegions(): Array<{ name: string; type: JurisdictionType }> {
  const regions: Array<{ name: string; type: JurisdictionType }> = [];
  
  // Add states
  STATES.forEach(state => {
    regions.push({ name: state, type: 'state' });
  });
  
  // Add UTs with legislature
  UNION_TERRITORIES_WITH_LEGISLATURE.forEach(ut => {
    regions.push({ name: ut, type: 'ut-with-legislature' });
  });
  
  // Add UTs without legislature
  UNION_TERRITORIES_WITHOUT_LEGISLATURE.forEach(ut => {
    regions.push({ name: ut, type: 'ut-without-legislature' });
  });
  
  return regions.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Create a jurisdiction object
 */
export function createJurisdiction(
  type: JurisdictionType,
  name?: string
): Jurisdiction {
  return { type, name };
}

// Pre-defined jurisdictions for common use
export const UNION_JURISDICTION: Jurisdiction = { type: 'union' };
export const ALL_INDIA_JURISDICTION: Jurisdiction = { type: 'all-india' };

/**
 * Create a state jurisdiction for a specific state
 */
export function stateJurisdiction(stateName: string): Jurisdiction {
  return { type: 'state', name: stateName };
}
