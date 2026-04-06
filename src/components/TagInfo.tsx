/**
 * TagInfo Component
 * Shows tag description and all elements carrying that tag
 */

import { getAllElements, tagDefinitions } from '../data/elements';
import type { ElementSubtype } from '../types';
import { getSubtypeColor } from '../utils/colors';
import './TagInfo.css';

interface TagInfoProps {
  tagId: string;
  onClose: () => void;
  onSelectElement: (id: string) => void;
}

export default function TagInfo({ tagId, onClose, onSelectElement }: TagInfoProps) {
  const tag = tagDefinitions.find(t => t.id === tagId);
  const allElements = getAllElements();
  const taggedElements = allElements
    .filter(el => el.tags?.includes(tagId))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (!tag) {
    return (
      <div className="tag-info">
        <div className="tag-info-header">
          <h2>Tag not found</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
      </div>
    );
  }

  return (
    <div className="tag-info">
      <div className="tag-info-header">
        <div className="tag-title-row">
          <span className="tag-dot" style={{ backgroundColor: tag.color }} />
          <h2>{tag.name}</h2>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="tag-info-content">
        {tag.description && (
          <div className="tag-description">
            <p>{tag.description}</p>
          </div>
        )}

        <h3>All elements with this tag ({taggedElements.length})</h3>
        <ul className="tag-elements-list">
          {taggedElements.map(el => {
            const color = getSubtypeColor(el.subtype as ElementSubtype);
            const typeLabel = el.subtype.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            return (
              <li
                key={el.id}
                className="tag-element-item"
                onClick={() => onSelectElement(el.id)}
                style={{ borderLeftColor: color }}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onSelectElement(el.id)}
              >
                <div className="tag-element-name">{el.name}</div>
                <span className="tag-element-type">{typeLabel}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
