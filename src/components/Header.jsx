import React, { useState } from 'react';
import { Search, Heart, Bell, ChevronDown, Menu, ShoppingCart, Check } from 'lucide-react';

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  wishlistCount, 
  cartCount, 
  toggleCart, 
  toggleMobileMenu,
  onOpenWishlist
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, text: "Your order #NV-8921 has been shipped!", time: "10m ago", read: false },
    { id: 2, text: "Summer Sale is live! Up to 50% discount", time: "1h ago", read: false },
    { id: 3, text: "Price dropped for Chanel Chance EDP", time: "3h ago", read: false }
  ];

  return (
    <header className="header-container">
      <div className="header-left">
        <button 
          className="menu-toggle-btn mobile-only" 
          onClick={toggleMobileMenu} 
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>

        {/* Search Bar */}
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="search-clear-btn" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="header-actions">
        {/* Wishlist Button */}
        <button 
          className="header-action-btn wishlist-btn" 
          onClick={onOpenWishlist}
          title="Wishlist"
        >
          <div className="action-icon-wrap">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="action-badge-dot" />
            )}
          </div>
          <span className="action-btn-label">Wishlist</span>
        </button>

        {/* Notifications */}
        <div className="notification-wrap">
          <button 
            className="header-action-btn icon-only" 
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            <div className="action-icon-wrap">
              <Bell size={20} />
              <span className="action-badge">3</span>
            </div>
          </button>

          {showNotifications && (
            <div className="dropdown-popover notif-popover">
              <div className="popover-header">
                <h4>Notifications</h4>
                <span className="popover-badge">3 New</span>
              </div>
              <div className="popover-list">
                {notifications.map(n => (
                  <div key={n.id} className="notif-item">
                    <div className="notif-bullet" />
                    <div className="notif-content">
                      <p>{n.text}</p>
                      <span className="notif-time">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Cart Trigger */}
        <button 
          className="header-action-btn icon-only mobile-cart-trigger" 
          onClick={toggleCart}
          title="Open Cart"
        >
          <div className="action-icon-wrap">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="action-badge">{cartCount}</span>
            )}
          </div>
        </button>

        {/* User Profile */}
        <div className="user-profile-wrap">
          <button 
            className="user-profile-btn" 
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="avatar-frame">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                alt="Alina Putri" 
                className="user-avatar" 
              />
              <span className="user-online-dot" />
            </div>
            <span className="user-name">Alina Putri</span>
            <ChevronDown size={16} className={`caret-icon ${showUserMenu ? 'rotated' : ''}`} />
          </button>

          {showUserMenu && (
            <div className="dropdown-popover user-popover">
              <div className="user-info-head">
                <strong>Alina Putri</strong>
                <span>alina.putri@novashop.com</span>
              </div>
              <div className="popover-menu-links">
                <a href="#profile" className="popover-link">My Profile</a>
                <a href="#orders" className="popover-link">Order History</a>
                <a href="#rewards" className="popover-link">Nova Rewards (840 pts)</a>
                <div className="popover-divider" />
                <button className="popover-link logout-btn" onClick={() => setShowUserMenu(false)}>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
