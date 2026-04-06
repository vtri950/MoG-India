/**
 * Budget Data for MoG-India
 * Union Budget 2024-25 ministry-wise allocations
 * Source: indiabudget.gov.in - Expenditure Budget Vol. 1
 * All amounts in ₹ Crore
 */

import { BudgetProfile } from '../types';

export const budgetProfiles: BudgetProfile[] = [
  {
    elementId: 'ministry-defence',
    fiscalYear: '2024-25',
    budgetEstimate: 621940,
    revisedEstimate: 618782,
    breakdown: [
      { category: 'revenue-expenditure', amount: 282725, description: 'Revenue Expenditure (Salaries, Maintenance, Stores)' },
      { category: 'capital-expenditure', amount: 172000, description: 'Capital Expenditure (Modernization, Acquisitions)' },
      { category: 'revenue-expenditure', amount: 92088, description: 'Defence Pensions' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 19-22',
  },
  {
    elementId: 'ministry-home-affairs',
    fiscalYear: '2024-25',
    budgetEstimate: 219643,
    revisedEstimate: 213043,
    breakdown: [
      { category: 'revenue-expenditure', amount: 160582, description: 'Police (Central Armed Police Forces)' },
      { category: 'capital-expenditure', amount: 15621, description: 'Capital Outlay on Police Housing & Infrastructure' },
      { category: 'revenue-expenditure', amount: 7500, description: 'Border Infrastructure and Management' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 48-55',
  },
  {
    elementId: 'ministry-railways',
    fiscalYear: '2024-25',
    budgetEstimate: 278500,
    revisedEstimate: 275000,
    breakdown: [
      { category: 'revenue-expenditure', amount: 176394, description: 'Railway Revenue Expenditure (Operations, Fuel, Staff)' },
      { category: 'capital-expenditure', amount: 268377, description: 'Capital Expenditure (New Lines, Gauge Conversion, Rolling Stock)' },
    ],
    source: 'Union Budget 2024-25, Railway Budget',
  },
  {
    elementId: 'ministry-health',
    fiscalYear: '2024-25',
    budgetEstimate: 90171,
    revisedEstimate: 82971,
    breakdown: [
      { category: 'revenue-expenditure', amount: 73081, description: 'Health Sector (AIIMS, PMJAY, NHM)' },
      { category: 'capital-expenditure', amount: 7610, description: 'Capital Outlay on Medical & Public Health' },
      { category: 'revenue-expenditure', amount: 9480, description: 'Health Research (ICMR)' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 42-43',
  },
  {
    elementId: 'ministry-education',
    fiscalYear: '2024-25',
    budgetEstimate: 120628,
    revisedEstimate: 109879,
    breakdown: [
      { category: 'revenue-expenditure', amount: 38001, description: 'Higher Education (IITs, IIMs, Central Universities, UGC)' },
      { category: 'revenue-expenditure', amount: 73498, description: 'School Education and Literacy (Samagra Shiksha, PM POSHAN)' },
      { category: 'capital-expenditure', amount: 9129, description: 'Capital Outlay on Education Institutions' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 25-26',
  },
  {
    elementId: 'ministry-agriculture',
    fiscalYear: '2024-25',
    budgetEstimate: 135600,
    revisedEstimate: 121000,
    breakdown: [
      { category: 'revenue-expenditure', amount: 60000, description: 'PM-KISAN (Direct Income Support to Farmers)' },
      { category: 'revenue-expenditure', amount: 30000, description: 'Crop Insurance (PMFBY)' },
      { category: 'revenue-expenditure', amount: 21079, description: 'Agriculture & Cooperation Department' },
      { category: 'revenue-expenditure', amount: 9941, description: 'Agricultural Research & Education (ICAR)' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 1-4',
  },
  {
    elementId: 'ministry-finance',
    fiscalYear: '2024-25',
    budgetEstimate: 198527,
    revisedEstimate: 191627,
    breakdown: [
      { category: 'revenue-expenditure', amount: 8289, description: 'Department of Economic Affairs' },
      { category: 'revenue-expenditure', amount: 20946, description: 'Department of Revenue (Tax Administration)' },
      { category: 'revenue-expenditure', amount: 62682, description: 'Department of Financial Services (Bank Recapitalization, Subsidies)' },
      { category: 'revenue-expenditure', amount: 4940, description: 'Department of Expenditure' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 29-37',
  },
  {
    elementId: 'ministry-external-affairs',
    fiscalYear: '2024-25',
    budgetEstimate: 22154,
    revisedEstimate: 20604,
    breakdown: [
      { category: 'revenue-expenditure', amount: 8768, description: 'Embassies & Missions Abroad' },
      { category: 'revenue-expenditure', amount: 5945, description: 'International Cooperation' },
      { category: 'revenue-expenditure', amount: 3000, description: 'Aid to Countries' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 27',
  },
  {
    elementId: 'ministry-commerce',
    fiscalYear: '2024-25',
    budgetEstimate: 9621,
    revisedEstimate: 8721,
    breakdown: [
      { category: 'revenue-expenditure', amount: 5742, description: 'Department of Commerce' },
      { category: 'revenue-expenditure', amount: 3879, description: 'Department for Promotion of Industry and Internal Trade (DPIIT)' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 11-12',
  },
  {
    elementId: 'ministry-petroleum',
    fiscalYear: '2024-25',
    budgetEstimate: 15789,
    revisedEstimate: 14289,
    breakdown: [
      { category: 'revenue-expenditure', amount: 11925, description: 'Petroleum Subsidies (LPG, Kerosene)' },
      { category: 'revenue-expenditure', amount: 2914, description: 'Administration and E&P' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 72',
  },
  {
    elementId: 'ministry-communications',
    fiscalYear: '2024-25',
    budgetEstimate: 37825,
    revisedEstimate: 35825,
    breakdown: [
      { category: 'revenue-expenditure', amount: 24842, description: 'Department of Posts' },
      { category: 'revenue-expenditure', amount: 9362, description: 'Department of Telecommunications' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 13-14',
  },
  {
    elementId: 'ministry-environment',
    fiscalYear: '2024-25',
    budgetEstimate: 3250,
    revisedEstimate: 3079,
    breakdown: [
      { category: 'revenue-expenditure', amount: 2620, description: 'Environment, Forest and Wildlife' },
      { category: 'capital-expenditure', amount: 630, description: 'Capital Outlay' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 28',
  },
  {
    elementId: 'ministry-law-justice',
    fiscalYear: '2024-25',
    budgetEstimate: 22178,
    revisedEstimate: 20178,
    breakdown: [
      { category: 'revenue-expenditure', amount: 7413, description: 'Department of Justice' },
      { category: 'revenue-expenditure', amount: 630, description: 'Legislative Department' },
      { category: 'revenue-expenditure', amount: 6342, description: 'Department of Legal Affairs' },
      { category: 'revenue-expenditure', amount: 7793, description: 'Election Commission' },
    ],
    source: 'Union Budget 2024-25, Demand for Grants No. 58-61',
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

const budgetMap = new Map<string, BudgetProfile>();
budgetProfiles.forEach(b => budgetMap.set(b.elementId, b));

/**
 * Get budget profile for an element
 */
export function getBudgetProfile(elementId: string): BudgetProfile | undefined {
  return budgetMap.get(elementId);
}

/**
 * Get all elements that have budget data
 */
export function getElementsWithBudgets(): string[] {
  return budgetProfiles.map(b => b.elementId);
}

/**
 * Format amount in crores for display
 */
export function formatCrores(amount: number): string {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} Lakh Cr`;
  }
  return `₹${amount.toLocaleString('en-IN')} Cr`;
}
