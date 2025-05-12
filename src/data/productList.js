import modernSofaImage from '../assets/images/modern-sofa.png';
import elegantChairImage from '../assets/images/elegant-chair.png';
import woodenTableImage from '../assets/images/wooden-table.png';
import comfortBedImage from '../assets/images/potty-potty.png';
import studyDeskImage from '../assets/images/pingky-pingky.png';
import LeviosaImage from '../assets/images/Leviosa.png';
import pingkyImageImg from '../assets/images/Pingky.png';
import pottyImage from '../assets/images/grifo-grifo.png';

//thumbnailsimages Lolito
import lolitoThumb1 from '../assets/images/lolitoThumb1.png'; 
import lolitoThumb2 from '../assets/images/lolitoThumb2.png'; 
import lolitoThumb3 from '../assets/images/lolitoThumb3.png'; 
import lolitoThumb4 from '../assets/images/modern-sofa.png'; 
import lolitoThumb5 from '../assets/images/lolitoThumb5.png';
//thumbnailsimages Respira
import respiraThumb1 from '../assets/images/respiraThumb1.png'; 
import respiraThumb2 from '../assets/images/respiraThumb2.png'; 
import respiraThumb3 from '../assets/images/elegant-chair.png'; 
import respiraThumb4 from '../assets/images/respiraThumb4.png'; 
import respiraThumb5 from '../assets/images/respiraThumb5.png'; 
//thumbnailsimages Syltherine
import SyltherineThumb1 from '../assets/images/SyltherineThumb1.png'; 
import SyltherineThumb2 from '../assets/images/SyltherineThumb2.png'; 
import SyltherineThumb3 from '../assets/images/wooden-table.png'; 
import SyltherineThumb4 from '../assets/images/SyltherineThumb3.png'; 
import SyltherineThumb5 from '../assets/images/SyltherineThumb4.png'; 
//thumbnailsimages Potty
import PottyThumb1 from '../assets/images/PottyThumb1.png'; 
import PottyThumb2 from '../assets/images/PottyThumb2.png'; 
import PottyThumb3 from '../assets/images/potty-potty.png'; 
import PottyThumb4 from '../assets/images/PottyThumb3.png'; 
import PottyThumb5 from '../assets/images/PottyThumb4.png'; 
//thumbnailsimages Muggo
import MuggoThumb1 from '../assets/images/MuggoThumb1.png'; 
import MuggoThumb2 from '../assets/images/MuggoThumb2.png'; 
import MuggoThumb3 from '../assets/images/pingky-pingky.png'; 
import MuggoThumb4 from '../assets/images/MuggoThumb3.png'; 
import MuggoThumb5 from '../assets/images/MuggoThumb4.png'; 
//thumbnailsimages Leviosa
import LeviosaThumb1 from '../assets/images/LeviosaThumb1.png'; 
import LeviosaThumb2 from '../assets/images/LeviosaThumb2.png'; 
import LeviosaThumb3 from '../assets/images/Leviosa.png'; 
import LeviosaThumb4 from '../assets/images/LeviosaThumb3.png'; 
import LeviosaThumb5 from '../assets/images/LeviosaThumb4.png'; 
//thumbnailsimages Grifo
import GrifoThumb1 from '../assets/images/GrifoThumb1.png'; 
import GrifoThumb2 from '../assets/images/GrifoThumb2.png'; 
import GrifoThumb3 from '../assets/images/grifo-grifo.png'; 
import GrifoThumb4 from '../assets/images/GrifoThumb3.png'; 
import GrifoThumb5 from '../assets/images/GrifoThumb4.png'; 
//thumbnailsimages Pingky
import PingkyThumb1 from '../assets/images/PingkyThumb1.png'; 
import PingkyThumb2 from '../assets/images/PingkyThumb2.png'; 
import PingkyThumb3 from '../assets/images/Pingky.png'; 
import PingkyThumb4 from '../assets/images/PingkyThumb3.png'; 
import PingkyThumb5 from '../assets/images/PingkyThumb4.png'; 


export const productList = [
  {
    id: 1,
    name: "Lolito",
    description:"Luxury Big Sofa",
    longDescription: "Imagine sinking into a sprawling expanse of comfort – that's the allure of a big sofa. It's more than just a piece of furniture; it's an invitation to relax, to gather, to truly stretch out and unwind. A big sofa can become the heart of a living space, a central anchor around which life unfolds.The presence of a big sofa can dramatically alter the feel of a room. It can lend a sense of grandeur and spaciousness, especially when chosen wisely to complement the room's proportions. A large sectional, for instance, can define distinct zones within an open-plan living area, creating a cozy and inviting lounge space.Think about the sheer versatility a large sofa offers. It’s a haven for family movie nights, where everyone can snuggle together without fighting for elbow room. It’s the perfect spot for hosting friends, offering ample seating for lively conversations and shared laughter. On a quiet afternoon, it transforms into a personal oasis, a place to curl up with a good book, take a leisurely nap, or simply let the stresses of the day melt away.",
    originalPrice: 185000,
    price: 155000,
    isNew: false,
    discountPercentage: 30,
    image: modernSofaImage, // Use the imported variable
    sku: "LOL001", // Add SKU
    category: "Sofas", // Add Category
    tags: ["Sofa", "Living Room", "Modern"], // Add Tags (as an array)
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [lolitoThumb1, lolitoThumb2, lolitoThumb3, lolitoThumb4, lolitoThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Width: 220 cm', 'Depth: 95 cm', 'Height: 80 cm'],
      'Materials': 'Frame: Solid Wood, Upholstery: Premium Fabric, Legs: Metal',
      'Care Instructions': 'Spot clean with a damp cloth.',
    },
    reviews: [
      { author: 'Sophia', rating: 5, comment: 'Absolutely love this sofa! It’s so comfortable and looks fantastic in my living room.' },
      { author: 'Daniel', rating: 4, comment: 'A great purchase. The quality is excellent, and it’s very spacious.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 2,
    name: "Respira",
    description:"Outdoor table and Stool",
    longDescription: "The outdoor table serves as the anchor, a versatile surface that adapts to your needs. Picture a rustic wooden table, its natural grain weathered by the elements, perfect for a casual gathering. Or perhaps a sleek, modern table crafted from durable metal or elegant glass, reflecting the sunlight as you dine al fresco. The size and shape of the table dictate the flow of your outdoor space, encouraging intimate conversations around a bistro-style setting or accommodating larger groups for festive occasions around a spacious rectangular design.Together, the outdoor table and stool set create a focal point, a dedicated area for connection and enjoyment. Imagine the scene: sunlight dappling through the leaves, casting shadows on the tabletop as you share stories and laughter with loved ones. Picture the ease of having a designated spot for your morning routine, where you can sip your tea and listen to the sounds of nature.The materials chosen for outdoor tables and stools are designed to withstand the elements, promising durability and longevity. From weather-resistant wicker and rust-proof aluminum to sustainably sourced hardwoods, these pieces are built to endure sunshine, rain, and everything in between, allowing you to enjoy your outdoor oasis for years to come.",
    price: 150000,
    originalPrice: 245000,
    isNew: true,
    image: elegantChairImage, // Use the imported variable
    sku: "RES002", // Add SKU
    category: "Outdoor Furniture", // Add Category
    tags: ["Table", "Stool", "Outdoor"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [respiraThumb1, respiraThumb2, respiraThumb3, respiraThumb4, respiraThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Table Dimensions': ['Diameter: 120 cm', 'Height: 75 cm'],
      'Stool Dimensions': ['Width: 45 cm', 'Depth: 45 cm', 'Height: 45 cm'],
      'Materials': 'Table Top: Teak Wood, Frame: Powder-coated Steel, Stool: Wicker and Steel',
      'Care Instructions': 'Wipe with a damp cloth. Avoid prolonged exposure to direct sunlight.',
    },
    reviews: [
      { author: 'Olivia', rating: 5, comment: 'Perfect for our patio! The table and stools are sturdy and look great.' },
      { author: 'William', rating: 4, comment: 'Very happy with this outdoor set. It’s well-made and comfortable.' },
      { author: 'Vijay', rating: 5, comment: 'Absolutely love this sofa! It’s so comfortable and looks fantastic in my living room.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 3,
    name: "Syltherine",
    description:"Stylish cafe chair",
    longDescription: "A stylish cafe chair designed for comfort and durability. Its sleek design adds a modern touch to any space, whether it's a bustling cafe or a cozy corner in your home.The materials chosen speak volumes about both style and resilience. Imagine a frame crafted from sturdy metal, perhaps powder-coated in a matte finish for a refined look and protection against daily wear and tear. Or perhaps the warmth of bentwood, molded into an inviting shape that's both visually appealing and structurally sound. The seat itself might be upholstered in a high-quality fabric or supple leather, chosen not only for its luxurious feel but also for its ability to withstand frequent use and cleaning. Consider the subtle texture of a woven material or the smooth, inviting touch of a treated leather – each option contributing to the chair's overall character and practicality.",
    price: 85999,
    isNew: false,
    image: woodenTableImage, // Use the imported variable
    sku: "SYL003", // Add SKU
    category: "Chairs", // Add Category
    tags: ["Chair", "Cafe", "Stylish"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [SyltherineThumb1, SyltherineThumb2, SyltherineThumb3, SyltherineThumb4, SyltherineThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Width: 55 cm', 'Depth: 60 cm', 'Height: 85 cm', 'Seat Height: 45 cm'],
      'Materials': 'Frame: Beech Wood, Seat: Leatherette',
      'Care Instructions': 'Wipe clean with a soft, dry cloth.',
    },
    reviews: [
      { author: 'Ethan', rating: 4, comment: 'These chairs look fantastic in my cafe. They are also quite comfortable for the customers.' },
      { author: 'Olivia', rating: 5, comment: 'Love the design! They are sturdy and easy to clean.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
      { author: 'Ajay', rating: 4, comment: 'Very happy with this outdoor set. It’s well-made and comfortable.' },
      { author: 'Jack', rating: 5, comment: 'A great purchase. The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 4,
    name: "Potty",
    description:"Comfort Sofa Set",
    longDescription:"Experience ultimate comfort with the Potty sofa set. Designed with plush cushions and a supportive frame, this set is perfect for lounging and relaxing after a long day.Beyond the immediate sensation of comfort, the Potty sofa set is built with longevity in mind. The supportive frame, though unseen, is the backbone of its enduring quality, ensuring that this haven of relaxation remains a cherished part of your home for years to come. It's a testament to thoughtful construction, where comfort and durability work in perfect harmony.In essence, the Potty sofa set is an investment in your well-being. It's a stylish and inviting centerpiece for your living space, promising not just a place to sit, but an experience of ultimate comfort and relaxation, ready to embrace you after even the longest of days. It's where you come to recharge, to reconnect, and to simply be at ease.",
    price: 70999,
    discountPercentage: 50,
    isNew: false,
    image: comfortBedImage, 
    sku: "POT004", // Add SKU
    category: "Decor", // Add Category
    tags: ["Set", "Sofa", "Comfort"], 
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [PottyThumb1, PottyThumb2, PottyThumb3, PottyThumb4, PottyThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Sofa Dimensions': ['Width: 200 cm', 'Depth: 85 cm', 'Height: 75 cm'],
      'Loveseat Dimensions': ['Width: 150 cm', 'Depth: 85 cm', 'Height: 75 cm'],
      'Materials': 'Upholstery: Soft Velvet, Frame: Hardwood',
      'Care Instructions': 'Vacuum regularly. For spills, blot immediately with a clean cloth.',
    },
    reviews: [
      { author: 'Ava', rating: 5, comment: 'This sofa set is incredibly comfortable. We love spending our evenings on it.' },
      { author: 'Noah', rating: 4, comment: 'Good quality and very comfortable. The color is exactly as pictured.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
      { author: 'Ajay', rating: 5, comment: 'Very happy with this outdoor set. It’s well-made and comfortable.' },
    ],

  },
  {
    id: 5,
    name: "Muggo",
    description:"Small mug",
    price: 87799,
    isNew: false,
    discountPercentage: 10,
    longDescription: "The Muggo is a small and charming mug perfect for your morning coffee or tea. Its ergonomic design ensures a comfortable grip, and its durable material makes it ideal for everyday use.The Muggo isn't just a vessel for your morning brew; it's a small, delightful companion designed to enhance those quiet moments of reflection that often start our day. Picture holding it in your hands – its size feels just right, a cozy fit that invites a sense of warmth and familiarity. The charm lies in its simplicity, a form that is both aesthetically pleasing and inherently practical.Imagine the way your fingers wrap around its thoughtfully crafted shape. The ergonomic design isn't just a detail; it's an invitation to linger over your coffee or tea, providing a comfortable and secure grip that makes each sip a little more enjoyable. It feels natural in your hand, a seamless extension of your morning ritual.Beyond its pleasing form, the Muggo is built for the everyday demands of life. Envision the robust nature of its material, chosen for its ability to withstand the heat of your favorite beverages and the occasional bump or clink. This isn't a delicate piece meant for display; it's a reliable mug that you can reach for day after day, confident in its durability. Whether it's the jolt of your morning espresso or the soothing warmth of evening tea, the Muggo is designed to be a steadfast part of your routine.",
    image: studyDeskImage, 
    sku: "MUG005", // Add SKU
    category: "Kitchenware", // Add Category
    tags: ["Mug", "Small", "Drinkware"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [MuggoThumb1, MuggoThumb2, MuggoThumb3, MuggoThumb4, MuggoThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Height: 9 cm', 'Diameter: 8 cm', 'Capacity: 300 ml'],
      'Materials': 'Ceramic',
      'Care Instructions': 'Dishwasher and microwave safe.',
    },
    reviews: [
      { author: 'Isabella', rating: 5, comment: 'A lovely little mug. Perfect for my morning espresso.' },
      { author: 'Oliver', rating: 5, comment: 'Good size and quality. The handle is comfortable to hold.' },
      { author: 'Noah', rating: 4, comment: 'Good quality and very comfortable. The color is exactly as pictured.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 6,
    name: "Leviosa",
    description:"Stylish Cafe Chair",
     longDescription: "The Leviosa stylish cafe chair combines elegance with comfort. Its unique design and sturdy construction make it a perfect addition to any modern cafe or dining area.The Leviosa cafe chair is more than just a place to sit; it's a statement piece that effortlessly marries sophisticated elegance with exceptional comfort, promising to elevate the aesthetic and experience of any modern cafe or dining space it graces. Picture a chair that immediately catches the eye with its unique design – perhaps a graceful curve in the backrest, an intriguing interplay of lines, or a subtle yet distinctive detail that sets it apart. This isn't a chair that fades into the background; it's a deliberate design choice that speaks to a discerning sense of style.Imagine the visual impact of a row of Leviosa chairs in a contemporary cafe. Their sleek silhouettes and thoughtfully chosen materials would contribute to an atmosphere of refined modernity, inviting patrons to linger and enjoy their surroundings. The design might incorporate elements that are both visually appealing and ergonomically sound, hinting at the comfort that awaits.Now, envision settling into the Leviosa. The elegance of its design doesn't come at the expense of a comfortable seating experience. ",
    price: 54499,
    originalPrice: 115000,
    isNew: true,
    image: LeviosaImage, // Use the imported variable
    sku: "LEV006", // Add SKU
    category: "Cafe-Chairs", // Add Category
    tags: ["Chair", "Cafe", "Stylish"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [LeviosaThumb1, LeviosaThumb2, LeviosaThumb3, LeviosaThumb4, LeviosaThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Width: 50 cm', 'Depth: 55 cm', 'Height: 90 cm', 'Seat Height: 48 cm'],
      'Materials': 'Frame: Metal, Seat: PU Leather',
      'Care Instructions': 'Wipe clean with a damp cloth. Avoid harsh chemicals.',
    },
    reviews: [
      { author: 'Charlotte', rating: 5, comment: 'These chairs are exactly what I was looking for. They are stylish and comfortable.' },
      { author: 'Elijah', rating: 5, comment: 'Great value for the price. The quality is excellent.' },
      { author: 'Sophia', rating: 5, comment: 'Absolutely love this sofa! It’s so comfortable and looks fantastic in my living room.' },
      { author: 'Daniel', rating: 4, comment: 'A great purchase. The quality is excellent, and it’s very spacious.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],

  },
  {
    id: 7,
    name: "Grifo",
    description:"Night Lamp",
    longDescription: "The Grifo night lamp provides a soft and warm light, perfect for creating a cozy atmosphere in your bedroom. Its minimalist design blends seamlessly with any decor.The design of the Grifo night lamp is likely characterized by its simplicity and understated elegance. Envision a minimalist form, perhaps clean lines and a smooth surface, devoid of unnecessary ornamentation. This inherent simplicity allows it to blend effortlessly with a wide range of bedroom decors, whether your style is modern and sleek, rustic and cozy, or something in between. It's a versatile piece that complements its surroundings without demanding attention.Think about the way the soft light interacts with the textures and colors in your bedroom, enhancing their warmth and creating a sense of harmony. The Grifo isn't just functional; it's an element that contributes to the overall aesthetic of your sanctuary. It might sit unobtrusively on a bedside table, casting a gentle pool of light for reading or simply providing a comforting presence in the darkness.Consider the feeling of winding down at the end of the day, the harshness of overhead lights replaced by the gentle emanation of the Grifo. It creates a subtle transition, signaling to your body and mind that it's time to relax and prepare for sleep. The warm tones of the light can evoke a sense of coziness and security, making your bedroom feel like a true retreat.",
    price: 78499,
    discountPercentage: 20,
    isNew: false,
    image: pottyImage, // Use the imported variable
    sku: "GRI007", // Add SKU
    category: "Lighting", // Add Category
    tags: ["Lamp", "Night", "Decor"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [GrifoThumb1, GrifoThumb2, GrifoThumb3, GrifoThumb4, GrifoThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Height: 25 cm', 'Diameter: 15 cm'],
      'Materials': 'Base: Ceramic, Shade: Fabric',
      'Care Instructions': 'Wipe base with a dry cloth. Dust shade gently.',
    },
    reviews: [
      { author: 'Amelia', rating: 5, comment: 'This lamp is so cute and gives off a lovely soft light. Perfect for my nightstand.' },
      { author: 'Henry', rating: 5, comment: 'A nice lamp, but I wish the cord was a bit longer.' },
      { author: 'Charlotte', rating: 5, comment: 'These chairs are exactly what I was looking for. They are stylish and comfortable.' },
      { author: 'Elijah', rating: 5, comment: 'Great value for the price. The quality is excellent.' },
    ],
  },
  {
    id: 8,
    name: "Pingky",
    description:"Cute Bed set",
    longDescription: "The Pingky sofa set is a vibrant and playful addition to any living space. Upholstered in a soft, blush pink fabric, this set exudes a cheerful and inviting charm. Its contemporary design features clean lines and comfortable cushioning, perfect for adding a pop of color and cozy seating to your home. Whether you're entertaining guests or enjoying a relaxing evening, the Pingky sofa set offers both style and comfort in a delightful package.The Pingky sofa set isn't just furniture; it's a statement of joyful living, ready to infuse your home with its vibrant personality. Imagine the soft blush pink upholstery, a delicate yet cheerful hue that instantly brightens any room, creating a welcoming and uplifting atmosphere. The fabric itself, a plush velvet, invites touch and promises a luxurious seating experience. Its contemporary design is characterized by clean, modern lines, ensuring that the set feels both stylish and timeless, easily integrating into a variety of interior design aesthetics.Sink into the comfortably cushioned seats and feel the support embrace you, perfect for unwinding after a long day or settling in for a cozy evening. The set is thoughtfully designed not only for individual relaxation but also for social gatherings. ",
    price: 124999,
    isNew: true,
    image: pingkyImageImg, // Use the imported variable
    sku: "PIN008", // Add SKU
    category: "Bedroom", // Add Category
    tags: ["Bed", "Set", "Cute"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [PingkyThumb1, PingkyThumb2, PingkyThumb3, PingkyThumb4, PingkyThumb5],
    reviewsCount: 5,
    additionalInformation: {
    "Dimensions": ["Sofa: 80 cm (Height) x 200 cm (Width) x 90 cm (Depth)", "Loveseat: 80 cm (Height) x 150 cm (Width) x 90 cm (Depth)", "Armchair: 85 cm (Height) x 90 cm (Width) x 90 cm (Depth)"],
    "Materials": "Upholstery: Polyester Velvet, Frame: Solid Wood, Legs: Metal",
    "Care Instructions": "Spot clean with a damp cloth. Avoid direct sunlight to prevent fading."
  },
  reviews: [
    { "author": "Olivia", "rating": 5, "comment": "The pink color is so fun and bright! It really livens up my living room. The cushions are comfy too." },
    { "author": "Noah", "rating": 5, "comment": "Absolutely love this sofa set! It's stylish, comfortable, and surprisingly sturdy." },
    { "author": "Ava", "rating": 4, "comment": "It's a beautiful set, but I wish the fabric was a little more stain-resistant." },
    { "author": "William", "rating": 5, "comment": "Great purchase! The set arrived quickly and was easy to assemble. It's exactly what I wanted." }
    ],
  },
   {
    id: 9,
    name: "Lolito",
    description:"Luxury Big Sofa",
    longDescription: "Imagine sinking into a sprawling expanse of comfort – that's the allure of a big sofa. It's more than just a piece of furniture; it's an invitation to relax, to gather, to truly stretch out and unwind. A big sofa can become the heart of a living space, a central anchor around which life unfolds.The presence of a big sofa can dramatically alter the feel of a room. It can lend a sense of grandeur and spaciousness, especially when chosen wisely to complement the room's proportions. A large sectional, for instance, can define distinct zones within an open-plan living area, creating a cozy and inviting lounge space.Think about the sheer versatility a large sofa offers. It’s a haven for family movie nights, where everyone can snuggle together without fighting for elbow room. It’s the perfect spot for hosting friends, offering ample seating for lively conversations and shared laughter. On a quiet afternoon, it transforms into a personal oasis, a place to curl up with a good book, take a leisurely nap, or simply let the stresses of the day melt away.",
    originalPrice: 185000,
    price: 155000,
    isNew: false,
    discountPercentage: 30,
    image: modernSofaImage, // Use the imported variable
    sku: "LOL009", // Add SKU
    category: "Sofas", // Add Category
    tags: ["Sofa", "Living Room", "Modern"], // Add Tags (as an array)
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [lolitoThumb1, lolitoThumb2, lolitoThumb3, lolitoThumb4, lolitoThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Width: 220 cm', 'Depth: 95 cm', 'Height: 80 cm'],
      'Materials': 'Frame: Solid Wood, Upholstery: Premium Fabric, Legs: Metal',
      'Care Instructions': 'Spot clean with a damp cloth.',
    },
    reviews: [
      { author: 'Sophia', rating: 5, comment: 'Absolutely love this sofa! It’s so comfortable and looks fantastic in my living room.' },
      { author: 'Daniel', rating: 4, comment: 'A great purchase. The quality is excellent, and it’s very spacious.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 10,
    name: "Respira",
    description:"Outdoor table and Stool",
    longDescription: "The outdoor table serves as the anchor, a versatile surface that adapts to your needs. Picture a rustic wooden table, its natural grain weathered by the elements, perfect for a casual gathering. Or perhaps a sleek, modern table crafted from durable metal or elegant glass, reflecting the sunlight as you dine al fresco. The size and shape of the table dictate the flow of your outdoor space, encouraging intimate conversations around a bistro-style setting or accommodating larger groups for festive occasions around a spacious rectangular design.Together, the outdoor table and stool set create a focal point, a dedicated area for connection and enjoyment. Imagine the scene: sunlight dappling through the leaves, casting shadows on the tabletop as you share stories and laughter with loved ones. Picture the ease of having a designated spot for your morning routine, where you can sip your tea and listen to the sounds of nature.The materials chosen for outdoor tables and stools are designed to withstand the elements, promising durability and longevity. From weather-resistant wicker and rust-proof aluminum to sustainably sourced hardwoods, these pieces are built to endure sunshine, rain, and everything in between, allowing you to enjoy your outdoor oasis for years to come.",
    price: 150000,
    originalPrice: 245000,
    isNew: true,
    image: elegantChairImage, // Use the imported variable
    sku: "RES0010", // Add SKU
    category: "Outdoor Furniture", // Add Category
    tags: ["Table", "Stool", "Outdoor"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [respiraThumb1, respiraThumb2, respiraThumb3, respiraThumb4, respiraThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Table Dimensions': ['Diameter: 120 cm', 'Height: 75 cm'],
      'Stool Dimensions': ['Width: 45 cm', 'Depth: 45 cm', 'Height: 45 cm'],
      'Materials': 'Table Top: Teak Wood, Frame: Powder-coated Steel, Stool: Wicker and Steel',
      'Care Instructions': 'Wipe with a damp cloth. Avoid prolonged exposure to direct sunlight.',
    },
    reviews: [
      { author: 'Olivia', rating: 5, comment: 'Perfect for our patio! The table and stools are sturdy and look great.' },
      { author: 'William', rating: 4, comment: 'Very happy with this outdoor set. It’s well-made and comfortable.' },
      { author: 'Vijay', rating: 5, comment: 'Absolutely love this sofa! It’s so comfortable and looks fantastic in my living room.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 11,
    name: "Syltherine",
    description:"Stylish cafe chair",
    longDescription: "A stylish cafe chair designed for comfort and durability. Its sleek design adds a modern touch to any space, whether it's a bustling cafe or a cozy corner in your home.The materials chosen speak volumes about both style and resilience. Imagine a frame crafted from sturdy metal, perhaps powder-coated in a matte finish for a refined look and protection against daily wear and tear. Or perhaps the warmth of bentwood, molded into an inviting shape that's both visually appealing and structurally sound. The seat itself might be upholstered in a high-quality fabric or supple leather, chosen not only for its luxurious feel but also for its ability to withstand frequent use and cleaning. Consider the subtle texture of a woven material or the smooth, inviting touch of a treated leather – each option contributing to the chair's overall character and practicality.",
    price: 85999,
    isNew: false,
    image: woodenTableImage, // Use the imported variable
    sku: "SYL0011", // Add SKU
    category: "Chairs", // Add Category
    tags: ["Chair", "Cafe", "Stylish"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [SyltherineThumb1, SyltherineThumb2, SyltherineThumb3, SyltherineThumb4, SyltherineThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Width: 55 cm', 'Depth: 60 cm', 'Height: 85 cm', 'Seat Height: 45 cm'],
      'Materials': 'Frame: Beech Wood, Seat: Leatherette',
      'Care Instructions': 'Wipe clean with a soft, dry cloth.',
    },
    reviews: [
      { author: 'Ethan', rating: 4, comment: 'These chairs look fantastic in my cafe. They are also quite comfortable for the customers.' },
      { author: 'Olivia', rating: 5, comment: 'Love the design! They are sturdy and easy to clean.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
      { author: 'Ajay', rating: 4, comment: 'Very happy with this outdoor set. It’s well-made and comfortable.' },
      { author: 'Jack', rating: 5, comment: 'A great purchase. The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 12,
    name: "Potty",
    description:"Comfort Sofa Set",
    longDescription:"Experience ultimate comfort with the Potty sofa set. Designed with plush cushions and a supportive frame, this set is perfect for lounging and relaxing after a long day.Beyond the immediate sensation of comfort, the Potty sofa set is built with longevity in mind. The supportive frame, though unseen, is the backbone of its enduring quality, ensuring that this haven of relaxation remains a cherished part of your home for years to come. It's a testament to thoughtful construction, where comfort and durability work in perfect harmony.In essence, the Potty sofa set is an investment in your well-being. It's a stylish and inviting centerpiece for your living space, promising not just a place to sit, but an experience of ultimate comfort and relaxation, ready to embrace you after even the longest of days. It's where you come to recharge, to reconnect, and to simply be at ease.",
    price: 70999,
    discountPercentage: 50,
    isNew: false,
    image: comfortBedImage, 
    sku: "POT0012", // Add SKU
    category: "Decor", // Add Category
    tags: ["Set", "Sofa", "Comfort"], 
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [PottyThumb1, PottyThumb2, PottyThumb3, PottyThumb4, PottyThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Sofa Dimensions': ['Width: 200 cm', 'Depth: 85 cm', 'Height: 75 cm'],
      'Loveseat Dimensions': ['Width: 150 cm', 'Depth: 85 cm', 'Height: 75 cm'],
      'Materials': 'Upholstery: Soft Velvet, Frame: Hardwood',
      'Care Instructions': 'Vacuum regularly. For spills, blot immediately with a clean cloth.',
    },
    reviews: [
      { author: 'Ava', rating: 5, comment: 'This sofa set is incredibly comfortable. We love spending our evenings on it.' },
      { author: 'Noah', rating: 4, comment: 'Good quality and very comfortable. The color is exactly as pictured.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
      { author: 'Ajay', rating: 5, comment: 'Very happy with this outdoor set. It’s well-made and comfortable.' },
    ],

  },
  {
    id: 13,
    name: "Muggo",
    description:"Small mug",
    price: 87799,
    isNew: false,
    discountPercentage: 10,
    longDescription: "The Muggo is a small and charming mug perfect for your morning coffee or tea. Its ergonomic design ensures a comfortable grip, and its durable material makes it ideal for everyday use.The Muggo isn't just a vessel for your morning brew; it's a small, delightful companion designed to enhance those quiet moments of reflection that often start our day. Picture holding it in your hands – its size feels just right, a cozy fit that invites a sense of warmth and familiarity. The charm lies in its simplicity, a form that is both aesthetically pleasing and inherently practical.Imagine the way your fingers wrap around its thoughtfully crafted shape. The ergonomic design isn't just a detail; it's an invitation to linger over your coffee or tea, providing a comfortable and secure grip that makes each sip a little more enjoyable. It feels natural in your hand, a seamless extension of your morning ritual.Beyond its pleasing form, the Muggo is built for the everyday demands of life. Envision the robust nature of its material, chosen for its ability to withstand the heat of your favorite beverages and the occasional bump or clink. This isn't a delicate piece meant for display; it's a reliable mug that you can reach for day after day, confident in its durability. Whether it's the jolt of your morning espresso or the soothing warmth of evening tea, the Muggo is designed to be a steadfast part of your routine.",
    image: studyDeskImage, 
    sku: "MUG0013", // Add SKU
    category: "Kitchenware", // Add Category
    tags: ["Mug", "Small", "Drinkware"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [MuggoThumb1, MuggoThumb2, MuggoThumb3, MuggoThumb4, MuggoThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Height: 9 cm', 'Diameter: 8 cm', 'Capacity: 300 ml'],
      'Materials': 'Ceramic',
      'Care Instructions': 'Dishwasher and microwave safe.',
    },
    reviews: [
      { author: 'Isabella', rating: 5, comment: 'A lovely little mug. Perfect for my morning espresso.' },
      { author: 'Oliver', rating: 5, comment: 'Good size and quality. The handle is comfortable to hold.' },
      { author: 'Noah', rating: 4, comment: 'Good quality and very comfortable. The color is exactly as pictured.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],
  },
  {
    id: 14,
    name: "Leviosa",
    description:"Stylish Cafe Chair",
     longDescription: "The Leviosa stylish cafe chair combines elegance with comfort. Its unique design and sturdy construction make it a perfect addition to any modern cafe or dining area.The Leviosa cafe chair is more than just a place to sit; it's a statement piece that effortlessly marries sophisticated elegance with exceptional comfort, promising to elevate the aesthetic and experience of any modern cafe or dining space it graces. Picture a chair that immediately catches the eye with its unique design – perhaps a graceful curve in the backrest, an intriguing interplay of lines, or a subtle yet distinctive detail that sets it apart. This isn't a chair that fades into the background; it's a deliberate design choice that speaks to a discerning sense of style.Imagine the visual impact of a row of Leviosa chairs in a contemporary cafe. Their sleek silhouettes and thoughtfully chosen materials would contribute to an atmosphere of refined modernity, inviting patrons to linger and enjoy their surroundings. The design might incorporate elements that are both visually appealing and ergonomically sound, hinting at the comfort that awaits.Now, envision settling into the Leviosa. The elegance of its design doesn't come at the expense of a comfortable seating experience. ",
    price: 54499,
    originalPrice: 115000,
    isNew: true,
    image: LeviosaImage, // Use the imported variable
    sku: "LEV0014", // Add SKU
    category: "Cafe-Chairs", // Add Category
    tags: ["Chair", "Cafe", "Stylish"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [LeviosaThumb1, LeviosaThumb2, LeviosaThumb3, LeviosaThumb4, LeviosaThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Width: 50 cm', 'Depth: 55 cm', 'Height: 90 cm', 'Seat Height: 48 cm'],
      'Materials': 'Frame: Metal, Seat: PU Leather',
      'Care Instructions': 'Wipe clean with a damp cloth. Avoid harsh chemicals.',
    },
    reviews: [
      { author: 'Charlotte', rating: 5, comment: 'These chairs are exactly what I was looking for. They are stylish and comfortable.' },
      { author: 'Elijah', rating: 5, comment: 'Great value for the price. The quality is excellent.' },
      { author: 'Sophia', rating: 5, comment: 'Absolutely love this sofa! It’s so comfortable and looks fantastic in my living room.' },
      { author: 'Daniel', rating: 4, comment: 'A great purchase. The quality is excellent, and it’s very spacious.' },
      { author: 'James', rating: 5, comment: 'Perfect for our patio! The quality is excellent, and it’s very spacious.' },
    ],

  },
  {
    id: 15,
    name: "Grifo",
    description:"Night Lamp",
    longDescription: "The Grifo night lamp provides a soft and warm light, perfect for creating a cozy atmosphere in your bedroom. Its minimalist design blends seamlessly with any decor.The design of the Grifo night lamp is likely characterized by its simplicity and understated elegance. Envision a minimalist form, perhaps clean lines and a smooth surface, devoid of unnecessary ornamentation. This inherent simplicity allows it to blend effortlessly with a wide range of bedroom decors, whether your style is modern and sleek, rustic and cozy, or something in between. It's a versatile piece that complements its surroundings without demanding attention.Think about the way the soft light interacts with the textures and colors in your bedroom, enhancing their warmth and creating a sense of harmony. The Grifo isn't just functional; it's an element that contributes to the overall aesthetic of your sanctuary. It might sit unobtrusively on a bedside table, casting a gentle pool of light for reading or simply providing a comforting presence in the darkness.Consider the feeling of winding down at the end of the day, the harshness of overhead lights replaced by the gentle emanation of the Grifo. It creates a subtle transition, signaling to your body and mind that it's time to relax and prepare for sleep. The warm tones of the light can evoke a sense of coziness and security, making your bedroom feel like a true retreat.",
    price: 78499,
    discountPercentage: 20,
    isNew: false,
    image: pottyImage, // Use the imported variable
    sku: "GRI0015", // Add SKU
    category: "Lighting", // Add Category
    tags: ["Lamp", "Night", "Decor"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [GrifoThumb1, GrifoThumb2, GrifoThumb3, GrifoThumb4, GrifoThumb5],
    reviewsCount: 5,
    additionalInformation: {
      'Dimensions': ['Height: 25 cm', 'Diameter: 15 cm'],
      'Materials': 'Base: Ceramic, Shade: Fabric',
      'Care Instructions': 'Wipe base with a dry cloth. Dust shade gently.',
    },
    reviews: [
      { author: 'Amelia', rating: 5, comment: 'This lamp is so cute and gives off a lovely soft light. Perfect for my nightstand.' },
      { author: 'Henry', rating: 5, comment: 'A nice lamp, but I wish the cord was a bit longer.' },
      { author: 'Charlotte', rating: 5, comment: 'These chairs are exactly what I was looking for. They are stylish and comfortable.' },
      { author: 'Elijah', rating: 5, comment: 'Great value for the price. The quality is excellent.' },
    ],
  },
  {
    id: 16,
    name: "Pingky",
    description:"Cute Bed set",
    longDescription: "The Pingky sofa set is a vibrant and playful addition to any living space. Upholstered in a soft, blush pink fabric, this set exudes a cheerful and inviting charm. Its contemporary design features clean lines and comfortable cushioning, perfect for adding a pop of color and cozy seating to your home. Whether you're entertaining guests or enjoying a relaxing evening, the Pingky sofa set offers both style and comfort in a delightful package.The Pingky sofa set isn't just furniture; it's a statement of joyful living, ready to infuse your home with its vibrant personality. Imagine the soft blush pink upholstery, a delicate yet cheerful hue that instantly brightens any room, creating a welcoming and uplifting atmosphere. The fabric itself, a plush velvet, invites touch and promises a luxurious seating experience. Its contemporary design is characterized by clean, modern lines, ensuring that the set feels both stylish and timeless, easily integrating into a variety of interior design aesthetics.Sink into the comfortably cushioned seats and feel the support embrace you, perfect for unwinding after a long day or settling in for a cozy evening. The set is thoughtfully designed not only for individual relaxation but also for social gatherings. ",
    price: 124999,
    isNew: true,
    image: pingkyImageImg, // Use the imported variable
    sku: "PIN0016", // Add SKU
    category: "Bedroom", // Add Category
    tags: ["Bed", "Set", "Cute"], // Add Tags
    sizes: ['XL', 'L', 'XS'],
    colors: ['#000000', '#3B5998', '#D4AC0D'],
    images: [PingkyThumb1, PingkyThumb2, PingkyThumb3, PingkyThumb4, PingkyThumb5],
    reviewsCount: 5,
    additionalInformation: {
    "Dimensions": ["Sofa: 80 cm (Height) x 200 cm (Width) x 90 cm (Depth)", "Loveseat: 80 cm (Height) x 150 cm (Width) x 90 cm (Depth)", "Armchair: 85 cm (Height) x 90 cm (Width) x 90 cm (Depth)"],
    "Materials": "Upholstery: Polyester Velvet, Frame: Solid Wood, Legs: Metal",
    "Care Instructions": "Spot clean with a damp cloth. Avoid direct sunlight to prevent fading."
  },
  reviews: [
    { "author": "Olivia", "rating": 5, "comment": "The pink color is so fun and bright! It really livens up my living room. The cushions are comfy too." },
    { "author": "Noah", "rating": 5, "comment": "Absolutely love this sofa set! It's stylish, comfortable, and surprisingly sturdy." },
    { "author": "Ava", "rating": 4, "comment": "It's a beautiful set, but I wish the fabric was a little more stain-resistant." },
    { "author": "William", "rating": 5, "comment": "Great purchase! The set arrived quickly and was easy to assemble. It's exactly what I wanted." }
    ],
  },
];