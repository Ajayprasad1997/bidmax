
export interface ProductAccordionDetails {
  conditionNotes: string[];
  boxAccessories: string[];
  warrantyService: string[];
  inspectionDetails: string[];
}

export interface ProductSpecs {
  display: string;
  processor: string;
  camera: string;
  battery: string;
}

export interface Product {
  id: string;
  name: string;
  storage: string;
  brand: string;

  condition: "Supermint (A+)" | "Mint (A)" | "Good Condition";

  inStock: boolean;

  ram: "4GB" | "6GB" | "8GB" | "12GB+";

  priceRange: "0-10k" | "10k-20k" | "20k-30k" | "30k-40k" | "40k+";

  image: string;
  gallery: string[];

  specs: ProductSpecs;

  details: ProductAccordionDetails;
}

// Online Smartphone Images
export const PHONE_IMAGES = {
  phone1:
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=85",

  phone2:
    "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  phone3:
    "https://images.unsplash.com/photo-1736173155811-e8142fd553ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  phone4:
    "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
};

// Brand Options
export const BRANDS = [
  "Apple",
  "Samsung",
  "OnePlus",
  "Vivo",
  "Oppo",
  "Realme",
  "Xiaomi",
] as const;

// Price Range Options
export const PRICE_RANGES = [
  { label: "₹0 - 10k", value: "0-10k" },
  { label: "₹10k - 20k", value: "10k-20k" },
  { label: "₹20k - 30k", value: "20k-30k" },
  { label: "₹30k - 40k", value: "30k-40k" },
  { label: "₹40k+", value: "40k+" },
] as const;

// Condition Options
export const CONDITIONS = [
  "Supermint (A+)",
  "Mint (A)",
  "Good Condition",
] as const;

// RAM Options
export const RAM_OPTIONS = [
  "4GB",
  "6GB",
  "8GB",
  "12GB+",
] as const;

// Sample Products
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "iPhone 14",
    storage: "128GB",
    brand: "Apple",
    condition: "Supermint (A+)",
    inStock: true,
    ram: "6GB",
    priceRange: "40k+",
    image: PHONE_IMAGES.phone1,
    gallery: [
      PHONE_IMAGES.phone1,
      PHONE_IMAGES.phone2,
      PHONE_IMAGES.phone3,
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A15 Bionic",
      camera: "12MP Dual Camera",
      battery: "3279 mAh",
    },
    details: {
      conditionNotes: [
        "Carefully inspected device",
        "Screen and body condition verified",
        "No major visible scratches",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware and software inspection completed",
        "Camera, speaker and charging functions checked",
      ],
    },
  },

  {
    id: "2",
    name: "Vivo V29 Pro",
    storage: "256GB",
    brand: "Vivo",
    condition: "Mint (A)",
    inStock: true,
    ram: "8GB",
    priceRange: "20k-30k",
    image: "https://images.unsplash.com/photo-1755318535396-cdb062dc60bd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1746366782635-aabca81d2719?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1777029323607-383fa5c38a57?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1777029323593-660a862bf69d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    specs: {
      display: "6.78-inch AMOLED Display",
      processor: "MediaTek Dimensity 8200",
      camera: "50MP + 12MP + 8MP",
      battery: "4600 mAh",
    },
    details: {
      conditionNotes: [
        "Carefully inspected device",
        "Screen and body condition verified",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware and software inspection completed",
        "Camera, speaker and charging functions checked",
      ],
    },
  },

  {
    id: "3",
    name: "Samsung Galaxy S23",
    storage: "256GB",
    brand: "Samsung",
    condition: "Mint (A)",
    inStock: true,
    ram: "8GB",
    priceRange: "40k+",
    image: PHONE_IMAGES.phone2,
    gallery: [
      PHONE_IMAGES.phone2,
      PHONE_IMAGES.phone3,
      PHONE_IMAGES.phone4,
    ],
    specs: {
      display: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP + 12MP + 10MP",
      battery: "3900 mAh",
    },
    details: {
      conditionNotes: [
        "Professionally inspected device",
        "Display and body condition checked",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware functionality tested",
        "Camera and charging tested",
      ],
    },
  },

  {
    id: "4",
    name: "OnePlus 11",
    storage: "128GB",
    brand: "OnePlus",
    condition: "Mint (A)",
    inStock: true,
    ram: "8GB",
    priceRange: "30k-40k",
    image: PHONE_IMAGES.phone3,
    gallery: [
      PHONE_IMAGES.phone3,
      PHONE_IMAGES.phone1,
      PHONE_IMAGES.phone4,
    ],
    specs: {
      display: "6.7-inch Fluid AMOLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP + 48MP + 32MP",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: [
        "Carefully inspected device",
        "Body and display condition verified",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware and software inspection completed",
        "Audio and camera functions checked",
      ],
    },
  },

  {
    id: "5",
    name: "Realme GT 2",
    storage: "256GB",
    brand: "Realme",
    condition: "Good Condition",
    inStock: true,
    ram: "12GB+",
    priceRange: "20k-30k",
    image: PHONE_IMAGES.phone4,
    gallery: [
      PHONE_IMAGES.phone4,
      PHONE_IMAGES.phone1,
      PHONE_IMAGES.phone2,
    ],
    specs: {
      display: "6.62-inch AMOLED Display",
      processor: "Snapdragon 888",
      camera: "50MP + 8MP + 2MP",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: [
        "Used device professionally inspected",
        "Normal signs of usage may be visible",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware and software inspection completed",
        "Basic functionality tested",
      ],
    },
  },

  {
    id: "6",
    name: "Oppo Reno 10 Pro",
    storage: "256GB",
    brand: "Oppo",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "20k-30k",
    image: PHONE_IMAGES.phone3,
    gallery: [
      PHONE_IMAGES.phone3,
      PHONE_IMAGES.phone2,
      PHONE_IMAGES.phone1,
    ],
    specs: {
      display: "6.7-inch AMOLED Display",
      processor: "Snapdragon 778G",
      camera: "50MP + 32MP + 8MP",
      battery: "4600 mAh",
    },
    details: {
      conditionNotes: [
        "Carefully inspected device",
        "Display and body condition verified",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Camera and speaker tested",
        "Charging and hardware functionality checked",
      ],
    },
  },

  {
    id: "7",
    name: "Xiaomi 13 Pro",
    storage: "256GB",
    brand: "Xiaomi",
    condition: "Supermint (A+)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image: PHONE_IMAGES.phone2,
    gallery: [
      PHONE_IMAGES.phone2,
      PHONE_IMAGES.phone4,
      PHONE_IMAGES.phone3,
    ],
    specs: {
      display: "6.73-inch AMOLED Display",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP + 50MP + 50MP",
      battery: "4820 mAh",
    },
    details: {
      conditionNotes: [
        "Excellent cosmetic condition",
        "Screen and body condition verified",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware and software inspection completed",
        "Camera, speaker and charging functions checked",
      ],
    },
  },

  {
    id: "8",
    name: "iPhone 13",
    storage: "128GB",
    brand: "Apple",
    condition: "Good Condition",
    inStock: true,
    ram: "4GB",
    priceRange: "30k-40k",
    image: PHONE_IMAGES.phone1,
    gallery: [
      PHONE_IMAGES.phone1,
      PHONE_IMAGES.phone3,
      PHONE_IMAGES.phone4,
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A15 Bionic",
      camera: "12MP Dual Camera",
      battery: "3227 mAh",
    },
    details: {
      conditionNotes: [
        "Used device professionally inspected",
        "Normal signs of usage may be visible",
      ],
      boxAccessories: [
        "Compatible charging cable",
        "SIM ejector tool",
      ],
      warrantyService: [
        "Seller warranty as per applicable policy",
        "Contact support for service assistance",
      ],
      inspectionDetails: [
        "Hardware and software inspection completed",
        "Camera and charging functions checked",
      ],
    },
  },
  {
    id: "galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra 5G",
    storage: "256GB",
    brand: "Samsung",
    condition: "Supermint (A+)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1526222344609-ca3e80ea3b06?auto=format&fit=crop&fm=jpg&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1526222344609-ca3e80ea3b06?auto=format&fit=crop&fm=jpg&q=80&w=600",
    ],
    specs: {
      display: "6.9-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Elite",
      camera: "200MP quad rear camera",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Like-new condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 5G",
    storage: "256GB",
    brand: "Samsung",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP quad rear camera",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra 5G",
    storage: "256GB",
    brand: "Samsung",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP quad rear camera",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "galaxy-z-fold6",
    name: "Samsung Galaxy Z Fold6 5G",
    storage: "256GB",
    brand: "Samsung",
    condition: "Supermint (A+)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "7.6-inch foldable Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP triple rear camera",
      battery: "4400 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Like-new condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "galaxy-z-flip6",
    name: "Samsung Galaxy Z Flip6 5G",
    storage: "256GB",
    brand: "Samsung",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.7-inch foldable Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP dual rear camera",
      battery: "4000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "galaxy-a55",
    name: "Samsung Galaxy A55 5G",
    storage: "256GB",
    brand: "Samsung",
    condition: "Good Condition",
    inStock: true,
    ram: "8GB",
    priceRange: "20k-30k",
    image:
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.6-inch Super AMOLED",
      processor: "Exynos 1480",
      camera: "50MP triple rear camera",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected used device", "Good condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "iphone-15-pro-refurb",
    name: "Apple iPhone 15 Pro",
    storage: "256GB",
    brand: "Apple",
    condition: "Mint (A)",
    inStock: true,
    ram: "8GB",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A17 Pro",
      camera: "48MP triple rear camera",
      battery: "3274 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected used device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "oneplus-12-5g-refurb",
    name: "OnePlus 12 5G",
    storage: "256GB",
    brand: "OnePlus",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.82-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP triple rear camera",
      battery: "5400 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected used device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "pixel-8-pro-refurb",
    name: "Google Pixel 8 Pro 5G",
    storage: "128GB",
    brand: "Google",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      camera: "50MP triple rear camera",
      battery: "5050 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected used device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    storage: "256GB",
    brand: "Apple",
    condition: "Supermint (A+)",
    inStock: true,
    ram: "8GB",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.9-inch Super Retina XDR OLED",
      processor: "Apple A18 Pro",
      camera: "48MP triple rear camera",
      battery: "4685 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Like-new condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "oppo-find-x6-pro",
    name: "Oppo Find X6 Pro",
    storage: "256GB",
    brand: "Oppo",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.82-inch AMOLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP triple rear camera",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "realme-16",
    name: "Realme 16",
    storage: "256GB",
    brand: "Realme",
    condition: "Mint (A)",
    inStock: true,
    ram: "8GB",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "AMOLED display",
      processor: "Octa-core processor",
      camera: "Multi-camera system",
      battery: "5000 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    storage: "128GB",
    brand: "Apple",
    condition: "Supermint (A+)",
    inStock: true,
    ram: "6GB",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A16 Bionic",
      camera: "48MP dual rear camera",
      battery: "3349 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Like-new condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "iphone-14-pro",
    name: "Apple iPhone 14 Pro",
    storage: "128GB",
    brand: "Apple",
    condition: "Good Condition",
    inStock: true,
    ram: "6GB",
    priceRange: "40k+",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A16 Bionic",
      camera: "48MP triple rear camera",
      battery: "3200 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected used device", "Good condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
  {
    id: "vivo-x90-pro",
    name: "Vivo X90 Pro",
    storage: "256GB",
    brand: "Vivo",
    condition: "Mint (A)",
    inStock: true,
    ram: "12GB+",
    priceRange: "30k-40k",
    image:
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&auto=format&fit=crop&q=80",
    ],
    specs: {
      display: "6.78-inch AMOLED",
      processor: "MediaTek Dimensity 9200",
      camera: "50MP triple rear camera",
      battery: "4870 mAh",
    },
    details: {
      conditionNotes: ["Professionally inspected device", "Excellent condition"],
      boxAccessories: ["Compatible charging cable", "SIM ejector tool"],
      warrantyService: ["Seller warranty as per applicable policy"],
      inspectionDetails: ["Hardware, camera, and charging functions checked"],
    },
  },
];
