export interface Product {
  id: string
  name: string
category: 'floral' | 'woody' | 'oriental' | 'fresh' | 'unisex' | 'sweet'
  price: string
  image: string
  description: string
  longDescription: string
  notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  longevity: string
  projection: string
  occasions: string[]
  new?: boolean
  bestseller?: boolean
}

export const products: Product[] = [
  {
    id: 'hug-body-spray',
     name: 'HUG Body Spray',
    category: 'fresh',
    description: 'Top: Citrus Zest | Middle: Lavender | Base: Soft Musk',
    price: '₦3,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597582/Hug_qyavmi.jpg',
   longDescription:
  'HUG Body Spray is a warm, comforting fragrance designed for everyday confidence and freshness. It opens with bright citrus and soft fruity notes that feel welcoming and uplifting. The heart reveals gentle florals blended with subtle spices, giving the scent balance and charm. A smooth base of vanilla, musk, and light woods leaves a cozy, long-lasting trail that feels intimate and reassuring — perfect for daily wear.',
notes: {
  top: ['Citrus Zest', 'Fresh Fruits'],
  middle: ['Soft Floral Notes', 'Light Spices'],
  base: ['Vanilla', 'Musk', 'Woody Notes'],
},
longevity: '6–8 hours',
projection: 'Moderate',
occasions: ['Daily Wear', 'Casual Outings', 'School', 'Work'],
bestseller: true,
  },
  {
    id: 'storm-kids',
    name: 'Storm Kids Perfume',
    category: 'sweet',
    description: 'Top: Fruity Candy | Middle: Soft Floral | Base: Vanilla Musk',
    price: '₦2,500',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597594/storm-kids_yontcw.jpg',
  longDescription:
  'Storm Kids Perfume is a fun, cheerful fragrance created especially for children. It opens with fresh fruity notes that feel playful and energetic, bringing an instant sense of happiness. The heart is soft and clean with light floral and cottony accords that are gentle on young senses. A smooth base of vanilla and soft musk adds warmth and comfort, making Storm Kids Perfume perfect for everyday use without being overpowering.',
notes: {
  top: ['Apple', 'Sweet Orange'],
  middle: ['Soft Floral Notes', 'Cotton Blossom'],
  base: ['Vanilla', 'Soft Musk'],
},
longevity: '4–6 hours',
projection: 'Soft',
occasions: ['School', 'Playtime', 'Daily Wear'],
bestseller: false,
  },
  {
    id: '24k-spray',
    name: '24K',
    category: 'oriental',
    description: 'Top: Bergamot | Middle: Spiced Amber | Base: Oud & Vanilla',
    price: '₦5,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597605/24k-image_jcd8ik.jpg',
  longDescription:
  '24K Spray is a bold and luxurious fragrance crafted for confident individuals who enjoy making a strong impression. It opens with a vibrant blend of fresh citrus and spicy notes that instantly energize the senses. The heart introduces warm aromatic accords with subtle florals, adding depth and sophistication. A rich base of amber, woody notes, and musk delivers a powerful, long-lasting finish that feels opulent and commanding.',
notes: {
  top: ['Bergamot', 'Citrus Notes'],
  middle: ['Spices', 'Aromatic Herbs'],
  base: ['Amber', 'Woody Notes', 'Musk'],
},
longevity: '7–9 hours',
projection: 'High',
occasions: ['Evening', 'Parties', 'Night Out'],
bestseller: true,
  },
  {
    id: 'lasgidi-body-mist',
     name: 'Lasgidi Body Mist',
    category: 'fresh',
    description: 'Top: Citrus Zest | Middle: Aquatic Notes | Base: Soft Musk',
    price: '₦2,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769622900/lasgidi_fzxrow.jpg',
   longDescription:
  'Lesgadi Body Mist is a lively, playful fragrance inspired by energy, confidence, and everyday vibes. It opens with a burst of juicy fruits and fresh citrus that instantly feels fun and uplifting. The heart blends sweet florals with a soft tropical touch, creating a youthful and expressive character. A smooth base of vanilla and light musk keeps the scent warm and inviting, making it perfect for daily wear and casual outings.',

notes: {
  top: ['Fresh Citrus', 'Juicy Fruits'],
  middle: ['Sweet Floral Notes', 'Tropical Accords'],
  base: ['Vanilla', 'Soft Musk'],
},
longevity: '5–7 hours',
projection: 'Moderate',
occasions: ['Daily Wear', 'Casual Outings', 'School', 'Hanging Out'],
bestseller: false,
  },
  {
    id: 'riggs-london',
     name: 'Riggs London',
    category: 'woody',
    description: 'Top: Bergamot | Middle: Lavender & Spices | Base: Cedarwood & Musk',
    price: '₦3,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769623053/riggs_byzmym.jpg',
   longDescription:
  'Riggs London is a refined and modern fragrance inspired by classic British style and urban sophistication. It opens with crisp citrus and fresh aromatic notes that feel sharp and confident. The heart introduces elegant spices and subtle florals, adding depth and balance. A smooth base of amber, woods, and musk creates a polished, long-lasting finish that is both masculine and timeless.',

notes: {
  top: ['Bergamot', 'Fresh Citrus'],
  middle: ['Spices', 'Lavender'],
  base: ['Amber', 'Woody Notes', 'Musk'],
},
longevity: '7–9 hours',
projection: 'Moderate to High',
occasions: ['Office', 'Formal Events', 'Evening', 'Daily Wear'],
bestseller: true,
  },
  {
    id: 'fogg-fragrance',
     name: 'Fogg Fragrance',
    category: 'fresh',
    description: 'Top: Citrus & Green Notes | Middle: Aromatic Herbs | Base: Musk & Cedarwood',
    price: '₦3,500',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769623300/fogg_iv3jkz.jpg',
   longDescription: 
  'Fogg is a bold and charismatic fragrance designed for those who want a noticeable and confident scent without being overpowering. It starts with bright and zesty top notes that immediately catch attention. The heart blends aromatic and slightly spicy elements, giving a balanced and memorable character. A warm base of woods and subtle musk provides depth and a lasting impression that suits everyday wear as well as special occasions.',
notes: {
  top: ['Citrus Accord', 'Fresh Spices'],
  middle: ['Aromatic Florals', 'Warm Spices'],
  base: ['Woody Notes', 'Musk', 'Amber'],
},
longevity: '5–8 hours',
projection: 'Moderate',
occasions: ['Casual Outings', 'Daily Wear', 'Office', 'Evening'],
bestseller: true

  },
  {
    id: 'spice-elegance',
    name: 'Spice Elegance',
    category: 'woody',
    price: '₦9,000',
    description: 'Top: Cinnamon | Middle: Clove | Base: Sandalwood',
    longDescription:
      'Spice Elegance is a warm, inviting woody fragrance with an aromatic spice theme. Cinnamon spice opens with warmth and comfort, transitioning into the clove-rich heart. A creamy sandalwood base completes the composition, creating a fragrance that is both sophisticated and approachable.',
    notes: {
      top: ['Cinnamon', 'Ginger'],
      middle: ['Clove', 'Nutmeg'],
      base: ['Sandalwood', 'Cedar', 'Vanilla'],
    },
    longevity: '9-10 hours',
    projection: 'High',
    occasions: ['Everyday', 'Fall/Winter', 'Evening'],
  },
  {
    id: 'pink-paradise',
    name: 'Pink Paradise',
    category: 'floral',
    price: '₦8,300',
    description: 'Top: Peach | Middle: Peony | Base: Musk',
    longDescription:
      'Pink Paradise is a delicate and feminine floral fragrance that delights with its fruity-floral character. Juicy peach opens the composition with sweetness, leading to the romantic heart of peony. A soft musk base ensures this fragrance stays close to the skin, creating an intimate aura.',
    notes: {
      top: ['Peach', 'Passion Fruit'],
      middle: ['Peony', 'Rose'],
      base: ['Musk', 'Amber', 'Sandalwood'],
    },
    longevity: '7-9 hours',
    projection: 'Medium',
    occasions: ['Everyday', 'Spring/Summer', 'Casual'],
    new: true,
  },
  {
    id: 'oud-mystique',
    name: 'Oud Mystique',
    category: 'oriental',
    price: '₦10,500',
    description: 'Top: Rose | Middle: Saffron | Base: Oud',
    longDescription:
      'Oud Mystique is a luxurious oriental fragrance that celebrates the richness of oud. Rose petals open with elegance, while saffron adds a spiced, sophisticated middle note. The deep, resinous oud base creates a mysterious, intoxicating finish that lingers for hours.',
    notes: {
      top: ['Rose', 'Lemon'],
      middle: ['Saffron', 'Amber'],
      base: ['Oud', 'Musk', 'Sandalwood'],
    },
    longevity: '12+ hours',
    projection: 'Very High',
    occasions: ['Evening', 'Special Events', 'Winter'],
    bestseller: true,
  },
  {
    id: 'fresh-citrus',
    name: 'Fresh Citrus',
    category: 'fresh',
    price: '₦7,200',
    description: 'Top: Orange | Middle: Neroli | Base: Amber',
    longDescription:
      'Fresh Citrus is a vibrant, energizing fragrance that captures the essence of sun-ripened citrus fruits. Bright orange opens immediately with zest and joy, transitioning into the floral neroli heart. A subtle amber base adds warmth and depth, creating a refreshing yet sophisticated scent.',
    notes: {
      top: ['Orange', 'Lemon', 'Grapefruit'],
      middle: ['Neroli', 'Petitgrain'],
      base: ['Amber', 'Musk'],
    },
    longevity: '6-7 hours',
    projection: 'Medium',
    occasions: ['Everyday', 'Morning', 'Work'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function searchProducts(
  query: string,
  filters?: {
    category?: string
  }
): Product[] {
  let results = products

  if (filters?.category) {
    results = results.filter((p) => p.category === filters.category)
  }

  if (query.trim()) {
    const lowerQuery = query.toLowerCase()
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.notes.top.some((n) => n.toLowerCase().includes(lowerQuery)) ||
        p.notes.middle.some((n) => n.toLowerCase().includes(lowerQuery)) ||
        p.notes.base.some((n) => n.toLowerCase().includes(lowerQuery))
    )
  }

  return results
}
