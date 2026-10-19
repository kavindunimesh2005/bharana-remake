import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Crown, 
  Check, 
  Tag
} from 'lucide-react';

export default function CartSidebar({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onAddToCart,
  youMightLike,
  recentlyViewed,
  isOpen, 
  onClose,
  onCheckout,
  onJoinClub
}) {
  const [promoCode, setPromoCode] = useState('SUMMER10');
  const [appliedDiscount, setAppliedDiscount] = useState(45.50);
  const [promoMessage, setPromoMessage] = useState({ text: '10% Summer discount applied', type: 'success' });

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Calculate final total
  const discountAmount = subtotal > 0 ? (appliedDiscount > 0 ? appliedDiscount : 0) : 0;
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9.99;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SUMMER10' || clean === 'SUMMER' || clean === 'NOVA10') {
      const disc = Number((subtotal * 0.1).toFixed(2));
      setAppliedDiscount(disc > 0 ? disc : 45.50);
      setPromoMessage({ text: '10% Summer coupon active!', type: 'success' });
    } else if (clean === 'SAVE20') {
      const disc = Number((subtotal * 0.2).toFixed(2));
      setAppliedDiscount(disc);
      setPromoMessage({ text: '20% VIP coupon active!', type: 'success' });
    } else if (!clean) {
      setAppliedDiscount(0);
      setPromoMessage({ text: 'Coupon removed', type: 'info' });
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try SUMMER10', type: 'error' });
    }
  };

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Mobile / Slide-over backdrop */}
      {isOpen && (
        <div className="cart-backdrop" onClick={onClose} />
      )}

      <aside className={`cart-sidebar-container ${isOpen ? 'open' : ''}`}>
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <h3 className="cart-title">My Cart ({totalItemsCount})</h3>
            <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
              <X size={19} />
            </button>
          </div>
        </div>

        <div className="cart-scroll-area">
          {/* Cart Item List */}
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-icon-wrap">
                <ShoppingBag size={32} />
              </div>
              <p className="empty-text">Your cart is empty</p>
              <span className="empty-sub">Explore our top deals to add items!</span>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-img-wrap">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  </div>

                  <div className="cart-item-details">
                    <h5 className="cart-item-name" title={item.name}>{item.name}</h5>
                    <p className="cart-item-variant">{item.size || item.subtitle}</p>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>

                    <div className="cart-item-actions">
                      <div className="quantity-stepper">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button 
                        className="item-delete-btn"
                        onClick={() => onRemoveItem(item.id)}
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Promo Code Form */}
          <form className="promo-code-form" onSubmit={handleApplyPromo}>
            <div className="promo-input-wrap">
              <input 
                type="text" 
                placeholder="Promo Code" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="promo-input"
              />
              <button type="submit" className="promo-apply-btn">
                Apply
              </button>
            </div>
            {promoMessage && (
              <span className={`promo-feedback ${promoMessage.type}`}>
                {promoMessage.text}
              </span>
            )}
          </form>

          {/* Pricing Summary */}
          <div className="order-summary-box">
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-val">${subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="summary-row discount-row">
                <span className="summary-label">Discount</span>
                <span className="summary-val discount-val">-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="summary-row">
              <span className="summary-label">Shipping</span>
              <span className="summary-val shipping-val">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row total-row">
              <span className="summary-label total-label">Total</span>
              <span className="summary-val total-val">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout CTA */}
          <button 
            className="checkout-btn" 
            onClick={() => onCheckout({ items: cartItems, total })}
            disabled={cartItems.length === 0}
          >
            <div className="checkout-btn-content">
              <ShoppingBag size={18} className="checkout-icon" />
              <span>Checkout ({totalItemsCount})</span>
            </div>
            <ArrowRight size={17} />
          </button>

          {/* Supported Payments */}
          <div className="payments-row">
            <span className="payments-label">We accept</span>
            <div className="payment-badges">
              <span className="pay-badge visa">VISA</span>
              <span className="pay-badge mastercard">
                <span className="mc-circle mc-red" />
                <span className="mc-circle mc-yellow" />
              </span>
              <span className="pay-badge applepay">Pay</span>
              <span className="pay-badge gpay">G Pay</span>
            </div>
          </div>

          {/* You Might Also Like */}
          <div className="recommend-sidebar-block">
            <h4 className="sidebar-section-heading">You might also like</h4>
            <div className="ymlik-list">
              {youMightLike.map((prod) => (
                <div key={prod.id} className="ymlik-item">
                  <div className="ymlik-img-wrap">
                    <img src={prod.image} alt={prod.name} className="ymlik-img" />
                  </div>
                  <div className="ymlik-info">
                    <h5 className="ymlik-title">{prod.name}</h5>
                    <span className="ymlik-subtitle">{prod.subtitle}</span>
                    <span className="ymlik-price">${prod.price.toFixed(2)}</span>
                  </div>
                  <button 
                    className="ymlik-add-btn" 
                    onClick={() => onAddToCart(prod)}
                    title="Add to cart"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="recently-viewed-block">
            <h4 className="sidebar-section-heading">Recently Viewed</h4>
            <div className="recent-thumbs-grid">
              {recentlyViewed.map((rv) => (
                <div key={rv.id} className="recent-thumb-item" title={rv.name}>
                  <img src={rv.image} alt={rv.name} className="recent-thumb-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Join NovaShop Club Banner */}
          <div className="club-banner" onClick={onJoinClub}>
            <div className="club-content">
              <div className="club-header-line">
                <Crown size={18} className="club-crown-icon" />
                <h5 className="club-title">Join NovaShop Club</h5>
              </div>
              <p className="club-desc">
                Get exclusive offers, early access and more!
              </p>
              <button className="club-join-btn">
                Join Now
              </button>
            </div>
            <div className="club-illu">
              <div className="club-gift-bag" />
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}
