import React from 'react';
import { ShieldCheck, RotateCcw, Headphones, Star } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      sub: "100% secure payment"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      sub: "30-day return policy"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      sub: "Dedicated support"
    },
    {
      icon: Star,
      title: "Trusted by Thousands",
      sub: "4.8 average rating"
    }
  ];

  return (
    <div className="trust-badges-bar">
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <div key={i} className="trust-badge-item">
            <div className="trust-icon-box">
              <Icon size={20} className="trust-icon" />
            </div>
            <div className="trust-text">
              <h5 className="trust-title">{b.title}</h5>
              <p className="trust-sub">{b.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
