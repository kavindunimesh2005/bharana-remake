import React from 'react';
import { 
  Shirt, 
  Sparkle, 
  Headphones, 
  Armchair, 
  Zap, 
  LayoutGrid,
  Sparkles
} from 'lucide-react';

export default function CategoryBar({ selectedCategory, onSelectCategory }) {
  const categoriesList = [
    { id: 'fashion', label: 'Fashion', icon: Shirt, color: '#FD853A', bg: '#FFF4ED' },
    { id: 'beauty', label: 'Beauty', icon: Sparkle, color: '#E85382', bg: '#FDF0F4' },
    { id: 'electronics', label: 'Electronics', icon: Headphones, color: '#6C5DD3', bg: '#F4F0FF' },
    { id: 'home', label: 'Home & Living', icon: Armchair, color: '#3F8CFF', bg: '#EFF5FF' },
    { id: 'sports', label: 'Sports', icon: Zap, color: '#00BA9D', bg: '#EBF9F6' },
    { id: 'more', label: 'More', icon: LayoutGrid, color: '#808191', bg: '#F4F5F7' }
  ];

  return (
    <div className="category-bar-container">
      <div className="category-grid">
        {categoriesList.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
              className={`category-item-btn ${isSelected ? 'selected' : ''}`}
            >
              <div 
                className="category-icon-box"
                style={{
                  backgroundColor: isSelected ? 'var(--primary)' : 'var(--bg-card)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border-color)'
                }}
              >
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <span className="category-name">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
