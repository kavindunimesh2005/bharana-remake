export const categories = [
  { id: 'all', name: 'All Products', icon: 'Sparkles', color: '#6C5DD3' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', color: '#FD853A', count: 142 },
  { id: 'beauty', name: 'Beauty', icon: 'Sparkle', color: '#E85382', count: 86 },
  { id: 'electronics', name: 'Electronics', icon: 'Headphones', color: '#6C5DD3', count: 94 },
  { id: 'home', name: 'Home & Living', icon: 'Armchair', color: '#3F8CFF', count: 68 },
  { id: 'sports', name: 'Sports', icon: 'Zap', color: '#00BA9D', count: 53 },
  { id: 'more', name: 'More', icon: 'LayoutGrid', color: '#808191', count: 120 }
];

export const dealsProducts = [
  {
    id: 'deal-1',
    name: "Air Max 270 React",
    category: "Women's Shoes",
    price: 129.99,
    originalPrice: 168.00,
    discount: "-25%",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    badge: "-25%",
    badgeColor: "#FF4B72",
    tag: "Women's Shoes",
    color: "#FCE7EB"
  },
  {
    id: 'deal-2',
    name: "Apple Watch Series 9",
    category: "41mm Midnight",
    price: 359.00,
    originalPrice: 449.00,
    discount: "-20%",
    rating: 4.9,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    badge: "-20%",
    badgeColor: "#FF4B72",
    tag: "41mm Midnight",
    color: "#F4F0FF"
  },
  {
    id: 'deal-3',
    name: "Chanel Chance Eau",
    category: "Tendre EDP 100ml",
    price: 89.99,
    originalPrice: 129.99,
    discount: "-30%",
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80",
    badge: "-30%",
    badgeColor: "#FF4B72",
    tag: "Tendre EDP 100ml",
    color: "#FFF0F5"
  },
  {
    id: 'deal-4',
    name: "Sony WH-1000XM5",
    category: "Wireless Headphones",
    price: 299.00,
    originalPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 170,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    badge: null,
    badgeColor: null,
    tag: "Wireless Headphones",
    color: "#F8F8FC"
  }
];

export const recommendedProducts = [
  {
    id: 'rec-1',
    name: "Oversized Cotton Shirt",
    category: "Beige",
    price: 29.99,
    originalPrice: 35.00,
    discount: "-15%",
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80",
    badge: "-15%",
    badgeColor: "#FF4B72",
    colors: ["#D4B996", "#3A352F", "#FFFFFF"],
    color: "#FAF8F5"
  },
  {
    id: 'rec-2',
    name: "Minimalist Shoulder Bag",
    category: "Olive Green",
    price: 39.99,
    originalPrice: 49.99,
    discount: "-20%",
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80",
    badge: "-20%",
    badgeColor: "#FF4B72",
    colors: ["#5F6F52", "#A27B5C", "#2C3E50"],
    color: "#F3F7F2"
  },
  {
    id: 'rec-3',
    name: "The Ordinary Niacinamide",
    category: "10% + Zinc 1% 30ml",
    price: 6.75,
    originalPrice: 9.00,
    discount: "-25%",
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80",
    badge: "-25%",
    badgeColor: "#FF4B72",
    colors: [],
    color: "#F8F8FC"
  },
  {
    id: 'rec-4',
    name: "Fossil Gen 6 Smartwatch",
    category: "Black Silicone",
    price: 215.10,
    originalPrice: 239.00,
    discount: "-10%",
    rating: 4.7,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    badge: "-10%",
    badgeColor: "#FF4B72",
    colors: [],
    color: "#F2F4F7"
  }
];

export const initialCart = [
  {
    id: 'deal-1',
    name: "Air Max 270 React",
    subtitle: "Women's Shoes",
    size: "Size: 7 US",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 'deal-3',
    name: "Chanel Chance Eau Tendre EDP",
    subtitle: "100ml",
    size: "100ml",
    price: 89.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 'rec-2',
    name: "Minimalist Shoulder Bag",
    subtitle: "Olive Green",
    size: "Olive Green",
    price: 39.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 'cart-4',
    name: "Gentle Monster Lilit 01 Sunglasses",
    subtitle: "Black",
    size: "Black",
    price: 199.00,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&auto=format&fit=crop&q=80"
  }
];

export const youMightLike = [
  {
    id: 'yml-1',
    name: "Ray-Ban Wayfarer",
    subtitle: "Classic Black",
    price: 155.00,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 'yml-2',
    name: "Nike Air Force 1 '07",
    subtitle: "White",
    price: 109.00,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&auto=format&fit=crop&q=80"
  }
];

export const recentlyViewed = [
  { id: 'rv-1', name: 'Smartwatch', image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=120&auto=format&fit=crop&q=80" },
  { id: 'rv-2', name: 'Lilac Hoodie', image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=120&auto=format&fit=crop&q=80" },
  { id: 'rv-3', name: 'Shoulder Bag', image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=120&auto=format&fit=crop&q=80" },
  { id: 'rv-4', name: 'Chanel Perfume', image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=120&auto=format&fit=crop&q=80" }
];
