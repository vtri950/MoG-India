/**
 * Staffing Data for MoG-India
 * Civil service strength data
 * Source: Department of Personnel & Training Annual Report, Civil Services Survey
 */

import { StaffProfile } from '../types';

export const staffProfiles: StaffProfile[] = [
  {
    elementId: 'ministry-railways',
    asOfDate: '2024-03-31',
    totalStrength: 1196079,
    sanctionedStrength: 1467756,
    gradeBreakdown: [
      { grade: 'group-a', count: 10852 },
      { grade: 'group-b', count: 86342 },
      { grade: 'group-c', count: 1098885 },
    ],
    source: 'Railway Board Annual Report 2023-24',
  },
  {
    elementId: 'ministry-home-affairs',
    asOfDate: '2024-03-31',
    totalStrength: 987420,
    sanctionedStrength: 1055000,
    gradeBreakdown: [
      { grade: 'group-a', count: 4521 },
      { grade: 'group-b', count: 42315 },
      { grade: 'group-c', count: 940584 },
    ],
    subOrganizations: [
      { elementId: 'crpf', name: 'Central Reserve Police Force', total: 313678 },
      { elementId: 'bsf', name: 'Border Security Force', total: 265000 },
      { elementId: 'cisf', name: 'Central Industrial Security Force', total: 162545 },
      { elementId: 'itbp', name: 'Indo-Tibetan Border Police', total: 89432 },
      { elementId: 'ssb', name: 'Sashastra Seema Bal', total: 82524 },
    ],
    source: 'DoPT Civil Services Survey 2024; MHA Annual Report 2023-24',
  },
  {
    elementId: 'ministry-defence',
    asOfDate: '2024-03-31',
    totalStrength: 75000,
    sanctionedStrength: 82000,
    gradeBreakdown: [
      { grade: 'group-a', count: 2100 },
      { grade: 'group-b', count: 8500 },
      { grade: 'group-c', count: 64400 },
    ],
    source: 'MoD Annual Report 2023-24 (Civilian staff only; Armed Forces not included)',
  },
  {
    elementId: 'ministry-finance',
    asOfDate: '2024-03-31',
    totalStrength: 147832,
    sanctionedStrength: 178000,
    gradeBreakdown: [
      { grade: 'group-a', count: 6843 },
      { grade: 'group-b', count: 21459 },
      { grade: 'group-c', count: 119530 },
    ],
    subOrganizations: [
      { elementId: 'cbdt', name: 'Central Board of Direct Taxes (CBDT)', total: 62000 },
      { elementId: 'cbic', name: 'Central Board of Indirect Taxes and Customs (CBIC)', total: 58000 },
      { elementId: 'dept-economic-affairs', name: 'Department of Economic Affairs', total: 1832 },
      { elementId: 'dept-expenditure', name: 'Department of Expenditure', total: 1200 },
    ],
    source: 'DoPT Civil Services Survey 2024',
  },
  {
    elementId: 'ministry-communications',
    asOfDate: '2024-03-31',
    totalStrength: 410000,
    sanctionedStrength: 485000,
    gradeBreakdown: [
      { grade: 'group-a', count: 3200 },
      { grade: 'group-b', count: 35000 },
      { grade: 'group-c', count: 371800 },
    ],
    subOrganizations: [
      { elementId: 'dept-posts', name: 'Department of Posts', total: 380000 },
      { elementId: 'dept-telecom', name: 'Department of Telecommunications', total: 30000 },
    ],
    source: 'DoPT Civil Services Survey 2024',
  },
  {
    elementId: 'ministry-external-affairs',
    asOfDate: '2024-03-31',
    totalStrength: 8500,
    sanctionedStrength: 9200,
    gradeBreakdown: [
      { grade: 'group-a', count: 950 },
      { grade: 'group-b', count: 1800 },
      { grade: 'group-c', count: 5750 },
    ],
    source: 'MEA Annual Report 2023-24',
  },
  {
    elementId: 'ministry-health',
    asOfDate: '2024-03-31',
    totalStrength: 52483,
    sanctionedStrength: 65000,
    gradeBreakdown: [
      { grade: 'group-a', count: 5200 },
      { grade: 'group-b', count: 12000 },
      { grade: 'group-c', count: 35283 },
    ],
    source: 'DoPT Civil Services Survey 2024',
  },
  {
    elementId: 'ministry-education',
    asOfDate: '2024-03-31',
    totalStrength: 7843,
    sanctionedStrength: 9500,
    gradeBreakdown: [
      { grade: 'group-a', count: 850 },
      { grade: 'group-b', count: 1800 },
      { grade: 'group-c', count: 5193 },
    ],
    source: 'DoPT Civil Services Survey 2024',
  },
  {
    elementId: 'ministry-agriculture',
    asOfDate: '2024-03-31',
    totalStrength: 12400,
    sanctionedStrength: 16000,
    gradeBreakdown: [
      { grade: 'group-a', count: 1640 },
      { grade: 'group-b', count: 2850 },
      { grade: 'group-c', count: 7910 },
    ],
    source: 'DoPT Civil Services Survey 2024',
  },
  {
    elementId: 'rbi',
    asOfDate: '2024-03-31',
    totalStrength: 13500,
    sanctionedStrength: 14500,
    gradeBreakdown: [
      { grade: 'group-a', count: 2800 },
      { grade: 'group-b', count: 4200 },
      { grade: 'group-c', count: 6500 },
    ],
    source: 'RBI Annual Report 2023-24',
  },
  {
    elementId: 'sbi',
    asOfDate: '2024-03-31',
    totalStrength: 232296,
    gradeBreakdown: [
      { grade: 'group-a', count: 96000 },
      { grade: 'group-b', count: 70000 },
      { grade: 'group-c', count: 66296 },
    ],
    source: 'SBI Annual Report 2023-24',
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

const staffMap = new Map<string, StaffProfile>();
staffProfiles.forEach(s => staffMap.set(s.elementId, s));

/**
 * Get staff profile for an element.
 * Searches both top-level profiles and sub-organization arrays.
 */
export function getStaffProfile(elementId: string): StaffProfile | undefined {
  // Direct match
  const direct = staffMap.get(elementId);
  if (direct) return direct;

  // Search in sub-organizations
  for (const profile of staffProfiles) {
    const sub = profile.subOrganizations?.find(s => s.elementId === elementId);
    if (sub) {
      return {
        elementId: sub.elementId,
        asOfDate: profile.asOfDate,
        totalStrength: sub.total,
        gradeBreakdown: sub.gradeBreakdown,
        source: profile.source,
      };
    }
  }

  return undefined;
}

/**
 * Get all elements that have staff data
 */
export function getElementsWithStaff(): string[] {
  return staffProfiles.map(s => s.elementId);
}

/**
 * Format employee count for display
 */
export function formatStaffCount(count: number): string {
  if (count >= 100000) {
    return `${(count / 100000).toFixed(2)} Lakh`;
  }
  return count.toLocaleString('en-IN');
}
