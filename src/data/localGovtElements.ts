/**
 * Local Government & Civil Services Elements for MoG-India
 *
 * Part A — Panchayati Raj Institutions (73rd Amendment, Part IX)
 *   Three-tier system: Gram Panchayat → Panchayat Samiti → Zila Parishad
 *   Plus: State Election Commissions, State Finance Commissions, District Planning Committees
 *
 * Part B — Urban Local Bodies (74th Amendment, Part IXA)
 *   Municipal Corporation → Municipality → Nagar Panchayat
 *   Plus: Metropolitan Planning Committees
 *
 * Part C — Civil Services
 *   All India Services: IAS, IPS, IFoS
 *   Central Civil Services: IFS(A), IRS, IAAS, ICAS, etc.
 *   Central Armed Police Forces cadres
 *   District Administration: Collector/DM, SP, DFO
 *
 * Part D — Training Institutions
 *   LBSNAA, SVPNPA, NJA, IIPA
 */

import { GovElement } from '../types';
import { ALL_INDIA_JURISDICTION } from './jurisdictions';

export function generateLocalGovtAndCivilServiceElements(): GovElement[] {
  const elems: GovElement[] = [];

  // =========================================================================
  // PART A — PANCHAYATI RAJ INSTITUTIONS (73rd Amendment)
  // =========================================================================

  elems.push({
    id: 'panchayati-raj-system',
    name: 'Panchayati Raj Institutions',
    nameHindi: 'पंचायती राज संस्थाएं',
    abbreviation: 'PRI',
    category: 'group',
    subtype: 'council',
    description: 'The three-tier system of local self-government in rural India, constitutionalised by the 73rd Amendment Act 1992 (Part IX). PRIs are responsible for planning and implementation of schemes for economic development and social justice across 29 subjects listed in the Eleventh Schedule. Local government is a State subject (State List, Entry 5); the Union ministry provides policy support and funding.',
    parentIds: ['state-governments'],
    secondaryParentIds: ['ministry-panchayati-raj'],
    legalBasis: 'Part IX (Articles 243-243O) of the Constitution; 73rd Amendment Act, 1992',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    establishedYear: 1992,
    tags: ['local-govt'],
  });

  // Zila Parishad (District level)
  elems.push({
    id: 'zila-parishad',
    name: 'Zila Parishad (District Panchayat)',
    nameHindi: 'जिला परिषद',
    abbreviation: 'ZP',
    category: 'body',
    subtype: 'local-body',
    description: 'The Zila Parishad is the top tier of the Panchayati Raj system at the district level. It coordinates the activities of Panchayat Samitis in the district, prepares development plans, and supervises the activities of the Block-level and village-level panchayats. Members are elected directly or indirectly, and it is chaired by a Zila Pramukh/Adhyaksha.',
    parentIds: ['panchayati-raj-system'],
    legalBasis: 'Article 243B(1) of the Constitution; respective State Panchayati Raj Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
    employeeCount: 500000,
  });

  // Panchayat Samiti (Block/Intermediate level)
  elems.push({
    id: 'panchayat-samiti',
    name: 'Panchayat Samiti (Block Panchayat)',
    nameHindi: 'पंचायत समिति',
    category: 'body',
    subtype: 'local-body',
    description: 'The Panchayat Samiti is the intermediate tier of the Panchayati Raj system at the block (tehsil) level. It links the Gram Panchayats with the Zila Parishad, coordinates block-level development programs, and distributes funds to village panchayats. India has approximately 6,614 Panchayat Samitis.',
    parentIds: ['zila-parishad'],
    legalBasis: 'Article 243B(1) of the Constitution; respective State Panchayati Raj Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
  });

  // Gram Panchayat (Village level)
  elems.push({
    id: 'gram-panchayat',
    name: 'Gram Panchayat (Village Panchayat)',
    nameHindi: 'ग्राम पंचायत',
    abbreviation: 'GP',
    category: 'body',
    subtype: 'local-body',
    description: 'The Gram Panchayat is the basic unit of the Panchayati Raj system at the village level, headed by a Sarpanch. There are approximately 2.54 lakh Gram Panchayats in India. The Gram Sabha, consisting of all registered voters, is the general assembly of the village. Panchayats handle subjects listed in the Eleventh Schedule.',
    parentIds: ['panchayat-samiti'],
    legalBasis: 'Articles 243A-243B of the Constitution; respective State Panchayati Raj Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
    employeeCount: 3200000,
  });

  // Gram Sabha
  elems.push({
    id: 'gram-sabha',
    name: 'Gram Sabha',
    nameHindi: 'ग्राम सभा',
    category: 'group',
    subtype: 'council',
    description: 'The Gram Sabha is the general assembly of all registered voters within a Gram Panchayat area. It is the foundation of the Panchayati Raj system and must meet at least twice a year. It approves plans, reviews accounts, and identifies beneficiaries for welfare schemes. Under PESA (1996), Gram Sabhas in Schedule V areas have enhanced powers.',
    parentIds: ['gram-panchayat'],
    legalBasis: 'Article 243A of the Constitution; Panchayats (Extension to Scheduled Areas) Act, 1996',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
  });

  // State Election Commission (for local body elections)
  elems.push({
    id: 'state-election-commission',
    name: 'State Election Commissions',
    nameHindi: 'राज्य निर्वाचन आयोग',
    abbreviation: 'SEC',
    category: 'body',
    subtype: 'constitutional-body',
    description: 'Each state has a State Election Commission responsible for the superintendence, direction, and control of the preparation of electoral rolls and the conduct of all elections to the Panchayats and Municipalities. The State Election Commissioner is appointed by the Governor.',
    parentIds: ['state-governments'],
    secondaryParentIds: ['election-commission'],
    legalBasis: 'Article 243K (Panchayats) and Article 243ZA (Municipalities) of the Constitution',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
    establishedYear: 1994,
  });

  // State Finance Commission
  elems.push({
    id: 'state-finance-commission',
    name: 'State Finance Commissions',
    nameHindi: 'राज्य वित्त आयोग',
    abbreviation: 'SFC',
    category: 'body',
    subtype: 'constitutional-body',
    description: 'Each state must constitute a State Finance Commission every five years to review the financial position of Panchayats and Municipalities and recommend the distribution of taxes, duties, tolls, and grants between the state and local bodies.',
    parentIds: ['state-governments'],
    secondaryParentIds: ['finance-commission'],
    legalBasis: 'Article 243I (Panchayats) and Article 243Y (Municipalities) of the Constitution',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt', 'finance'],
    establishedYear: 1994,
  });

  // District Planning Committee
  elems.push({
    id: 'district-planning-committee',
    name: 'District Planning Committees',
    nameHindi: 'जिला योजना समिति',
    abbreviation: 'DPC',
    category: 'body',
    subtype: 'constitutional-body',
    description: 'Constitutionally mandated committees at the district level that consolidate plans prepared by Panchayats and Municipalities into a draft development plan for the district. Four-fifths of the members are elected by and from amongst the elected members of the Panchayat and Municipality.',
    parentIds: ['zila-parishad'],
    secondaryParentIds: ['niti-aayog'],
    legalBasis: 'Article 243ZD of the Constitution',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
    establishedYear: 1992,
  });

  // =========================================================================
  // PART B — URBAN LOCAL BODIES (74th Amendment)
  // =========================================================================

  elems.push({
    id: 'urban-local-bodies',
    name: 'Urban Local Bodies',
    nameHindi: 'शहरी स्थानीय निकाय',
    abbreviation: 'ULB',
    category: 'group',
    subtype: 'council',
    description: 'The system of local self-government in urban India, constitutionalised by the 74th Amendment Act 1992 (Part IXA). Urban Local Bodies are responsible for functions listed in the Twelfth Schedule, including urban planning, regulation of land-use, water supply, public health, and slum improvement. India has approximately 4,657 ULBs. Local government is a State subject (State List, Entry 5); the Union ministry provides policy support and funding.',
    parentIds: ['state-governments'],
    secondaryParentIds: ['ministry-housing-urban'],
    legalBasis: 'Part IXA (Articles 243P-243ZG) of the Constitution; 74th Amendment Act, 1992',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    establishedYear: 1992,
    tags: ['local-govt'],
  });

  // Municipal Corporation
  elems.push({
    id: 'municipal-corporation',
    name: 'Municipal Corporations (Nagar Nigam)',
    nameHindi: 'नगर निगम',
    category: 'body',
    subtype: 'local-body',
    description: 'Municipal Corporations govern large cities with a population generally above 10 lakh. They are headed by a Mayor (elected) and a Municipal Commissioner (IAS officer). India has over 270 Municipal Corporations that handle urban infrastructure, water supply, sanitation, roads, public health, education, and city planning.',
    parentIds: ['urban-local-bodies'],
    legalBasis: 'Article 243Q of the Constitution; respective State Municipal Corporation Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt', 'infrastructure'],
    employeeCount: 2000000,
  });

  // Municipality / Municipal Council
  elems.push({
    id: 'municipality',
    name: 'Municipalities (Nagar Palika)',
    nameHindi: 'नगर पालिका',
    category: 'body',
    subtype: 'local-body',
    description: 'Municipalities (Nagar Palikas) govern smaller urban areas and transitional areas between rural and urban. They are headed by a Chairperson. India has approximately 1,800 Municipalities handling civic services, town planning, and urban development for medium-sized towns.',
    parentIds: ['urban-local-bodies'],
    legalBasis: 'Article 243Q of the Constitution; respective State Municipal Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
  });

  // Nagar Panchayat
  elems.push({
    id: 'nagar-panchayat',
    name: 'Nagar Panchayats (Town Panchayat)',
    nameHindi: 'नगर पंचायत',
    category: 'body',
    subtype: 'local-body',
    description: 'Nagar Panchayats govern transitional areas between rural and urban — small towns with growing populations. They are the third tier of urban local governance under the 74th Amendment. India has approximately 2,500 Nagar Panchayats.',
    parentIds: ['urban-local-bodies'],
    legalBasis: 'Article 243Q of the Constitution; respective State Municipal Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
  });

  // Cantonment Boards
  elems.push({
    id: 'cantonment-boards',
    name: 'Cantonment Boards',
    nameHindi: 'छावनी बोर्ड',
    abbreviation: 'CB',
    category: 'body',
    subtype: 'statutory-body',
    description: 'Cantonment Boards are urban local bodies for civilian areas in and around military cantonments. There are 62 Cantonment Boards in India governed by the Cantonments Act, 2006. They are unique in being under the Ministry of Defence rather than state governments.',
    parentIds: ['ministry-defence'],
    legalBasis: 'Cantonments Act, 2006',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt', 'defence'],
    establishedYear: 1924,
  });

  // Metropolitan Planning Committee
  elems.push({
    id: 'metropolitan-planning-committee',
    name: 'Metropolitan Planning Committees',
    nameHindi: 'महानगर योजना समिति',
    abbreviation: 'MPC',
    category: 'body',
    subtype: 'constitutional-body',
    description: 'Every metropolitan area (population 10 lakh+) must have a Metropolitan Planning Committee to prepare a draft development plan for the metropolitan area. Two-thirds of members are elected by and from amongst the elected representatives of municipalities and panchayats in the area.',
    parentIds: ['municipal-corporation'],
    secondaryParentIds: ['niti-aayog'],
    legalBasis: 'Article 243ZE of the Constitution',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['local-govt'],
    establishedYear: 1992,
  });

  // =========================================================================
  // PART C — CIVIL SERVICES
  // =========================================================================

  // Civil Services umbrella
  elems.push({
    id: 'civil-services',
    name: 'Civil Services of India',
    nameHindi: 'भारतीय सिविल सेवाएं',
    category: 'group',
    subtype: 'council',
    description: 'The civil services form the permanent executive branch of India. Under Article 312, there are All India Services serving both the Union and State Governments, Central Civil Services serving only the Union, and State Civil Services. Recruitment to AIS and Central Services Group A is through the UPSC.',
    parentIds: ['ministry-personnel'],
    secondaryParentIds: ['upsc'],
    legalBasis: 'Articles 308-323 of the Constitution; All India Services Act, 1951',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['civil-service'],
  });

  // --- All India Services ---

  elems.push({
    id: 'all-india-services',
    name: 'All India Services',
    nameHindi: 'अखिल भारतीय सेवाएं',
    abbreviation: 'AIS',
    category: 'group',
    subtype: 'council',
    description: 'The All India Services are common to both the Union and the States. Officers serve both the central and state governments and are recruited by the UPSC through the Civil Services Examination. There are three All India Services: IAS, IPS, and IFoS.',
    parentIds: ['civil-services'],
    legalBasis: 'Article 312 of the Constitution; All India Services Act, 1951',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service'],
  });

  elems.push({
    id: 'ias',
    name: 'Indian Administrative Service',
    nameHindi: 'भारतीय प्रशासनिक सेवा',
    abbreviation: 'IAS',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The IAS is the premier civil service of India. IAS officers hold key administrative positions at the district, state, and central levels — serving as District Magistrates/Collectors, Divisional Commissioners, Secretaries to Government, and heads of PSUs. There are approximately 6,500 IAS officers across state cadres.',
    parentIds: ['all-india-services'],
    secondaryParentIds: ['upsc'],
    legalBasis: 'Article 312 of the Constitution; Indian Administrative Service (Cadre) Rules, 1954',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service'],
    employeeCount: 6500,
    establishedYear: 1950,
  });

  elems.push({
    id: 'ips',
    name: 'Indian Police Service',
    nameHindi: 'भारतीय पुलिस सेवा',
    abbreviation: 'IPS',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The IPS provides senior police officers to both the Union and States. IPS officers serve as Superintendents of Police, Inspector Generals, Directors General of Police, and heads of central police organizations (CBI, CRPF, BSF, etc.). There are approximately 5,000 IPS officers.',
    parentIds: ['all-india-services'],
    secondaryParentIds: ['upsc', 'ministry-home-affairs'],
    legalBasis: 'Article 312 of the Constitution; Indian Police Service (Cadre) Rules, 1954',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service', 'home-affairs'],
    employeeCount: 5000,
    establishedYear: 1948,
  });

  elems.push({
    id: 'ifos',
    name: 'Indian Forest Service',
    nameHindi: 'भारतीय वन सेवा',
    abbreviation: 'IFoS',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The Indian Forest Service manages India\'s forests and handles related environmental matters. Officers serve as Divisional Forest Officers, Conservators, and Principal Chief Conservators of Forests at the state level. There are approximately 3,000 IFoS officers.',
    parentIds: ['all-india-services'],
    secondaryParentIds: ['upsc', 'ministry-environment'],
    legalBasis: 'Article 312 of the Constitution; Indian Forest Service (Cadre) Rules, 1966',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service', 'environment'],
    employeeCount: 3000,
    establishedYear: 1966,
  });

  // --- Central Civil Services ---

  elems.push({
    id: 'central-services',
    name: 'Central Civil Services',
    nameHindi: 'केंद्रीय सिविल सेवाएं',
    category: 'group',
    subtype: 'council',
    description: 'Central Civil Services serve only the Union Government. They include Group A services (recruited through UPSC CSE) like the IFS(A), IRS, ICAS, IAAS, IIS, etc., and Group B services. There are approximately 60 Central Services.',
    parentIds: ['civil-services'],
    legalBasis: 'Central Civil Services (Classification, Control and Appeal) Rules, 1965',
    jurisdictions: [{ type: 'union' }],
    tags: ['civil-service'],
  });

  elems.push({
    id: 'ifs-a',
    name: 'Indian Foreign Service',
    nameHindi: 'भारतीय विदेश सेवा',
    abbreviation: 'IFS(A)',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The Indian Foreign Service provides officers for India\'s diplomatic missions and consulates worldwide. IFS(A) officers serve as Ambassadors, High Commissioners, and Consul Generals. There are approximately 900 IFS officers.',
    parentIds: ['central-services'],
    secondaryParentIds: ['ministry-external-affairs'],
    legalBasis: 'Indian Foreign Service Rules, 1961',
    jurisdictions: [{ type: 'union' }],
    tags: ['civil-service', 'external-affairs'],
    employeeCount: 900,
    establishedYear: 1946,
  });

  elems.push({
    id: 'irs',
    name: 'Indian Revenue Service',
    nameHindi: 'भारतीय राजस्व सेवा',
    abbreviation: 'IRS',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The IRS has two branches — Income Tax and Customs & Indirect Taxes. IRS officers administer direct and indirect tax collection, investigate tax evasion, and serve in the CBDT and CBIC. It is the largest Group A Central Service with approximately 4,800 officers.',
    parentIds: ['central-services'],
    secondaryParentIds: ['ministry-finance'],
    legalBasis: 'Recruited through UPSC Civil Services Examination',
    jurisdictions: [{ type: 'union' }],
    tags: ['civil-service', 'finance'],
    employeeCount: 4800,
    establishedYear: 1953,
  });

  elems.push({
    id: 'iaas',
    name: 'Indian Audit and Accounts Service',
    nameHindi: 'भारतीय लेखापरीक्षा और लेखा सेवा',
    abbreviation: 'IAAS',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The IAAS assists the Comptroller and Auditor General (CAG) in auditing the accounts of the Union and State governments, railways, defence, and commercial undertakings. Officers serve as Accountant Generals and Directors of Audit.',
    parentIds: ['central-services'],
    secondaryParentIds: ['cag'],
    legalBasis: 'Recruited through UPSC Civil Services Examination',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service', 'finance'],
    employeeCount: 800,
    establishedYear: 1971,
  });

  elems.push({
    id: 'icas',
    name: 'Indian Civil Accounts Service',
    nameHindi: 'भारतीय सिविल लेखा सेवा',
    abbreviation: 'ICAS',
    category: 'body',
    subtype: 'service-cadre',
    description: 'The ICAS manages the payment and accounting functions for the civil ministries and departments of the Government of India. Officers serve as Chief Controllers of Accounts and Pr. Accounts Officers.',
    parentIds: ['central-services'],
    secondaryParentIds: ['ministry-finance'],
    legalBasis: 'Recruited through UPSC Civil Services Examination',
    jurisdictions: [{ type: 'union' }],
    tags: ['civil-service', 'finance'],
    employeeCount: 700,
    establishedYear: 1976,
  });

  // --- State Civil Services ---

  elems.push({
    id: 'state-civil-services',
    name: 'State Civil Services',
    nameHindi: 'राज्य सिविल सेवाएं',
    category: 'group',
    subtype: 'council',
    description: 'Each state has its own civil services recruited through the respective State Public Service Commission. State Civil Services (SCS) officers handle administrative roles within the state and may be promoted to the IAS. State Police Services officers may be promoted to the IPS.',
    parentIds: ['civil-services'],
    secondaryParentIds: ['state-governments'],
    legalBasis: 'Respective State Civil Service Rules',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service', 'state-govt'],
  });

  // =========================================================================
  // PART D — DISTRICT ADMINISTRATION
  // =========================================================================

  elems.push({
    id: 'district-administration',
    name: 'District Administration',
    nameHindi: 'जिला प्रशासन',
    category: 'group',
    subtype: 'council',
    description: 'The District is the fundamental unit of administration in India. There are 766 districts, each headed by a District Magistrate/Collector (IAS). The district administration is the point where the Union, State, and Local governments converge. The DM coordinates all government functions at the district level — revenue collection, law and order, elections, disaster management, and welfare scheme implementation.',
    parentIds: ['state-governments'],
    secondaryParentIds: ['civil-services'],
    legalBasis: 'Land Revenue Codes and the Code of Criminal Procedure (Section 20)',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service'],
  });

  // District Collector / DM
  elems.push({
    id: 'district-collector',
    name: 'District Magistrate / Collector',
    nameHindi: 'जिला मजिस्ट्रेट / कलेक्टर',
    abbreviation: 'DM/DC',
    category: 'official',
    subtype: 'civil-servant',
    description: 'The District Magistrate (DM) or Collector is the chief officer of revenue administration and the head of the district bureaucracy — typically an IAS officer. The DM is responsible for law and order, revenue collection, coordination of development schemes, election administration, disaster management, and protocol within the district.',
    role: 'District Magistrate / Collector',
    parentIds: ['district-administration'],
    secondaryParentIds: ['ias'],
    legalBasis: 'Land Revenue Codes; Code of Criminal Procedure (Section 20); District Collector\' functions under various Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service'],
  });

  // Superintendent of Police
  elems.push({
    id: 'superintendent-of-police',
    name: 'Superintendent of Police',
    nameHindi: 'पुलिस अधीक्षक',
    abbreviation: 'SP',
    category: 'official',
    subtype: 'civil-servant',
    description: 'The Superintendent of Police (SP) is the head of the police force in a district — typically an IPS officer. The SP is responsible for maintaining law and order, crime prevention, investigation, and internal security within the district under the general control of the District Magistrate.',
    role: 'Superintendent of Police',
    parentIds: ['district-administration'],
    secondaryParentIds: ['ips'],
    legalBasis: 'Police Act, 1861; State Police Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service', 'home-affairs'],
  });

  // District Forest Officer
  elems.push({
    id: 'district-forest-officer',
    name: 'Divisional Forest Officer',
    nameHindi: 'वन प्रभागीय अधिकारी',
    abbreviation: 'DFO',
    category: 'official',
    subtype: 'civil-servant',
    description: 'The Divisional Forest Officer (DFO) is responsible for managing forests, wildlife, and environmental conservation within a forest division — typically an IFoS officer. The DFO implements the Indian Forest Act, Wildlife Protection Act, and environmental regulations.',
    role: 'Divisional Forest Officer',
    parentIds: ['district-administration'],
    secondaryParentIds: ['ifos'],
    legalBasis: 'Indian Forest Act, 1927; Wildlife Protection Act, 1972',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['civil-service', 'environment'],
  });

  // =========================================================================
  // PART E — TRAINING INSTITUTIONS
  // =========================================================================

  elems.push({
    id: 'lbsnaa',
    name: 'Lal Bahadur Shastri National Academy of Administration',
    nameHindi: 'लाल बहादुर शास्त्री राष्ट्रीय प्रशासन अकादमी',
    abbreviation: 'LBSNAA',
    category: 'body',
    subtype: 'autonomous-body',
    description: 'LBSNAA is the premier training institution for IAS officers and other All India Services. It conducts the Foundation Course for all civil services and the Phase I and Phase II training for IAS probationers at Mussoorie.',
    parentIds: ['ministry-personnel'],
    legalBasis: 'Under administrative control of DoPT',
    infoUrl: 'https://lbsnaa.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'Mussoorie, Uttarakhand',
    tags: ['civil-service', 'training'],
    establishedYear: 1959,
  });

  elems.push({
    id: 'svpnpa',
    name: 'Sardar Vallabhbhai Patel National Police Academy',
    nameHindi: 'सरदार वल्लभभाई पटेल राष्ट्रीय पुलिस अकादमी',
    abbreviation: 'SVPNPA',
    category: 'body',
    subtype: 'autonomous-body',
    description: 'SVPNPA is the premier police training institution in India that trains IPS probationers and conducts in-service courses for police officers. It is located in Hyderabad.',
    parentIds: ['ministry-home-affairs'],
    legalBasis: 'Under administrative control of MHA',
    infoUrl: 'https://svpnpa.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'Hyderabad, Telangana',
    tags: ['civil-service', 'training', 'home-affairs'],
    establishedYear: 1948,
  });

  elems.push({
    id: 'iipa',
    name: 'Indian Institute of Public Administration',
    nameHindi: 'भारतीय लोक प्रशासन संस्थान',
    abbreviation: 'IIPA',
    category: 'body',
    subtype: 'autonomous-body',
    description: 'IIPA is an institute for research, training, and study in public administration. It conducts training programs for civil servants, publishes the Indian Journal of Public Administration, and advises the government on administrative reforms.',
    parentIds: ['ministry-personnel'],
    legalBasis: 'Registered under Societies Registration Act',
    infoUrl: 'https://iipa.org.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['civil-service', 'training', 'research'],
    establishedYear: 1954,
  });

  // =========================================================================
  // PART F — CENTRAL POLICE ORGANIZATIONS
  // =========================================================================

  elems.push({
    id: 'central-armed-police',
    name: 'Central Armed Police Forces',
    nameHindi: 'केंद्रीय सशस्त्र पुलिस बल',
    abbreviation: 'CAPF',
    category: 'group',
    subtype: 'council',
    description: 'The Central Armed Police Forces are seven paramilitary organizations under the Ministry of Home Affairs: CRPF, BSF, CISF, ITBP, SSB, NSG, and Assam Rifles. Together they have over 10 lakh personnel and are led by IPS officers at senior levels.',
    parentIds: ['ministry-home-affairs'],
    legalBasis: 'Respective CAPF Acts',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    tags: ['home-affairs'],
    employeeCount: 1000000,
  });

  elems.push({
    id: 'crpf',
    name: 'Central Reserve Police Force',
    nameHindi: 'केंद्रीय रिजर्व पुलिस बल',
    abbreviation: 'CRPF',
    category: 'body',
    subtype: 'statutory-body',
    description: 'CRPF is the largest Central Armed Police Force, primarily deployed for internal security, counter-insurgency, and anti-Naxal operations. It is the primary force for maintaining law and order and assists state police during elections and disturbances.',
    parentIds: ['central-armed-police'],
    legalBasis: 'CRPF Act, 1949',
    infoUrl: 'https://crpf.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs'],
    employeeCount: 325000,
    establishedYear: 1939,
  });

  elems.push({
    id: 'bsf',
    name: 'Border Security Force',
    nameHindi: 'सीमा सुरक्षा बल',
    abbreviation: 'BSF',
    category: 'body',
    subtype: 'statutory-body',
    description: 'The BSF is India\'s primary border guarding force deployed along the India-Pakistan and India-Bangladesh borders. It is the world\'s largest border guarding force.',
    parentIds: ['central-armed-police'],
    legalBasis: 'BSF Act, 1968',
    infoUrl: 'https://bsf.nic.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs'],
    employeeCount: 265000,
    establishedYear: 1965,
  });

  elems.push({
    id: 'cisf',
    name: 'Central Industrial Security Force',
    nameHindi: 'केंद्रीय औद्योगिक सुरक्षा बल',
    abbreviation: 'CISF',
    category: 'body',
    subtype: 'statutory-body',
    description: 'CISF provides security to major critical infrastructure installations including airports, nuclear installations, space centres, special economic zones, and government buildings across India.',
    parentIds: ['central-armed-police'],
    legalBasis: 'CISF Act, 1968',
    infoUrl: 'https://cisf.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs'],
    employeeCount: 180000,
    establishedYear: 1969,
  });

  elems.push({
    id: 'itbp',
    name: 'Indo-Tibetan Border Police',
    nameHindi: 'भारत-तिब्बत सीमा पुलिस',
    abbreviation: 'ITBP',
    category: 'body',
    subtype: 'statutory-body',
    description: 'ITBP guards the India-China border along the Himalayas from Ladakh to Arunachal Pradesh. It is specialized for high-altitude operations and also serves as the primary responder for natural disasters in the Himalayan region.',
    parentIds: ['central-armed-police'],
    legalBasis: 'ITBP Act, 1992',
    infoUrl: 'https://itbp.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs'],
    employeeCount: 90000,
    establishedYear: 1962,
  });

  elems.push({
    id: 'ssb',
    name: 'Sashastra Seema Bal',
    nameHindi: 'सशस्त्र सीमा बल',
    abbreviation: 'SSB',
    category: 'body',
    subtype: 'statutory-body',
    description: 'SSB guards the India-Nepal and India-Bhutan borders and is tasked with preventing trans-border crimes, smuggling, and unauthorized entry.',
    parentIds: ['central-armed-police'],
    legalBasis: 'SSB Act, 2007',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs'],
    employeeCount: 95000,
    establishedYear: 1963,
  });

  elems.push({
    id: 'nsg',
    name: 'National Security Guard',
    nameHindi: 'राष्ट्रीय सुरक्षा गार्ड',
    abbreviation: 'NSG',
    category: 'body',
    subtype: 'statutory-body',
    description: 'The NSG is an elite counter-terrorism force, commonly known as the "Black Cats". It is deployed for counter-terrorism and counter-hijacking operations and VIP security.',
    parentIds: ['central-armed-police'],
    legalBasis: 'National Security Guard Act, 1986',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'Manesar, Haryana',
    tags: ['home-affairs'],
    employeeCount: 15000,
    establishedYear: 1984,
  });

  // Investigation agencies
  elems.push({
    id: 'cbi',
    name: 'Central Bureau of Investigation',
    nameHindi: 'केंद्रीय अन्वेषण ब्यूरो',
    abbreviation: 'CBI',
    category: 'body',
    subtype: 'statutory-body',
    description: 'CBI is the premier investigating agency of the Government of India. It investigates cases of corruption, economic offences, and special crimes. The CBI Director is appointed by a committee comprising the PM, Leader of Opposition, and Chief Justice of India.',
    parentIds: ['ministry-personnel'],
    secondaryParentIds: ['ministry-home-affairs'],
    legalBasis: 'Delhi Special Police Establishment Act, 1946',
    infoUrl: 'https://cbi.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs', 'law'],
    employeeCount: 7000,
    establishedYear: 1963,
  });

  elems.push({
    id: 'nia',
    name: 'National Investigation Agency',
    nameHindi: 'राष्ट्रीय जांच एजेंसी',
    abbreviation: 'NIA',
    category: 'body',
    subtype: 'statutory-body',
    description: 'NIA is the central counter-terrorism law enforcement agency. It investigates terror-related crimes, offences affecting the sovereignty and integrity of India, and crimes under Acts like UAPA and the Explosive Substances Act.',
    parentIds: ['ministry-home-affairs'],
    legalBasis: 'National Investigation Agency Act, 2008',
    infoUrl: 'https://nia.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['home-affairs', 'law'],
    employeeCount: 1500,
    establishedYear: 2009,
  });

  elems.push({
    id: 'ed',
    name: 'Enforcement Directorate',
    nameHindi: 'प्रवर्तन निदेशालय',
    abbreviation: 'ED',
    category: 'body',
    subtype: 'statutory-body',
    description: 'The Enforcement Directorate is responsible for enforcing economic and financial laws. It investigates money laundering under PMLA and foreign exchange violations under FEMA.',
    parentIds: ['ministry-finance'],
    legalBasis: 'Prevention of Money Laundering Act, 2002; Foreign Exchange Management Act, 1999',
    infoUrl: 'https://enforcementdirectorate.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['finance', 'law'],
    employeeCount: 2000,
    establishedYear: 1956,
  });

  return elems;
}

export const localGovtElements: GovElement[] = generateLocalGovtAndCivilServiceElements();
