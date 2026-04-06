/**
 * Powers and Functions Data for MoG-India
 * Constitutional powers, statutory duties, and functions from Allocation of Business Rules
 */

import { PowerProfile } from '../types';

export const powerProfiles: PowerProfile[] = [
  // =========================================================================
  // PRESIDENT OF INDIA
  // =========================================================================
  {
    elementId: 'president',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'pres-exec-power',
        title: 'Executive Power of the Union',
        description: 'All executive action of the Government of India is expressed to be taken in the name of the President.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 53', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-53/' },
        ],
      },
      {
        id: 'pres-appoint-pm',
        title: 'Appointment of Prime Minister',
        description: 'The President appoints the Prime Minister and on the advice of the PM, appoints other Ministers.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 75(1)', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-75/' },
        ],
      },
      {
        id: 'pres-appoint-judges',
        title: 'Appointment of Judges',
        description: 'The President appoints the Chief Justice of India and other judges of the Supreme Court and High Courts.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 124(2)', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-124/' },
        ],
      },
      {
        id: 'pres-appoint-officials',
        title: 'Appointment of Constitutional Officials',
        description: 'The President appoints the Attorney General, CAG, Election Commissioners, UPSC Chairman and members, Finance Commission, Governors, and other constitutional officials.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Articles 76, 148, 324, 316, 280, 155', year: 1950 },
        ],
      },
      {
        id: 'pres-pardon',
        title: 'Pardoning Power',
        description: 'The President can grant pardons, reprieves, respites or remissions of punishment or suspend, remit or commute the sentence of any person convicted of any offence.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 72', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-72/' },
        ],
      },
      {
        id: 'pres-emergency',
        title: 'Proclamation of Emergency',
        description: 'The President can proclaim a national emergency (Article 352), President\'s Rule in a state (Article 356), and financial emergency (Article 360).',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Articles 352, 356, 360', year: 1950 },
        ],
      },
      {
        id: 'pres-assent',
        title: 'Assent to Bills',
        description: 'No bill passed by Parliament can become law without the President\'s assent. The President may give assent, withhold assent, or return the bill for reconsideration.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 111', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-111/' },
        ],
      },
      {
        id: 'pres-ordinance',
        title: 'Promulgation of Ordinances',
        description: 'When Parliament is not in session, the President can promulgate ordinances which have the same force and effect as an Act of Parliament.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 123', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-123/' },
        ],
      },
      {
        id: 'pres-supreme-cmd',
        title: 'Supreme Command of Armed Forces',
        description: 'The supreme command of the Defence Forces of the Union is vested in the President, exercisable in accordance with law.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 53(2)', year: 1950 },
        ],
      },
      {
        id: 'pres-diplomatic',
        title: 'Diplomatic Powers',
        description: 'All international treaties and agreements are negotiated and concluded in the name of the President.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 253', year: 1950 },
          { type: 'convention', title: 'Constitutional Convention' },
        ],
      },
    ],
  },

  // =========================================================================
  // PRIME MINISTER
  // =========================================================================
  {
    elementId: 'prime-minister',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'pm-head-govt',
        title: 'Head of Government',
        description: 'The Prime Minister is the head of government and the chief executive. All executive power is exercised on the aid and advice of the Council of Ministers headed by the PM.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 74(1)', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-74/' },
        ],
      },
      {
        id: 'pm-council',
        title: 'Formation of Council of Ministers',
        description: 'The PM advises the President on the appointment and removal of ministers, allocation of portfolios, and reshuffling of the Council.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 75(1)', year: 1950 },
        ],
      },
      {
        id: 'pm-cabinet-chair',
        title: 'Chairman of the Cabinet',
        description: 'The PM presides over meetings of the Union Cabinet and determines its agenda. All major policy decisions require Cabinet approval.',
        powerType: 'function',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'rules', title: 'Government of India (Transaction of Business) Rules, 1961', section: 'Rule 4' },
        ],
      },
      {
        id: 'pm-link-president',
        title: 'Link between President and Council of Ministers',
        description: 'It is the duty of the PM to communicate to the President all decisions of the Council of Ministers relating to administration and proposals for legislation.',
        powerType: 'duty',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 78', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-78/' },
        ],
      },
      {
        id: 'pm-niti-chair',
        title: 'Chairman of NITI Aayog',
        description: 'The PM is the ex-officio Chairman of NITI Aayog, the premier policy think tank that replaced the Planning Commission.',
        powerType: 'function',
        inForceFrom: '2015-01-01',
        sources: [
          { type: 'notification', title: 'Cabinet Resolution on NITI Aayog', year: 2015 },
        ],
      },
      {
        id: 'pm-nsc-chair',
        title: 'Chairman of National Security Council',
        description: 'The PM chairs the National Security Council, the apex body for national security and strategic policy.',
        powerType: 'function',
        sources: [
          { type: 'notification', title: 'Government of India Notification', year: 1998 },
        ],
      },
      {
        id: 'pm-nuclear-authority',
        title: 'Nuclear Command Authority',
        description: 'The PM, as Chairman of the Nuclear Command Authority, is the sole authority to authorize the use of nuclear weapons.',
        powerType: 'power',
        sources: [
          { type: 'notification', title: 'Cabinet Committee on Security Decision', year: 2003 },
        ],
      },
      {
        id: 'pm-allocation',
        title: 'Allocation of Business',
        description: 'The PM determines the allocation of government business among ministries and departments through the Allocation of Business Rules.',
        powerType: 'power',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' },
        ],
      },
    ],
  },

  // =========================================================================
  // MINISTER OF HOME AFFAIRS
  // =========================================================================
  {
    elementId: 'minister-home-affairs',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'mha-internal-sec',
        title: 'Internal Security',
        description: 'Responsible for the maintenance of internal security and public order, including coordination with state governments during disturbances.',
        powerType: 'responsibility',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961', section: 'Second Schedule - MHA' },
        ],
      },
      {
        id: 'mha-police',
        title: 'Central Police Forces',
        description: 'Administrative control over Central Armed Police Forces including CRPF, BSF, CISF, ITBP, NSG, SSB, and Assam Rifles.',
        powerType: 'power',
        sources: [
          { type: 'act', title: 'CRPF Act, 1949', year: 1949 },
          { type: 'act', title: 'Border Security Force Act, 1968', year: 1968 },
        ],
      },
      {
        id: 'mha-ut-admin',
        title: 'Administration of Union Territories',
        description: 'Responsible for the administration of Union Territories including appointment of administrators and overseeing governance.',
        powerType: 'function',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 239', year: 1950 },
        ],
      },
      {
        id: 'mha-disaster',
        title: 'Disaster Management',
        description: 'Nodal ministry for disaster management, including the National Disaster Management Authority and relief operations.',
        powerType: 'responsibility',
        sources: [
          { type: 'act', title: 'Disaster Management Act, 2005', year: 2005 },
        ],
      },
      {
        id: 'mha-census',
        title: 'Census and Registration of Births and Deaths',
        description: 'Responsible for conducting the decennial population census and overseeing the registration of births and deaths.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Census Act, 1948', year: 1948 },
          { type: 'act', title: 'Registration of Births and Deaths Act, 1969', year: 1969 },
        ],
      },
    ],
  },

  // =========================================================================
  // MINISTER OF FINANCE
  // =========================================================================
  {
    elementId: 'minister-finance',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'mof-budget',
        title: 'Union Budget',
        description: 'Responsible for preparation and presentation of the annual Union Budget (Annual Financial Statement) before Parliament.',
        powerType: 'duty',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 112', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-112/' },
        ],
      },
      {
        id: 'mof-taxation',
        title: 'Taxation Policy',
        description: 'Formulation of tax policy including direct taxes (income tax, corporate tax) and indirect taxes (GST, customs duties).',
        powerType: 'power',
        sources: [
          { type: 'act', title: 'Income Tax Act, 1961', year: 1961 },
          { type: 'act', title: 'Central Goods and Services Tax Act, 2017', year: 2017 },
          { type: 'act', title: 'Customs Act, 1962', year: 1962 },
        ],
      },
      {
        id: 'mof-fdi',
        title: 'Foreign Investment Policy',
        description: 'Formulation and administration of policy on Foreign Direct Investment (FDI) including sector-specific limits and routes.',
        powerType: 'power',
        sources: [
          { type: 'act', title: 'Foreign Exchange Management Act, 1999', year: 1999, url: 'https://www.indiacode.nic.in/handle/123456789/1988' },
        ],
      },
      {
        id: 'mof-banking',
        title: 'Banking Regulation',
        description: 'Policy oversight of public sector banks, banking reforms, and financial sector regulation through RBI and other regulators.',
        powerType: 'responsibility',
        sources: [
          { type: 'act', title: 'Banking Regulation Act, 1949', year: 1949 },
        ],
      },
      {
        id: 'mof-debt',
        title: 'Public Debt Management',
        description: 'Management of the public debt of the Government of India and government securities market.',
        powerType: 'function',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 292', year: 1950 },
        ],
      },
    ],
  },

  // =========================================================================
  // MINISTER OF DEFENCE
  // =========================================================================
  {
    elementId: 'minister-defence',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'mod-armed-forces',
        title: 'Administration of Armed Forces',
        description: 'Administrative and operational oversight of the Indian Army, Indian Navy, and Indian Air Force.',
        powerType: 'responsibility',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961', section: 'Second Schedule - MoD' },
        ],
      },
      {
        id: 'mod-def-prod',
        title: 'Defence Production',
        description: 'Policy formulation for defence production, ordnance factories, and defence public sector undertakings.',
        powerType: 'function',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' },
        ],
      },
      {
        id: 'mod-drdo',
        title: 'Defence Research and Development',
        description: 'Oversight of the Defence Research and Development Organisation (DRDO) and its network of laboratories.',
        powerType: 'responsibility',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' },
        ],
      },
      {
        id: 'mod-veterans',
        title: 'Ex-Servicemen Welfare',
        description: 'Policy matters relating to welfare, resettlement, and rehabilitation of ex-servicemen and their dependents.',
        powerType: 'function',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' },
        ],
      },
    ],
  },

  // =========================================================================
  // MINISTER OF EXTERNAL AFFAIRS
  // =========================================================================
  {
    elementId: 'minister-external-affairs',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'mea-foreign-policy',
        title: 'Foreign Policy',
        description: 'Formulation and conduct of India\'s foreign policy, diplomatic relations with foreign countries, and international organizations.',
        powerType: 'responsibility',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961', section: 'Second Schedule - MEA' },
        ],
      },
      {
        id: 'mea-missions',
        title: 'Indian Missions Abroad',
        description: 'Administration of Indian embassies, high commissions, and consulates worldwide.',
        powerType: 'function',
        sources: [
          { type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' },
        ],
      },
      {
        id: 'mea-passport',
        title: 'Passport and Visa Services',
        description: 'Administration of passport services for Indian citizens and visa services for foreigners.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Passports Act, 1967', year: 1967 },
        ],
      },
      {
        id: 'mea-indian-diaspora',
        title: 'Indian Diaspora Affairs',
        description: 'Engagement with Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) worldwide, including OCI card administration.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Citizenship Act, 1955', year: 1955 },
        ],
      },
    ],
  },

  // =========================================================================
  // ATTORNEY GENERAL
  // =========================================================================
  {
    elementId: 'attorney-general',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'ag-advice',
        title: 'Legal Advice to Government',
        description: 'The AG advises the Government of India on legal matters referred by the President.',
        powerType: 'duty',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 76(2)', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-76/' },
        ],
      },
      {
        id: 'ag-appear',
        title: 'Right to Appear in All Courts',
        description: 'The AG has the right of audience in all courts in the territory of India and may take part in proceedings of Parliament.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 76(3)', year: 1950 },
        ],
      },
      {
        id: 'ag-duties',
        title: 'Duties Assigned by President',
        description: 'The AG performs such other duties of a legal character as may be assigned by the President.',
        powerType: 'duty',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 76(2)', year: 1950 },
        ],
      },
    ],
  },

  // =========================================================================
  // CAG
  // =========================================================================
  {
    elementId: 'cag',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'cag-audit-union',
        title: 'Audit of Union Accounts',
        description: 'The CAG audits all expenditure from the Consolidated Fund of India and the Consolidated Fund of each State.',
        powerType: 'duty',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 149', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-149/' },
          { type: 'act', title: 'CAG (Duties, Powers and Conditions of Service) Act, 1971', year: 1971 },
        ],
      },
      {
        id: 'cag-audit-states',
        title: 'Audit of State Accounts',
        description: 'The CAG audits the accounts of all State governments and Union Territories.',
        powerType: 'duty',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 151(2)', year: 1950 },
        ],
      },
      {
        id: 'cag-report',
        title: 'Reports to President and Governors',
        description: 'The reports of the CAG relating to the accounts of the Union are submitted to the President, who causes them to be laid before Parliament.',
        powerType: 'duty',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 151', year: 1950 },
        ],
      },
    ],
  },

  // =========================================================================
  // ELECTION COMMISSION
  // =========================================================================
  {
    elementId: 'election-commission',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'eci-conduct-elections',
        title: 'Superintendence of Elections',
        description: 'The superintendence, direction and control of the preparation of electoral rolls and the conduct of elections to Parliament and State Legislatures and to the offices of President and Vice-President.',
        powerType: 'power',
        inForceFrom: '1950-01-26',
        sources: [
          { type: 'constitution', title: 'Constitution of India', article: 'Article 324', year: 1950, url: 'https://www.constitutionofindia.net/articles/article-324/' },
        ],
      },
      {
        id: 'eci-model-code',
        title: 'Enforcement of Model Code of Conduct',
        description: 'The ECI enforces the Model Code of Conduct during election periods, ensuring free and fair elections.',
        powerType: 'power',
        sources: [
          { type: 'convention', title: 'Model Code of Conduct' },
          { type: 'act', title: 'Representation of the People Act, 1951', year: 1951 },
        ],
      },
      {
        id: 'eci-recognition',
        title: 'Recognition of Political Parties',
        description: 'The ECI registers and recognizes political parties at the national and state level, allots election symbols.',
        powerType: 'power',
        sources: [
          { type: 'act', title: 'Election Symbols (Reservation and Allotment) Order, 1968', year: 1968 },
        ],
      },
    ],
  },

  // =========================================================================
  // RBI
  // =========================================================================
  {
    elementId: 'rbi',
    lastReviewed: '2026-04-06',
    powers: [
      {
        id: 'rbi-monetary',
        title: 'Monetary Policy',
        description: 'The RBI formulates and implements India\'s monetary policy through the Monetary Policy Committee (MPC) to maintain price stability while keeping in mind the objective of growth.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Reserve Bank of India Act, 1934', section: 'Section 45ZA-ZR', year: 1934, url: 'https://www.indiacode.nic.in/handle/123456789/2398' },
        ],
      },
      {
        id: 'rbi-currency',
        title: 'Currency Issuance',
        description: 'The RBI has the sole right to issue banknotes in India. The management of currency in circulation is one of its core functions.',
        powerType: 'power',
        sources: [
          { type: 'act', title: 'Reserve Bank of India Act, 1934', section: 'Section 22', year: 1934 },
        ],
      },
      {
        id: 'rbi-banking-reg',
        title: 'Banking Regulation',
        description: 'The RBI regulates and supervises the commercial banking sector to ensure the stability of the financial system.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Banking Regulation Act, 1949', year: 1949 },
        ],
      },
      {
        id: 'rbi-forex',
        title: 'Foreign Exchange Management',
        description: 'The RBI manages the Foreign Exchange reserves of India and regulates foreign exchange transactions under FEMA.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Foreign Exchange Management Act, 1999', year: 1999 },
        ],
      },
      {
        id: 'rbi-lender',
        title: 'Lender of Last Resort',
        description: 'The RBI acts as the banker\'s bank and lender of last resort, providing financial stability during banking crises.',
        powerType: 'function',
        sources: [
          { type: 'act', title: 'Reserve Bank of India Act, 1934', year: 1934 },
        ],
      },
    ],
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

const profileMap = new Map<string, PowerProfile>();
powerProfiles.forEach(p => profileMap.set(p.elementId, p));

/**
 * Get powers profile for an element
 */
export function getPowerProfile(elementId: string): PowerProfile | undefined {
  return profileMap.get(elementId);
}

/**
 * Get all elements that have powers data
 */
export function getElementsWithPowers(): string[] {
  return powerProfiles.map(p => p.elementId);
}
