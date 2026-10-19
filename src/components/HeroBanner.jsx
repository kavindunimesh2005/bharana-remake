import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroBanner({ onShopNow }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "New Collection",
      title: "Find Your Style,\nLove Your Look ✨",
      subtitle: "Discover the latest trends in fashion, beauty, and lifestyle.",
      buttonText: "Shop Now",
      modelImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      gradient: "linear-gradient(115deg, #7E6BE6 0%, #A284F6 50%, #B99AF8 100%)",
      accentOrb: "#FF6584"
    },
    {
      id: 2,
      tag: "Summer Edition",
      title: "Unmatched Comfort,\nInfinite Vibes 🌸",
      subtitle: "Curated premium streetwear & luxury essentials crafted for every mood.",
      buttonText: "Explore Collection",
      modelImg: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80",
      gradient: "linear-gradient(115deg, #6C5DD3 0%, #8E65F8 50%, #C471ED 100%)",
      accentOrb: "#38EF7D"
    },
    {
      id: 3,
      tag: "Tech & Sound",
      title: "Elevate Your Day\nWith Sound & Style ⚡",
      subtitle: "Experience next-generation wireless audio & wearable smart devices.",
      buttonText: "Discover Tech",
      modelImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      gradient: "linear-gradient(115deg, #5352ED 0%, #70A1FF 50%, #9B51E0 100%)",
      accentOrb: "#FFA502"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="hero-banner-container" style={{ background: active.gradient }}>
      {/* Decorative Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" style={{ background: active.accentOrb }} />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <div className="hero-badge">
          <span>{active.tag}</span>
        </div>
        <h1 className="hero-title">
          {active.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="hero-subtitle">{active.subtitle}</p>
        <button className="hero-cta-btn" onClick={onShopNow}>
          <span>{active.buttonText}</span>
          <ArrowRight size={17} className="cta-arrow" />
        </button>
      </div>

      <div className="hero-visual">
        <div className="hero-img-wrap">
          <img 
            src={active.modelImg} 
            alt="NovaShop Fashion Model" 
            className="hero-model-img" 
          />
          <div className="hero-bubble hero-bubble-1" />
          <div className="hero-bubble hero-bubble-2" />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="hero-pagination">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
