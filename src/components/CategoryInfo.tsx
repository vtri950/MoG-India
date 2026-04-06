/**
 * CategoryInfo Component
 * Shows description and full element list for a specific category/subtype
 */

import { getAllElements } from '../data/elements';
import type { ElementSubtype } from '../types';
import { getSubtypeColor } from '../utils/colors';
import './CategoryInfo.css';

interface CategoryInfoProps {
  category: string;
  subtype: string;
  onClose: () => void;
  onSelectElement: (id: string) => void;
}

// India-specific category descriptions
const categoryDescriptions: Record<string, Record<string, { emoji: string; title: string; description: string }>> = {
  official: {
    'president': {
      emoji: '👑', title: 'President',
      description: 'The head of state of the Republic of India. The President is the supreme commander of the armed forces, appoints the Prime Minister and Council of Ministers, and exercises executive power under the Constitution.',
    },
    'vice-president': {
      emoji: '🏛️', title: 'Vice President',
      description: 'The second-highest constitutional office. The Vice President is the ex-officio Chairman of the Rajya Sabha and acts as President during vacancies.',
    },
    'prime-minister': {
      emoji: '⭐', title: 'Prime Minister',
      description: 'The head of government and leader of the Council of Ministers. The PM is appointed by the President as the leader of the majority party/coalition in the Lok Sabha and directs all government policy.',
    },
    'cabinet-minister': {
      emoji: '🌟', title: 'Cabinet Minister',
      description: 'Senior ministers who attend Cabinet meetings and head major portfolios. Cabinet Ministers are the highest-ranking members of the Council of Ministers after the PM.',
    },
    'minister-of-state-ic': {
      emoji: '👤', title: 'Minister of State (Independent Charge)',
      description: 'Ministers who hold independent charge of a ministry or department without a Cabinet-rank minister above them. They do not attend Cabinet meetings unless specifically invited.',
    },
    'minister-of-state': {
      emoji: '👤', title: 'Minister of State',
      description: 'Junior ministers who assist a Cabinet Minister in their ministry. They handle specific portfolios or functions within the larger ministry.',
    },
    'governor': {
      emoji: '🏛️', title: 'Governor',
      description: 'The constitutional head of a state, appointed by the President. The Governor acts on the aid and advice of the state Council of Ministers headed by the Chief Minister.',
    },
    'chief-minister': {
      emoji: '👤', title: 'Chief Minister',
      description: 'The head of the elected government of a state or Union Territory with legislature. The CM leads the state Council of Ministers and is appointed by the Governor.',
    },
    'civil-servant': {
      emoji: '👤', title: 'Civil Servant',
      description: 'Professional, non-partisan members of the civil services who implement government policies. Key positions include District Collectors (IAS), Superintendents of Police (IPS), and Divisional Forest Officers (IFoS).',
    },
    'constitutional-official': {
      emoji: '⚖️', title: 'Constitutional Official',
      description: 'Officeholders established by the Constitution such as the Attorney General, Comptroller and Auditor General, and the Chief Election Commissioner. They exercise independent functions as guardians of constitutional governance.',
    },
  },
  ministry: {
    'union-ministry': {
      emoji: '🏛️', title: 'Union Ministry',
      description: 'Central government ministries responsible for formulating and implementing policies in their respective domains. Each is headed by a Cabinet Minister and staffed by the Indian Administrative Service and Central Secretariat Service.',
    },
    'state-ministry': {
      emoji: '🏛️', title: 'State Ministry',
      description: 'Ministries at the state government level responsible for policy and administration of state-list subjects.',
    },
    'department': {
      emoji: '⚙️', title: 'Department',
      description: 'Departments within a ministry that handle specific subdivisions of a ministry\'s portfolio. Some large ministries have multiple departments — e.g., Revenue and Economic Affairs under Finance.',
    },
    'attached-office': {
      emoji: '⚙️', title: 'Attached Office',
      description: 'Offices attached to a ministry/department that provide technical or specialized services. They serve as the execution arm of the ministry for specific functions.',
    },
    'subordinate-office': {
      emoji: '⚙️', title: 'Subordinate Office',
      description: 'Field-level organizations functioning under a ministry or its attached offices, responsible for detailed execution of government decisions at the grassroots level.',
    },
  },
  body: {
    'constitutional-body': {
      emoji: '📜', title: 'Constitutional Body',
      description: 'Bodies established by the Constitution of India with specific powers and functions — including the Supreme Court, Election Commission, UPSC, Finance Commission, and State Public Service Commissions.',
    },
    'statutory-body': {
      emoji: '📋', title: 'Statutory Body',
      description: 'Bodies established by an Act of Parliament or State Legislature. They have defined powers and functions under law, e.g., CRPF, BSF, NIA.',
    },
    'regulatory-authority': {
      emoji: '🛡️', title: 'Regulatory Authority',
      description: 'Independent bodies that regulate specific sectors of the economy or government. Examples include RBI (banking), SEBI (capital markets), TRAI (telecom), and IRDAI (insurance).',
    },
    'psu': {
      emoji: '🏢', title: 'Public Sector Undertaking',
      description: 'Government-owned corporations engaged in commercial activities. Central PSUs (CPSEs) like ONGC, IOC, and SBI generate revenue and serve national strategic interests. They are classified as Maharatna, Navratna, or Miniratna based on performance.',
    },
    'autonomous-body': {
      emoji: '🔗', title: 'Autonomous Body',
      description: 'Organizations with a degree of independence from the government, often set up as societies or trusts. Examples include LBSNAA, IIMs, and ICMR. They receive government funding but have operational autonomy.',
    },
    'tribunal': {
      emoji: '⚖️', title: 'Tribunal',
      description: 'Quasi-judicial bodies established to adjudicate disputes in specific areas, providing specialized and speedier justice. Examples include NGT (environment), NCLT (companies), and CAT (service matters).',
    },
    'commission': {
      emoji: '📋', title: 'Commission',
      description: 'Bodies established to investigate, advise, or address matters of national importance — including NHRC, NCW, NCM, NCSC, and NCST.',
    },
    'local-body': {
      emoji: '🏘️', title: 'Local Body',
      description: 'Institutions of local self-government established under the 73rd Amendment (Panchayati Raj) and 74th Amendment (Urban Local Bodies). They include Gram Panchayats, Panchayat Samitis, Zila Parishads, Municipal Corporations, and Municipalities.',
    },
    'service-cadre': {
      emoji: '👔', title: 'Service Cadre',
      description: 'Organized civil service cadres that form the administrative backbone of India — including All India Services (IAS, IPS, IFoS), Central Civil Services (IFS, IRS, IAAS, ICAS), and State Civil Services.',
    },
  },
  group: {
    'cabinet': {
      emoji: '⭐', title: 'Cabinet',
      description: 'The Union Cabinet is the collective decision-making body of the Government of India, consisting of the PM and Cabinet Ministers. It directs government policy, takes key decisions, and exercises executive authority.',
    },
    'cabinet-committee': {
      emoji: '📋', title: 'Cabinet Committee',
      description: 'Committees of Cabinet Ministers established to handle specific areas — e.g., Cabinet Committee on Security (CCS), Cabinet Committee on Economic Affairs (CCEA). They streamline decision-making on complex matters.',
    },
    'council': {
      emoji: '🤝', title: 'Council',
      description: 'Deliberative or advisory bodies such as the Inter-State Council, GST Council, NDC, and the State Council of Ministers. Councils facilitate coordination between different levels of government.',
    },
    'state-legislature': {
      emoji: '🏛️', title: 'State Legislature',
      description: 'The legislative body of a state, consisting of the Vidhan Sabha (Legislative Assembly) and, in some states, the Vidhan Parishad (Legislative Council). State legislatures make laws on state-list and concurrent-list subjects.',
    },
  },
};

export default function CategoryInfo({ category, subtype, onClose, onSelectElement }: CategoryInfoProps) {
  const info = categoryDescriptions[category]?.[subtype];
  const allElements = getAllElements();
  const elementsOfType = allElements
    .filter(el => el.category === category && el.subtype === subtype)
    .sort((a, b) => a.name.localeCompare(b.name));

  const color = getSubtypeColor(subtype as ElementSubtype);

  if (!info) {
    return (
      <div className="category-info">
        <div className="category-info-header">
          <h2>Information not available</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
      </div>
    );
  }

  return (
    <div className="category-info">
      <div className="category-info-header">
        <h2>{info.emoji} {info.title}</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="category-info-content">
        <div className="category-description">
          <p>{info.description}</p>
        </div>

        {elementsOfType.length > 0 && (
          <div className="category-elements">
            <h3>All {info.title}s ({elementsOfType.length})</h3>
            <ul className="category-elements-list">
              {elementsOfType.map(el => (
                <li
                  key={el.id}
                  className="category-element-item"
                  onClick={() => onSelectElement(el.id)}
                  style={{ borderLeftColor: color }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && onSelectElement(el.id)}
                >
                  <strong>{el.name}</strong>
                  {el.abbreviation && <span className="element-abbr">({el.abbreviation})</span>}
                  <p>{el.description.length > 120 ? el.description.slice(0, 120) + '…' : el.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
