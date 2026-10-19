import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function PromoCards({ onCardClick }) {
  // Live countdown timer for Flash Sale
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (n) => String(n).padStart(2, '0');

  return (
    <div className="promo-cards-grid">
      {/* 1. Flash Sale Card */}
      <div 
        className="promo-card promo-flash-sale"
        onClick={() => onCardClick('flash-sale')}
      >
        <div className="promo-text-col">
          <span className="promo-badge-title">Flash Sale</span>
          <p className="promo-sub">Limited time deals</p>
          <span className="promo-highlight-pink">Up to 70% Off</span>

          <div className="countdown-timer">
            <span className="time-digit">{formatNum(timeLeft.hours)}</span>
            <span className="time-colon">:</span>
            <span className="time-digit">{formatNum(timeLeft.minutes)}</span>
            <span className="time-colon">:</span>
            <span className="time-digit">{formatNum(timeLeft.seconds)}</span>
          </div>
        </div>

        <div className="promo-img-col">
          <img 
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop&q=80" 
            alt="Flash Sale Pink Handbag" 
            className="promo-product-img handbag-img" 
          />
        </div>
      </div>

      {/* 2. Free Shipping Card */}
      <div 
        className="promo-card promo-free-shipping"
        onClick={() => onCardClick('free-shipping')}
      >
        <div className="promo-text-col">
          <h4 className="promo-card-heading">Free Shipping</h4>
          <p className="promo-sub">On orders over $50</p>
          <div className="promo-inline-link">
            <span>Shop now</span>
            <ArrowRight size={13} className="link-arrow" />
          </div>
        </div>

        <div className="promo-img-col">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&auto=format&fit=crop&q=80" 
            alt="Free Shipping Parcel Box" 
            className="promo-product-img box-img" 
          />
        </div>
      </div>

      {/* 3. New Arrivals Card */}
      <div 
        className="promo-card promo-new-arrivals"
        onClick={() => onCardClick('new-arrivals')}
      >
        <div className="promo-text-col">
          <h4 className="promo-card-heading">New Arrivals</h4>
          <p className="promo-sub">Check out the latest trends</p>
          <div className="promo-inline-link">
            <span>Shop now</span>
            <ArrowRight size={13} className="link-arrow" />
          </div>
        </div>

        <div className="promo-img-col">
          <img 
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&auto=format&fit=crop&q=80" 
            alt="New Arrivals Sunglasses" 
            className="promo-product-img glasses-img" 
          />
        </div>
      </div>
    </div>
  );
}
