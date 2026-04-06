/**
 * CategoriesPane Component
 * Browse all element categories (subtypes) and tags
 */

import { getAllElements, tagDefinitions } from '../data/elements';
import { getSubtypeColor } from '../utils/colors';
import './CategoriesPane.css';

interface CategoriesPaneProps {
  onOpenCategory: (category: string, subtype: string) => void;
  onOpenTag: (tagId: string) => void;
  onClose: () => void;
}

const categorySubtypes = [
  // Officials
  { category: 'official', subtype: 'president',            label: '👑 President' },
  { category: 'official', subtype: 'vice-president',       label: '🏛️ Vice President' },
  { category: 'official', subtype: 'prime-minister',       label: '⭐ Prime Minister' },
  { category: 'official', subtype: 'cabinet-minister',     label: '🌟 Cabinet Minister' },
  { category: 'official', subtype: 'minister-of-state-ic', label: '👤 Minister of State (IC)' },
  { category: 'official', subtype: 'minister-of-state',    label: '👤 Minister of State' },
  { category: 'official', subtype: 'governor',             label: '🏛️ Governor' },
  { category: 'official', subtype: 'chief-minister',       label: '👤 Chief Minister' },
  { category: 'official', subtype: 'civil-servant',        label: '👤 Civil Servant' },
  { category: 'official', subtype: 'constitutional-official', label: '⚖️ Constitutional Official' },
  // Ministries & Departments
  { category: 'ministry', subtype: 'union-ministry',       label: '🏛️ Union Ministry' },
  { category: 'ministry', subtype: 'state-ministry',       label: '🏛️ State Ministry' },
  { category: 'ministry', subtype: 'department',           label: '⚙️ Department' },
  { category: 'ministry', subtype: 'attached-office',      label: '⚙️ Attached Office' },
  { category: 'ministry', subtype: 'subordinate-office',   label: '⚙️ Subordinate Office' },
  // Bodies
  { category: 'body', subtype: 'constitutional-body',      label: '📜 Constitutional Body' },
  { category: 'body', subtype: 'statutory-body',           label: '📋 Statutory Body' },
  { category: 'body', subtype: 'regulatory-authority',     label: '🛡️ Regulatory Authority' },
  { category: 'body', subtype: 'psu',                      label: '🏢 Public Sector Undertaking' },
  { category: 'body', subtype: 'autonomous-body',          label: '🔗 Autonomous Body' },
  { category: 'body', subtype: 'tribunal',                 label: '⚖️ Tribunal' },
  { category: 'body', subtype: 'commission',               label: '📋 Commission' },
  { category: 'body', subtype: 'local-body',               label: '🏘️ Local Body' },
  { category: 'body', subtype: 'service-cadre',            label: '👔 Service Cadre' },
  // Groups
  { category: 'group', subtype: 'cabinet',                 label: '⭐ Cabinet' },
  { category: 'group', subtype: 'cabinet-committee',       label: '📋 Cabinet Committee' },
  { category: 'group', subtype: 'council',                 label: '🤝 Council' },
  { category: 'group', subtype: 'state-legislature',       label: '🏛️ State Legislature' },
];

const sectionHeadings: Record<string, string> = {
  official: 'Officials',
  ministry: 'Ministries & Departments',
  body: 'Bodies & Organisations',
  group: 'Groups',
};

export default function CategoriesPane({ onOpenCategory, onOpenTag, onClose }: CategoriesPaneProps) {
  const allElements = getAllElements();
  const typeTags = tagDefinitions.filter(t => t.category === 'type').sort((a, b) => a.name.localeCompare(b.name));
  const sectorTags = tagDefinitions.filter(t => t.category === 'sector').sort((a, b) => a.name.localeCompare(b.name));

  const sections = ['official', 'ministry', 'body', 'group'] as const;

  return (
    <div className="categories-pane">
      <div className="categories-header">
        <h2>Categories</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close categories pane">
          ✕
        </button>
      </div>

      <div className="categories-content">
        {sections.map(section => {
          const items = categorySubtypes.filter(ct => ct.category === section);
          return (
            <div key={section} className="categories-section">
              <h3 className="section-heading">{sectionHeadings[section]}</h3>
              {items.map(ct => {
                const count = allElements.filter(
                  el => el.category === ct.category && el.subtype === ct.subtype
                ).length;
                if (count === 0) return null;
                const color = getSubtypeColor(ct.subtype as any);
                return (
                  <div
                    key={`${ct.category}-${ct.subtype}`}
                    className="category-item"
                    onClick={() => onOpenCategory(ct.category, ct.subtype)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && onOpenCategory(ct.category, ct.subtype)}
                    style={{ borderLeftColor: color }}
                  >
                    <span className="category-item-label">{ct.label}</span>
                    <span className="category-item-count">{count}</span>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="categories-section">
          <h3 className="section-heading">Type Tags</h3>
          {typeTags.map(tag => {
            const count = allElements.filter(el => el.tags?.includes(tag.id)).length;
            if (count === 0) return null;
            return (
              <div
                key={tag.id}
                className="category-item tag-item"
                onClick={() => onOpenTag(tag.id)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onOpenTag(tag.id)}
                style={{ borderLeftColor: tag.color }}
              >
                <span className="category-item-label">{tag.name}</span>
                <span className="category-item-count">{count}</span>
              </div>
            );
          })}
        </div>

        <div className="categories-section">
          <h3 className="section-heading">Sector Tags</h3>
          {sectorTags.map(tag => {
            const count = allElements.filter(el => el.tags?.includes(tag.id)).length;
            if (count === 0) return null;
            return (
              <div
                key={tag.id}
                className="category-item tag-item"
                onClick={() => onOpenTag(tag.id)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onOpenTag(tag.id)}
                style={{ borderLeftColor: tag.color }}
              >
                <span className="category-item-label">{tag.name}</span>
                <span className="category-item-count">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
