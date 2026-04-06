/**
 * Header Component
 * Top navigation bar with branding and controls
 */

import { ViewMode } from '../types';
import './Header.css';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  onOpenCategories: () => void;
  onReset: () => void;
  viewMode: ViewMode;
  onToggleViewMode: () => void;
}

function Header({
  isDarkMode,
  onToggleDarkMode,
  onOpenSearch,
  onOpenCategories,
  onReset,
  viewMode,
  onToggleViewMode,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="logo-btn" onClick={onReset} title="Reset to President">
          <span className="logo-icon">⚙️</span>
          <span className="logo-text">
            <span className="logo-title">Machinery of Government</span>
            <span className="logo-subtitle">India</span>
          </span>
        </button>
      </div>

      <nav className="header-nav">
        <button className="nav-btn" onClick={onOpenSearch}>
          🔍 Search
        </button>
        <button className="nav-btn" onClick={onOpenCategories}>
          🗂️ Categories
        </button>
        <button className="nav-btn" onClick={onToggleViewMode}>
          {viewMode === 'full' ? '⊡ Focus' : '⊞ Full'}
        </button>
        <button className="nav-btn" onClick={onToggleDarkMode}>
          {isDarkMode ? '☀' : '☾'}
        </button>
        <a
          href="https://github.com/vtri950/MoG-India"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn nav-link"
        >
          GitHub
        </a>
      </nav>

      {/* Mobile navigation */}
      <nav className="header-nav-mobile">
        <button className="nav-btn-mobile" onClick={onOpenSearch} title="Search">
          🔍
        </button>
        <button className="nav-btn-mobile" onClick={onToggleDarkMode} title="Toggle theme">
          {isDarkMode ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
