import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryBar from './components/CategoryBar';
import PromoCards from './components/PromoCards';
import ProductCard from './components/ProductCard';
import TrustBadges from './components/TrustBadges';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import ClubModal from './components/ClubModal';
import Toast from './components/Toast';

import { 
  dealsProducts as initialDeals, 
  recommendedProducts as initialRecommended, 
  initialCart, 
  youMightLike, 
  recentlyViewed 
} from './data/mockData';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState(initialCart);
  const [wishlist, setWishlist] = useState(new Set(['deal-1', 'deal-2', 'rec-2']));
  
  // UI states
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [clubModalOpen, setClubModalOpen] = useState(false);
  const [dealsPage, setDealsPage] = useState(0);
  
  // Toasts
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Add to Cart
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        subtitle: product.category || product.subtitle || '',
        size: product.selectedColor ? 'Selected Color' : (product.category || 'Standard'),
        price: product.price,
        quantity: 1,
        image: product.image
      }];
    });
    addToast(`Added "${product.name}" to cart!`, 'cart');
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  // Remove From Cart
  const handleRemoveFromCart = (id) => {
    const item = cartItems.find(i => i.id === id);
    setCartItems(prev => prev.filter(item => item.id !== id));
    if (item) addToast(`Removed "${item.name}" from cart`, 'info');
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        addToast(`Removed "${product.name}" from wishlist`, 'info');
      } else {
        next.add(product.id);
        addToast(`Saved "${product.name}" to wishlist!`, 'wishlist');
      }
      return next;
    });
  };

  // Filter products by search & category
  const filteredDeals = useMemo(() => {
    return initialDeals.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      if (selectedCategory === 'all') return matchesSearch;
      if (selectedCategory === 'fashion') return matchesSearch && (p.category.includes('Shoes') || p.category.includes('Fashion'));
      if (selectedCategory === 'beauty') return matchesSearch && (p.category.includes('EDP') || p.category.includes('Eau'));
      if (selectedCategory === 'electronics') return matchesSearch && (p.category.includes('Watch') || p.category.includes('Headphones'));
      return matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const filteredRecommended = useMemo(() => {
    return initialRecommended.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      if (selectedCategory === 'all') return matchesSearch;
      if (selectedCategory === 'fashion') return matchesSearch && (p.name.includes('Shirt') || p.name.includes('Bag'));
      if (selectedCategory === 'beauty') return matchesSearch && p.name.includes('Ordinary');
      if (selectedCategory === 'electronics') return matchesSearch && p.name.includes('Watch');
      return matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Checkout handler
  const handleCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const handleOrderPlaced = () => {
    setCartItems([]);
    addToast('🎉 Order placed successfully! Check your email.', 'success');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="novashop-app">
      {/* 1. Left Sidebar */}
      <Sidebar 
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        theme={theme}
        toggleTheme={toggleTheme}
        mobileOpen={mobileNavOpen}
        closeMobile={() => setMobileNavOpen(false)}
        wishlistCount={wishlist.size}
        onOpenPromo={() => setClubModalOpen(true)}
      />

      {/* 2. Main Content Area */}
      <main className="main-content-layout">
        {/* Top Header */}
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          wishlistCount={wishlist.size}
          cartCount={totalCartCount}
          toggleCart={() => setCartSidebarOpen(!cartSidebarOpen)}
          toggleMobileMenu={() => setMobileNavOpen(true)}
          onOpenWishlist={() => addToast(`You have ${wishlist.size} items in your Wishlist`, 'wishlist')}
        />

        <div className="main-scroll-body">
          {/* Hero Banner */}
          <HeroBanner 
            onShopNow={() => {
              const el = document.getElementById('deals-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Category Icons Row */}
          <CategoryBar 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* 3 Promo Highlights */}
          <PromoCards 
            onCardClick={(type) => {
              addToast(`Viewing ${type.replace('-', ' ')} collection!`, 'info');
            }}
          />

          {/* Section: Best Deals for You */}
          <section id="deals-section" className="product-section">
            <div className="section-header-row">
              <div className="section-title-wrap">
                <h3 className="section-title">Best Deals for You</h3>
                {selectedCategory !== 'all' && (
                  <span className="filter-pill">Filtered by: {selectedCategory}</span>
                )}
              </div>
              <button 
                className="view-all-btn"
                onClick={() => setSelectedCategory('all')}
              >
                View All
              </button>
            </div>

            <div className="products-grid deals-grid">
              {filteredDeals.length > 0 ? (
                filteredDeals.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onAddToCart={handleAddToCart}
                    isWishlisted={wishlist.has(prod.id)}
                    onToggleWishlist={handleToggleWishlist}
                    showSwatches={false}
                  />
                ))
              ) : (
                <div className="no-products-msg">
                  No deals match your search criteria. Try a different keyword!
                </div>
              )}
            </div>

            {/* Carousel Dots Indicator below deals */}
            <div className="deals-dots-wrap">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  className={`sub-carousel-dot ${dot === dealsPage ? 'active' : ''}`}
                  onClick={() => setDealsPage(dot)}
                  aria-label={`Slide ${dot + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Section: Recommended for You */}
          <section className="product-section">
            <div className="section-header-row">
              <div className="section-title-wrap">
                <h3 className="section-title">Recommended for You</h3>
              </div>
              <button 
                className="view-all-btn"
                onClick={() => setSelectedCategory('all')}
              >
                View All
              </button>
            </div>

            <div className="products-grid recommended-grid">
              {filteredRecommended.length > 0 ? (
                filteredRecommended.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onAddToCart={handleAddToCart}
                    isWishlisted={wishlist.has(prod.id)}
                    onToggleWishlist={handleToggleWishlist}
                    showSwatches={true}
                  />
                ))
              ) : (
                <div className="no-products-msg">
                  No recommended products match your filters.
                </div>
              )}
            </div>
          </section>

          {/* Trust Guarantees */}
          <TrustBadges />
        </div>
      </main>

      {/* 3. Right Sidebar (Cart & Recommendations) */}
      <CartSidebar 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onAddToCart={handleAddToCart}
        youMightLike={youMightLike}
        recentlyViewed={recentlyViewed}
        isOpen={cartSidebarOpen}
        onClose={() => setCartSidebarOpen(false)}
        onCheckout={handleCheckout}
        onJoinClub={() => setClubModalOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cartItems={cartItems}
        total={cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0) - (cartItems.length > 0 ? 45.50 : 0)}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Club VIP Modal */}
      <ClubModal 
        isOpen={clubModalOpen}
        onClose={() => setClubModalOpen(false)}
      />

      {/* Floating Toast notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
