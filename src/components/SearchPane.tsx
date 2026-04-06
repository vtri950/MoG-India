/**
 * SearchPane Component
 * Full-text search and filtering for government elements
 */

import { useCallback, useMemo, useState } from 'react';
import { getAllElements, GovElement, searchElements, tagDefinitions } from '../data/elements';
import { ElementCategory } from '../types';
import { getCategoryColor, getSubtypeColor } from '../utils/colors';
import './SearchPane.css';

interface SearchPaneProps {
  query: string;
  onSearch: (query: string) => void;
  onClose: () => void;
  onSelectElement: (id: string) => void;
  categoryFilters: ElementCategory[];
  onCategoryFiltersChange: (filters: ElementCategory[]) => void;
  tagFilters: string[];
  onTagFiltersChange: (filters: string[]) => void;
}

function SearchPane({
  query,
  onSearch,
  onClose,
  onSelectElement,
  categoryFilters,
  onCategoryFiltersChange,
  tagFilters,
  onTagFiltersChange,
}: SearchPaneProps) {
  const [localQuery, setLocalQuery] = useState(query);
  const [activeFilter, setActiveFilter] = useState<'all' | 'category' | 'tag'>('all');

  // Search results
  const results = useMemo(() => {
    let elements: GovElement[];
    
    if (localQuery.trim()) {
      elements = searchElements(localQuery);
    } else {
      elements = getAllElements();
    }

    // Apply category filters
    if (categoryFilters.length > 0) {
      elements = elements.filter(el => categoryFilters.includes(el.category));
    }

    // Apply tag filters
    if (tagFilters.length > 0) {
      elements = elements.filter(el => 
        el.tags?.some(tag => tagFilters.includes(tag))
      );
    }

    return elements;
  }, [localQuery, categoryFilters, tagFilters]);

  // Handle search input
  const handleSearchInput = useCallback((value: string) => {
    setLocalQuery(value);
    onSearch(value);
  }, [onSearch]);

  // Toggle category filter
  const toggleCategoryFilter = useCallback((category: ElementCategory) => {
    if (categoryFilters.includes(category)) {
      onCategoryFiltersChange(categoryFilters.filter(c => c !== category));
    } else {
      onCategoryFiltersChange([...categoryFilters, category]);
    }
  }, [categoryFilters, onCategoryFiltersChange]);

  // Toggle tag filter
  const toggleTagFilter = useCallback((tagId: string) => {
    if (tagFilters.includes(tagId)) {
      onTagFiltersChange(tagFilters.filter(t => t !== tagId));
    } else {
      onTagFiltersChange([...tagFilters, tagId]);
    }
  }, [tagFilters, onTagFiltersChange]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setLocalQuery('');
    onSearch('');
    onCategoryFiltersChange([]);
    onTagFiltersChange([]);
  }, [onSearch, onCategoryFiltersChange, onTagFiltersChange]);

  // Format subtype for display
  const formatSubtype = (subtype: string) => {
    return subtype
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categories: ElementCategory[] = ['official', 'ministry', 'body', 'group'];

  return (
    <div className="search-pane-overlay" onClick={onClose}>
      <div className="search-pane" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="search-header">
          <h2 className="search-title">Search</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Search input */}
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, abbreviation, or description..."
            value={localQuery}
            onChange={e => handleSearchInput(e.target.value)}
            autoFocus
          />
          {(localQuery || categoryFilters.length > 0 || tagFilters.length > 0) && (
            <button className="clear-btn" onClick={clearFilters}>
              Clear
            </button>
          )}
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-tab ${activeFilter === 'category' ? 'active' : ''}`}
            onClick={() => setActiveFilter('category')}
          >
            Category
          </button>
          <button
            className={`filter-tab ${activeFilter === 'tag' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tag')}
          >
            Tags
          </button>
        </div>

        {/* Category filters */}
        {activeFilter === 'category' && (
          <div className="filter-section">
            <div className="filter-chips">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-chip ${categoryFilters.includes(category) ? 'active' : ''}`}
                  style={{
                    '--chip-color': getCategoryColor(category),
                  } as React.CSSProperties}
                  onClick={() => toggleCategoryFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tag filters */}
        {activeFilter === 'tag' && (
          <div className="filter-section">
            <div className="filter-chips">
              {tagDefinitions.map(tag => (
                <button
                  key={tag.id}
                  className={`filter-chip ${tagFilters.includes(tag.id) ? 'active' : ''}`}
                  style={{
                    '--chip-color': tag.color,
                  } as React.CSSProperties}
                  onClick={() => toggleTagFilter(tag.id)}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="search-results">
          <div className="results-header">
            <span className="results-count">
              {results.length} {results.length === 1 ? 'result' : 'results'}
            </span>
          </div>
          <ul className="results-list">
            {results.map(element => (
              <li key={element.id}>
                <button
                  className="result-item"
                  onClick={() => {
                    onSelectElement(element.id);
                    onClose();
                  }}
                >
                  <span
                    className="result-dot"
                    style={{ backgroundColor: getSubtypeColor(element.subtype) }}
                  />
                  <div className="result-info">
                    <span className="result-name">{element.name}</span>
                    <span className="result-type">{formatSubtype(element.subtype)}</span>
                  </div>
                  {element.abbreviation && (
                    <span className="result-abbr">{element.abbreviation}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPane;
