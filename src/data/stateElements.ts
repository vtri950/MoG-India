/**
 * State Government Elements for MoG-India
 *
 * Includes:
 * - A generic "State Governments" node linking to the President
 * - Governor + Chief Minister + key institutions for all 28 states and 3 UTs with legislature
 * - Center-state bridging bodies (Inter-State Council, GST Council, Finance Commission, NITI Aayog, etc.)
 *
 * Convention for IDs:
 *   state-<statecode>-governor, state-<statecode>-cm, state-<statecode>-legislature, etc.
 */

import { GovElement } from '../types';
import { ALL_INDIA_JURISDICTION, stateJurisdiction } from './jurisdictions';

// ============================================================================
// State code mapping (ISO 3166-2:IN alpha-2, lowercase)
// ============================================================================

interface StateInfo {
  code: string;
  name: string;
  capital: string;
  governor: string;
  cm: string;
  cmParty: string;
  cmSince: string;
  legislature: 'unicameral' | 'bicameral';
  /** If bicameral, name of upper house */
  upperHouse?: string;
}

const STATES_INFO: StateInfo[] = [
  { code: 'ap', name: 'Andhra Pradesh', capital: 'Amaravati', governor: 'S. Abdul Nazeer', cm: 'N. Chandrababu Naidu', cmParty: 'TDP', cmSince: '2024-06-12', legislature: 'unicameral' },
  { code: 'ar', name: 'Arunachal Pradesh', capital: 'Itanagar', governor: 'Lt. Gen. K.T. Parnaik (Retd.)', cm: 'Pema Khandu', cmParty: 'BJP', cmSince: '2016-07-17', legislature: 'unicameral' },
  { code: 'as', name: 'Assam', capital: 'Dispur', governor: 'Lakshman Prasad Acharya', cm: 'Himanta Biswa Sarma', cmParty: 'BJP', cmSince: '2021-05-10', legislature: 'unicameral' },
  { code: 'br', name: 'Bihar', capital: 'Patna', governor: 'Arif Mohammad Khan', cm: 'Nitish Kumar', cmParty: 'JD(U)', cmSince: '2024-02-12', legislature: 'bicameral', upperHouse: 'Bihar Legislative Council' },
  { code: 'cg', name: 'Chhattisgarh', capital: 'Raipur', governor: 'Ramen Deka', cm: 'Vishnu Deo Sai', cmParty: 'BJP', cmSince: '2023-12-13', legislature: 'unicameral' },
  { code: 'ga', name: 'Goa', capital: 'Panaji', governor: 'P.S. Sreedharan Pillai', cm: 'Pramod Sawant', cmParty: 'BJP', cmSince: '2022-03-28', legislature: 'unicameral' },
  { code: 'gj', name: 'Gujarat', capital: 'Gandhinagar', governor: 'Acharya Devvrat', cm: 'Bhupendra Patel', cmParty: 'BJP', cmSince: '2021-09-13', legislature: 'unicameral' },
  { code: 'hr', name: 'Haryana', capital: 'Chandigarh', governor: 'Bandaru Dattatreya', cm: 'Nayab Singh Saini', cmParty: 'BJP', cmSince: '2024-10-17', legislature: 'unicameral' },
  { code: 'hp', name: 'Himachal Pradesh', capital: 'Shimla', governor: 'Shiv Pratap Shukla', cm: 'Sukhvinder Singh Sukhu', cmParty: 'INC', cmSince: '2022-12-11', legislature: 'unicameral' },
  { code: 'jh', name: 'Jharkhand', capital: 'Ranchi', governor: 'Santosh Kumar Gangwar', cm: 'Hemant Soren', cmParty: 'JMM', cmSince: '2024-07-04', legislature: 'unicameral' },
  { code: 'ka', name: 'Karnataka', capital: 'Bengaluru', governor: 'Thaawarchand Gehlot', cm: 'Siddaramaiah', cmParty: 'INC', cmSince: '2023-05-20', legislature: 'bicameral', upperHouse: 'Karnataka Legislative Council' },
  { code: 'kl', name: 'Kerala', capital: 'Thiruvananthapuram', governor: 'Rajendra Vishwanath Arlekar', cm: 'Pinarayi Vijayan', cmParty: 'CPI(M)', cmSince: '2021-05-20', legislature: 'unicameral' },
  { code: 'mp', name: 'Madhya Pradesh', capital: 'Bhopal', governor: 'Mangubhai C. Patel', cm: 'Mohan Yadav', cmParty: 'BJP', cmSince: '2023-12-13', legislature: 'unicameral' },
  { code: 'mh', name: 'Maharashtra', capital: 'Mumbai', governor: 'C.P. Radhakrishnan', cm: 'Devendra Fadnavis', cmParty: 'BJP', cmSince: '2024-12-05', legislature: 'bicameral', upperHouse: 'Maharashtra Legislative Council' },
  { code: 'mn', name: 'Manipur', capital: 'Imphal', governor: 'Ajay Kumar Bhalla', cm: 'N. Biren Singh', cmParty: 'BJP', cmSince: '2022-03-21', legislature: 'unicameral' },
  { code: 'ml', name: 'Meghalaya', capital: 'Shillong', governor: 'C.H. Vijayashankar', cm: 'Conrad K. Sangma', cmParty: 'NPP', cmSince: '2023-03-07', legislature: 'unicameral' },
  { code: 'mz', name: 'Mizoram', capital: 'Aizawl', governor: 'Gen. (Dr.) Vijay Kumar Singh (Retd.)', cm: 'Lalduhoma', cmParty: 'ZPM', cmSince: '2023-12-08', legislature: 'unicameral' },
  { code: 'nl', name: 'Nagaland', capital: 'Kohima', governor: 'La Ganesan', cm: 'Neiphiu Rio', cmParty: 'NDPP', cmSince: '2023-03-07', legislature: 'unicameral' },
  { code: 'od', name: 'Odisha', capital: 'Bhubaneswar', governor: 'Hari Babu Kambhampati', cm: 'Mohan Charan Majhi', cmParty: 'BJP', cmSince: '2024-06-12', legislature: 'unicameral' },
  { code: 'pb', name: 'Punjab', capital: 'Chandigarh', governor: 'Gulab Chand Kataria', cm: 'Bhagwant Mann', cmParty: 'AAP', cmSince: '2022-03-16', legislature: 'unicameral' },
  { code: 'rj', name: 'Rajasthan', capital: 'Jaipur', governor: 'Haribhau Kisanrao Bagde', cm: 'Bhajan Lal Sharma', cmParty: 'BJP', cmSince: '2023-12-15', legislature: 'unicameral' },
  { code: 'sk', name: 'Sikkim', capital: 'Gangtok', governor: 'Om Prakash Mathur', cm: 'Prem Singh Tamang', cmParty: 'SKM', cmSince: '2024-06-10', legislature: 'unicameral' },
  { code: 'tn', name: 'Tamil Nadu', capital: 'Chennai', governor: 'R.N. Ravi', cm: 'M.K. Stalin', cmParty: 'DMK', cmSince: '2021-05-07', legislature: 'unicameral' },
  { code: 'ts', name: 'Telangana', capital: 'Hyderabad', governor: 'Jishnu Dev Varma', cm: 'A. Revanth Reddy', cmParty: 'INC', cmSince: '2023-12-07', legislature: 'unicameral' },
  { code: 'tr', name: 'Tripura', capital: 'Agartala', governor: 'Indra Sena Reddy Nallu', cm: 'Manik Saha', cmParty: 'BJP', cmSince: '2022-05-15', legislature: 'unicameral' },
  { code: 'up', name: 'Uttar Pradesh', capital: 'Lucknow', governor: 'Anandiben Patel', cm: 'Yogi Adityanath', cmParty: 'BJP', cmSince: '2022-03-25', legislature: 'bicameral', upperHouse: 'UP Legislative Council' },
  { code: 'uk', name: 'Uttarakhand', capital: 'Dehradun', governor: 'Lt. Gen. Gurmit Singh (Retd.)', cm: 'Pushkar Singh Dhami', cmParty: 'BJP', cmSince: '2022-03-23', legislature: 'unicameral' },
  { code: 'wb', name: 'West Bengal', capital: 'Kolkata', governor: 'C.V. Ananda Bose', cm: 'Mamata Banerjee', cmParty: 'AITC', cmSince: '2021-05-05', legislature: 'unicameral' },
];

// UTs with legislatures (treated similarly to states for governance)
interface UTInfo {
  code: string;
  name: string;
  capital: string;
  lgOrAdmin: string;          // Lt. Governor / Administrator
  lgTitle: string;
  cm?: string;
  cmParty?: string;
  cmSince?: string;
  hasLegislature: boolean;
}

const UTS_WITH_LEGISLATURE: UTInfo[] = [
  { code: 'dl', name: 'Delhi', capital: 'New Delhi', lgOrAdmin: 'V.K. Saxena', lgTitle: 'Lieutenant Governor', cm: 'Rekha Gupta', cmParty: 'BJP', cmSince: '2025-04-02', hasLegislature: true },
  { code: 'py', name: 'Puducherry', capital: 'Puducherry', lgOrAdmin: 'K. Kailashnathan', lgTitle: 'Lieutenant Governor', cm: 'N. Rangasamy', cmParty: 'AINRC', cmSince: '2021-05-07', hasLegislature: true },
  { code: 'jk', name: 'Jammu and Kashmir', capital: 'Srinagar / Jammu', lgOrAdmin: 'Manoj Sinha', lgTitle: 'Lieutenant Governor', cm: 'Omar Abdullah', cmParty: 'NC', cmSince: '2024-10-16', hasLegislature: true },
];

// ============================================================================
// Generator: produce GovElement[] for all states
// ============================================================================

function generateStateElements(): GovElement[] {
  const elems: GovElement[] = [];

  // ---------------------
  // Top-level "State Governments" umbrella node
  // ---------------------
  elems.push({
    id: 'state-governments',
    name: 'State Governments',
    nameHindi: 'राज्य सरकारें',
    category: 'group',
    subtype: 'council',
    description: 'India is a Union of States. Under the Constitution, state governments exercise sovereign power over subjects in the State List (Schedule VII) and share power over the Concurrent List. Each state has a Governor appointed by the President, an elected Chief Minister, and a Council of Ministers.',
    parentIds: ['president'],
    secondaryParentIds: ['ministry-home-affairs'],
    legalBasis: 'Part VI (Articles 152-237) of the Constitution',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    tags: ['state-govt'],
  });

  // ---------------------
  // Center-State bridging bodies
  // ---------------------
  elems.push({
    id: 'inter-state-council',
    name: 'Inter-State Council',
    nameHindi: 'अंतर-राज्यीय परिषद',
    abbreviation: 'ISC',
    category: 'body',
    subtype: 'constitutional-body',
    description: 'The Inter-State Council is a constitutional body established under Article 263 to investigate and discuss subjects of common interest between the Union and States, or between States, and to make recommendations for better coordination of policy and action.',
    parentIds: ['prime-minister'],
    secondaryParentIds: ['ministry-home-affairs'],
    legalBasis: 'Article 263 of the Constitution; Presidential Order of 1990',
    infoUrl: 'https://interstatecouncil.nic.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    establishedYear: 1990,
    tags: ['advisory', 'center-state'],
  });

  elems.push({
    id: 'gst-council',
    name: 'GST Council',
    nameHindi: 'जीएसटी परिषद',
    abbreviation: 'GSTC',
    category: 'body',
    subtype: 'constitutional-body',
    description: 'The Goods and Services Tax Council is a constitutional body that makes recommendations on GST rates, exemptions, thresholds, and dispute resolution between Centre and States. Chaired by the Union Finance Minister with all state Finance Ministers as members.',
    parentIds: ['minister-finance'],
    legalBasis: 'Article 279A of the Constitution (101st Amendment Act, 2016)',
    infoUrl: 'https://gstcouncil.gov.in',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    establishedYear: 2016,
    tags: ['finance', 'center-state'],
  });

  elems.push({
    id: 'zonal-councils',
    name: 'Zonal Councils',
    nameHindi: 'आंचलिक परिषद',
    category: 'body',
    subtype: 'statutory-body',
    description: 'Five Zonal Councils (Northern, Central, Eastern, Western, Southern) were set up under the States Reorganisation Act, 1956 to promote inter-state cooperation and coordination. Each is chaired by the Union Home Minister.',
    parentIds: ['minister-home-affairs'],
    legalBasis: 'States Reorganisation Act, 1956 (Sections 15-22)',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    establishedYear: 1957,
    tags: ['home-affairs', 'center-state'],
  });

  elems.push({
    id: 'national-development-council',
    name: 'National Development Council',
    nameHindi: 'राष्ट्रीय विकास परिषद',
    abbreviation: 'NDC',
    category: 'group',
    subtype: 'council',
    description: 'The NDC is presided over by the Prime Minister and includes all Union Cabinet Ministers, Chief Ministers of all states, and UT representatives. It approves the Five-Year Plans and promotes balanced development.',
    parentIds: ['prime-minister'],
    secondaryParentIds: ['niti-aayog'],
    legalBasis: 'Executive Resolution (1952, reconstituted 1967)',
    jurisdictions: [ALL_INDIA_JURISDICTION],
    headquarters: 'New Delhi',
    establishedYear: 1952,
    tags: ['advisory', 'center-state'],
  });

  // ---------------------
  // Individual States
  // ---------------------
  for (const s of STATES_INFO) {
    const jur = stateJurisdiction(s.name);

    // Governor
    elems.push({
      id: `state-${s.code}-governor`,
      name: `Governor of ${s.name}`,
      category: 'official',
      subtype: 'governor',
      description: `The Governor of ${s.name} is appointed by the President and serves as the constitutional head of the state. The Governor acts on the aid and advice of the Council of Ministers headed by the Chief Minister.`,
      role: `Governor of ${s.name}`,
      currentHolder: s.governor,
      parentIds: ['president'],
      secondaryParentIds: ['state-governments'],
      legalBasis: 'Articles 153-162 of the Constitution',
      jurisdictions: [jur],
      headquarters: s.capital,
      tags: ['state-govt'],
    });

    // Chief Minister
    elems.push({
      id: `state-${s.code}-cm`,
      name: `Chief Minister of ${s.name}`,
      category: 'official',
      subtype: 'chief-minister',
      description: `The Chief Minister of ${s.name} is the head of the state government. The CM is the leader of the majority party or coalition in the state Vidhan Sabha and is appointed by the Governor.`,
      role: `Chief Minister of ${s.name}`,
      currentHolder: `${s.cm} (${s.cmParty})`,
      appointedDate: s.cmSince,
      parentIds: [`state-${s.code}-governor`],
      legalBasis: 'Article 164 of the Constitution',
      jurisdictions: [jur],
      headquarters: s.capital,
      tags: ['state-govt'],
    });

    // State Legislature
    elems.push({
      id: `state-${s.code}-legislature`,
      name: `${s.name} State Legislature`,
      category: 'group',
      subtype: 'state-legislature',
      description: s.legislature === 'bicameral'
        ? `The ${s.name} State Legislature is bicameral, consisting of the Vidhan Sabha (Legislative Assembly) and the ${s.upperHouse || 'Vidhan Parishad (Legislative Council)'}.`
        : `The ${s.name} State Legislature is unicameral, consisting of the Vidhan Sabha (Legislative Assembly).`,
      parentIds: [`state-${s.code}-governor`],
      legalBasis: 'Articles 168-212 of the Constitution',
      jurisdictions: [jur],
      headquarters: s.capital,
      tags: ['state-govt'],
    });

    // State High Court
    elems.push({
      id: `state-${s.code}-hc`,
      name: `${s.name} High Court`,
      category: 'body',
      subtype: 'constitutional-body',
      description: `The High Court of ${s.name} exercises judicial review and is the highest court of appeal within the state. Judges are appointed by the President in consultation with the CJI and the Governor.`,
      parentIds: [`state-${s.code}-governor`],
      secondaryParentIds: ['supreme-court'],
      legalBasis: 'Articles 214-231 of the Constitution',
      jurisdictions: [jur],
      headquarters: s.capital,
      tags: ['law', 'state-govt'],
    });

    // State Public Service Commission
    elems.push({
      id: `state-${s.code}-psc`,
      name: `${s.name} Public Service Commission`,
      category: 'body',
      subtype: 'constitutional-body',
      description: `The ${s.name} PSC conducts examinations for appointments to civil services and posts under the state government. It advises the Governor on matters relating to recruitment.`,
      parentIds: [`state-${s.code}-governor`],
      legalBasis: 'Articles 315-323 of the Constitution',
      jurisdictions: [jur],
      headquarters: s.capital,
      tags: ['state-govt'],
    });
  }

  // ---------------------
  // UTs with Legislature
  // ---------------------
  for (const ut of UTS_WITH_LEGISLATURE) {
    const jur: import('../types').Jurisdiction = { type: 'ut-with-legislature', name: ut.name };

    // Lt. Governor / Administrator
    elems.push({
      id: `ut-${ut.code}-lg`,
      name: `${ut.lgTitle} of ${ut.name}`,
      category: 'official',
      subtype: 'governor',
      description: `The ${ut.lgTitle} of ${ut.name} is appointed by the President and represents the Union Government in the territory. ${ut.hasLegislature ? `${ut.name} has an elected legislature and a Chief Minister.` : ''}`,
      role: `${ut.lgTitle} of ${ut.name}`,
      currentHolder: ut.lgOrAdmin,
      parentIds: ['president'],
      secondaryParentIds: ['state-governments', 'ministry-home-affairs'],
      legalBasis: ut.name === 'Delhi' ? 'Article 239AA of the Constitution' : 'Article 239A of the Constitution',
      jurisdictions: [jur],
      headquarters: ut.capital,
      tags: ['state-govt'],
    });

    // Chief Minister (if applicable)
    if (ut.cm) {
      elems.push({
        id: `ut-${ut.code}-cm`,
        name: `Chief Minister of ${ut.name}`,
        category: 'official',
        subtype: 'chief-minister',
        description: `The Chief Minister of ${ut.name} is the head of the elected government of the Union Territory. The CM exercises executive power on subjects delegated to the UT government.`,
        role: `Chief Minister of ${ut.name}`,
        currentHolder: `${ut.cm} (${ut.cmParty})`,
        appointedDate: ut.cmSince,
        parentIds: [`ut-${ut.code}-lg`],
        legalBasis: ut.name === 'Delhi' ? 'Article 239AA of the Constitution' : 'Article 239A of the Constitution',
        jurisdictions: [jur],
        headquarters: ut.capital,
        tags: ['state-govt'],
      });
    }

    // UT Legislature
    elems.push({
      id: `ut-${ut.code}-legislature`,
      name: `${ut.name} Legislative Assembly`,
      category: 'group',
      subtype: 'state-legislature',
      description: `The ${ut.name} Legislative Assembly is the unicameral legislature of the Union Territory.`,
      parentIds: [`ut-${ut.code}-lg`],
      legalBasis: ut.name === 'Delhi' ? 'Article 239AA of the Constitution' : 'Article 239A of the Constitution',
      jurisdictions: [jur],
      headquarters: ut.capital,
      tags: ['state-govt'],
    });
  }

  return elems;
}

// ============================================================================
// Export
// ============================================================================

export const stateElements: GovElement[] = generateStateElements();
