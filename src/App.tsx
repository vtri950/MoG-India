/**
 * MoG-India - Main Application Component
 * Machinery of Government - India
 */

import { useCallback, useState } from 'react';
import './App.css';
import CategoriesPane from './components/CategoriesPane';
import CategoryInfo from './components/CategoryInfo';
import ElementDetails from './components/ElementDetails';
import FullView from './components/FullView';
import Header from './components/Header';
import OrgChart from './components/OrgChart';
import SearchPane from './components/SearchPane';
import TagInfo from './components/TagInfo';
import { getAllElements, getElementById } from './data/elements';
import { JURISDICTION_LABELS } from './data/jurisdictions';
import { ElementCategory, JurisdictionType, ViewMode } from './types';

function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('mog-india-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // View state
  const [viewMode, setViewMode] = useState<ViewMode>('full');
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilters, setCategoryFilters] = useState<ElementCategory[]>([]);
  const [jurisdictionFilter, setJurisdictionFilter] = useState<JurisdictionType | null>(null);
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  // Pane visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{ category: string; subtype: string } | null>(null);
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [isTerritoryOpen, setIsTerritoryOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('mog-india-theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  }, []);

  // Handle element selection
  const handleSelectElement = useCallback((id: string | null) => {
    setSelectedElementId(id);
    if (id) {
      setIsDetailsOpen(true);
    }
  }, []);

  // Handle element click (navigate to element)
  const handleElementClick = useCallback((id: string) => {
    handleSelectElement(id);
    if (viewMode === 'focus') {
      // In focus view, clicking an element re-centers on it
      setSelectedElementId(id);
    }
  }, [viewMode, handleSelectElement]);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Handle reset (clear selection and filters)
  const handleReset = useCallback(() => {
    setSelectedElementId(null);
    setHighlightedIds([]);
    setSearchQuery('');
    setCategoryFilters([]);
    setJurisdictionFilter(null);
    setTagFilters([]);
    setIsDetailsOpen(false);
  }, []);

  // Handle random element selection
  const handleRandomElement = useCallback(() => {
    const allElements = getAllElements();
    const randomIndex = Math.floor(Math.random() * allElements.length);
    handleSelectElement(allElements[randomIndex].id);
  }, [handleSelectElement]);

  // Get selected element
  const selectedElement = selectedElementId ? getElementById(selectedElementId) : null;

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`} data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSearch={() => { setIsSearchOpen(true); setIsCategoriesOpen(false); }}
        onOpenCategories={() => { setIsCategoriesOpen(o => !o); setIsSearchOpen(false); }}
        onReset={handleReset}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(prev => prev === 'full' ? 'focus' : 'full')}
      />

      <main className="main-content">
        <div className="chart-container">
          {viewMode === 'full' ? (
            <FullView
              selectedElementId={selectedElementId}
              highlightedIds={highlightedIds}
              onSelectElement={handleSelectElement}
              onElementClick={handleElementClick}
              searchQuery={searchQuery}
              categoryFilters={categoryFilters}
              jurisdictionFilter={jurisdictionFilter}
              tagFilters={tagFilters}
            />
          ) : (
            <OrgChart
              selectedElementId={selectedElementId}
              onSelectElement={handleSelectElement}
              onElementClick={handleElementClick}
            />
          )}

          {/* Chart toolbar — top right */}
          <div className="chart-toolbar">
            <button
              className="toolbar-btn"
              onClick={handleRandomElement}
              title="Random element"
            >
              ⚄
            </button>
            <button
              className="toolbar-btn"
              onClick={handleReset}
              title="Re-centre / Reset"
            >
              ↺
            </button>
            <button
              className="toolbar-btn"
              onClick={() => setViewMode(prev => prev === 'full' ? 'focus' : 'full')}
              title={viewMode === 'full' ? 'Focus view' : 'Full view'}
            >
              {viewMode === 'full' ? '⊡' : '⊞'}
            </button>
            <div className="toolbar-separator" />
            <button
              className={`toolbar-btn${isLegendOpen ? ' toolbar-btn-active' : ''}`}
              onClick={() => { setIsLegendOpen(o => !o); setIsTerritoryOpen(false); }}
              title="Toggle legend"
            >
              ☰
            </button>
            <button
              className={`toolbar-btn${jurisdictionFilter ? ' toolbar-btn-active' : ''}${isTerritoryOpen ? ' toolbar-btn-active' : ''}`}
              onClick={() => { setIsTerritoryOpen(o => !o); setIsLegendOpen(false); }}
              title="Filter by territory"
            >
              🌍
            </button>

            {/* Legend popup */}
            {isLegendOpen && (
              <div className="toolbar-popup toolbar-popup-legend">
                <h4 className="toolbar-popup-title">Legend</h4>
                <div className="legend-items">
                  <div className="legend-item">
                    <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2563eb" stroke="#922b21" strokeWidth="1.5"/></svg>
                    <span>Officials</span>
                  </div>
                  <div className="legend-item">
                    <svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="10" fill="#059669" stroke="#196f3d" strokeWidth="1.5"/></svg>
                    <span>Ministries</span>
                  </div>
                  <div className="legend-item">
                    <svg width="16" height="16" viewBox="0 0 16 16"><polygon points="8,1 15,8 8,15 1,8" fill="#7c3aed" stroke="#229954" strokeWidth="1.5"/></svg>
                    <span>Bodies</span>
                  </div>
                  <div className="legend-item">
                    <svg width="16" height="16" viewBox="0 0 16 16"><polygon points="8,1 15,6 13,15 3,15 1,6" fill="#dc2626" stroke="#922b21" strokeWidth="1.5"/></svg>
                    <span>Groups</span>
                  </div>
                </div>
                <div className="legend-separator" />
                <div className="legend-items">
                  <div className="legend-item">
                    <svg width="20" height="4"><line x1="0" y1="2" x2="20" y2="2" stroke="#aaa" strokeWidth="1"/></svg>
                    <span>Reports to</span>
                  </div>
                  <div className="legend-item">
                    <svg width="20" height="4"><line x1="0" y1="2" x2="20" y2="2" stroke="#aaa" strokeWidth="1" strokeDasharray="4,3"/></svg>
                    <span>Secondary link</span>
                  </div>
                </div>
              </div>
            )}

            {/* Territory / jurisdiction filter popup */}
            {isTerritoryOpen && (
              <div className="toolbar-popup toolbar-popup-territory">
                <h4 className="toolbar-popup-title">Territory</h4>
                <div className="territory-options">
                  <button
                    className={`territory-option${jurisdictionFilter === null ? ' territory-active' : ''}`}
                    onClick={() => { setJurisdictionFilter(null); setIsTerritoryOpen(false); }}
                  >
                    All
                  </button>
                  {(Object.keys(JURISDICTION_LABELS) as JurisdictionType[]).map(jt => (
                    <button
                      key={jt}
                      className={`territory-option${jurisdictionFilter === jt ? ' territory-active' : ''}`}
                      onClick={() => { setJurisdictionFilter(jt); setIsTerritoryOpen(false); }}
                    >
                      {JURISDICTION_LABELS[jt]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Details pane */}
        {isDetailsOpen && selectedElement && (
          <aside className="details-pane">
            <ElementDetails
              element={selectedElement}
              onClose={() => setIsDetailsOpen(false)}
              onNavigate={handleElementClick}
              onOpenCategory={(category, subtype) => { setSelectedCategory({ category, subtype }); setIsCategoriesOpen(false); }}
              onOpenTag={(tagId) => { setSelectedTagId(tagId); setIsCategoriesOpen(false); }}
            />
          </aside>
        )}

        {/* Category info pane */}
        {selectedCategory && (
          <aside className="details-pane">
            <CategoryInfo
              category={selectedCategory.category}
              subtype={selectedCategory.subtype}
              onClose={() => setSelectedCategory(null)}
              onSelectElement={(id) => { handleSelectElement(id); setSelectedCategory(null); }}
            />
          </aside>
        )}

        {/* Tag info pane */}
        {selectedTagId && (
          <aside className="details-pane">
            <TagInfo
              tagId={selectedTagId}
              onClose={() => setSelectedTagId(null)}
              onSelectElement={(id) => { handleSelectElement(id); setSelectedTagId(null); }}
            />
          </aside>
        )}
      </main>

      {/* Search pane */}
      {isSearchOpen && (
        <SearchPane
          query={searchQuery}
          onSearch={handleSearch}
          onClose={() => setIsSearchOpen(false)}
          onSelectElement={handleSelectElement}
          categoryFilters={categoryFilters}
          onCategoryFiltersChange={setCategoryFilters}
          tagFilters={tagFilters}
          onTagFiltersChange={setTagFilters}
        />
      )}

      {/* Categories pane */}
      {isCategoriesOpen && (
        <div className="overlay-pane">
          <CategoriesPane
            onOpenCategory={(category, subtype) => {
              setSelectedCategory({ category, subtype });
              setIsCategoriesOpen(false);
            }}
            onOpenTag={(tagId) => {
              setSelectedTagId(tagId);
              setIsCategoriesOpen(false);
            }}
            onClose={() => setIsCategoriesOpen(false)}
          />
        </div>
      )}

      {/* Mobile selection chip */}
      {selectedElement && !isDetailsOpen && (
        <div className="mobile-selection-chip">
          <div className="chip-info">
            <span className="chip-name">{selectedElement.name}</span>
            <span className="chip-type">{selectedElement.subtype.replace(/-/g, ' ')}</span>
          </div>
          <button className="chip-btn" onClick={() => setIsDetailsOpen(true)}>
            Details →
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
