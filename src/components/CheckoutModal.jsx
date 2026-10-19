import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, ShoppingBag } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cartItems, total, onOrderPlaced }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Alina Putri',
    email: 'alina.putri@novashop.com',
    address: '742 Evergreen Terrace, New York, NY',
    cardNumber: '•••• •••• •••• 4242'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onOrderPlaced();
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle size={56} className="success-icon" />
            </div>
            <h3>Order Placed Successfully!</h3>
            <p>Thank you Alina! Your order #NV-8922 has been confirmed and is being processed.</p>
            <div className="order-summary-pill">
              <span>Total Paid: <strong>${total.toFixed(2)}</strong></span>
            </div>
          </div>
        ) : (
          <div className="checkout-modal-body">
            <div className="modal-header">
              <ShoppingBag size={24} className="modal-header-icon" />
              <div>
                <h3>Quick Checkout</h3>
                <p>Complete your NovaShop order</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Shipping Address</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>

              <div className="payment-select-box">
                <div className="pay-option active">
                  <CreditCard size={18} />
                  <span>Credit / Debit Card ({formData.cardNumber})</span>
                  <span className="pay-selected-check">✓</span>
                </div>
              </div>

              <div className="modal-total-banner">
                <span>Total Amount</span>
                <span className="modal-total-price">${total.toFixed(2)}</span>
              </div>

              <button type="submit" className="confirm-order-btn">
                <ShieldCheck size={18} />
                <span>Pay & Confirm Order</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
