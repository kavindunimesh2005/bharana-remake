import React from 'react';
import { 
  Home, 
  LayoutGrid, 
  Flame, 
  Sparkles, 
  Award, 
  Diamond, 
  Layers, 
  Package, 
  Heart, 
  Ticket, 
  MapPin, 
  Settings, 
  HelpCircle, 
  Sun, 
  Moon, 
  ShoppingBag,
  ChevronRight,
  X
} from 'lucide-react';

export default function Sidebar({ 
  activeNav, 
  setActiveNav, 
  theme, 
  toggleTheme, 
  mobileOpen, 
  closeMobile,
  wishlistCount,
  onOpenPromo
}) {
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: LayoutGrid },
    { id: 'deals', label: 'Deals', icon: Flame, badge: 'Hot' },
    { id: 'new-arrivals', label: 'New Arrivals', icon: Sparkles },
    { id: 'best-sellers', label: 'Best Sellers', icon: Award },
    { id: 'brands', label: 'Brands', icon: Diamond },
    { id: 'collections', label: 'Collections', icon: Layers },
  ];

  const secondaryNavItems = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, badge: wishlistCount > 0 ? wishlistCount : null },
    { id: 'coupons', label: 'Coupons', icon: Ticket },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div className="mobile-backdrop" onClick={closeMobile} />
      )}

      <aside className={`sidebar-container ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand-logo">
            <div className="logo-icon-wrap">
              <ShoppingBag className="logo-icon" size={20} />
            </div>
            <span className="brand-name">NovaShop</span>
          </div>
          {mobileOpen && (
            <button className="mobile-close-btn" onClick={closeMobile}>
              <X size={20} />
            </button>
          )}
        </div>

        <div className="sidebar-scrollable">
          {/* Main Navigation */}
          <nav className="nav-group">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    if (closeMobile) closeMobile();
                  }}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <div className="nav-item-left">
                    <Icon size={19} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="nav-badge hot-badge">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="nav-divider" />

          {/* Secondary Navigation */}
          <nav className="nav-group">
            {secondaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    if (closeMobile) closeMobile();
                  }}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <div className="nav-item-left">
                    <Icon size={19} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="nav-badge count-badge">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Special Offer Card */}
          <div className="special-offer-card" onClick={onOpenPromo}>
            <div className="offer-content">
              <span className="offer-subtitle">Special Offer</span>
              <h4 className="offer-title">Summer Sale</h4>
              <p className="offer-discount">Up to 50% Off</p>
              <button className="offer-btn">
                <span>Shop Now</span>
              </button>
            </div>
            <div className="offer-graphic">
              <div className="shopping-bag-3d">
                <div className="bag-badge">%</div>
                <div className="bag-main"></div>
                <div className="bag-handle"></div>
                <div className="bag-small"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="support-link">
            <div className="support-icon-wrap">
              <HelpCircle size={18} />
            </div>
            <div className="support-text">
              <span className="support-title">Need Help?</span>
              <span className="support-sub">24/7 Support Center</span>
            </div>
          </div>

          <button className="theme-toggle-btn" onClick={toggleTheme} title="Switch Theme">
            <div className="theme-toggle-left">
              {theme === 'light' ? <Sun size={17} /> : <Moon size={17} />}
              <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
            </div>
            <ChevronRight size={16} className="toggle-chevron" />
          </button>
        </div>
      </aside>
    </>
  );
}
