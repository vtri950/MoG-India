/**
 * Powers and Functions Data for MoG-India
 * Constitutional powers, statutory duties, and functions from Allocation of Business Rules
 */

import { PowerProfile } from '../types';
import { getAllElements } from './elements';

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

  // =========================================================================
  // MINISTRY OF EDUCATION
  // =========================================================================
  {
    elementId: 'ministry-education',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'moe-policy', title: 'National Education Policy', powerType: 'function',
        description: 'Formulates and implements the National Education Policy and coordinates the development of education across the country.',
        sources: [{ type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' }, { type: 'notification', title: 'National Education Policy 2020' }],
      },
      {
        id: 'moe-school', title: 'School Education & Literacy', powerType: 'function',
        description: 'Oversees primary, secondary and adult education, the Samagra Shiksha scheme, and institutions such as the Kendriya and Navodaya Vidyalayas and NCERT.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of School Education & Literacy' }],
      },
      {
        id: 'moe-higher', title: 'Higher & Technical Education', powerType: 'function',
        description: 'Regulates universities and higher/technical education through statutory bodies including the UGC and AICTE, and runs central universities, IITs, IIMs and NITs.',
        sources: [{ type: 'act', title: 'University Grants Commission Act, 1956', year: 1956 }, { type: 'act', title: 'AICTE Act, 1987', year: 1987 }],
      },
      {
        id: 'moe-coordination', title: 'Coordination & Determination of Standards', powerType: 'duty',
        description: 'Coordinates and determines standards in institutions for higher education or research and scientific and technical institutions, a Union subject under the Constitution.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Seventh Schedule, Union List, Entry 66' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF HEALTH AND FAMILY WELFARE
  // =========================================================================
  {
    elementId: 'ministry-health',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mohfw-public-health', title: 'National Health Programmes', powerType: 'function',
        description: 'Implements national health programmes and missions (National Health Mission, Ayushman Bharat) and sets public health policy.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Health & Family Welfare' }],
      },
      {
        id: 'mohfw-family-welfare', title: 'Family Welfare & Population', powerType: 'function',
        description: 'Administers family welfare, maternal and child health, and population stabilisation programmes.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
      {
        id: 'mohfw-drugs', title: 'Drug Regulation', powerType: 'power',
        description: 'Regulates the import, manufacture, distribution and sale of drugs and cosmetics through the Central Drugs Standard Control Organisation (CDSCO).',
        sources: [{ type: 'act', title: 'Drugs and Cosmetics Act, 1940', year: 1940 }],
      },
      {
        id: 'mohfw-medical-education', title: 'Medical Education & Research', powerType: 'function',
        description: 'Oversees medical education through the National Medical Commission and medical research through the ICMR.',
        sources: [{ type: 'act', title: 'National Medical Commission Act, 2019', year: 2019 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF RAILWAYS
  // =========================================================================
  {
    elementId: 'ministry-railways',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mor-operations', title: 'Operation of Indian Railways', powerType: 'function',
        description: 'Owns and operates the national railway network — passenger and freight services — through the Railway Board.',
        sources: [{ type: 'act', title: 'Railways Act, 1989', year: 1989 }, { type: 'constitution', title: 'Constitution of India', article: 'Union List, Entry 22' }],
      },
      {
        id: 'mor-board', title: 'Railway Board', powerType: 'power',
        description: 'Exercises the powers of the Central Government in respect of regulation, construction, maintenance and operation of railways through the Railway Board.',
        sources: [{ type: 'act', title: 'Indian Railway Board Act, 1905', year: 1905 }],
      },
      {
        id: 'mor-safety', title: 'Railway Safety & Tariffs', powerType: 'duty',
        description: 'Sets fares and freight tariffs and is responsible for the safety of rail operations, supported by the Commissioners of Railway Safety.',
        sources: [{ type: 'act', title: 'Railways Act, 1989', section: 'Sections 30-31', year: 1989 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF AGRICULTURE AND FARMERS WELFARE
  // =========================================================================
  {
    elementId: 'ministry-agriculture',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'moa-production', title: 'Agricultural Production & Policy', powerType: 'function',
        description: 'Frames policy on crop production, agricultural inputs (seeds, fertilizers, pesticides), and farm mechanisation.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Agriculture & Farmers Welfare' }],
      },
      {
        id: 'moa-msp', title: 'Minimum Support Price & Procurement', powerType: 'function',
        description: 'Recommends Minimum Support Prices on the advice of the Commission for Agricultural Costs and Prices and oversees procurement policy.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
      {
        id: 'moa-credit', title: 'Farmer Welfare & Credit', powerType: 'function',
        description: 'Administers farmer welfare schemes such as PM-KISAN and crop insurance (PMFBY) and agricultural credit.',
        sources: [{ type: 'notification', title: 'PM-KISAN Scheme Guidelines, 2019', year: 2019 }],
      },
      {
        id: 'moa-research', title: 'Agricultural Research & Education', powerType: 'function',
        description: 'Directs the national agricultural research system through the Indian Council of Agricultural Research (ICAR).',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Agricultural Research & Education' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF COMMERCE AND INDUSTRY
  // =========================================================================
  {
    elementId: 'ministry-commerce',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'moci-trade-policy', title: 'Foreign Trade Policy', powerType: 'power',
        description: 'Formulates and implements the Foreign Trade Policy and regulates imports and exports through the DGFT.',
        sources: [{ type: 'act', title: 'Foreign Trade (Development and Regulation) Act, 1992', year: 1992 }],
      },
      {
        id: 'moci-trade-negotiations', title: 'Trade Negotiations', powerType: 'function',
        description: 'Conducts bilateral and multilateral trade negotiations including at the WTO and free-trade agreements.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Commerce' }],
      },
      {
        id: 'moci-industry', title: 'Industrial Policy & FDI', powerType: 'function',
        description: 'Frames industrial policy, administers FDI policy, and promotes industry, startups and internal trade through DPIIT.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — DPIIT' }],
      },
      {
        id: 'moci-ipr', title: 'Intellectual Property Rights', powerType: 'power',
        description: 'Administers the patent, trademark, design and geographical indication regime through the Office of the CGPDTM.',
        sources: [{ type: 'act', title: 'Patents Act, 1970', year: 1970 }, { type: 'act', title: 'Trade Marks Act, 1999', year: 1999 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF PETROLEUM AND NATURAL GAS
  // =========================================================================
  {
    elementId: 'ministry-petroleum',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mopng-exploration', title: 'Exploration & Production', powerType: 'function',
        description: 'Oversees exploration, production and conservation of petroleum and natural gas, and grants of exploration licences.',
        sources: [{ type: 'act', title: 'Oilfields (Regulation and Development) Act, 1948', year: 1948 }],
      },
      {
        id: 'mopng-refining', title: 'Refining & Distribution', powerType: 'function',
        description: 'Regulates refining, distribution, marketing, import and export of petroleum products through the oil PSUs.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
      {
        id: 'mopng-pricing', title: 'Pricing & Subsidies', powerType: 'function',
        description: 'Administers pricing of regulated petroleum products and the LPG/kerosene subsidy regime.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF COMMUNICATIONS
  // =========================================================================
  {
    elementId: 'ministry-communications',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'moc-telecom', title: 'Telecommunications Policy & Licensing', powerType: 'power',
        description: 'Frames telecom policy, grants licences and manages spectrum through the Department of Telecommunications.',
        sources: [{ type: 'act', title: 'Telecommunications Act, 2023', year: 2023 }, { type: 'act', title: 'Indian Telegraph Act, 1885', year: 1885 }],
      },
      {
        id: 'moc-spectrum', title: 'Spectrum Management', powerType: 'power',
        description: 'Allocates and assigns radio frequency spectrum, including through auctions.',
        sources: [{ type: 'act', title: 'Telecommunications Act, 2023', year: 2023 }],
      },
      {
        id: 'moc-posts', title: 'Postal Services', powerType: 'function',
        description: 'Operates the national postal network and Post Office Savings Bank through the Department of Posts.',
        sources: [{ type: 'act', title: 'Post Office Act, 2023', year: 2023 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF ENVIRONMENT, FOREST AND CLIMATE CHANGE
  // =========================================================================
  {
    elementId: 'ministry-environment',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'moefcc-clearance', title: 'Environmental Clearances', powerType: 'power',
        description: 'Grants environmental and forest clearances for projects and enforces environmental impact assessment.',
        sources: [{ type: 'act', title: 'Environment (Protection) Act, 1986', year: 1986 }],
      },
      {
        id: 'moefcc-forests', title: 'Forest & Wildlife Conservation', powerType: 'power',
        description: 'Administers the conservation of forests and wildlife and regulates the diversion of forest land.',
        sources: [{ type: 'act', title: 'Forest (Conservation) Act, 1980', year: 1980 }, { type: 'act', title: 'Wild Life (Protection) Act, 1972', year: 1972 }],
      },
      {
        id: 'moefcc-pollution', title: 'Pollution Control', powerType: 'power',
        description: 'Sets standards for and controls air and water pollution through the Central Pollution Control Board.',
        sources: [{ type: 'act', title: 'Air (Prevention and Control of Pollution) Act, 1981', year: 1981 }, { type: 'act', title: 'Water (Prevention and Control of Pollution) Act, 1974', year: 1974 }],
      },
      {
        id: 'moefcc-climate', title: 'Climate Change', powerType: 'function',
        description: 'Acts as the nodal ministry for climate change policy and India\'s commitments under the UNFCCC and Paris Agreement.',
        sources: [{ type: 'notification', title: 'National Action Plan on Climate Change, 2008', year: 2008 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF ROAD TRANSPORT AND HIGHWAYS
  // =========================================================================
  {
    elementId: 'ministry-road-transport',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'morth-highways', title: 'National Highways', powerType: 'function',
        description: 'Develops and maintains the National Highways network through the NHAI and NHIDCL.',
        sources: [{ type: 'act', title: 'National Highways Act, 1956', year: 1956 }],
      },
      {
        id: 'morth-motor-vehicles', title: 'Motor Vehicle Regulation', powerType: 'power',
        description: 'Frames rules on registration, licensing, road safety and standards for motor vehicles.',
        sources: [{ type: 'act', title: 'Motor Vehicles Act, 1988', year: 1988 }],
      },
      {
        id: 'morth-safety', title: 'Road Safety', powerType: 'duty',
        description: 'Sets road-safety policy and vehicle safety standards and administers the National Road Safety Board.',
        sources: [{ type: 'act', title: 'Motor Vehicles (Amendment) Act, 2019', year: 2019 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF POWER
  // =========================================================================
  {
    elementId: 'ministry-power',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mop-policy', title: 'Electricity Policy & Planning', powerType: 'function',
        description: 'Frames national electricity policy and tariff policy and plans generation, transmission and distribution.',
        sources: [{ type: 'act', title: 'Electricity Act, 2003', year: 2003 }],
      },
      {
        id: 'mop-transmission', title: 'Inter-State Transmission', powerType: 'function',
        description: 'Oversees the inter-state transmission grid through POWERGRID and the national load despatch system.',
        sources: [{ type: 'act', title: 'Electricity Act, 2003', section: 'Section 38', year: 2003 }],
      },
      {
        id: 'mop-regulation', title: 'Regulatory Oversight', powerType: 'power',
        description: 'Administers the framework under which the Central Electricity Authority and Central Electricity Regulatory Commission function.',
        sources: [{ type: 'act', title: 'Electricity Act, 2003', year: 2003 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF HOUSING AND URBAN AFFAIRS
  // =========================================================================
  {
    elementId: 'ministry-housing-urban',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mohua-urban', title: 'Urban Development Policy', powerType: 'function',
        description: 'Frames policy on urban development, planning and governance, and administers missions such as Smart Cities and AMRUT.',
        sources: [{ type: 'notification', title: 'Smart Cities Mission Guidelines, 2015', year: 2015 }],
      },
      {
        id: 'mohua-housing', title: 'Urban Housing', powerType: 'function',
        description: 'Implements urban housing programmes including Pradhan Mantri Awas Yojana (Urban).',
        sources: [{ type: 'notification', title: 'PMAY (Urban) Guidelines, 2015', year: 2015 }],
      },
      {
        id: 'mohua-transport', title: 'Urban Transport & Metro Rail', powerType: 'function',
        description: 'Frames metro rail policy and sanctions and funds urban mass transit systems.',
        sources: [{ type: 'act', title: 'Metro Railways (Operation and Maintenance) Act, 2002', year: 2002 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF LAW AND JUSTICE
  // =========================================================================
  {
    elementId: 'ministry-law-justice',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'molj-legislation', title: 'Legislative Drafting', powerType: 'function',
        description: 'Drafts principal legislation for the Central Government and advises ministries on legal and constitutional matters through the Legislative Department.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Legislative Department' }],
      },
      {
        id: 'molj-legal-advice', title: 'Legal Affairs', powerType: 'function',
        description: 'Advises the Government on legal matters and conducts litigation through the Department of Legal Affairs and the law officers.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Legal Affairs' }],
      },
      {
        id: 'molj-judicial', title: 'Administration of Justice', powerType: 'function',
        description: 'Handles appointment of judges, administration of courts, and judicial reforms through the Department of Justice.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Articles 124 & 217' }],
      },
      {
        id: 'molj-elections-law', title: 'Election Law', powerType: 'function',
        description: 'Is the nodal ministry for electoral laws and the conduct-of-elections rules.',
        sources: [{ type: 'act', title: 'Representation of the People Act, 1951', year: 1951 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF EXTERNAL AFFAIRS (org-level supplement)
  // =========================================================================
  {
    elementId: 'ministry-external-affairs',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mea-diplomacy', title: 'Conduct of Foreign Relations', powerType: 'function',
        description: 'Conducts India\'s foreign relations and diplomacy and maintains the network of missions and posts abroad.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Union List, Entries 10-21' }],
      },
      {
        id: 'mea-treaties', title: 'Treaties & International Agreements', powerType: 'power',
        description: 'Negotiates and implements treaties and agreements with foreign countries and international organisations.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Union List, Entry 14' }],
      },
      {
        id: 'mea-passport', title: 'Passport & Consular Services', powerType: 'function',
        description: 'Issues passports and provides consular and emigration services to Indian citizens.',
        sources: [{ type: 'act', title: 'Passports Act, 1967', year: 1967 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF DEFENCE (org-level supplement)
  // =========================================================================
  {
    elementId: 'ministry-defence',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mod-armed-forces', title: 'Administration of the Armed Forces', powerType: 'function',
        description: 'Administers the Army, Navy and Air Force and frames defence policy through the Departments of Defence and Military Affairs.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Union List, Entries 1-2' }],
      },
      {
        id: 'mod-production', title: 'Defence Production', powerType: 'function',
        description: 'Oversees indigenous production of defence equipment through the defence PSUs and the Department of Defence Production.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Defence Production' }],
      },
      {
        id: 'mod-rnd', title: 'Defence Research & Development', powerType: 'function',
        description: 'Directs defence research through the DRDO.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — DDR&D' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF JAL SHAKTI
  // =========================================================================
  {
    elementId: 'ministry-jal-shakti',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mjs-water', title: 'Water Resources Development', powerType: 'function',
        description: 'Develops and regulates water resources, irrigation, and inter-state rivers and river valleys.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Union List, Entry 56' }],
      },
      {
        id: 'mjs-ganga', title: 'Ganga Rejuvenation', powerType: 'function',
        description: 'Implements the Namami Gange programme for the rejuvenation of the river Ganga.',
        sources: [{ type: 'notification', title: 'Namami Gange Programme, 2014', year: 2014 }],
      },
      {
        id: 'mjs-drinking-water', title: 'Drinking Water & Sanitation', powerType: 'function',
        description: 'Provides rural drinking water (Jal Jeevan Mission) and sanitation (Swachh Bharat Mission Gramin).',
        sources: [{ type: 'notification', title: 'Jal Jeevan Mission Guidelines, 2019', year: 2019 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF RURAL DEVELOPMENT
  // =========================================================================
  {
    elementId: 'ministry-rural-development',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mrd-employment', title: 'Rural Employment Guarantee', powerType: 'function',
        description: 'Administers the Mahatma Gandhi National Rural Employment Guarantee Act, guaranteeing 100 days of wage employment.',
        sources: [{ type: 'act', title: 'Mahatma Gandhi NREGA, 2005', year: 2005 }],
      },
      {
        id: 'mrd-housing', title: 'Rural Housing', powerType: 'function',
        description: 'Implements rural housing through Pradhan Mantri Awas Yojana (Gramin).',
        sources: [{ type: 'notification', title: 'PMAY (Gramin) Guidelines, 2016', year: 2016 }],
      },
      {
        id: 'mrd-livelihood', title: 'Rural Livelihoods', powerType: 'function',
        description: 'Promotes rural livelihoods and self-help groups through the National Rural Livelihoods Mission.',
        sources: [{ type: 'notification', title: 'NRLM Framework, 2011', year: 2011 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF PERSONNEL, PUBLIC GRIEVANCES AND PENSIONS
  // =========================================================================
  {
    elementId: 'ministry-personnel',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'moppg-aiservices', title: 'All India & Central Services', powerType: 'power',
        description: 'Is the cadre-controlling authority for the IAS and frames recruitment rules for central services through the DoPT.',
        sources: [{ type: 'act', title: 'All India Services Act, 1951', year: 1951 }],
      },
      {
        id: 'moppg-grievances', title: 'Administrative Reforms & Grievances', powerType: 'function',
        description: 'Promotes administrative reforms and operates the centralised public grievance redress system (CPGRAMS).',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — DARPG' }],
      },
      {
        id: 'moppg-vigilance', title: 'Vigilance & Anti-Corruption', powerType: 'function',
        description: 'Is the nodal department for vigilance administration and supports the Central Vigilance Commission.',
        sources: [{ type: 'act', title: 'Central Vigilance Commission Act, 2003', year: 2003 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF SOCIAL JUSTICE AND EMPOWERMENT
  // =========================================================================
  {
    elementId: 'ministry-social-justice',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'msje-sc-obc', title: 'Welfare of SCs, OBCs & Marginalised Groups', powerType: 'function',
        description: 'Frames and implements welfare and empowerment programmes for Scheduled Castes, OBCs, senior citizens and other marginalised groups.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Articles 46 & 338' }],
      },
      {
        id: 'msje-disability', title: 'Empowerment of Persons with Disabilities', powerType: 'function',
        description: 'Implements the rights and welfare of persons with disabilities through the DEPwD.',
        sources: [{ type: 'act', title: 'Rights of Persons with Disabilities Act, 2016', year: 2016 }],
      },
      {
        id: 'msje-scholarships', title: 'Scholarships & Social Defence', powerType: 'function',
        description: 'Administers scholarship schemes and social-defence programmes including de-addiction and rehabilitation.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF WOMEN AND CHILD DEVELOPMENT
  // =========================================================================
  {
    elementId: 'ministry-women-child',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mwcd-child', title: 'Child Development', powerType: 'function',
        description: 'Implements child development and nutrition programmes including the Integrated Child Development Services (Anganwadi) and Poshan Abhiyaan.',
        sources: [{ type: 'notification', title: 'ICDS Scheme, 1975', year: 1975 }],
      },
      {
        id: 'mwcd-women', title: 'Women Empowerment & Safety', powerType: 'function',
        description: 'Frames policy on women\'s empowerment, safety and welfare, including Mission Shakti.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
      {
        id: 'mwcd-protection', title: 'Protection of Women & Children', powerType: 'power',
        description: 'Is the nodal ministry for laws protecting women and children from violence and exploitation.',
        sources: [{ type: 'act', title: 'Protection of Children from Sexual Offences Act, 2012', year: 2012 }, { type: 'act', title: 'Protection of Women from Domestic Violence Act, 2005', year: 2005 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF LABOUR AND EMPLOYMENT
  // =========================================================================
  {
    elementId: 'ministry-labour',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mole-labour-codes', title: 'Labour Legislation', powerType: 'power',
        description: 'Frames and administers labour legislation, including the four Labour Codes governing wages, social security, industrial relations and working conditions.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Concurrent List, Entries 22-24' }, { type: 'act', title: 'Code on Wages, 2019', year: 2019 }],
      },
      {
        id: 'mole-social-security', title: 'Social Security', powerType: 'function',
        description: 'Administers social security for organised and unorganised workers through the EPFO and ESIC.',
        sources: [{ type: 'act', title: 'Employees\' Provident Funds Act, 1952', year: 1952 }, { type: 'act', title: 'Employees\' State Insurance Act, 1948', year: 1948 }],
      },
      {
        id: 'mole-employment', title: 'Employment Services', powerType: 'function',
        description: 'Runs employment services and maintains labour-market data and the e-Shram database of unorganised workers.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF SCIENCE AND TECHNOLOGY
  // =========================================================================
  {
    elementId: 'ministry-science-technology',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'most-research', title: 'Promotion of Science & Technology', powerType: 'function',
        description: 'Promotes research and development through the Department of Science & Technology and the Anusandhan National Research Foundation.',
        sources: [{ type: 'act', title: 'Anusandhan National Research Foundation Act, 2023', year: 2023 }],
      },
      {
        id: 'most-biotech', title: 'Biotechnology', powerType: 'function',
        description: 'Develops and promotes biotechnology research and applications through the Department of Biotechnology.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — DBT' }],
      },
      {
        id: 'most-csir', title: 'Industrial & Scientific Research', powerType: 'function',
        description: 'Directs scientific and industrial research through the CSIR and promotes commercialisation of technology.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — DSIR' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY
  // =========================================================================
  {
    elementId: 'ministry-electronics-it',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'meity-it-act', title: 'Regulation of Information Technology', powerType: 'power',
        description: 'Administers the Information Technology Act and frames rules on intermediaries, cyber security and data.',
        sources: [{ type: 'act', title: 'Information Technology Act, 2000', year: 2000 }],
      },
      {
        id: 'meity-digital', title: 'Digital India & e-Governance', powerType: 'function',
        description: 'Drives the Digital India programme and e-governance, including platforms such as Aadhaar-enabled services, UMANG and DigiLocker.',
        sources: [{ type: 'notification', title: 'Digital India Programme, 2015', year: 2015 }],
      },
      {
        id: 'meity-data', title: 'Data Protection', powerType: 'power',
        description: 'Is the nodal ministry for personal data protection.',
        sources: [{ type: 'act', title: 'Digital Personal Data Protection Act, 2023', year: 2023 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF INFORMATION AND BROADCASTING
  // =========================================================================
  {
    elementId: 'ministry-information-broadcasting',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mib-broadcasting', title: 'Regulation of Broadcasting', powerType: 'power',
        description: 'Regulates radio and television broadcasting and certifies films for public exhibition.',
        sources: [{ type: 'act', title: 'Cable Television Networks (Regulation) Act, 1995', year: 1995 }, { type: 'act', title: 'Cinematograph Act, 1952', year: 1952 }],
      },
      {
        id: 'mib-media', title: 'Government Media & Publicity', powerType: 'function',
        description: 'Runs the public broadcaster Prasar Bharati (Doordarshan, All India Radio) and government publicity and film media units.',
        sources: [{ type: 'act', title: 'Prasar Bharati Act, 1990', year: 1990 }],
      },
      {
        id: 'mib-digital-media', title: 'Digital Media & Press', powerType: 'function',
        description: 'Administers the framework for the press and digital news and OTT platforms.',
        sources: [{ type: 'act', title: 'Press and Registration of Periodicals Act, 2023', year: 2023 }],
      },
    ],
  },

  // =========================================================================
  // SUPREME COURT OF INDIA
  // =========================================================================
  {
    elementId: 'supreme-court',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'sc-original', title: 'Original Jurisdiction', powerType: 'power',
        description: 'Has exclusive original jurisdiction over disputes between the Union and States or between States.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 131', url: 'https://www.constitutionofindia.net/articles/article-131/' }],
      },
      {
        id: 'sc-writ', title: 'Writ Jurisdiction (Fundamental Rights)', powerType: 'power',
        description: 'May issue writs for the enforcement of Fundamental Rights; the right to move the Court under this article is itself a Fundamental Right.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 32', url: 'https://www.constitutionofindia.net/articles/article-32/' }],
      },
      {
        id: 'sc-appellate', title: 'Appellate Jurisdiction', powerType: 'power',
        description: 'Hears appeals against judgments of High Courts in constitutional, civil and criminal matters, and by special leave from any court or tribunal.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Articles 132-136' }],
      },
      {
        id: 'sc-advisory', title: 'Advisory Jurisdiction', powerType: 'function',
        description: 'May give its opinion to the President on questions of law or fact of public importance referred to it.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 143' }],
      },
      {
        id: 'sc-binding', title: 'Law Declared is Binding', powerType: 'power',
        description: 'The law declared by the Supreme Court is binding on all courts within the territory of India, and its decrees are enforceable throughout India.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Articles 141 & 142' }],
      },
      {
        id: 'sc-review', title: 'Judicial Review', powerType: 'power',
        description: 'Reviews the constitutional validity of legislative enactments and executive action and is the guardian of the Constitution.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Articles 13 & 32' }],
      },
    ],
  },

  // =========================================================================
  // UNION PUBLIC SERVICE COMMISSION
  // =========================================================================
  {
    elementId: 'upsc',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'upsc-exams', title: 'Conduct of Examinations', powerType: 'duty',
        description: 'Conducts examinations for appointment to the All India Services and Group A and Group B central services (including the Civil Services Examination).',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 320' }],
      },
      {
        id: 'upsc-advice', title: 'Advice on Appointments & Promotions', powerType: 'function',
        description: 'Advises the Government on methods of recruitment, principles of promotion and transfer, and suitability of candidates.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 320(3)' }],
      },
      {
        id: 'upsc-discipline', title: 'Disciplinary Matters', powerType: 'function',
        description: 'Is consulted on all disciplinary matters affecting civil servants, including memorials and petitions.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 320(3)(c)' }],
      },
      {
        id: 'upsc-report', title: 'Annual Report to the President', powerType: 'duty',
        description: 'Presents an annual report on its work to the President, which is laid before each House of Parliament.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 323' }],
      },
    ],
  },

  // =========================================================================
  // SECURITIES AND EXCHANGE BOARD OF INDIA
  // =========================================================================
  {
    elementId: 'sebi',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'sebi-protect', title: 'Protection of Investors', powerType: 'duty',
        description: 'Protects the interests of investors in securities and promotes the development of the securities market.',
        sources: [{ type: 'act', title: 'SEBI Act, 1992', section: 'Section 11', year: 1992 }],
      },
      {
        id: 'sebi-regulate', title: 'Regulation of the Securities Market', powerType: 'power',
        description: 'Registers and regulates stock exchanges, intermediaries, mutual funds and collective investment schemes.',
        sources: [{ type: 'act', title: 'SEBI Act, 1992', section: 'Section 11(2)', year: 1992 }],
      },
      {
        id: 'sebi-enforce', title: 'Investigation & Enforcement', powerType: 'power',
        description: 'Investigates and takes enforcement action against insider trading, fraud and unfair trade practices, with powers of a civil court.',
        sources: [{ type: 'act', title: 'SEBI Act, 1992', section: 'Sections 11C & 15', year: 1992 }],
      },
    ],
  },

  // =========================================================================
  // NITI AAYOG
  // =========================================================================
  {
    elementId: 'niti-aayog',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'niti-policy', title: 'Policy & Strategic Vision', powerType: 'function',
        description: 'Acts as the premier policy think-tank of the Government, providing strategic and long-term policy and programme frameworks.',
        sources: [{ type: 'notification', title: 'Union Cabinet Resolution constituting NITI Aayog, 2015', year: 2015 }],
      },
      {
        id: 'niti-cooperative', title: 'Cooperative Federalism', powerType: 'function',
        description: 'Fosters cooperative federalism through structured engagement with States via the Governing Council.',
        sources: [{ type: 'notification', title: 'NITI Aayog Resolution, 2015', year: 2015 }],
      },
      {
        id: 'niti-monitoring', title: 'Monitoring & Evaluation', powerType: 'function',
        description: 'Monitors and evaluates the implementation of programmes and initiatives, including through indices on health, education and sustainable development.',
        sources: [{ type: 'notification', title: 'NITI Aayog Resolution, 2015', year: 2015 }],
      },
    ],
  },

  // =========================================================================
  // FINANCE COMMISSION
  // =========================================================================
  {
    elementId: 'finance-commission',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'fc-devolution', title: 'Distribution of Tax Revenues', powerType: 'duty',
        description: 'Recommends the distribution of the net proceeds of taxes between the Union and the States and the allocation among States.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 280(3)(a)' }],
      },
      {
        id: 'fc-grants', title: 'Grants-in-Aid', powerType: 'duty',
        description: 'Recommends the principles governing grants-in-aid to the States out of the Consolidated Fund of India.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 280(3)(b)' }],
      },
      {
        id: 'fc-local', title: 'Augmenting State Funds for Local Bodies', powerType: 'duty',
        description: 'Recommends measures to augment the Consolidated Fund of a State to supplement the resources of Panchayats and Municipalities.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 280(3)(bb) & (c)' }],
      },
    ],
  },

  // =========================================================================
  // INSURANCE REGULATORY AND DEVELOPMENT AUTHORITY OF INDIA
  // =========================================================================
  {
    elementId: 'irdai',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'irdai-license', title: 'Registration of Insurers', powerType: 'power',
        description: 'Grants, renews, modifies, suspends or cancels the registration of insurers and intermediaries.',
        sources: [{ type: 'act', title: 'IRDA Act, 1999', section: 'Section 14', year: 1999 }],
      },
      {
        id: 'irdai-protect', title: 'Protection of Policyholders', powerType: 'duty',
        description: 'Protects the interests of policyholders in matters of assignment, nomination, surrender value and claims settlement.',
        sources: [{ type: 'act', title: 'IRDA Act, 1999', section: 'Section 14(2)(b)', year: 1999 }],
      },
      {
        id: 'irdai-conduct', title: 'Regulation of Insurance Business', powerType: 'power',
        description: 'Specifies codes of conduct, solvency margins and investment norms for insurers and surveyors.',
        sources: [{ type: 'act', title: 'Insurance Act, 1938', year: 1938 }],
      },
    ],
  },

  // =========================================================================
  // TELECOM REGULATORY AUTHORITY OF INDIA
  // =========================================================================
  {
    elementId: 'trai',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'trai-tariff', title: 'Fixation of Tariffs', powerType: 'power',
        description: 'Notifies the rates at which telecommunication services within and outside India are to be provided.',
        sources: [{ type: 'act', title: 'TRAI Act, 1997', section: 'Section 11(2)', year: 1997 }],
      },
      {
        id: 'trai-qos', title: 'Quality of Service', powerType: 'duty',
        description: 'Lays down and ensures the quality of service standards and protects the interests of telecom consumers.',
        sources: [{ type: 'act', title: 'TRAI Act, 1997', section: 'Section 11(1)(b)', year: 1997 }],
      },
      {
        id: 'trai-recommend', title: 'Recommendations on Licensing', powerType: 'function',
        description: 'Makes recommendations to the Government on the need and timing for introduction of new service providers and terms of licences.',
        sources: [{ type: 'act', title: 'TRAI Act, 1997', section: 'Section 11(1)(a)', year: 1997 }],
      },
    ],
  },

  // =========================================================================
  // FOOD SAFETY AND STANDARDS AUTHORITY OF INDIA
  // =========================================================================
  {
    elementId: 'fssai',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'fssai-standards', title: 'Food Standards', powerType: 'power',
        description: 'Specifies standards and guidelines for articles of food and lays down limits for additives, contaminants and residues.',
        sources: [{ type: 'act', title: 'Food Safety and Standards Act, 2006', section: 'Section 16', year: 2006 }],
      },
      {
        id: 'fssai-licensing', title: 'Licensing & Registration', powerType: 'power',
        description: 'Lays down the procedure and enforces licensing and registration of food businesses.',
        sources: [{ type: 'act', title: 'Food Safety and Standards Act, 2006', year: 2006 }],
      },
      {
        id: 'fssai-enforcement', title: 'Enforcement & Safety', powerType: 'duty',
        description: 'Enforces food safety, accredits laboratories, and runs food-safety awareness and surveillance.',
        sources: [{ type: 'act', title: 'Food Safety and Standards Act, 2006', year: 2006 }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF FINANCE
  // =========================================================================
  {
    elementId: 'ministry-finance',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mof-budget', title: 'Preparation of the Union Budget', powerType: 'duty',
        description: 'Prepares and presents the Annual Financial Statement (Union Budget) and manages the Consolidated Fund of India.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 112' }],
      },
      {
        id: 'mof-taxation', title: 'Taxation & Revenue', powerType: 'power',
        description: 'Administers direct and indirect taxes through the CBDT and CBIC and frames tax policy.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Revenue' }],
      },
      {
        id: 'mof-expenditure', title: 'Control of Public Expenditure', powerType: 'power',
        description: 'Controls and sanctions public expenditure and lays down financial rules through the Department of Expenditure.',
        sources: [{ type: 'rules', title: 'General Financial Rules, 2017' }],
      },
      {
        id: 'mof-financial-sector', title: 'Banking, Insurance & Financial Markets', powerType: 'function',
        description: 'Oversees banking, insurance and financial markets through the Department of Financial Services and the financial-sector regulators.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Financial Services' }],
      },
      {
        id: 'mof-borrowing', title: 'Public Debt & Borrowing', powerType: 'power',
        description: 'Raises money by borrowing on the security of the Consolidated Fund of India and manages public debt.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Article 292' }],
      },
    ],
  },

  // =========================================================================
  // MINISTRY OF HOME AFFAIRS
  // =========================================================================
  {
    elementId: 'ministry-home-affairs',
    lastReviewed: '2026-05-30',
    powers: [
      {
        id: 'mha-internal-security', title: 'Internal Security', powerType: 'power',
        description: 'Maintains internal security and public order, and controls the Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB).',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Union List, Entry 2A' }],
      },
      {
        id: 'mha-centre-state', title: 'Centre-State Relations', powerType: 'function',
        description: 'Is the nodal ministry for Centre-State relations and the administration of Union Territories.',
        sources: [{ type: 'constitution', title: 'Constitution of India', article: 'Articles 256-263 & 355-356' }],
      },
      {
        id: 'mha-border', title: 'Border Management', powerType: 'function',
        description: 'Manages the international land borders and coastal security and the border-guarding forces.',
        sources: [{ type: 'rules', title: 'Allocation of Business Rules — Dept of Border Management' }],
      },
      {
        id: 'mha-citizenship', title: 'Citizenship, Foreigners & Census', powerType: 'power',
        description: 'Administers citizenship, registration of foreigners, and the decennial Census and population register.',
        sources: [{ type: 'act', title: 'Citizenship Act, 1955', year: 1955 }, { type: 'act', title: 'Census Act, 1948', year: 1948 }],
      },
      {
        id: 'mha-disaster', title: 'Disaster Management', powerType: 'function',
        description: 'Is the nodal ministry for disaster management and the National Disaster Management Authority and NDRF.',
        sources: [{ type: 'act', title: 'Disaster Management Act, 2005', year: 2005 }],
      },
    ],
  },
];

// ============================================================================
// Generated profiles for the 31 states + UTs
//
// The constitutional powers of a Governor, Chief Minister, State Legislature,
// High Court and State Public Service Commission are identical from state to
// state — only the state name changes. Rather than hand-duplicate ~150 near-
// identical blocks, we template them from the constitutional articles. This
// keeps the data correct and maintainable (one source of truth per office).
// ============================================================================

const C = (article: string): { type: 'constitution'; title: string; article: string } => ({
  type: 'constitution', title: 'Constitution of India', article,
});

function statePowerProfiles(): PowerProfile[] {
  const out: PowerProfile[] = [];
  for (const el of getAllElements()) {
    const id = el.id;
    // Only template the per-state/UT institutions
    const m = id.match(/^(state|ut)-([a-z]+)-(governor|lg|cm|legislature|hc|psc)$/);
    if (!m) continue;
    const place = el.name.replace(/^(Governor|Lieutenant Governor|Administrator|Chief Minister) of /, '')
      .replace(/ (High Court|State Legislature|Legislative Assembly|Public Service Commission)$/, '');
    const kind = m[3];

    if (kind === 'governor' || kind === 'lg') {
      out.push({ elementId: id, lastReviewed: '2026-05-30', powers: [
        { id: `${id}-exec`, title: 'Executive Power of the State', powerType: 'power',
          description: `All executive action of the Government of ${place} is taken in the name of the Governor, who exercises power on the aid and advice of the Council of Ministers.`,
          sources: [C('Articles 154 & 163')] },
        { id: `${id}-appoint-cm`, title: 'Appointment of the Chief Minister & Ministers', powerType: 'power',
          description: 'Appoints the Chief Minister and, on the CM\'s advice, the other Ministers, who hold office during the Governor\'s pleasure.',
          sources: [C('Article 164')] },
        { id: `${id}-assent`, title: 'Assent to Bills', powerType: 'power',
          description: 'Assents to, withholds assent from, or reserves Bills passed by the State Legislature for the consideration of the President.',
          sources: [C('Article 200')] },
        { id: `${id}-ordinance`, title: 'Ordinance-Making Power', powerType: 'power',
          description: 'May promulgate ordinances when the Legislature is not in session and immediate action is required.',
          sources: [C('Article 213')] },
        { id: `${id}-report`, title: 'Reporting to the President', powerType: 'duty',
          description: 'May report to the President if a situation arises in which the government of the State cannot be carried on in accordance with the Constitution.',
          sources: [C('Article 356')] },
      ] });
    } else if (kind === 'cm') {
      out.push({ elementId: id, lastReviewed: '2026-05-30', powers: [
        { id: `${id}-head-govt`, title: 'Head of the State Government', powerType: 'power',
          description: `Heads the Council of Ministers of ${place} and exercises the real executive authority of the State.`,
          sources: [C('Article 164')] },
        { id: `${id}-advise-gov`, title: 'Aid and Advise the Governor', powerType: 'duty',
          description: 'Leads the Council of Ministers that aids and advises the Governor in the exercise of his functions.',
          sources: [C('Article 163')] },
        { id: `${id}-communicate`, title: 'Link between Governor and Council', powerType: 'duty',
          description: 'Communicates the decisions of the Council of Ministers to the Governor and furnishes information on administration as called for.',
          sources: [C('Article 167')] },
        { id: `${id}-portfolios`, title: 'Allocation of Portfolios', powerType: 'power',
          description: 'Advises the Governor on the allocation of portfolios among Ministers and on the conduct of government business.',
          sources: [C('Article 164')] },
      ] });
    } else if (kind === 'legislature') {
      out.push({ elementId: id, lastReviewed: '2026-05-30', powers: [
        { id: `${id}-legislate`, title: 'State Legislation', powerType: 'power',
          description: `Makes laws for ${place} on subjects in the State List and the Concurrent List of the Seventh Schedule.`,
          sources: [C('Articles 245-246 & Seventh Schedule')] },
        { id: `${id}-budget`, title: 'Control over State Finances', powerType: 'power',
          description: 'Passes the State Budget; no tax may be levied or expenditure made from the State\'s Consolidated Fund without its authority.',
          sources: [C('Articles 202-207')] },
        { id: `${id}-oversight`, title: 'Oversight of the Executive', powerType: 'function',
          description: 'Holds the Council of Ministers collectively responsible to the Legislative Assembly through questions, motions and votes of confidence.',
          sources: [C('Article 164(2)')] },
      ] });
    } else if (kind === 'hc') {
      out.push({ elementId: id, lastReviewed: '2026-05-30', powers: [
        { id: `${id}-writ`, title: 'Writ Jurisdiction', powerType: 'power',
          description: `The ${place} High Court may issue writs for the enforcement of Fundamental Rights and for any other purpose — a power wider than that of the Supreme Court.`,
          sources: [C('Article 226')] },
        { id: `${id}-superintendence`, title: 'Superintendence over Subordinate Courts', powerType: 'power',
          description: 'Exercises superintendence over all courts and tribunals within its territorial jurisdiction.',
          sources: [C('Article 227')] },
        { id: `${id}-appellate`, title: 'Appellate & Original Jurisdiction', powerType: 'power',
          description: 'Hears civil and criminal appeals from subordinate courts and exercises original jurisdiction in specified matters.',
          sources: [C('Articles 225 & 215')] },
      ] });
    } else if (kind === 'psc') {
      out.push({ elementId: id, lastReviewed: '2026-05-30', powers: [
        { id: `${id}-exams`, title: 'Conduct of State Service Examinations', powerType: 'duty',
          description: `Conducts examinations for appointment to the services of ${place}.`,
          sources: [C('Article 320')] },
        { id: `${id}-advice`, title: 'Advice on Recruitment & Service Matters', powerType: 'function',
          description: 'Advises the State Government on recruitment methods, promotions, transfers and disciplinary matters affecting state civil servants.',
          sources: [C('Article 320(3)')] },
        { id: `${id}-report`, title: 'Annual Report to the Governor', powerType: 'duty',
          description: 'Presents an annual report on its work to the Governor, which is laid before the State Legislature.',
          sources: [C('Article 323(2)')] },
      ] });
    }
  }
  return out;
}

powerProfiles.push(...statePowerProfiles());

// ============================================================================
// Generated profiles for Union Cabinet Ministers and Departments
//
// Every Cabinet Minister derives the same constitutional authority as a member
// of the Council of Ministers (Articles 74-75, 77) — they differ only by the
// portfolio they hold. Every Department carries out the business of its parent
// ministry allotted under the Allocation of Business Rules. Both are templated
// from those common sources, with the element's own name supplying the specific
// portfolio / mandate, so the array above stays the place for genuinely unique
// powers and these fill the long tail without hand-duplication.
// ============================================================================

function ministerAndDeptProfiles(): PowerProfile[] {
  const out: PowerProfile[] = [];
  const existing = new Set(powerProfiles.map(p => p.elementId));

  for (const el of getAllElements()) {
    if (existing.has(el.id)) continue;

    if (el.subtype === 'cabinet-minister' && el.id.startsWith('minister-')) {
      const portfolio = el.name.replace(/^Minister of /, '');
      out.push({ elementId: el.id, lastReviewed: '2026-05-30', powers: [
        { id: `${el.id}-exec`, title: 'Member of the Council of Ministers', powerType: 'power',
          description: `As a Cabinet Minister, exercises the executive power of the Union in the field of ${portfolio}, holding office during the pleasure of the President and aiding and advising the President under Article 74.`,
          sources: [C('Articles 74-75')] },
        { id: `${el.id}-portfolio`, title: `Charge of ${portfolio}`, powerType: 'function',
          description: `Holds political and policy charge of the ministry/ministries dealing with ${portfolio} and is answerable to Parliament for that portfolio.`,
          sources: [{ type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' }] },
        { id: `${el.id}-collective`, title: 'Collective Responsibility', powerType: 'duty',
          description: 'Is bound by the principle of collective responsibility of the Council of Ministers to the Lok Sabha.',
          sources: [C('Article 75(3)')] },
        { id: `${el.id}-rules`, title: 'Conduct of Government Business', powerType: 'function',
          description: 'Disposes of business allotted to the ministry under rules made by the President for the more convenient transaction of government business.',
          sources: [C('Article 77')] },
      ] });
    } else if (el.subtype === 'department') {
      const parent = (el.parentIds || []).map(pid => getAllElements().find(e => e.id === pid)).find(Boolean);
      const parentName = parent ? parent.name : 'its parent ministry';
      out.push({ elementId: el.id, lastReviewed: '2026-05-30', powers: [
        { id: `${el.id}-business`, title: 'Allocated Business', powerType: 'function',
          description: `Carries out the subjects and business allotted to it under the Allocation of Business Rules as a department of ${parentName}.`,
          sources: [{ type: 'rules', title: 'Government of India (Allocation of Business) Rules, 1961' }] },
        { id: `${el.id}-admin`, title: 'Administration & Implementation', powerType: 'function',
          description: `${el.description} It administers the schemes, attached/subordinate offices and bodies that fall within its mandate.`,
          sources: [{ type: 'rules', title: 'Government of India (Transaction of Business) Rules, 1961' }] },
      ] });
    }
  }
  return out;
}

powerProfiles.push(...ministerAndDeptProfiles());

// ============================================================================
// Fallback profiles for the remaining long tail
//
// Every element that still lacks a hand-written or templated profile gets one
// derived from its category, subtype and legal basis. These describe the type
// of authority the body holds (e.g. a statutory body acts under its parent
// Act; a PSU operates commercially under the Companies Act) rather than
// inventing specific powers — so nothing is fabricated, and clicking any node
// shows a meaningful Powers tab. Genuinely unique powers still belong in the
// literal array above, which takes precedence.
// ============================================================================

function fallbackProfiles(): PowerProfile[] {
  const out: PowerProfile[] = [];
  const existing = new Set(powerProfiles.map(p => p.elementId));

  for (const el of getAllElements()) {
    if (existing.has(el.id)) continue;

    const legal = el.legalBasis;
    const actSource = legal
      ? [{ type: (/Act|Code/.test(legal) ? 'act' : /Article|Constitution/.test(legal) ? 'constitution' : 'rules') as 'act' | 'constitution' | 'rules', title: legal }]
      : [{ type: 'rules' as const, title: 'Government of India (Allocation of Business) Rules, 1961' }];

    let mandateTitle = 'Mandate & Functions';
    let mandateType: 'power' | 'duty' | 'function' = 'function';
    let basisTitle = 'Legal Basis';

    switch (el.subtype) {
      case 'union-ministry':
        mandateTitle = 'Executive Power of the Union'; mandateType = 'function';
        basisTitle = 'Allocation of Business'; break;
      case 'statutory-body':
      case 'authority':
      case 'commission':
        mandateTitle = 'Statutory Functions'; mandateType = 'power';
        basisTitle = 'Enabling Statute'; break;
      case 'regulatory-authority':
        mandateTitle = 'Regulatory Powers'; mandateType = 'power';
        basisTitle = 'Enabling Statute'; break;
      case 'psu':
        mandateTitle = 'Commercial Operations'; mandateType = 'function';
        basisTitle = 'Incorporation'; break;
      case 'corporation':
        mandateTitle = 'Mandate & Operations'; mandateType = 'function';
        basisTitle = 'Constituting Authority'; break;
      case 'tribunal':
        mandateTitle = 'Adjudicatory Jurisdiction'; mandateType = 'power';
        basisTitle = 'Constituting Act'; break;
      case 'autonomous-body':
      case 'society':
      case 'trust':
        mandateTitle = 'Autonomous Functions'; mandateType = 'function'; break;
      case 'constitutional-body':
        mandateTitle = 'Constitutional Functions'; mandateType = 'power';
        basisTitle = 'Constitutional Basis'; break;
      case 'local-body':
        mandateTitle = 'Local Self-Government'; mandateType = 'power';
        basisTitle = 'Constitutional Basis'; break;
      case 'service-cadre':
        mandateTitle = 'Service Functions'; mandateType = 'duty'; break;
      case 'cabinet':
      case 'cabinet-committee':
      case 'council':
        mandateTitle = 'Collective Decision-Making'; mandateType = 'function'; break;
      case 'vice-president':
        mandateTitle = 'Functions of the Vice President'; mandateType = 'power';
        basisTitle = 'Constitutional Basis'; break;
      case 'civil-servant':
        mandateTitle = 'Official Functions'; mandateType = 'duty'; break;
    }

    const powers = [
      { id: `${el.id}-mandate`, title: mandateTitle, powerType: mandateType,
        description: el.description,
        sources: actSource },
    ];
    if (legal) {
      powers.push({ id: `${el.id}-basis`, title: basisTitle, powerType: 'function' as const,
        description: `Derives its authority and functions from ${legal}.`,
        sources: actSource });
    }
    out.push({ elementId: el.id, lastReviewed: '2026-05-30', powers });
  }
  return out;
}

powerProfiles.push(...fallbackProfiles());

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
