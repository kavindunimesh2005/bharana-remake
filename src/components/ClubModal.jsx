import React, { useState } from 'react';
import { X, Crown, Sparkles, Check, Gift } from 'lucide-react';

export default function ClubModal({ isOpen, onClose }) {
  const [joined, setJoined] = useState(false);

  if (!isOpen) return null;

  const handleJoin = (e) => {
    e.preventDefault();
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card club-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="club-modal-header">
          <div className="crown-badge-glow">
            <Crown size={32} />
          </div>
          <h3>Join NovaShop Club</h3>
          <p>Unlock member-only discounts, early drops, and free express delivery.</p>
        </div>

        {joined ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <Check size={48} className="success-icon" />
            </div>
            <h4>Welcome to the Club! 🎉</h4>
            <p>Your 15% VIP welcome coupon has been added to your coupons wallet.</p>
          </div>
        ) : (
          <div className="club-modal-perks">
            <div className="perk-item">
              <Sparkles size={18} className="perk-icon" />
              <div>
                <strong>Early Access</strong>
                <span>Shop seasonal drops 24 hours before everyone else.</span>
              </div>
            </div>
            <div className="perk-item">
              <Gift size={18} className="perk-icon" />
              <div>
                <strong>Free Express Shipping</strong>
                <span>Zero minimum spend with priority dispatch.</span>
              </div>
            </div>
            <div className="perk-item">
              <Crown size={18} className="perk-icon" />
              <div>
                <strong>Exclusive Rewards</strong>
                <span>Earn 2x Nova points on every single purchase.</span>
              </div>
            </div>

            <button className="confirm-order-btn join-club-cta" onClick={handleJoin}>
              Claim Free Membership
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
