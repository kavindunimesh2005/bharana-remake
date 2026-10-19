import React, { useState } from 'react';
import { Heart, Star, ShoppingCart, Check } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist,
  showSwatches = false
}) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [isAddedAnim, setIsAddedAnim] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart({
      ...product,
      selectedColor: product.colors ? product.colors[selectedColorIdx] : null
    });
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  const handleHeart = (e) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <div className="product-card">
      {/* Card Header: Badges & Wishlist */}
      <div className="product-card-top">
        {product.discount ? (
          <span className="product-discount-badge">{product.discount}</span>
        ) : (
          <span className="badge-spacer" />
        )}

        <button 
          className={`wishlist-heart-btn ${isWishlisted ? 'liked' : ''}`}
          onClick={handleHeart}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={16} fill={isWishlisted ? '#FF4B72' : 'none'} color={isWishlisted ? '#FF4B72' : '#808191'} />
        </button>
      </div>

      {/* Image Container */}
      <div className="product-img-box">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-main-img" 
          loading="lazy" 
        />
      </div>

      {/* Details */}
      <div className="product-info">
        <h4 className="product-name" title={product.name}>{product.name}</h4>
        <p className="product-category">{product.category}</p>

        <div className="product-price-row">
          <div className="price-group">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        {/* Footer: Rating OR Swatches + Cart button */}
        <div className="product-card-footer">
          {showSwatches && product.colors && product.colors.length > 0 ? (
            <div className="color-swatches-group">
              {product.colors.map((hex, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColorIdx(idx);
                  }}
                  className={`color-swatch-circle ${idx === selectedColorIdx ? 'active' : ''}`}
                  style={{ backgroundColor: hex }}
                  title={`Color variant ${idx + 1}`}
                />
              ))}
            </div>
          ) : (
            <div className="product-rating">
              <Star size={14} className="star-icon" fill="var(--star-color)" color="var(--star-color)" />
              <span className="rating-val">{product.rating}</span>
              <span className="reviews-val">({product.reviews})</span>
            </div>
          )}

          {/* Quick Add to Cart button */}
          <button 
            className={`quick-add-btn ${isAddedAnim ? 'success' : ''}`}
            onClick={handleAdd}
            title="Add to Cart"
          >
            {isAddedAnim ? <Check size={16} /> : <ShoppingCart size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}
