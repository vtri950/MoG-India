/**
 * Core type definitions for MoG-India
 * Defines the structure of government elements, relationships, and metadata
 */

// ============================================================================
// Government Element Types
// ============================================================================

export type ElementCategory = 'official' | 'ministry' | 'body' | 'group';

export type OfficialSubtype = 
  | 'president'
  | 'vice-president'
  | 'prime-minister'
  | 'cabinet-minister'
  | 'minister-of-state-ic'    // Minister of State (Independent Charge)
  | 'minister-of-state'
  | 'deputy-minister'
  | 'governor'
  | 'chief-minister'
  | 'civil-servant'
  | 'constitutional-official';

export type MinistrySubtype = 
  | 'union-ministry'
  | 'state-ministry'
  | 'department'
  | 'attached-office'
  | 'subordinate-office'
  | 'field-office';

export type BodySubtype = 
  | 'constitutional-body'
  | 'statutory-body'
  | 'regulatory-authority'
  | 'psu'                     // Public Sector Undertaking
  | 'autonomous-body'
  | 'tribunal'
  | 'commission'
  | 'authority'
  | 'corporation'
  | 'society'
  | 'trust'
  | 'local-body'              // Panchayat / Municipality
  | 'service-cadre';          // Civil Service cadre

export type GroupSubtype = 
  | 'cabinet'
  | 'cabinet-committee'
  | 'council'
  | 'state-legislature'
  | 'commission-group'
  | 'task-force';

export type ElementSubtype = OfficialSubtype | MinistrySubtype | BodySubtype | GroupSubtype;

// ============================================================================
// Jurisdiction Types (Indian Administrative Division)
// ============================================================================

export type JurisdictionType = 
  | 'union'                   // Central Government
  | 'state'                   // State Government
  | 'ut-with-legislature'     // Union Territory with Legislature (Delhi, Puducherry, J&K)
  | 'ut-without-legislature'  // Union Territory without Legislature
  | 'all-india';              // Applies to entire nation

export interface Jurisdiction {
  type: JurisdictionType;
  name?: string;              // Specific state/UT name if applicable
}

// ============================================================================
// Tag System
// ============================================================================

export interface TagDefinition {
  id: string;
  name: string;
  description?: string;
  color: string;
  category: 'type' | 'sector';
}

// ============================================================================
// Government Element
// ============================================================================

export interface GovElement {
  id: string;                           // Unique identifier (kebab-case)
  name: string;                         // Display name
  nameHindi?: string;                   // Hindi name
  abbreviation?: string;                // Common abbreviation (e.g., MHA, MEA)
  category: ElementCategory;
  subtype: ElementSubtype;
  description: string;
  
  // For officials
  role?: string;                        // Role title
  currentHolder?: string;               // Person currently in the role
  appointedDate?: string;               // Date of appointment
  
  // Relationships
  parentIds: string[];                  // Primary parent elements
  secondaryParentIds?: string[];        // Secondary/oversight relationships
  
  // Metadata
  establishedYear?: number;             // Year established
  legalBasis?: string;                  // Constitutional article or Act
  infoUrl?: string;                     // Official website
  govInUrl?: string;                    // india.gov.in page
  
  // Classification
  tags?: string[];                      // Tag IDs from tagDefinitions
  jurisdictions?: Jurisdiction[];       // Geographic scope
  
  // Additional fields
  headquarters?: string;                // Location of headquarters
  employeeCount?: number;               // Approximate employee count
}

// ============================================================================
// Powers and Functions
// ============================================================================

export type PowerType = 'power' | 'duty' | 'function' | 'responsibility';

export type SourceType = 
  | 'constitution'
  | 'act'
  | 'rules'
  | 'notification'
  | 'convention'
  | 'ordinance';

export interface PowerSource {
  type: SourceType;
  title: string;
  article?: string;           // For constitutional provisions
  section?: string;           // For Acts
  year?: number;
  url?: string;               // Link to legislative text
}

export interface Power {
  id: string;
  title: string;
  description: string;
  powerType: PowerType;
  inForceFrom?: string;
  sources: PowerSource[];
  notes?: string;
}

export interface PowerProfile {
  elementId: string;
  lastReviewed?: string;
  powers: Power[];
}

// ============================================================================
// Budget Data
// ============================================================================

export type BudgetCategory = 
  | 'revenue-expenditure'
  | 'capital-expenditure'
  | 'revenue-receipts'
  | 'capital-receipts';

export interface BudgetItem {
  category: BudgetCategory;
  amount: number;             // In crores (₹)
  description?: string;
}

export interface BudgetProfile {
  elementId: string;
  fiscalYear: string;         // e.g., "2024-25"
  budgetEstimate: number;     // BE in crores
  revisedEstimate?: number;   // RE in crores
  actuals?: number;           // Actual expenditure in crores
  breakdown?: BudgetItem[];
  source?: string;            // Data source reference
}

// ============================================================================
// Staffing Data
// ============================================================================

export type ServiceGrade = 
  | 'secretary'               // Secretary level
  | 'additional-secretary'    // Additional Secretary
  | 'joint-secretary'         // Joint Secretary
  | 'director'                // Director
  | 'deputy-secretary'        // Deputy Secretary
  | 'under-secretary'         // Under Secretary
  | 'section-officer'         // Section Officer
  | 'assistant'               // Assistant
  | 'clerk'                   // Clerk/LDC/UDC
  | 'group-a'                 // Group A (All India Services + Central Services)
  | 'group-b'                 // Group B
  | 'group-c';                // Group C

export interface GradeBreakdown {
  grade: ServiceGrade;
  count: number;
}

export interface SubOrganizationStaff {
  elementId: string;
  name: string;
  total: number;
  gradeBreakdown?: GradeBreakdown[];
}

export interface StaffProfile {
  elementId: string;
  asOfDate: string;           // Date of data
  totalStrength: number;
  sanctionedStrength?: number;
  gradeBreakdown?: GradeBreakdown[];
  subOrganizations?: SubOrganizationStaff[];
  source?: string;            // Data source reference
}

// ============================================================================
// Relationship Types (for display)
// ============================================================================

export type RelationshipType = 
  | 'reports-to'
  | 'overseen-by'
  | 'part-of'
  | 'controls'
  | 'advises'
  | 'appoints'
  | 'coordinates-with';

export interface Relationship {
  fromId: string;
  toId: string;
  type: RelationshipType;
  description?: string;
}

// ============================================================================
// View Types
// ============================================================================

export type ViewMode = 'full' | 'focus';

export interface ViewState {
  mode: ViewMode;
  selectedElementId: string | null;
  highlightedIds: string[];
  searchQuery: string;
  activeFilters: {
    categories: ElementCategory[];
    jurisdictions: JurisdictionType[];
    tags: string[];
  };
}
