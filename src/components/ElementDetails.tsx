/**
 * ElementDetails Component
 * Displays detailed information about a selected government element
 */

import { useState } from 'react';
import { GovElement, getConnectedElements, getTagById } from '../data/elements';
import { getPowerProfile } from '../data/powers';
import { getCategoryColor, getSubtypeColor } from '../utils/colors';
import './ElementDetails.css';

interface ElementDetailsProps {
  element: GovElement;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onOpenCategory?: (category: string, subtype: string) => void;
  onOpenTag?: (tagId: string) => void;
}

type TabType = 'info' | 'powers';

function ElementDetails({ element, onClose, onNavigate, onOpenCategory, onOpenTag }: ElementDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const connections = getConnectedElements(element.id);

  // Format subtype for display
  const formatSubtype = (subtype: string) => {
    return subtype
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="element-details">
      {/* Header */}
      <div className="details-header">
        <button className="close-btn" onClick={onClose} title="Close">
          ×
        </button>
        <div 
          className="element-badge"
          style={{ backgroundColor: getSubtypeColor(element.subtype), cursor: onOpenCategory ? 'pointer' : 'default' }}
          onClick={() => onOpenCategory?.(element.category, element.subtype)}
          role={onOpenCategory ? 'button' : undefined}
          tabIndex={onOpenCategory ? 0 : undefined}
        >
          {formatSubtype(element.subtype)}
        </div>
        <h2 className="element-name">{element.name}</h2>
        {element.nameHindi && (
          <p className="element-name-hindi">{element.nameHindi}</p>
        )}
        {element.abbreviation && (
          <p className="element-abbr">{element.abbreviation}</p>
        )}
      </div>

      {/* Tabs */}
      <div className="details-tabs">
        <button
          className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Info
        </button>
        <button
          className={`tab-btn ${activeTab === 'powers' ? 'active' : ''}`}
          onClick={() => setActiveTab('powers')}
        >
          Powers
        </button>
      </div>

      {/* Tab content */}
      <div className="details-content">
        {activeTab === 'info' && (
          <div className="tab-info">
            {/* Current holder (for officials) */}
            {element.currentHolder && (
              <div className="info-section">
                <h3 className="section-title">Current Holder</h3>
                <p className="holder-name">{element.currentHolder}</p>
                {element.appointedDate && (
                  <p className="holder-date">Since {element.appointedDate}</p>
                )}
              </div>
            )}

            {/* Description */}
            <div className="info-section">
              <h3 className="section-title">About</h3>
              <p className="description">{element.description}</p>
            </div>

            {/* Tags */}
            {element.tags && element.tags.length > 0 && (
              <div className="info-section">
                <h3 className="section-title">Tags</h3>
                <div className="tags-list">
                  {element.tags.map(tagId => {
                    const tag = getTagById(tagId);
                    if (!tag) return null;
                    return (
                      <span
                        key={tagId}
                        className="tag-pill"
                        style={{ 
                          backgroundColor: `${tag.color}20`,
                          color: tag.color,
                          borderColor: tag.color,
                          cursor: onOpenTag ? 'pointer' : 'default',
                        }}
                        onClick={() => onOpenTag?.(tagId)}
                        role={onOpenTag ? 'button' : undefined}
                        tabIndex={onOpenTag ? 0 : undefined}
                      >
                        {tag.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Legal basis */}
            {element.legalBasis && (
              <div className="info-section">
                <h3 className="section-title">Legal Basis</h3>
                <p className="legal-basis">{element.legalBasis}</p>
              </div>
            )}

            {/* Headquarters */}
            {element.headquarters && (
              <div className="info-section">
                <h3 className="section-title">Headquarters</h3>
                <p>{element.headquarters}</p>
              </div>
            )}

            {/* Established */}
            {element.establishedYear && (
              <div className="info-section">
                <h3 className="section-title">Established</h3>
                <p>{element.establishedYear}</p>
              </div>
            )}

            {/* Relationships */}
            {connections.parents.length > 0 && (
              <div className="info-section">
                <h3 className="section-title">Reports To</h3>
                <ul className="relations-list">
                  {connections.parents.map(parent => (
                    <li key={parent.id}>
                      <button
                        className="relation-link"
                        onClick={() => onNavigate(parent.id)}
                      >
                        <span
                          className="relation-dot"
                          style={{ backgroundColor: getCategoryColor(parent.category) }}
                        />
                        {parent.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {connections.children.length > 0 && (
              <div className="info-section">
                <h3 className="section-title">Oversees</h3>
                <ul className="relations-list">
                  {connections.children.map(child => (
                    <li key={child.id}>
                      <button
                        className="relation-link"
                        onClick={() => onNavigate(child.id)}
                      >
                        <span
                          className="relation-dot"
                          style={{ backgroundColor: getCategoryColor(child.category) }}
                        />
                        {child.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Secondary / oversight relationships (dashed-edge links) */}
            {connections.secondaryParents.length > 0 && (
              <div className="info-section">
                <h3 className="section-title">Oversight &amp; Advisory Links</h3>
                <ul className="relations-list">
                  {connections.secondaryParents.map(parent => (
                    <li key={parent.id}>
                      <button className="relation-link relation-link-secondary" onClick={() => onNavigate(parent.id)}>
                        <span className="relation-dot" style={{ backgroundColor: getCategoryColor(parent.category) }} />
                        {parent.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {connections.secondaryChildren.length > 0 && (
              <div className="info-section">
                <h3 className="section-title">Also Coordinates / Advises</h3>
                <ul className="relations-list">
                  {connections.secondaryChildren.map(child => (
                    <li key={child.id}>
                      <button className="relation-link relation-link-secondary" onClick={() => onNavigate(child.id)}>
                        <span className="relation-dot" style={{ backgroundColor: getCategoryColor(child.category) }} />
                        {child.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* External links */}
            {(element.infoUrl || element.govInUrl) && (
              <div className="info-section">
                <h3 className="section-title">Links</h3>
                <div className="links-list">
                  {element.infoUrl && (
                    <a
                      href={element.infoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      Official Website ↗
                    </a>
                  )}
                  {element.govInUrl && (
                    <a
                      href={element.govInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      india.gov.in ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'powers' && (
          <div className="tab-powers">
            {(() => {
              const profile = getPowerProfile(element.id);
              if (!profile || profile.powers.length === 0) {
                return <p className="no-data">No powers data available for this element.</p>;
              }
              return (
                <>
                  <div className="powers-count">{profile.powers.length} powers &amp; functions</div>
                  {profile.lastReviewed && (
                    <p className="data-date">Last reviewed: {profile.lastReviewed}</p>
                  )}
                  <div className="powers-list">
                    {profile.powers.map(power => (
                      <div key={power.id} className="power-card">
                        <div className="power-header">
                          <span className={`power-type-badge ${power.powerType}`}>
                            {power.powerType}
                          </span>
                          <h4 className="power-title">{power.title}</h4>
                        </div>
                        <p className="power-description">{power.description}</p>
                        {power.sources.length > 0 && (
                          <div className="power-sources">
                            {power.sources.map((source, i) => (
                              <span key={i} className="source-chip">
                                {source.url ? (
                                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                                    {source.article || source.section || source.title} ↗
                                  </a>
                                ) : (
                                  <span>{source.article || source.section || source.title}</span>
                                )}
                              </span>
                            ))}
                          </div>
                        )}
                        {power.notes && <p className="power-notes">{power.notes}</p>}
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

export default ElementDetails;
