'use client';

// Yahan aapke Hot Deals wale products hain
const hotDealsProducts = [
  {
    id: "1005009706548546",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S414c4ed43dcb46dda53c2f30222aaa0ff.png",
    name: "4pcs Dark Brown Lip Kit - Lip Liner + Lip Glaze, Waterproof & Long-Lasting Matte Effect,Versatile for Casual & Formal Occasions,",
    originalPrice: 7.35,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3aO6Rvv"
  },
  {
    id: "1005007068616223",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9ce4017ec7a2469b9e9f458caa404af1j.jpg",
    name: "1PC/15PCS 1.5m Small Tape Measure Portable Student Soft Leather Three Measurement Clothes Automatic Recycling",
    originalPrice: 1.41,
    discountPrice: 0.69,
    url: "https://s.click.aliexpress.com/e/_c4VyAOVH"
  },
  {
    id: "1005007066756985",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfff4e9d3606c439e821b2ddf638cc87bi.jpg",
    name: "12 Pairs Of Luxurious, Simple, Shiny, And Caring Zirconia Decorative Earrings Are Suitable For Gifts To Parties,And Couples",
    originalPrice: 1.78,
    discountPrice: 0.76,
    url: "https://s.click.aliexpress.com/e/_c4PFIkWn"
  },
  {
    id: "1005005761412973",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbf8d4901eb274ea1aea585f966dd97a4F.jpg",
    name: "55 Pieces Stainless Steel Big Eye Hand Sewing Needles Set with Different Sizes for Sewing Needlework Embroidery Needles",
    originalPrice: 1.99,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4SEWQ43"
  },
  {
    id: "1005005250886003",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S373ff94d092b49939fd93a8991ce3cbaN.jpg",
    name: "8.5 Inch LCD Writing Tablet Digital Drawing Tablet Handwriting Pads Portable Electronic Tablet Board ultra-thin Board",
    originalPrice: 10.6,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3sUrirh"
  },
  {
    id: "1005008710894079",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S59152822e94045e799d354f95f410bdbX.jpeg",
    name: "Durable Shoe Washing Machine Bag for All Shoe Types-Yellow with Blue Zipper,Ideal for Sneakers and Casual Shoes,Laundry Wash Bag",
    originalPrice: 11.14,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4TC8x6x"
  },
  {
    id: "1005009272555110",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc55c215681fc4d0e8f50e0083f507166T.jpg",
    name: "120 Pieces of Transparent Coffin/Almond/Fine High Heels/椭圆形/Square/Other Shape Style Boxed Nails, 12 Sizes Full Coverage Acrylic Pressure-Stick Nails, Suitable for Home DIY Manicure, Art and Manicure Salon Use or Gifts for Women's Nail Care Essential Christmas Nails",
    originalPrice: 5.13,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c45WpyG3"
  },
  {
    id: "1005009558589813",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa541af90824145369f69fcd222947de4k.jpg",
    name: "6 Pieces Glass Mirror Lip Gloss Set Hydrating Lightweight Lip Balm Glossy Shimmer Sheer Tint Peach Cherry Pink",
    originalPrice: 7.18,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AtJfQx"
  },
  {
    id: "1005006995647536",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S64feda49ecf4439997e5dbbfd3b559aa7.jpg",
    name: "360 Clip Mobile Phone Holder Stand Portable Flexible Lazy Bed Desktop Bracket Desk Mount Stand Base For iPhone Samsung Xiaomi",
    originalPrice: 8.16,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4BzfqIf"
  },
  {
    id: "1005007484550939",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80d82828bd2c4b80b3686aa613dfade13.png",
    name: "Cars Disney Pixar Cars Lightning McQueen Mater Jackson Storm The King Mater 1:55 Metal Alloy Car Toy Model Toys Children Gifts",
    originalPrice: 3.72,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3CbEDMB"
  },
  {
    id: "1005009004165687",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sea905d9eddc84257b771dbdb9931903dd.jpg",
    name: "Labubu Accessories Clothes Designer Suitable for V1 V2 V3 Labubu Pendants Cute Personality Fashion Birthday Gift",
    originalPrice: 2.29,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4UmsHrl"
  },
  {
    id: "1005006507011550",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se70f5e64fe3642ed96f5b347e169b6f9Y.jpg",
    name: "For Magesafe Magnetic Transparent Wireless Charge Case For iPhone 11 12 13 14 15 16 17 Air Pro Max Plus Mini Shockproof PC Cover",
    originalPrice: 4.29,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4tLliIn"
  },
  {
    id: "1005009800425890",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/A598d5ffd96f64c19859f85761dcc249e4.jpg",
    name: "2Pcs Car Seat Gap Filler Seat Crevice Storage Box Bag Between Seats Console Organizer Decoration Interior Auto Accessories",
    originalPrice: 4.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2JIbLbd"
  },
  {
    id: "1005007863431152",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se028c1c5ac2443c1b5ad195bf8515e405.jpg",
    name: "Winter Men's And Women's Warm Gloves, Waterproof And Skin Friendly Touch Screen, Suitable For Cycling And Skiing",
    originalPrice: 7.66,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4FHwVun"
  },
  {
    id: "1005008798119402",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa25f993d986a49dcb8b3aa6fe05ec1f17.jpg",
    name: "MIYOO Flip V2 Handheld Game Players 3.5''IPS Screen Linux System Onion OS Video Game Consoles Free Storage Bag Gamer Gift Gaming",
    originalPrice: 206.39,
    discountPrice: 45.21,
    url: "https://s.click.aliexpress.com/e/_c3M0dmyx"
  },
  {
    id: "1005008562727265",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S311c6c7e708049969a01d81c312b91beQ.jpg",
    name: "Solder Paste Rosin Flux 10g/30g/100g Lead-free Welding Flux Iron Repair Welding Paste Soldering Tin Soldering Oil Soldering Flux",
    originalPrice: 3.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4oCST0r"
  },
  {
    id: "1005008520099287",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S44d219e6036c4bfaacb8174cfce53bacH.jpg",
    name: "Magic Emery Sponge Brush Wipe Eraser Cleaner Kitchen Bath Rust Strong Decontamination Cleaning Tools With Handle Household Tools",
    originalPrice: 4.86,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4VEZ0hz"
  },
  {
    id: "1005006606318296",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3a3270d3b93b4ec0ab8c3651063a7926n.jpg",
    name: "Anime Figure Demon Slayer Figures Kimetsu No Yaiba Doll Tanjiro Nezuko Zenitsu Figurine Inosuke Warrior Action Figure Model Toys",
    originalPrice: 7.91,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2RR0VCR"
  },
  {
    id: "1005007736685822",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd7556c4418114098ad02b34cbc5eb810o.jpg",
    name: "6Pcs Fruity Flavor Watery Glossy Lip Gloss Set Clear Lip Gel Hydrating Moisturizing Lip Gloss Women Lips Makeup Wholesale",
    originalPrice: 9.51,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3kwpTxV"
  },
  {
    id: "1005008788454028",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S221561a3aef243e89c1a3de9cbc44267j.jpg",
    name: "Custom Mouse Pad Print Diy Large Playmat Gaming Customized Mat XXL Size Gamer Office Mousepad OEM Logo Bulk Discounts Desk Mat",
    originalPrice: 2.62,
    discountPrice: 2.62,
    url: "https://s.click.aliexpress.com/e/_c344Lilz"
  },
  {
    id: "1005005506520355",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf63cfc0fe9e747ca8fdcc431f731a4a5X.jpg",
    name: "Insulated Lunch Bag Insulation Bento Pack Aluminum Foil Rice Bag Meal Pack Ice Pack Student Bento Lunch Handbag Insulation",
    originalPrice: 5.74,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3teB67v"
  },
  {
    id: "1005008105797936",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d716917da5e431dac55467ab82b96b2s.png",
    name: "Dent Puller Pull Bodywork Panel Remover Sucker Tool Car Repair Sucker ToolSuction Cup Suitable For Small Dents",
    originalPrice: 3.64,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3uI2ZgR"
  },
  {
    id: "1005010065511014",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf42975ff905b46f5b0ec2fe86e1d2555r.png",
    name: "SUMRY 4KW 6KW 120V Off Grid Solar Inverter 24V 140A 5600W MPPT Charger Pure Sine Wave Home Inverter 6.25 Inch LCD Display",
    originalPrice: 693.67,
    discountPrice: 259.31,
    url: "https://s.click.aliexpress.com/e/_c3X7dmfp"
  },
  {
    id: "1005006922822451",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sde7e6607577c477f80601d4d6f052057z.jpg",
    name: "100/5Pcs Gel Pen Set 100 Colored Gel Pens for Coloring Books Drawing Doodle Crafts Scrapbooks Journaling Planner School Supplies",
    originalPrice: 3.31,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3R4hzvv"
  },
  {
    id: "1005007225994467",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb45c225afb704b65b7d0ddb1a0bfd329c.jpg",
    name: "Car Interior Mirrors Sun Visor Plate LED HD Makeup Mirror for Girls Women Rechargeable Fill Light Universal Thin Vanity Mirror",
    originalPrice: 24.38,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4PuV6uT"
  },
  {
    id: "1005005062970257",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdfcd174442074fd0b2d5d4819a10c371l.jpg",
    name: "German Ultra-fine No. 5 Cell Pimples Blackhead Clip Tweezers Beauty Salon Special Scraping & Closing Artifact Acne Needle Tool",
    originalPrice: 3.24,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4aaH0fv"
  },
  {
    id: "1005006739422364",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S04c74d006f6045218d5a9e3bb28ba4aa4.jpg",
    name: "1Pcs Square Heat Resistant Coffee Glass Cup With Lid and Straw Transparent Milk Tea Juice Cups Coffee Mug For Home Bar Drinkware",
    originalPrice: 13.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4kyyKPD"
  },
  {
    id: "1005007774109173",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb61f939d09694100a35314c64eb28650w.jpg",
    name: "5-50Pcs Car Tire Repair Tool Kit with Rubber Strip Tubeless Tyre Puncture Studding Plug Motorcycle Truck Vacuum Tire Repair Tool",
    originalPrice: 2.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3cIuayT"
  },
  {
    id: "1005005975943577",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1ff1a8d6788c4ef2bf0a0673a07b4e45G.jpg",
    name: "SEAMETAL Rearview Mirror Phone Holder for Car Free Rotation Adjustment Phone Mount Stable Gripper Smartphone Navigation Bracket",
    originalPrice: 6.64,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c36UxvyR"
  },
  {
    id: "1005006490761287",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se8c407a81b78414a9af5c93ae6aaab13M.jpg",
    name: "High Pressure Continuous Spray Bottle Hair Care Makeup Water Replenishing Spray Bottle Separate Bottle Press Mist Spray Bottle",
    originalPrice: 8.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3mo2Q07"
  },
  {
    id: "1005007497703687",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sedf44e43f06b4c7aac6320d2ce6cb6b0g.jpg",
    name: "AOLIKES 1PC Patella Knee Brace Knee Compression Sleeve Support for Women Men Knee Pain Arthritis Pain Sport Knee Guard Knee Pads",
    originalPrice: 17.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3da3pmb"
  },
  {
    id: "1005005398523384",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/HTB1KF8WXizxK1RkSnaVq6xn9VXaW.jpg",
    name: "1PC 2.0mm 3.5mm 1.5M Welding Wires Desoldering Braid Solder Remover Wick Wire Repair Tool",
    originalPrice: 3.6,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4eVAr8f"
  },
  {
    id: "1005005878597913",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S86e2cd41500945c48753e24d34742192M.jpg",
    name: "Relieve Hand Discomfort with 1pair Fingerless Compression Gloves",
    originalPrice: 7.84,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3n52wAX"
  },
  {
    id: "1005006926468898",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9425fcd5f7ab4ab29c9074e0f7facc2aw.jpg",
    name: "Custom Card Game Pad HD Mousepad Computer Mouse Pad XXL Playmat Non-Slip Natural Rubber Carpet Mouse Mats Desktop DIY Mouse Pad",
    originalPrice: 13.99,
    discountPrice: 1.97,
    url: "https://s.click.aliexpress.com/e/_c3VgUlZh"
  },
  {
    id: "1005007386070597",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sea2903d3d21d40f2943dfe91468edef7k.jpg",
    name: "Rimless Sunglasses Rectangle Fashion Popular Women Men Shades Small Square Sun Glasses For Female Male Summer Traveling Oculos",
    originalPrice: 6.16,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3VEiurh"
  },
  {
    id: "1005006507526810",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S30597e9aa60049c59373e336ee0ff4bfL.jpg",
    name: "Korean Import Original Suatelier Collection Kawaii Daily Stickers Scrapbooking Diy Journal Stationery Sticker Deco Art Supplies",
    originalPrice: 2.05,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3ewC4Hl"
  },
  {
    id: "1005007084859315",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7d46a7715b6f4fcc8c1a0ef5f13568a0f.jpg",
    name: "Data Frog for R36S Case Retro Video Game Bags EVA Cover Case for RG35XX R35S Miyoo Mini Plus Founded Protective Bag",
    originalPrice: 9.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4X5R4EP"
  },
  {
    id: "1005009569692060",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d7c1d82cd6c4b55a274cbb9a60d8de2s.png",
    name: "Spongebob Squarepants Patrick Star Series Plush Toys Little Monsters Funny Ugly Monster Tooth Birthday Christmas Gift",
    originalPrice: 6.96,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3xWeF2x"
  },
  {
    id: "1005006362995957",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc1656463676c4f0eb92e5cf4b8b618e80.jpg",
    name: "12 Pcs Set Wrench Socket Set Motorcycle Bicycle Repairing Tool Hardware Car Boat Auto Repair Tools Bike Multitool Bike Tool Kit",
    originalPrice: 12.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3FVaWfv"
  },
  {
    id: "1005006801982174",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4f081271d3864a80ac1e9b32f2390f64R.jpg",
    name: "Makeup Organizer Female Toiletry Kit Bag Make Up Case Storage Pouch Luxury Lady Box, Cosmetic Bag, Organizer Bag For Travel Zip",
    originalPrice: 7.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3VUNDUR"
  },
  {
    id: "1005010218673255",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S162485bb13f642828d9fde97a1919307A.jpg",
    name: "Le Male Elixir by Jean Paul Gaultier Men's 4.2 oz perfume spray",
    originalPrice: 40.06,
    discountPrice: 5.83,
    url: "https://s.click.aliexpress.com/e/_c4MiReOn"
  },
  {
    id: "1005008586959136",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S516c92856cbf49f380c91e449493607fV.jpg",
    name: "NMMiner NerdMiner V2 Hashrate Lucky Miner ESP32 2.8 inch Smart Display Crypto Solo Lottery 960KH/s Bitcoin ESP32-2432S028R DROOM",
    originalPrice: 29.77,
    discountPrice: 8.96,
    url: "https://s.click.aliexpress.com/e/_c3fEZC6n"
  },
  {
    id: "1005006562271252",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S07cb69afd11d4847a543d4eb301d8f7a5.jpg",
    name: "E27 Fan Shape Foldable 28W LED Bulb AC220V/110V Deformation for Home Ceiling Lights Warehouse and Garage White Light 6500K Bulb",
    originalPrice: 8.91,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3fyZu5d"
  },
  {
    id: "1005006995789811",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc244976cf9fc4052a1b8ccf072f3bb133.jpg",
    name: "5/6PCS Fashion Women's Quartz Watch Leather Band Analog Wrist Watches Heart Rhinestone Jewelry Set(Without Box)",
    originalPrice: 5.72,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3i4vnDh"
  },
  {
    id: "1005006930863642",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0139488e654848fbbacc85039f31e20b1.jpg",
    name: "Retro T9 Original Haircutting Machine Set Jackets Trimmer Men's Electric Shaver Male Lence Pro Barber Shaver for Sensitive Areas",
    originalPrice: 7.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4bKi3gJ"
  },
  {
    id: "1005006571667376",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1a817b24326f4542b47677d12e89feca2.jpg",
    name: "Lazy Bedside DesktopMobile Phone Clamp Bracket Flexible Long Arm Gooseneck Lazy Person Bracket With Handle Overhead Live Bracket",
    originalPrice: 5.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4dD9jxH"
  },
  {
    id: "1005009467763409",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb6ea90056fee4bb8ba5c2ea92eb59310m.jpg",
    name: "Rechargeable LED Flashlight Zoomable Torch with LCD Display 3 Modes Waterproof High Power Hand Light Outdoor Wilderness Camping",
    originalPrice: 4.33,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c44V5hq3"
  },
  {
    id: "1005005757400107",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf701acca70e6477da759d3e65f667bcb5.jpg",
    name: "Car Phone Holder Car Air Vent Clip Mount Mobile Cell Stand Smartphone GPS Support For 4.7-6.7 Inch Mobile Devices",
    originalPrice: 4.74,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4BJ9vuJ"
  },
  {
    id: "1005008894664375",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sab71a09201c840b28800233364e12385b.jpg",
    name: "Purple Tooth Cleaning Powder - Sulfate-Free, Deep Cleaning and Polishing, Whitens Teeth in 5 Days, Portable for Daily Use and Travel",
    originalPrice: 5.58,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4nC25O7"
  },
  {
    id: "1005006168269235",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8b3e7fdfc45743408438479637d36ef2x.jpg",
    name: "Christmas Lights LED Fairy String Curtain Lights 8 Mode Remote USB Festoon Christmas Decor For Home Holiday New Year Lamp",
    originalPrice: 9.88,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3tHSQj1"
  },
  {
    id: "1005008071033097",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S322337184d9c45a1b510bbe7d2a57f2cd.jpg",
    name: "Makeup Brush Set Soft Fluffy Professiona Cosmetic Foundation Powder Eyeshadow Kabuki Blending Make Up Brush Beauty Tool Makeup",
    originalPrice: 9.88,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3YmERQb"
  },
  {
    id: "1005007545433128",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S77eeafedaecb456cace06375106efa93k.jpg",
    name: "Coconut Slippers Cloud Thick-soled Sandals Summer Fashion Soft Bottom Beach Men Slippers Women's Sandals  EVA Slides",
    originalPrice: 11.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3larlcP"
  },
  {
    id: "1005005856471552",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H4f7868d0386b4a209c42f754775f4543s.jpg",
    name: "Electric Muscle Stimulator EMS Wireless Buttocks Hip Trainer Abdominal ABS Stimulator Fitness Body Slimming Massager",
    originalPrice: 11.41,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4OAZMbp"
  },
  {
    id: "1005005565214375",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Seeeb48d6d9cf4dd4a688a35c45c6239cR.jpg",
    name: "Tripods Tripod For Phone Mobile Camera Holder Clip Smartphone Monopod Tripe Stand Octopus Mini Tripod Stativ For Phone",
    originalPrice: 3.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3I7WjIj"
  },
  {
    id: "1005006926453576",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S491cdf67381c4f73bd2f876cb8561380D.jpg",
    name: "Ultra-strong Double Sided Adhesive Monster Tape Home Appliance Waterproof Wall Stickers Home Improvement Resistant Tapes",
    originalPrice: 1.51,
    discountPrice: 0.72,
    url: "https://s.click.aliexpress.com/e/_c4MRkq8b"
  },
  {
    id: "1005005928117831",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb9c9cc0dd26941c8825ccae55fce560dN.jpg",
    name: "Rechargeable Mini RC Drone Remote Safe Fall-resistant RC Helicopters Drone Children Toys with Different Patterns",
    originalPrice: 12.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Jh29Td"
  },
  {
    id: "1005007625335598",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbb6984db12434fe39023b2cc679ab21ag.jpg",
    name: "DIY Lashes Extension Kit Eyelashes 200 PCS Clusters Lash Bond and Seal Makeup Tools for Gluing  Lashes Gluing Glue  Accessories",
    originalPrice: 12.7,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4ei9z6x"
  },
  {
    id: "1005008148860952",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d2c72d674e0491db255be135851f2c0W.jpg",
    name: "X15 TWS Wireless Bluetooth Headset LED Display Gamer Earbuds with Mic Wireless Headphones Noise Cancelling Bluetooth Earphones",
    originalPrice: 4.35,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c383xY2R"
  },
  {
    id: "1005009014580579",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0773f649527743a1aca28b095fbc9963j.jpg",
    name: "Handsfree Wireless Headphones Noise Canceling Headphone Earphone P47 headset Bluetooth Head Phone for iPhone Huawei Samsung S22",
    originalPrice: 9.18,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4V4cfbN"
  },
  {
    id: "1005009205623449",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S57781648345146aa80e84fad1b1aac6fn.png",
    name: "Tallow Honey Cream Glow Hydrating Skin Improve Elasticity Soft Bleaching Improve Dullness Firming Face Body Moisturizer Lotion",
    originalPrice: 6.09,
    discountPrice: 2.69,
    url: "https://s.click.aliexpress.com/e/_c3VECwvN"
  },
  {
    id: "1005007341990710",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7b3301f42369441aa90ac715691c0b6aK.png",
    name: "Men's Waterproof Large Capacity Fanny Pack, Adjustable Strap For Outdoor Activities, Travel Running, Hiking, And Cycling",
    originalPrice: 4.65,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3wpVr8X"
  },
  {
    id: "1005007205112799",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S495e04cf6ae84e7f873dd6f4129ec145V.jpg",
    name: "16pcs Professional Nail Clippers and Cuticle Nippers Set with Travel Case Manicure Set Pedicure Sets Nail Clippers",
    originalPrice: 8.44,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c44oLo55"
  },
  {
    id: "1005006479918994",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc298f763570146b096f8679e494eb652U.jpg",
    name: "Lip Balm Healing Moisturizing All-natural Lip Mask For Dry Lips Lip Moisturizing Power Lip Care Nourishing Repair",
    originalPrice: 5.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2yTZShd"
  },
  {
    id: "1005007306729643",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S314eae805d754d0b8d36ca9abae29f2fr.jpg",
    name: "Korean Accessories Hair Clips for Women Girls Big Bowknot Solid Satin Long Ribbon Bows Spring Clamp Barette Cheveux Femme 2023",
    originalPrice: 3.98,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c33aYGMx"
  },
  {
    id: "1005009332729325",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S86a8f26ad9784e8bbc0780cfb5d1f718v.jpg",
    name: "Building Block Pistol Shell Throwing Continuous Firing Airsoft Blowback Empty Hanging Toy Gun Outdoor CS Weapon for Boys Adult",
    originalPrice: 6.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3uV3Plv"
  },
  {
    id: "1005009762835151",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7479c48f0e364c4c9c275586e898758eU.jpg",
    name: "Winter Warm Gloves Touch Screen Windproof Cold-proof Cycling Gloves, Men's Women's Running, Hiking Skiing Gloves",
    originalPrice: 4.51,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4VzKMcF"
  },
  {
    id: "1005007156281263",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S565b9067baf4485c8b4aad66c8812f2ax.jpg",
    name: "2025 2000X25 HD Monocular Telescope, Compact Portable for Travel, Hiking, Fishing, Camping, Stargazing, Concerts & Bird Watching",
    originalPrice: 6.46,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2zUVApd"
  },
  {
    id: "1005005757764882",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S366a245b20af4dc481bef9d745e533e1b.jpg",
    name: "Lint Remover For Clothes Usb Electric Rechargeable Hair Ball Trimmer Fuzz Clothes Sweater Shaver Reels Removal Device",
    originalPrice: 10.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3chOr3z"
  },
  {
    id: "1005007107613466",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8a16380cc831414d9f5b8053e6a167b3T.jpg",
    name: "Bluetooth LED Strip Lights Smart SMD 5050 APP Remote Control Flexible Ribbon Diode Lamp Tape TV Backlights Game Room Home Decor",
    originalPrice: 6.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4pZuUgj"
  },
  {
    id: "1005009753118830",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf9be5d9eb0ee4e83b7bed622b1ab048ci.png",
    name: "5 Ports USB C PD Charger Quick Charge 3.0 Type C USB Phone Chargers Fast Charging Adapter For iPhone 16 15 Samsung Xiaomi Huawei",
    originalPrice: 6.45,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2uUgv5t"
  },
  {
    id: "1005006736492092",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9e018d4fbd804e2784f8b12684d65163H.png",
    name: "Bath Towel Washcloth Cotton Towel Solid Color Soft Absorbent Towels Multipurpose Use For Hotel Bathroom",
    originalPrice: 6.05,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c43Vf0gx"
  },
  {
    id: "1005007484673961",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S87a9e5c68dd84df39f05ebe2630f15e3v.jpg",
    name: "High Strong Power Led Flashlights 2000LM Tactical Torch with Display Light USB Charging Camping Fishing Emergency Zoom Lantern",
    originalPrice: 7.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4FWLA1H"
  },
  {
    id: "1005006861101379",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S002ffa0c3b08434c85c34de949a70c1aD.jpg",
    name: "3 In 1 Integrated Suction And Blowing Vacuum Combination Vacuum Cleaner USB Charging Small Car Household Vacuum Cleaner",
    originalPrice: 11.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AP3LZ1"
  },
  {
    id: "1005007902072752",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sccc84e2fff1c444ea2c9c562f48ef39dC.jpg",
    name: "5/10/30/40pcsbrow Razor and Face Razor for Women and Men, Eyebrow Hair Trimmer and Shaver with Protective Cover,Safe",
    originalPrice: 3.33,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Yqm54J"
  },
  {
    id: "1005007306778570",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S38f806035c054898963714e3f947486ey.jpg",
    name: "500/1000/2000pcs Girls Colourful Disposable Rubber Band Hair Ties Headband Children Ponytail Holder Bands Kids Hair Accessories",
    originalPrice: 3.51,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3uIyXn5"
  },
  {
    id: "1005006332093484",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S62430dc77c8543f8a95f2df2f684dfa2q.jpg",
    name: "Magnetic Car Phone Holder Universal Car Phone Stand for iPhone Xiaomi Huawei Samsung Dashboard Wall Mounted Car Magnet Sticker",
    originalPrice: 2.07,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4snzHn5"
  },
  {
    id: "1005007296423328",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2a76d23ff213476f89ed3f8a860c4f1cm.jpg",
    name: "Portable Extendable Back Scratcher Stainless Steel Telescoping Back Scratcher for Both Human and Pets Extendable Back Massager",
    originalPrice: 4.19,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xHCYvH"
  },
  {
    id: "1005008095733068",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0125a08aa95645b894ba39db83d4f7e0o.jpg",
    name: "New Universal Stylus Pen for Tablet Touch Pen for iPad Apple Pencil Mobile Phone for Huawei Lenovo Samsung Phone Xiaomi Redmi",
    originalPrice: 3.33,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3sYLTB9"
  },
  {
    id: "1005006872754298",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S39d08b2973d7433cb6e3787d5a64e57de.jpg",
    name: "Flower Green Leaf String Lights Artificial Vine Fairy Lights Battery Powered Christmas Tree Garland Light for Weeding Home Decor",
    originalPrice: 2.65,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3MfY2Or"
  },
  {
    id: "1005006809168260",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8719d974c6d44ba099d851634cdb930a4.jpg",
    name: "100/50Pcs Titanium Coated Drill Bits HSS High Speed Steel Set Tool Quality Power Tools 1/1.5/2/2.5/3mm",
    originalPrice: 9.43,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4mb2tof"
  },
  {
    id: "1005007273995598",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S07809ef61b4841389f9bbb113197a984X.jpg",
    name: "Book Light LED Moon Light Galaxy Light, Moon Night Light, Girl, Boy, Child Birthday Gift, Bedroom Decoration Indoor lighting",
    originalPrice: 8.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4OkxJPl"
  },
  {
    id: "1005007316134477",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S406fef98f8b24b9a8735843b343ecb21M.jpg",
    name: "LED NightLights Galaxy Projector Remote Control 5V USB Rechargeable Starry Sky Lamp DMX Sound Active 7 Modes for Kids Room Decor",
    originalPrice: 10.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3mKskmP"
  },
  {
    id: "1005006490746427",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Ace5cb9e5f4084be583d2527bea5a3db8w.jpg",
    name: "1pc Star Projector, Galaxy Projector, Water Ocean Wave Projector For Bedroom Night Light  Room Decor With 7-Colors Patterns",
    originalPrice: 8.47,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4sybsd5"
  },
  {
    id: "1005008098162552",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S85598b2190174f998008792919f82c61t.jpg",
    name: "5/10-Pack Unisex Comfort-Fit Ankle Socks For All, Breathable & Lightweight - Ideal For Sports & Daily Wear",
    originalPrice: 4.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3ca8QY7"
  },
  {
    id: "1005007278531074",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf286f2e3b2b64b75adb0caafee8b6697X.jpg",
    name: "3-Segment Knife Sharpener Knife Sharpeners for Kitchen Knives Stainless Steel Three-Purpose Sharpening Stone for Kitchen Tools",
    originalPrice: 7.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3cLlvsr"
  },
  {
    id: "1005005732527736",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8348f6c7d4a54710b04ebfee630fae89I.jpg",
    name: "Mini Hea Bag Seal Machine Package Sealer Bags Thermal Plastic Food Bag",
    originalPrice: 2.26,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3WoOicb"
  },
  {
    id: "1005008334857246",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S755aa4a5b35e4a1999f51d2ac58d3947K.jpg",
    name: "Chic 3-Tier Desk Organizer with Drawers - Ideal for Office Supplies, Jewelry & Cosmetics Storage - Portable Divider Box",
    originalPrice: 10.81,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3hFngIX"
  },
  {
    id: "1005007538592952",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7a5be0b44adc4333aa8a5de6073882e5S.jpg",
    name: "46pcs/Bag,Cat Stickers,Be for Suitcase Skateboard Luggage Laptop Phone Diy Sticke Decoration Stationery School Supplies Toys",
    originalPrice: 3.22,
    discountPrice: 0.93,
    url: "https://s.click.aliexpress.com/e/_c4OEobZv"
  },
  {
    id: "1005007014312048",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S78216e2f855247d28ba5e2670dda5f52P.jpg",
    name: "US Plug Power Strip with 6 AC Outlets 4 USB Port(2 Type C), Multi Socket Wall Socket Universal Network Filter Fast Charging",
    originalPrice: 9.34,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3kaagJh"
  },
  {
    id: "1005007568176613",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2bd42a8009be4886a4c9c8bbe3ef6be2W.jpg",
    name: "E6S Wireless Bluetooth Earphones TWS Bluetooth Headset Wireless Earbuds Noise Cancelling Earphones with Microphone Headphones",
    originalPrice: 6.07,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4cEj0Gj"
  },
  {
    id: "1005007573820052",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S010b7c0527724d9497aed579437661dfw.jpg",
    name: "LED Starry Sky Night Lights USB Projector Lamp Magic Ball Moon Star Christmas Lights Home Room Atmosphere Decorations",
    originalPrice: 6.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3ySqG99"
  },
  {
    id: "1005007527811142",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S110db4df6d3a4cd6892ede566abdbcbd0.jpg",
    name: "180ML Mini Air Humidifier USB Electric Aroma Diffuser Essential Oil Purifier Aromatherapy Mist Maker Lights For Car Home Bedroom",
    originalPrice: 12.68,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4kkFFMJ"
  },
  {
    id: "1005006636297467",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7b29c3dbb0be4727a95d384cc9ed6ad76.jpg",
    name: "KINGROON 22LBS PETG or PLA filament 3D Printer Filament 10 Rolls 1KG 1.75MM Eco-Friendly Good Toughness Mix Color Free Shipping",
    originalPrice: 251.47,
    discountPrice: 77.31,
    url: "https://s.click.aliexpress.com/e/_c2vUmhW7"
  },
  {
    id: "1005006422500160",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S324d7592ca41424f8219350bdcfdca6dk.jpg",
    name: "7.0MM TYPE-C Endoscope Camera IP67 Waterproof 6 LEDs Adjustable USB Android Flexible Inspection Borescope Cameras for Phone PC",
    originalPrice: 8.51,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4UnAgpH"
  },
  {
    id: "1005007796427196",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S38efdfd84fe64dd2990e312af83ce50fP.png",
    name: "Long Lasting Moisturizing Lipstick Natural Lip Plumper Makeup Lip Plumping Gloss Cosmetics Exfoliating For Lip Care Product",
    originalPrice: 4.15,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3s2HcYL"
  },
  {
    id: "1005010017311007",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8df63bdc585b4b8aa5a6ea40e21fceae1.png",
    name: "720/200pcs eyelash Extension Kit Fluffy Eyelash Extension kit with Lash Bond and Seal Lash Tweezers Thick Lash Clusters Wispy",
    originalPrice: 5.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3K49LWL"
  },
  {
    id: "1005006982504378",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf76a13bc33ee4638958b76a752c3f42cK.jpg",
    name: "1pc Waist Trainer Slimming Body Shaper Fitness Belt Weight Loss Fat Burning Sport Girdle Sweat Trimmer Workout Cincher Shapewear",
    originalPrice: 14.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4KznhUR"
  },
  {
    id: "1005006694412942",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd483148dad544c35b7f0d596d5cafebfN.jpg",
    name: "1pc embossed fiber carpet, bathroom living room anti slip mat, pebble floor mat, household items",
    originalPrice: 6.14,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c41VqwKP"
  },
  {
    id: "1005005449571803",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3d964568414641229491ed98fd190ec1M.jpg",
    name: "5M Car Interior Led Strip Light Neon EL Wiring Decorative Lamp For Auto DIY Flexible Ambient Light USB Party Atmosphere Diode",
    originalPrice: 6.31,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3rNRxnl"
  },
  {
    id: "1005008305048332",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5289ae78180b42d8bd588239512005dfa.jpg",
    name: "6-Layers Safety Razor Set High Quality Men Razor Sharp Stainless Steel Shaving Changeable Shaver Head Blade ﻿",
    originalPrice: 5.39,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c39H3ZTN"
  },
  {
    id: "1005008175197760",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa236c1741fc044c98699e521471f1c09c.jpg",
    name: "Men's 3pcs Fashion Alloy Jewelry Set - Cross Pendant Necklace, Bracelet & Ring Combo",
    originalPrice: 4.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3aBWmnv"
  },
  {
    id: "1005006576988319",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se62b989d489e41068cd23fbb002b03f0A.jpg",
    name: "Camouflage Balaclava Hat Cycling Full Face Mask Outdoor Sports Hunting Hiking Ski Mask motorcycle Helmet Inner Cap",
    originalPrice: 6.83,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3fW5ooL"
  },
  {
    id: "1005009800051893",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S28c84480339547178d356c95f6fb0e40N.jpg",
    name: "Sumry 4KW 120V Off Grid Solar Inverter 24V 140A 5600W MPPT Charger Pure Sine Wave Home Inverter 6.25 Inch LCD Display",
    originalPrice: 650.41,
    discountPrice: 240.0,
    url: "https://s.click.aliexpress.com/e/_c4BF6tcJ"
  },
  {
    id: "1005005882204047",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S155961da97074a83b82badd40f86d7107.jpg",
    name: "Stereo P47 Headset 5.0 Bluetooth Headset Folding Series Wireless Sports Game Headset for iPhone XiaoMi",
    originalPrice: 10.43,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3lKBykj"
  },
  {
    id: "1005009881312874",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0db3da414cd9400db97c73f660f98712o.jpg",
    name: "GROINNEYA Lashes Cluster DIY Lash Extension Mixed Tray Clusters Eyelashes Fluffy Volume Individual Lashes Cat Eye Lash Extension",
    originalPrice: 4.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3pLaNRN"
  },
  {
    id: "1005006844559078",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S39476cea99f6473fb4e1b7e32a146123P.jpg",
    name: "Portable Bluetooth Selfie Stick Tripod Holder with Remote Shutter Fill Light Extendable Wireless Remote Retractable Phone Stand",
    originalPrice: 15.32,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3iF3KNl"
  },
  {
    id: "1005008739503173",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6502f0297b02483f8bb490501ba93d3a7.jpg",
    name: "6pcs Velvet Matte Lip Liner Pencils Set Long-Lasting Non-Drying Perfect for Lining Filling Lips Versatile for All Skin Typ",
    originalPrice: 5.06,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3qOL6ZH"
  },
  {
    id: "1005005986614521",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S54b47928b66c436d90bbc9aa8681ba57L.png",
    name: "400 In 1 MINI Games Handheld Game Players Portable Retro Video Console Boy 8 Bit 3.0 Inch Color LCD Screen Games",
    originalPrice: 21.53,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4cKsUqn"
  },
  {
    id: "1005009554443216",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8a4cad98954948d88d6740973169bb4dq.jpg",
    name: "Building Block Pistol Continuous Firing Toy Gun Shell Throwing Airsoft Blowback Empty Hanging Outdoor CS Weapon for Boys Adult",
    originalPrice: 10.28,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4LOzZvD"
  },
  {
    id: "1005009245600190",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Scfa560adf7934026bd352e23f64f0e4bU.jpg",
    name: "Portable Wireless Bluetooth Speaker LED Light IPX4 Waterproof Loudspeaker Outdoor Bathroom Large Suction Cup Stereo Sound Box",
    originalPrice: 9.28,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4WtAY99"
  },
  {
    id: "1005007527434383",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7141160375c34502aea62dbd07f1f16fz.jpg",
    name: "1-20Pcs Microfiber Towels Car Wash Drying Cloth Towel Household Cleaning Cloths Auto Detailing Polishing Cloth Home Clean Tools",
    originalPrice: 1.24,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4E0fGHV"
  },
  {
    id: "1005006772216579",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Saf6d864d56794b229b8af294ee9e06463.jpg",
    name: "5/10/20pcs Kitchen Towel, Ultra-fine Fiber Light Gray Cleaning Cloth Set, Absorbent, Soft And Stain-removing Cloth",
    originalPrice: 3.88,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3w6TZN1"
  },
  {
    id: "1005007773180785",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sedeb1129f00b4b2eb409e3ec84a78181R.jpg",
    name: "Balaclava Ski Mask Full Face Cover For Men And Women Breathable Full Face Mask For Skiing Outdoor Sports",
    originalPrice: 5.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Hc8AZ9"
  },
  {
    id: "1005007116675728",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfba504c53f714201a3b3aa79d688cd18h.jpg",
    name: "PU Carbon Fiber Leather Car Steering Wheel Cover without Inner Ring Suitable for 14.5-15 Inches of Automotive Supplies",
    originalPrice: 2.86,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3P2UU4F"
  },
  {
    id: "1005005785774950",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8c4a1b768a314fccb9be627a327fecd7t.jpg",
    name: "Desk Mobile Phone Holder Stand For IPhone IPad Xiaomi Adjustable Desktop Tablet Holder Universal Table Cell Phone Stand",
    originalPrice: 3.49,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4S9AZwb"
  },
  {
    id: "1005007547820639",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sebdbbdb1b7324aadb996aeb05abe47cai.jpg",
    name: "Foldable Travel Duffel Bag for Airlines Carry on Bag for Women and Girls Lightweight Large Capacity Sports Weekend Trip Overnigh",
    originalPrice: 6.77,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Lb3S4x"
  },
  {
    id: "1005007439096797",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1e760de8ec0943089b356dd943d0cb50q.jpg",
    name: "5LED High Power Led Flashlights Rechargeable Camping Spotlight with Side Light 3 Lighting Modes for Camping Adventure Outdoor",
    originalPrice: 11.19,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3mZp2pV"
  },
  {
    id: "1005007174700432",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5c61342cc6b249e686c6535c137f9b69b.jpg",
    name: "10Pcs/set High Quality Needle Type Gel Pens Straight Liquid Ballpoint Pen Kawaii Stationery School Office Supplies Writing",
    originalPrice: 3.44,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3n8nqCT"
  },
  {
    id: "1005008788648164",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S730ee5b2d5844b5db1bd53866f5107adb.jpeg",
    name: "Flashlight Green Blue Red Laser Pointer Indication Light for Meeting Classroom Torch Light RGB",
    originalPrice: 4.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4LWTWmf"
  },
  {
    id: "1005007097170743",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5024607687094224bbe839430e1384d3Q.jpg",
    name: "2026 New Artificial Flower Eternal Rose Teddy Bear for Mom Mother's Day Birthday Valentine's Day Anniversary Gifts & Decorations",
    originalPrice: 9.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c32Uy8If"
  },
  {
    id: "1005006093057948",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se581cb1dde9f4d6694bd75db8ac4c98aK.jpg",
    name: "Rechargeable COB LED USB Headlamp Strong Magnetic Powerful Headlight Super Bright Waterproof Head Torch For Outdoor Fishing",
    originalPrice: 3.79,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3WniGV9"
  },
  {
    id: "1005006534641841",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9298c77ca0ab4bda80871ebdb21e24a5L.jpg",
    name: "Folding Fruit Knife Stainless Steel Meat Cleaver Kitchen Knife with Non-slip Handle for Kitchen Accessories Pocket Knife",
    originalPrice: 4.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4ShCNlZ"
  },
  {
    id: "1005006472481159",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S27f702178e534191a9af98c3ba70db7eV.jpg",
    name: "Car Wash Microfiber Towel 30x30/60CM Car Cleaning Drying Cloth Hemming Car Care Cloth Detailing Car Wash Towel",
    originalPrice: 6.32,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3NLNq03"
  },
  {
    id: "1005006661162689",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8360752b7f534d71806752bef719d66cm.jpg",
    name: "Mini Heat Bag Sealing Machine Package Sealer Bags Plastic Food Sealer Clip Bag Handheld Sealer Food Packaging Heat Sealer",
    originalPrice: 6.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3MBY0s3"
  },
  {
    id: "1005007884659262",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sce3ef1ba02e6419fab6c4c1c9f20a34df.jpg",
    name: "Pink eyebrow trimming scissors with built-in comb - stainless steel, precise grooming tool, creating perfect eyebrows",
    originalPrice: 5.0,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3KHjmHl"
  },
  {
    id: "1005007271288993",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb40f9eeee58541338f9553e1d63362e9e.jpg",
    name: "Women Shorts Sports For Women New Cycling Jogging Fitness High Waist Push Up Gym Shorts Leggings Women Yoga Clothing",
    originalPrice: 6.01,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3hETjK3"
  },
  {
    id: "1005006419192666",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc281113db45d47f4a0c330715c3febcdN.png",
    name: "100W Fast Wireless Charger Pad For iPhone 15 14 13 12  X Pro Max 8 Samsung Galaxy S23 Xiaomi Wireless Charging Station Chargers",
    originalPrice: 7.8,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3xrppsJ"
  },
  {
    id: "1005009055492347",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S53c5b020ae6f4bf497d6d2354c190d54z.jpg",
    name: "DIY Lash Extension Kit Clusters Individual Eyelashes Kit 9-16mm with Bond and Seal Wispy Natural Mange Lashes",
    originalPrice: 6.91,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3GKvSQf"
  },
  {
    id: "1005009555621322",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S96949c7023ed445b99ba7fb2dd11ac17x.jpg",
    name: "Clearance sale AS AW25 Corduroy + Sweatshirt collection Print corduroy girl clothing  family matching boys clothes",
    originalPrice: 39.0,
    discountPrice: 2.6,
    url: "https://s.click.aliexpress.com/e/_c322TLnz"
  },
  {
    id: "1005005568130617",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S16cd0ccf84034053b8d6e797d2980869c.jpg",
    name: "18K Gold/Silver Color 6mm Full Sideways Necklace 8/18/20/24 Inch Chain For Woman Men Fashion Wedding Engagement Jewelry",
    originalPrice: 6.54,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3dyTwYj"
  },
  {
    id: "1005006437128564",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb3940d8e131946fa9f8dffed08e668590.jpg",
    name: "Random Mystery Fidget Toys Bag Pack for Kids Cheap Sensory Toys Stress Reliver Autism ADHD Gifts Spinner Fidget Squishy Set",
    originalPrice: 5.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4NAViM7"
  },
  {
    id: "1005009740162263",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd2d7a05ed365427fb07f9f91b11c5223z.jpg",
    name: "Personalized Custom Canvas Prints Photo Custom Poster for Family Life Pets anime Birthdays Weddings Scenery Home Decor Gifts",
    originalPrice: 2.56,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3UnuDHZ"
  },
  {
    id: "1005006919919661",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd8f7421f130b4b79ae9f64dabaaa9faae.png",
    name: "LED Motion Sensor Light Wireless LED Night Light Type C Rechargeable Light Cabinet Wardrobe Lamp Staircase Backlight For Kitchen",
    originalPrice: 3.91,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3mwCcSX"
  },
  {
    id: "1005007154611622",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfe25fcca9b614e2f9695398916ddbe86r.jpg",
    name: "Luxury 925 Sterling Silver Classic Ring for Women Six claw jewelry simple 70ct diamond ring imitation diamond women's ring",
    originalPrice: 9.95,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c43nPcH5"
  },
  {
    id: "1005009759809641",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S747ffbcc234040cf9d52757afaf4eecay.png",
    name: "3 pairs of universal fashion glasses, square-framed glasses, fashionable campus style, clear black frame, back to school",
    originalPrice: 4.6,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Ko9IR1"
  },
  {
    id: "1005006898621920",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sea1b8f6023884c09a293e34b356d24a1C.jpg",
    name: "16 Colors RGB Bulb LED Multicolor Bulb E27 220V Household Lighting Dimmable 24 Key Remote Control Smart Lamp Atmosphere Light",
    originalPrice: 4.4,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3zxVq03"
  },
  {
    id: "1005006975757735",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5cad2aca7f9143c4afa7471d4a5ae37cH.jpg",
    name: "Winter Gloves For Men Women Touchscreen Warm Outdoor Cycling Driving Motorcycle Cold Gloves Windproof Non Slip Gloves",
    originalPrice: 4.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c407I2yb"
  },
  {
    id: "1005006622023518",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6867854d79754c27bdd318c6e9028b15C.jpg",
    name: "T9 Hair Clipper Repair Beard Shaving Body Hair Trimmer Clippers Electric Machine Men Haircut Machine 0mm Barber Shaver",
    originalPrice: 6.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3YiBbqF"
  },
  {
    id: "1005006266383463",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sebedbffc1e354e45b68b63480be46840R.jpg",
    name: "1pc Household Large Capacity Storage Bag Non-woven Material, Closet Wardrobe Organizer Can Be Used For Quilt Clothing, Toys",
    originalPrice: 3.83,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c374rr9Z"
  },
  {
    id: "1005008253500940",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdfda3822f064426692204d01a24fdb26m.png",
    name: "Oil Spray for Cooking - Olive Oil Dispenser Bottle Sprayer Mist-Reusable Food Grade Oil Vinegar,Spray Bottle Kitchen Accessories",
    originalPrice: 7.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3CNOqBZ"
  },
  {
    id: "1005006854516339",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf1828c1e13154dd392a21cc15a9764dcv.jpg",
    name: "Mini 32-in-1 Precision Screwdriver Set Magnetic Phillips Bits Multifunctional Hand Repair Tool Kit for Phone Watch Glasses PC",
    originalPrice: 7.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3p0YABD"
  },
  {
    id: "1005006747262425",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S28dfc3f11bc948788499d5b5fe3166e2T.jpg",
    name: "Nail Clipper Set Set Convenient Beauty Tools Nail Clipper Manicure Nail Trimmer Pedicure Knife Ear Peeling Knife Nail Manicure T",
    originalPrice: 4.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3j5vWgj"
  },
  {
    id: "1005007320343585",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S364a99f7b060465682383647fc84d800U.png",
    name: "Satin Bonnet Silk Bonnet Adjustable Bonne For Sleeping Hair Bonnet With Tie Band Bonnets For Women Men",
    originalPrice: 7.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4NqgHF5"
  },
  {
    id: "1005007462921309",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S12646a2661fc4b0fb4623ab357ade571d.jpg",
    name: "1pc Dancing Cactus Toy,Repeat Talking ,Song Speaker Wriggle Dancing Sing Talk, Plushie Stuffed ,Interaction and Decoration",
    originalPrice: 13.88,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4SKkbj9"
  },
  {
    id: "1005007552842658",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf66a949de69e475daa28497031f80cbfW.jpg",
    name: "6/12 Pcs Magnetic Screwdriver Bits Non-slip Shockproof Phillips Impact Bits Hex Shank Alloy Steel Bits Suitable for Power Tools",
    originalPrice: 8.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4XcKs2B"
  },
  {
    id: "1005006280952147",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S737c02cfd4b74daab2aaac83ec5a8407g.jpg",
    name: "Nylon LED Night Safety Flashing Glow In The Dark Dog Leash Dogs Luminous Fluorescent Pet Dog Collar",
    originalPrice: 6.57,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4slxyIr"
  },
  {
    id: "1005010000278534",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc09547da853e452c92ceb1c3b6932b7bl.png",
    name: "ECO-WORTHY 3584Wh 12V 280Ah LiFePO4 RV Battery w/Bluetooth & Low Temp Cutoff - Built-in 200A BMS - Deep Cycle for Camper, Traile",
    originalPrice: 1121.97,
    discountPrice: 278.25,
    url: "https://s.click.aliexpress.com/e/_c3mVJOzz"
  },
  {
    id: "1005008641164168",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdef08b41870846c087417ee1d367c529H.png",
    name: "Magcubic HY300 Pro + Projector 8K 720P With 5W Speaker Android 14 8000 Lumens WiFi 6 BT5.4 Outdoor Video Home Theater Projector",
    originalPrice: 162.13,
    discountPrice: 41.95,
    url: "https://s.click.aliexpress.com/e/_c3ULtMXD"
  },
  {
    id: "1005006169140657",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9a54e2e81f2047659f5a9c115a9c3ee5M.jpg",
    name: "120W PD Type C Cable Super Fast Charger Cord Quick Charge USB C Cables Phone Charger For Samsung Xiaomi Huawei",
    originalPrice: 5.03,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c42EPCXt"
  },
  {
    id: "1005007595116342",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S733fc469962d495a8bd92ef39b8f7b3d0.jpg",
    name: "LED Galaxy Projector Light Multi-color Remote Control for Bedroom Decoration Christmas Star Projector Night Light New Year Gift",
    originalPrice: 6.23,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3bl2BwF"
  },
  {
    id: "1005007564041432",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2530e38e50fc4ab5ac9c580f0afa3a21m.jpg",
    name: "Double sided magic sponge for motorcycles, pots, and kitchens - heavy-duty grease cleaning sponge",
    originalPrice: 6.56,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4cwwiKf"
  },
  {
    id: "1005006995657976",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S461570899c134017a1517dfcdf3ce50dL.jpg",
    name: "5/6PCS Women Watches Fashion Silicone Band Women Quartz Watches Jewelry Set Reloj Mujer Girls Clock Gift (Without Box)",
    originalPrice: 5.64,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3LyFdzh"
  },
  {
    id: "1005008565827730",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7a8acbb3532942f5a3ae9096cc6f4c6bO.jpg",
    name: "Children's Magnetic Maze Walking Ball Baby Concentration Training, Writing Logic Thinking 3 year Old Early Education Puzzle To",
    originalPrice: 9.95,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3pV4oEr"
  },
  {
    id: "1005007172631711",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc61026d88d0d4c66bd95523a26a00a9du.jpg",
    name: "Car interior sweeping dust soft brush car wash tool artifact car interior gap dust brush air outlet cleaning brush",
    originalPrice: 5.93,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c31tkZOL"
  },
  {
    id: "1005006113814000",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd8e940820bc949f2b73e75eee0efed4dR.jpg",
    name: "50/100 pieces of black and white hair bands, women's hair bands, high-elasticity rubber band hair bands, hair bands",
    originalPrice: 2.9,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3zectph"
  },
  {
    id: "1005009170073229",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3383ce0eb7c54565ba0da4b993b64d44b.jpg",
    name: "Long-Lasting Temporary Tattoo Inks with 3 Tattoo stickers Kit,Freehand Painting Gel for Makeup Trend Party Tattoos for Face Body",
    originalPrice: 6.27,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3fqGsub"
  },
  {
    id: "1005009442920387",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sacd0d8c96b854d8cae71b3d18cad8c8dc.jpg",
    name: "10/40PC Pokemon Card Shining Fates Style English Booster Battle Carte Trading Card Game Collection GX V EX Cards Toys Kids Gifts",
    originalPrice: 6.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3MKbhRd"
  },
  {
    id: "1005005385299054",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdeb87d1656cc46418a5ee5924678d91bO.jpg",
    name: "Auto Fastener Clip Mixed Car Body Push Retainer Pin Rivet Bumper Door Trim Panel Fastener Kit Car Clip 100/50 Box /Bag packaging",
    originalPrice: 4.11,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3rHaSgF"
  },
  {
    id: "1005007494405282",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Seb9b0171b621436ea45850285d97e8cfO.png",
    name: "Disney Pixar Cars 3 Lightning Mcqueen Toys Mater Model Collection 1:55 Diecast Vehicles Alloy Car Toy For Children Gifts",
    originalPrice: 3.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4VM4Yjt"
  },
  {
    id: "1005005872572582",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdb887ebeb7434a3688665e375b177968p.png",
    name: "F91W Non-Waterproof Steel Band Watch For Women, Men, Business Clock, Multi-Functional LED Digital Sports Watch, Electronic Clock",
    originalPrice: 4.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3ohn2qP"
  },
  {
    id: "1005009367608817",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2cbf4598a9074412a726de0446bce6c9B.jpg",
    name: "Custom Playmat Card Game Pad Mousepad Computer Mouse Pad 600x350x2mm Non-Slip Natural Rubber Carpet Square Desktop DIY Mouse Pad",
    originalPrice: 13.92,
    discountPrice: 4.41,
    url: "https://s.click.aliexpress.com/e/_c3ZP2a2f"
  },
  {
    id: "1005006752601429",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S319f897319234677b9f020071ac69ca7V.jpg",
    name: "66-250W PD Car Charger QC3.0 Fast Charge One to Six Car Cigarette Lighter Plug Car Charger Flash Charge with Digital Display",
    originalPrice: 3.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4BLFoLp"
  },
  {
    id: "1005007296821194",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d1fe224d41f4d0cb382f54998f94b08M.jpg",
    name: "10/15/20/30/40/Pairs Heart Print Socks, Valentine's Day Candy Colored Ankle Socks, Women's Stockings & Hosiery",
    originalPrice: 8.21,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4MUZTVt"
  },
  {
    id: "1005005079019011",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc878225485cd4ab0b11252807a2a1f5fp.jpg",
    name: "Color RGB 5050 LED Strip Bluetooth Tape Decor for Room LED 10m 15m 20m 30m PC TV backlight Neon LED Lighting Cветодиодная лента",
    originalPrice: 8.46,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4C6Q1yr"
  },
  {
    id: "1005007862959764",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sed9c2f0d199147f88509bcf08c686079I.jpeg",
    name: "320pcs Premium Stainless Steel Screw and Nut Assortment Kit - Corrosion-Resistant, Snap-in Nuts, M2 to M5 Sizes - Ideal for DIY,",
    originalPrice: 6.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Wo5KOn"
  },
  {
    id: "1005009706241597",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1f5720cfa7764cbfa2fe45408b53e2c6E.jpg",
    name: "Coconut Slippers Cloud Thick-soled Sandals Summer Fashion Soft Bottom Beach Men Slippers Women's Sandals EVA Slides",
    originalPrice: 6.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c45qBDRV"
  },
  {
    id: "1005007720373478",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf041a00d61d247af8d362f0c661f9394W.jpg",
    name: "A3 A4 A5 PVC Cutting Mat Workbench Patchwork Cut Pad Sewing Manual DIY Knife Engraving Leather Cutting Board Side Underlay",
    originalPrice: 3.93,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3TUSMGx"
  },
  {
    id: "1005006897857640",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S074c3b99cda44e68813beee7b39c9a7fi.jpg",
    name: "Household High Pressure Oral Irrigator Portable Teeth Clean Water Dental Floss Manual High Pressure Water Toothpick",
    originalPrice: 8.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3QnQYDd"
  },
  {
    id: "1005008301217921",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S12a00dab37e74289879af318f74ac0f5q.jpg",
    name: "New 640 Cluster Lashes Kit 5D Fluffy Thick Eyelash Extension Kit Volume Mixed Tray Faux Mink Lashes Lash Extension Makeup",
    originalPrice: 9.21,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c42DjFFd"
  },
  {
    id: "1005007795557485",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Aeb6d5920155f4b0b88ad9ecdc70430aeA.jpg",
    name: "Waterproof Lip Liner Peel Off Tattoo Lipgloss Waterproof Long Lasting Matte Lip Tint Brown Contour Tear-off Lips Stain Cosmetic",
    originalPrice: 5.66,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3wcAEaP"
  },
  {
    id: "1005006047319863",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S87fa2d40f85a429090bfe697384cb77aZ.jpg",
    name: "Magnetic Wristband for Holding Screws,Nails，Drilling Bits,Wrist Tool Holder Belts with Strong Magnets,Cool Gadgets for Men, wome",
    originalPrice: 5.29,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4CQdhbN"
  },
  {
    id: "1005005925624821",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sda1ccfec18a749c5b544ea1594311ff0M.jpg",
    name: "12/24Pcs Metallic Glitter Colors Gel Pens & Pen Refills For School Office Adult Coloring Book Journals Drawing Art Markers",
    originalPrice: 2.29,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4PWktph"
  },
  {
    id: "32944933856",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa051a56740b944cdb2b8ca421bc3e9b0K.jpg",
    name: "Jurassic World 3 Brutal Raptor Building Blocks Dinosaur Bricks Tyrannosaurus Indominus I-Rex Assemble Toy For Children",
    originalPrice: 2.18,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4bC1KMF"
  },
  {
    id: "1005004138189665",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdba66a6e3b544e8a97bb934c51803c4de.jpg",
    name: "YUSUN 1PC 45° Degree  Lock Miter Router Bit  Woodworking Milling  Cutter For Wood Tools",
    originalPrice: 18.13,
    discountPrice: 6.63,
    url: "https://s.click.aliexpress.com/e/_c3TTk1w3"
  },
  {
    id: "1005007444566375",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S603bdb17f33d4df5ac65bb1648cb1989e.jpg",
    name: "10/5/3pairs Breathable Con Sports Stockings Men Bamboo Fiber Autumn and Winter Men Socks Sweat Absorption Deodorant Business Sox",
    originalPrice: 4.92,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3CaOFzh"
  },
  {
    id: "1005007861075029",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S95eeb75317ed46ebb75ce83add0a1d85N.jpg",
    name: "Soldering Station Mat Silicone Work Mat Heat Resistant 932°F Anti-Static Magnetic Mat for Electronic Phone Laptop Watch Repair",
    originalPrice: 6.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4koL0Xv"
  },
  {
    id: "1005005704381272",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S81d569970e3e422fac930f021b7c15a4t.jpg",
    name: "1/3pcs- Colander Rice Bowl Drain Basket Fruit Bowl Washing Drain Basket with Handle Washing Basket Home Kitchen Organizer",
    originalPrice: 4.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3MK9fNt"
  },
  {
    id: "1005010653344938",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb730368a91764e5c831b948a85ff9a75u.png",
    name: "72\"/60\"H Garage Shelving Storage Shelves，2000LBS Capacity Heavy Duty Adjustable Storage Shelve For Closet",
    originalPrice: 82.93,
    discountPrice: 14.37,
    url: "https://s.click.aliexpress.com/e/_c3Lidupz"
  },
  {
    id: "1005005336957133",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S06a7bdaaddb34e319d43488ad9bb994eK.jpg",
    name: "127-750pcs Heat-shrink Tubing Thermoresistant Tube Heat Shrink Wrapping Kit Electrical Connection Wire Cable Insulation Sleeving",
    originalPrice: 1.91,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3bRrdAb"
  },
  {
    id: "1005007062364830",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0a5e8b9300fe48f8b39c94bbfcef290aN.jpg",
    name: "Kitchen 4Segment Knife Sharpener Household Multi-Functional Hand-Held Three-Purpose Black Sharpening Stone",
    originalPrice: 3.71,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3zPvmwB"
  },
  {
    id: "1005007188754706",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc8f12b314145477abbe859bd57c42284Y.jpg",
    name: "1085PCS Dark Hair Accessories for Woman Set Seamless Ponytail Holders Variety Hair Scrunchies HairBands Scrunchy Hair Ties",
    originalPrice: 8.19,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3wJKJDZ"
  },
  {
    id: "1005005562814968",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d722b0d93a6480bb7d89468841e92baS.jpg",
    name: "Portable Scale Digital LCD Display 110lb/50kg Electronic Luggage Hanging Suitcase Travel Weighs Baggage Bag Weight Balance Tools",
    originalPrice: 6.56,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3hXVHvD"
  },
  {
    id: "1005008227083577",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbc4cf4ae855a4131937c8bf8066f2c429.jpg",
    name: "Niche Modern Desktop Vanity Mirror 3 Color Light LED Makeup Mirror Touching Mirror Women Bedroom Dressing Mirror",
    originalPrice: 20.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4eQFe3t"
  },
  {
    id: "1005008980870568",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7335632164e84a7383d0aacabeaa8c7cR.jpg",
    name: "Car Headlight Restoration Polishing Kit - Scratch Remover & Oxidation Cleaner Repair Paste for Headlamp Assembly",
    originalPrice: 5.15,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2zsO6k3"
  },
  {
    id: "1005006407242370",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Scba7e591aceb4432bed48d4b48e361d8C.png",
    name: "5-60/100/150kg Grip Strength Gym Wrist Expander Hand Strengthener Adjustable Muscle Recovery Fitness Hand Strength Exercise",
    originalPrice: 11.24,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3qwhf8r"
  },
  {
    id: "1005008176399930",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S772c5609f67d4d33af69250c68f52976W.jpg",
    name: "Fashion Men's Watch Sports Electronic Wristwatch Large dial Multifunctional Waterproof Luminous Alarm Kids Male's Military Watch",
    originalPrice: 4.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4tQ5ONz"
  },
  {
    id: "1005009614923509",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4c9d9484ea624e2089e82d5f163a7c604.jpg",
    name: "4 Reusable Mop Pads with High Water Absorption and Ultra-fine Fiber Cleaning Pads That Can Firmly Adhere To Most Standard Mops",
    originalPrice: 5.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3eVJf2T"
  },
  {
    id: "1005007443805901",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3e22c27ff6364bbdbeec79ba9fb0b316a.jpg",
    name: "Disposable Food Cover Saran Wrap Bowel Cover Food Grade Fresh-keeping Plastic Bag Kitchen Storage Accessories",
    originalPrice: 3.4,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4TFXrx5"
  },
  {
    id: "1005006489032888",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd74cbbaf3fed48d39633a8100d751c5b7.jpg",
    name: "Elastic Shorts for Women, Loose Fitting, Quick Drying, Summer Thin Running, Fitness, Leisure, and Anti External Wear. Instagram",
    originalPrice: 5.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3LfscM7"
  },
  {
    id: "1005007454890401",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0f197b9a3faf4bfcab3c03749992aba9W.jpg",
    name: "New 15Rows DIY 5D Fluffy Lash Clusters 60D-200D Thick Eyelash Clusters Wispy Individual Lashes 10-20mm Cluster Eyelash Extension",
    originalPrice: 7.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4szt2zz"
  },
  {
    id: "1005007701886057",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7a8cc1cd569f43b19995fb1c40a286fbJ.jpg",
    name: "Professional Styling Wax for Women Anti-frizz Pomade Smoothing Broken Back Hair Mud Messy Hairs Control Wax Rod for Natural Wigs",
    originalPrice: 5.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4lhh1ur"
  },
  {
    id: "1005009354809440",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/See6f966326f845319c0c33aa2936d1fct.jpg",
    name: "50/100/200 Piece Super Powerful Magnets Strong Disc Magnets for Fridge, DIY, Building, Scientific, Craft, Education",
    originalPrice: 6.25,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3dCsu4x"
  },
  {
    id: "1005007959569048",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9695891db3cf4d1b9eb0edd23300c444d.jpg",
    name: "2 In 1 Electric Portable Ear And Nose Hair Trimmer Clipper 2024 Professional Painless Portable Eyebrow For Men",
    originalPrice: 9.11,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4OGxZVp"
  },
  {
    id: "1005008018644220",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se0712f3c68cb470d935f44bec673424ao.jpg",
    name: "USB Type C 66W Fast Charge Cable 3M 5M 8M 10M 12M  USB C Port Universal Micro USB Data Cable for Huawei Xiaomi Samsung Camera",
    originalPrice: 4.64,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3zn6lyr"
  },
  {
    id: "1005009521486858",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S21baccddf78d469e977ffd50663e4a67H.jpg",
    name: "FLASHFORGE AD5X 3d Printer Multi-Color Printing Intelligent Filament System One-Click Auto Leveling Group Control",
    originalPrice: 1089.98,
    discountPrice: 304.81,
    url: "https://s.click.aliexpress.com/e/_c4LIiXkP"
  },
  {
    id: "1005007442339985",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sae49dca18b2246748e46b6d7f2e90ef3c.png",
    name: "1pcs Soft Silk Satin Lined Bonnet Large Satin Hair Bonnet Household Sleep Shower Cap Hair Wrap Cover for Long Hair Salon Tool",
    originalPrice: 2.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2yJuC59"
  },
  {
    id: "1005009261652367",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S10e0a18d49404af1bd22ffe09991aaefW.jpeg",
    name: "Bendable Spring Drawstring Threader Clip Pants Hoodies Elastic Band Lace Cord Flexible Drawstring Thread DIY Sewing Accessories",
    originalPrice: 1.51,
    discountPrice: 0.74,
    url: "https://s.click.aliexpress.com/e/_c3exOnfH"
  },
  {
    id: "1005008246712592",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0fd9b12cb1e64e2b9ac837060d66f22dT.jpeg",
    name: "270ML Air Humidifier Cool Mist Aroma Diffuser LED Night Light  power-off protect USB Humidificador For Home Office",
    originalPrice: 8.34,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4K5QFe3"
  },
  {
    id: "1005007101337426",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S956ba141f43c4d80b2c673dc465ac118v.jpg",
    name: "MAGIC CASA 6pcs/set Small bottle Hydrating Jelly Lip Oil long-lasting Moisturizing  smooth shimmering Lip Hydrating Liquid",
    originalPrice: 10.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Kbb43p"
  },
  {
    id: "1005008920625446",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd68ebb7fb9694f828ae40b42b82860b8B.jpg",
    name: "Pokemon Crystal Ball 3D Pikachu Gengar Mewtwo Night Light Lamp Pokeball 3D Glass Pokemon Crystal Ball Statue Kids Birthday Gift",
    originalPrice: 11.49,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4dxIzuf"
  },
  {
    id: "1005007365669652",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S100d49f0b3434c25b4e4cd4a7b387462p.jpg",
    name: "Damaged Screw Extractor Set HSS Drill Bit Stripped Broken Remover Small Easily Quickly Take Out Kit Easy Demolition Power Tools",
    originalPrice: 8.09,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3aPqzsn"
  },
  {
    id: "1005006615442655",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S44783d0b63b446ffb1bd456cd388373ft.jpg",
    name: "Electric Sharpener Assembly Desktop Automatic Pencil Sharpener Suitable To Pencils (6-8mm) for Students School Office Stationery",
    originalPrice: 13.4,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4dDbIP1"
  },
  {
    id: "1005010165470404",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc1e54039c2d74b52b6188d1c0df0a0a3T.jpg",
    name: "280/1120/1680pcs Seven-Color Star Pimple Patches – Invisible Hydrocolloid Dots for Fun & Gentle Skincare",
    originalPrice: 1.64,
    discountPrice: 0.77,
    url: "https://s.click.aliexpress.com/e/_c38UIW9d"
  },
  {
    id: "1005007210342632",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc3c29fd322f94417b513c0077dadc68aH.jpg",
    name: "100W Fast Charging Cable Multi Charger Cable Nylon Braided Multiple USB Universal 3 in 1 Charging Cord Adapter with Type-C Micro",
    originalPrice: 5.0,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3FT67Hp"
  },
  {
    id: "1005006054727243",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7b2da3868fa345dfa1f594cf2aa67bc4W.jpg",
    name: "4PCS Privacy Screen Protector For iPhone 14 Pro Max 16 Pro Anti-Spy Glass For iPhone 13 15 12 11 Pro Max 13 Mini Tempered Glass",
    originalPrice: 4.63,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3XKGlh1"
  },
  {
    id: "1005008569184997",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S019ba1ade16a4e95b8b44f4fde3cd90cd.jpg",
    name: "BOYHOM 256G/128G/64G R36S ARKOS 2.0 Retro Handheld Game Console 3.5'' IPS screen,Portable Pocket Game Player for  children gift",
    originalPrice: 46.38,
    discountPrice: 21.78,
    url: "https://s.click.aliexpress.com/e/_c3vdDJND"
  },
  {
    id: "1005007552112384",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S98834a544db74af182e38c11aeb0bd7cD.jpg",
    name: "3/13/22pcs Professional Makeup Brushes Tools Set Make Up Brush Tools Kits for Eyeshadow Eyeliner Cosmetics Brushes Maquiagem",
    originalPrice: 9.05,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3UMdKdN"
  },
  {
    id: "1005006153610472",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2d3f84d4e35f4cdcb33651ff724dddc8N.jpg",
    name: "6PCS Women Watch Luxury Elegant Alloy Watch Crystal Wristwatch For Ladies Gift Quartz Watch Alloy Rhinestone Bracelet Montre",
    originalPrice: 7.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c418iOMb"
  },
  {
    id: "1005007956343686",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S74ddd39a11894e6c9148556da37be718G.jpg",
    name: "Disney LiLo Stitch Toys Building Blocks Sanrio Kuromi lega Anime Cartoon Character Model Building Blocks Toy for children Gift",
    originalPrice: 1.93,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4BV4Y2B"
  },
  {
    id: "1005009259589970",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd7c8d34af59146b88417117164c2ed3a0.png",
    name: "9000Pa Wireless Car Vacuum Cleaner USB Charging 1200mAh Portable Cleaning Appliance Mini Wet and Dry Vacuum Cleaner Household",
    originalPrice: 11.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xlCIjh"
  },
  {
    id: "1005009336647990",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2ee2d4b6251a4cddadb2248e66544a92R.jpg",
    name: "Elegant Style Heart shaped Pendant Necklace Hollow Design Mother's Day Gift Party Suitable for Best Friends Without Box",
    originalPrice: 4.68,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3RzN9O3"
  },
  {
    id: "1005007597238114",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S72b7bfd785064002bd12b796686a6262b.jpg",
    name: "1/2PCS Men Business Watches Fashion Men's Steel Band Quartz Watch with Bracelet（Box not Included）",
    originalPrice: 6.33,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3oBlXJN"
  },
  {
    id: "1005009210702155",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S681571e9edf844f19db421f7d9bebba2F.jpg",
    name: "2025 New Fashion Three Piece Set Blue Square Zircon Rings For Women Party Idea Gifts Custom Jewelry",
    originalPrice: 7.15,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3EPq9dZ"
  },
  {
    id: "1005008275255309",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S04928713e413490abe5caa0c6b69ba98z.jpg",
    name: "Super Strong Neodymium Fishing Magnets Heavy Duty imanes Magnet with Countersunk Hole Eyebolt for Salvage Magnetic Fishing",
    originalPrice: 4.32,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3sC76hV"
  },
  {
    id: "1005009286792761",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa66cbaa06b29460599d63e785fe47a48Y.jpg",
    name: "5/10/20/30pcs Beige Mixed Pack Small Clips, Cute Girl Accessories - Perfect for Daily Use, Special Occasions, or Travel Gifts",
    originalPrice: 2.54,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3BgnFab"
  },
  {
    id: "1005007962518485",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sae3dfb37beb84505a6d6e39ebfcfd906l.jpg",
    name: "3PCS/9PCS Long-Lasting Waterproof Black Eyeliner Pencil -Smudge-Proof Sweat-Resistant for Bold Eye Makeup, ldeal Gift",
    originalPrice: 3.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4rIrOtd"
  },
  {
    id: "1005009765812571",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc6d7978f4c8f4a4296951467289d4c080.jpg",
    name: "Professional Art Use 48-Color Acrylic Paint Markers, Dual-Tip Fine and Brush Tip Pens, Suitable for Stone, Wood, Calligraphy",
    originalPrice: 7.34,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3nhYRhD"
  },
  {
    id: "1005008318690844",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S56851847f8a54d4b9bbd6bfce2c3997ay.jpg",
    name: "Reinforced Belt Lumbar Column Posture Corrector Vest  Adjustable Back Support Strap Shoulder Spine Brace Neck Stretcher Trainer",
    originalPrice: 10.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3WWfnzZ"
  },
  {
    id: "1005007462620040",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S248ca760ad904833978fc88860c4f033A.jpg",
    name: "360° Rotating Makeup Organizer - 1pc Plastic Cosmetic Storage with 5 Compartments - Multi-Functional Holder for Brushes",
    originalPrice: 10.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2JPgzBN"
  },
  {
    id: "1005007649237800",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S88cc56ddce964bc391cc381a6852ff35a.jpg",
    name: "Women Body Shapewear Tummy Slimming Black Belly Band Shaping Shaper Corset Postpartum Flat Belly Postpartum Corset Shapewear",
    originalPrice: 10.15,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4p0Pq15"
  },
  {
    id: "1005010012752652",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0b6808fecce14339bffe2ebb27a5ccca0.jpg",
    name: "Rhod Pocket Blush LIP Stick Lip And Cheek Hydrating Stick Natural Rouge Powder Blush Cream Lipstick Cheek Easy To Apply Color",
    originalPrice: 7.93,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4o8OUIP"
  },
  {
    id: "1005006825260435",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf767bf44e4c24996ba23459779df751bI.jpg",
    name: "40/74/78 Colors Glitter Eyeshadow Palette Matte Waterproof Long Lasting Pressed Powder Cosmetics Kit  Fashion Women MakeUp Tools",
    originalPrice: 10.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c432ku6X"
  },
  {
    id: "1005007570765056",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0b069298d580478e84c4c17f439a1cb3h.jpg",
    name: "Precision Screwdriver Set, Laptop Tool Kit, 152/25 in 1 Professional Computer Screwdriver Repair Kit T5 T6 Torx Screwdriver",
    originalPrice: 7.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3BriMLt"
  },
  {
    id: "1005006349001267",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa7e0a830d356445bb9705abf05cfd179J.jpg",
    name: "AC 85-265V 12W E27 LED Light Bulb with Bluetooth Speaker Music Remote Control Color Changing RGB Lamp for Bedroom Party Decor",
    originalPrice: 11.14,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4e3NOsb"
  },
  {
    id: "1005007064366924",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3df22d43dda648d4a80ed2dd0ad3bdc2O.jpg",
    name: "Simple 6mm Titanium Ring Women Men Prevent Allergy High Polished Wedding Rings Stainless Steel Couple Finger Jewelry Gifts",
    originalPrice: 1.63,
    discountPrice: 0.51,
    url: "https://s.click.aliexpress.com/e/_c3pPygYj"
  },
  {
    id: "1005008414822226",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Secb85112c182453daa0c657ccfae30b9r.jpg",
    name: "Versatile Shoe Washing Bag - Durable Mesh Laundry Bag for Sneakers, Running Shoes, Socks & Bras with Zipper Closure, Laundry Bag",
    originalPrice: 2.71,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2J0MwTh"
  },
  {
    id: "1005007281749726",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se5d1d388c5ef4aeea90e07cbff2da255k.jpg",
    name: "M1911 Water Guns Pistol Toy Squirt Guns, Summer Pool Beach Shooting Games Outdoor Toys, Water Blaster Pistol for Kids Adult",
    originalPrice: 6.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2vlmkd9"
  },
  {
    id: "1005007878387904",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8c91cb6abb564934b997e8073b1d3d3ax.jpg",
    name: "MINI Milk Frother USB Rechargeable 3 Speeds Foam Maker Coffee Whisk Mixer Electric Handle Blender Egg Beater",
    originalPrice: 8.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3xtzBmF"
  },
  {
    id: "1005009425258780",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S42846bec3561460f9572cfe106a40d90T.jpg",
    name: "Vintage Hair Clipper Cordless Trimmer portable USB Fast Charging Hair Cutting Machine Electric Shaver Barber Professional Barber",
    originalPrice: 6.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2uyt2FZ"
  },
  {
    id: "1005007530549256",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S475fd1261d3d46c8bda3c1f9e2f184f8H.jpg",
    name: "F9 Wireless Earphones LED Dislpaly Binaural TWS Wireless Bluetooth Headset Waterproof Noise Reduction Bluetooth Headphones",
    originalPrice: 8.18,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3tGJbrl"
  },
  {
    id: "1005008041462175",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf838435988b24f05bef5247350a5ab93j.png",
    name: "Titanium Cutting Boards for Kitchen Stainless Board 304 Steel Thickened Double Sided Food Grade Portable Fruit Meat Chopping",
    originalPrice: 6.07,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3WIoBqb"
  },
  {
    id: "1005009032388658",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4036f085721b40d48b5663969224b7cbX.jpg",
    name: "144pcs French hand and foot wear nail set summer short square shiny false toenail acrylic full coverage suitable for nail salon",
    originalPrice: 7.96,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3jaGr79"
  },
  {
    id: "1005007524136981",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4de1ac647d9f4472803bcf77ae254c1cf.jpg",
    name: "Hover Soccer Ball Toys for Children Electric Floating Football with LED Light Music Soccer Ball Outdoor Game Sport Toys for Kids",
    originalPrice: 7.44,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c45hB4DN"
  },
  {
    id: "1005008555658264",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S81bdb467b75143ffb2219bd12ea0effbz.jpg",
    name: "Suitable for men, USB charging nose and ear hair trimmer portable electric nose hair clipper, mini compact design, quick chargin",
    originalPrice: 6.27,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3gnZcuF"
  },
  {
    id: "1005007199319033",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6880c4f4d64d4f11af0367eec5d173e7y.jpg",
    name: "Solid color hair towel Textured dry hair cap 9.8 \"X 25.5\" absorbent hair towel wrap for button-down women",
    originalPrice: 5.78,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3InCqSn"
  },
  {
    id: "1005007574675868",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6db090dd0bb048a08927408ce30d3c08c.png",
    name: "LULAA Electric Nail Drill Machine Set Pedicure Grinding Equipment Mill For Manicure  Professional Strong Nail Polishing Tool",
    originalPrice: 6.8,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4UveN2T"
  },
  {
    id: "1005007099153624",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8f65a12f62384e41bf6a3fe5877c4522S.jpg",
    name: "D16~D42mm Super Strong Neodymium Fishing Hook N52 Heavy Duty Rare Earth Neodymium with Countersunk Hole Eyebolt Salvage Magnetic",
    originalPrice: 4.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c33sn4wn"
  },
  {
    id: "1005007530336684",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Scb376afb07be4d0588f5dfa93b3789729.jpg",
    name: "ANENG SZ308 Digital Multimeter   AC/DC Current Meter Voltage Resistance Meter Electrician LCD Backlight Ohm Square Wave Test",
    originalPrice: 8.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4bDJ5qj"
  },
  {
    id: "1005007757636633",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc28849e37ceb46babdbf408a20545239l.jpg",
    name: "Humidifier Electric Aroma Air Diffuser Wood Ultrasonic Air Humidifier Essential Oil Aromatherapy Cool Mist Maker For Home 300ml",
    originalPrice: 15.11,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4TuEpiT"
  },
  {
    id: "1005009075905039",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4f2104500fd943cdb4fed7ec84bc0c857.jpg",
    name: "432 Colorful PE Pimple Patches Cute Star Shaped Pimple Cover Sticker Invisible Pimple Cover Removal Pimple Patch",
    originalPrice: 3.53,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2ymARgB"
  },
  {
    id: "1005007032842312",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8739570bcb814bf3980f865d584080f0m.jpg",
    name: "2.4G Wireless Mouse 1600DPI Optical Mouse Gamer for Computer 6 Buttons Wireless Mice with USB Receiver for PC Laptop Accessories",
    originalPrice: 7.62,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4s8S08x"
  },
  {
    id: "1005007203879191",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf049657d1930407286ce9dfbca07790aQ.jpg",
    name: "Portable Toothpaste Toothbrush Protect Holder Case Travel Camping Storage Box Protect Toothbrush Toothpaste from Dirt and Damage",
    originalPrice: 4.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3i9pfVt"
  },
  {
    id: "1005006787323642",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6931f495fd1a45c9bab2b3dc694cbb883.jpg",
    name: "Women Pajama Suit Fashion V-Neck Lace Sexy Lingerie Pyjamas Sleep Shorts Set Sleepwear New",
    originalPrice: 7.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3770rS7"
  },
  {
    id: "1005008796124357",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc83c0b5fb92f49908d25184e5be6d8a9B.jpg",
    name: "8PCS Accessories Set for Stanley Cup Purple 30oz 40oz tumbler Silicone Straw Topper Cover Cap Boot Handle Charm Initials Sticker",
    originalPrice: 9.28,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3I0b4y3"
  },
  {
    id: "1005005704747017",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0e98bebba6614cc6acc79940658dab47U.jpg",
    name: "Transparent Luminous LED Night Lights USB Luminous Acrylic Night Light Erasable Write Message Board Calendar Desktop Ornaments",
    originalPrice: 8.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4D6Ui19"
  },
  {
    id: "1005007335709104",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6041f5f03de147b0b5f25f8e0e71926bA.jpg",
    name: "9pcs Accessories Set 3 Spill Proof Stopper Flowers Straw Cover Boot 2 Straw and Brush and 1 Flower Charm Chain for Stanley Cup",
    originalPrice: 13.63,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3lBa9B9"
  },
  {
    id: "1005008153593721",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9ec92d0b123442f6bb3c270ae06f8494z.jpg",
    name: "1 Pc Stylish Waist Pleated Corset - Soft support fixed chest pad sleeveless vest Sexy short top with thin straps Solid color",
    originalPrice: 7.03,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3BNudS3"
  },
  {
    id: "1005010183888129",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S645d70042b3e4e909c8fad9149bef6aeJ.png",
    name: "K Pop Demon Hunters Kawaii Cartoon Figure Water Bottle – Girls’ Summer Sports Large Capacity Plastic Bottle | Portable for Hikin",
    originalPrice: 7.74,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2zpbCEf"
  },
  {
    id: "1005007713213089",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3b66f70b88554a79bcbcc6f9f8541a03m.jpg",
    name: "LED Galaxy Projector Light Colorful Galaxy Sky Projector Bedroom Night Light Kids Room Decoration Christmas Party Decoration",
    originalPrice: 10.17,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4BnADij"
  },
  {
    id: "1005007166567356",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sde610cc8e04c4d12a35a01feedb1f6ed1.jpg",
    name: "SEAMETAL Car Front Windshield Defogging Brush Telescopic Long handle Car Household Glass Clean Brushes Dust Remover Tool",
    originalPrice: 9.9,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4K9AwmX"
  },
  {
    id: "1005005597724853",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa5014ef63ece4a939867f1f0da8d61d3j.jpg",
    name: "Japan Genuine NH35 Automatic Mechanical Movement High Accuracy 24 Jewels Mod Watch Replacement NH35A Date at 3:00",
    originalPrice: 123.29,
    discountPrice: 53.66,
    url: "https://s.click.aliexpress.com/e/_c30IeInZ"
  },
  {
    id: "1005007159751888",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S152b58df52bf4a829c02e2f29c6a5762q.png",
    name: "6pcs/Set Hair Brush Set Hairdressing Spray Bottle Hair Braiding Loop Rat Tail Comb Teasing Hair Brsuh Edge Control Hair Brush",
    originalPrice: 13.44,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3tD8cKX"
  },
  {
    id: "1005007505020101",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6ce6b80a41d44ad48783b1367b635118U.jpg",
    name: "6PCS/Set Fashion Heart Dial Women's Watch Casual Leather Band Analog Quartz Watch Leaf Bracelets Set（Without Box）",
    originalPrice: 6.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c38I1AAP"
  },
  {
    id: "1005008624727871",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S94a40797c36d4b6cbc12727646ef88e15.jpg",
    name: "Car Obd2 Scanner Diagnostic Tool Code Reader Engine Fault Code Reader Scanner Can Diagnose All Obd Ii Protocol Cars since 1996",
    originalPrice: 10.69,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3n7Ts6n"
  },
  {
    id: "1005009498079500",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6b8756e7a7674c04a188f153b10ce528f.jpg",
    name: "WUBEN G5 Rechargeable EDC Flashlight, 400 Lumens Dual Light Sources Mini Flashlight with RGB Light, Portable Pocket Flashlights",
    originalPrice: 47.71,
    discountPrice: 8.95,
    url: "https://s.click.aliexpress.com/e/_c3WIwcir"
  },
  {
    id: "1005010284055504",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb84a3ef0c274432daa89b9deb7479bbfN.jpg",
    name: "Fashion Fenty Beauty Lip Glaze Moisten Shine Glitter Lip Plumper Makeup For Beginner Liquid Lipstick Female Makeup Cosmetics",
    originalPrice: 8.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3QnCenZ"
  },
  {
    id: "1005007211496817",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sced6d7e68f73416bbf4bb2c0d9867f98c.jpg",
    name: "360 Rotatable Car Phone Holder Universal Cell Phone Stands Car Rack Dashboard Support for Auto Grip Mobile Phone Fixed Bracket",
    originalPrice: 3.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c44vUqux"
  },
  {
    id: "1005009730636378",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa4c2489ce3fd464f9d24e13ba53684990.jpg",
    name: "Highly absorbent double-sided sponge magic cleaning pot rust sponge cleaning brush kitchen cleaning tool",
    originalPrice: 2.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3U6u3z1"
  },
  {
    id: "1005007545665127",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S920893df2afd49a18c0feecc1a7bd82dy.jpg",
    name: "4 color Fruity Lip Tint Water Gloss Tint,Moisturizing Waterproof Liquid Lipstick, Non-Stick,High Pigment,Long-Lasting Colors",
    originalPrice: 6.25,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c45L0j6F"
  },
  {
    id: "1005009313597952",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb93133304b8f45a58fe27fb5e6d1a73ad.jpg",
    name: "Nose Hair Trimmer Rechargeable Electric Nose Hair Remover Men Eyebrow Hair Shaving Razor Mini Pocket Portable Nose Hair Clipper",
    originalPrice: 7.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3dIO31v"
  },
  {
    id: "1005007046845734",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S40a0d5b2fd4d4c1581a065b6b29c5106i.jpg",
    name: "DIY Lashes Extension Kit Eyelashes 200 PCS Clusters Lash Bond and Seal Makeup Tools for Gluing  Lashes Gluing Glue  Accessories",
    originalPrice: 13.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4MRI4Er"
  },
  {
    id: "1005009055839867",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbda0141a529148049a31192b27ee43e6L.jpg",
    name: "DIY Eyelash Extension Kit Individual Lashes Cluster Mix Lash Clusters with Lash Bond and Seal and Lash Accessories",
    originalPrice: 6.33,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3P3wPmj"
  },
  {
    id: "1005007224131241",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb04b9e79be524f6fa23aae381c0c1c4dy.jpg",
    name: "1PCS 13 Joints Figure Articulate Movable Dummy Doll Diy Assembly Toy 3D Printed Action Figure Stop Motion Animation Dummy",
    originalPrice: 3.82,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2JI9sPt"
  },
  {
    id: "1005004124320239",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S43dca960885141469e5f40a584a479697.jpg",
    name: "1PC Plastic Vernier Caliper Digital Display Caliper Mini Text Play Caliper Student Vernier Ruler 0 to 150mm Measuring Tool",
    originalPrice: 3.59,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4PQXBIL"
  },
  {
    id: "1005007255182152",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Scafebc832e674c45a0b838b484c02237I.jpg",
    name: "COB LED Headlamp Induction Head Lamp Built-in Battery USB Rechargeable Head Flashlight Outdoor Camping Fishing Sensor Headlight",
    originalPrice: 11.39,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4BpgaFh"
  },
  {
    id: "1005006471454093",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5ce0bd7525b2474bb5b007c23056817bX.jpg",
    name: "Newton's Cradle Balance Steel Ball Teaching Supplies Physics Science Pendulum Desktop Toys Stress Relief Gifts Home Decoration",
    originalPrice: 5.6,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c326QDGX"
  },
  {
    id: "1005007625836350",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa4f50077b4e74ca7ad5645302631ee03p.jpg",
    name: "Retractable Heavy Duty Pull Reel Carabiner Strong Steel Wire Rope Buckle Spring Key Ring Outdoor Sporty attachment Keychain Tool",
    originalPrice: 5.4,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3KWQ4xD"
  },
  {
    id: "1005005836856915",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S44ab02bc14b44f58b235b6d6dfb64ef97.jpg",
    name: "Nut and Hard Spice Grinder for Nutmeg Ginger Rock Salt and Peppercorn Hand tools, crushers",
    originalPrice: 14.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3L7QpFd"
  },
  {
    id: "1005007498184998",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0b728591262a4211bf5f4d40ba6736074.jpg",
    name: "Summer Fashion Men's Slippers Printting Little Bear Sandals Indoor Bathroom Non-slip Soft Women Dormitory Casual Shoes Couple",
    originalPrice: 4.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3K8tQV9"
  },
  {
    id: "1005007026553238",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S67f4ff436536418cb12984b85613db4ai.jpg",
    name: "\"Versatile Reusable Double-Sided Waterproof Adhesive Tape - Perfect for Kitchen and Bathroom Supplies\"",
    originalPrice: 2.09,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AgmKdV"
  },
  {
    id: "1005007131864150",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3d3bd9e0de224ae49e6074cf81608aa9f.jpg",
    name: "UV Flashlight 395nm Ultraviolet Torch With Pen Clip Portable AAA Batteries Used Violet Light Pet Urine Scorpion Detector UV Lamp",
    originalPrice: 7.61,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Vyc1D1"
  },
  {
    id: "1005005780519627",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S027c952a52a74645972936a02a24fa66x.jpg",
    name: "Kawaii Hello Kitty Cat Dolls With Artificial Flowers Creative Bouquet Christmas Valentine Birthday Graduation Gifts",
    originalPrice: 8.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4DrakLt"
  },
  {
    id: "1005008189425248",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd14a2071571348119da32d81a425109cG.jpg",
    name: "Olaf Rotating Table Cell Phone Holder Support Desktop Stand For iPad Samsung iPhone 15 14 13 Mobile Mount",
    originalPrice: 3.65,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3aivVOT"
  },
  {
    id: "1005009311531202",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S54b0184a2e2747a9833e54c72e826977L.jpg",
    name: "1400 pieces of multi-color star acne patches, facial acne patches, concealer acne patches, and pimples patches, ultra-thin",
    originalPrice: 3.32,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2wNbNWj"
  },
  {
    id: "1005007803211204",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa34e7bc4cd994b92b5bd7c34598f8a44a.jpg",
    name: "20-200 PCS Cute Stickers Goo Card Kawaii Cartoon Laser Sticker No repeat for Diary Kid DIY School Students Decoration Stationery",
    originalPrice: 4.41,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Z0EUkF"
  },
  {
    id: "1005006745101782",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S373d7d3c9a0a4fd49471868a0b812c561.jpg",
    name: "Precision Screwdriver Set 25 in 1 Phillips Torx Hexagonal Flat Head Magnetic Screwdriver Head for iPhone PC Watch Camera Glasses",
    originalPrice: 10.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xgI3Aj"
  },
  {
    id: "1005006841435152",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S973962c4c04942ec9011f4f2d9abd8853.jpg",
    name: "USB Sunset Sunset Ambiance Light",
    originalPrice: 2.82,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2zZ5MN5"
  },
  {
    id: "1005006963247455",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S688ee6defa3b4c10a2f92b3c2741a619D.jpg",
    name: "Car Trash Can (with Lid) Contains 60 (300) Garbage Bags, Small Car Trash Can, Leak-proof Mini Car Accessories",
    originalPrice: 3.32,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4C2aolN"
  },
  {
    id: "1005010501936036",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S746e7bf9db054e5eaf917a8fdd8e17dbN.jpg",
    name: "Champagne Firming Body-Cream With Pepperslim Anti Wrinkle Skin Tightening Cream Daily Hydrating Body Lotion For Men And Women",
    originalPrice: 13.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3z1xB3d"
  },
  {
    id: "1005007022413379",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9a28c9a4bac540f991c0cf276afc5fc0B.jpg",
    name: "Men Casual Fashion Sports Pants Gym Sport Trousers for Men Jogger Sweatpantsrunning Workout Jogging Long Pants",
    originalPrice: 14.05,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3paAD8J"
  },
  {
    id: "1005007551176004",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S70f8f5e599ab4566840776c4a17885d1t.jpg",
    name: "10pairs Breathable Cotton Sports Stockings Men Bamboo Fiber Autumn and Winter Men Socks Sweat Absorption Deodorant Business Sox",
    originalPrice: 5.74,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4CQfAPh"
  },
  {
    id: "1005008253095559",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Hdeef93813ec14c77a2d1613efec43f387.png",
    name: "KZ EDX Pro Earphones Dynamic In Ear Monitor HiFi Wired Headphones Bass Stereo Game Music Earplugs Noice Cancelling Headset",
    originalPrice: 5.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c32wTlqb"
  },
  {
    id: "1005009694480700",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0c6aa4e9337440968cdccc113e842cacS.jpeg",
    name: "8.5 Inch Multi Functional Industrial Wire Stripper Cutter Crimper Heavy Duty Stainless Steel Electrical Pliers Ergonomic Grip",
    originalPrice: 7.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c402mbAj"
  },
  {
    id: "1005008535777446",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6745191767ad4f7393ffd1f33b5308a6I.jpg",
    name: "Silicone Scraper Squeegee Glue Remover Knife Caulking Angle Beauty Crack Trowel Tool Grout Scraper Kit 5in1 Multifunctional Home",
    originalPrice: 3.41,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4ndUPZt"
  },
  {
    id: "1005009932574310",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S587fe6ab715540348fe8572fcee0df2c8.jpg",
    name: "New Color Ribbon PBJ Lemontini Lip Gloss Pocket Blush Stick Non-fading Waterproof Blusher Moisturizing Shimmer Lipstick Liner",
    originalPrice: 9.38,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c44rIiqJ"
  },
  {
    id: "1005006862248805",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1027660567ca4336a6f375ee898cdc92I.jpg",
    name: "3D Non Slip Bathroom Mat Cobblestone Embossed Bath Mats Absorbent Doormat Carpet Door Floor Mats Machine Washable Quick Drying",
    originalPrice: 7.72,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2Rfx1XV"
  },
  {
    id: "1005007316758503",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6508550f3e034d4683cbb5d6e721f17fZ.jpg",
    name: "2 Pin Way Plug Waterproof Electrical Connector Car Wire Cable Automotive Electrical Connector Strip Terminal Connection NEW",
    originalPrice: 0.91,
    discountPrice: 0.9,
    url: "https://s.click.aliexpress.com/e/_c3RL7yhl"
  },
  {
    id: "1005008618276811",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/See1a42ac3e23450fb5299e365fee856fH.png",
    name: "0.8mm 1.0mm 20g 50g 100g Soldering Tin Wire Tin Melt Rosin Core Solder Soldering Wire Roll No-clean FLUX 2.0%",
    originalPrice: 3.19,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4B1oJSF"
  },
  {
    id: "1005005588986583",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf18181d4f02a4c769aabcc0b2c577416g.jpg",
    name: "Motion Sensor Light Wireless LED Night Light Type C Rechargeable Light Cabinet Wardrobe Lamp Staircase Backlight For Kitchen LED",
    originalPrice: 4.54,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3yPYQuL"
  },
  {
    id: "1005007982686521",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S515d00d98bd6442db01eb154a5146700B.jpg",
    name: "YANBIGUO Arthritis Gloves for Organist/Cellist/Violinist,Half-finger Compression Glove Relief Hand Pain,Arthritic Joint Symptom",
    originalPrice: 3.66,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c41rJxLd"
  },
  {
    id: "1005007140743658",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Scf4023f868304166aba763c7f28a15463.jpg",
    name: "Original QKZ AK6 In Ear Earphone 6 Dynamic Driver Unit Headphone With Mic Stereo Sports HIFI Subwoofer Headset Monitor Earbuds",
    originalPrice: 6.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c43wk6g7"
  },
  {
    id: "1005006113482389",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3f74c363765c4e8f96c24b90a616b5a4S.jpg",
    name: "Mesh Pop-up Laundry Basket, Laundry Basket, Foldable Dirty Clothes Storage Basket, Large Capacity Storage Basket",
    originalPrice: 6.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2v7i9w3"
  },
  {
    id: "1005006994974238",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S58fc6d5d05a04d15ba3771b1069521f4r.jpg",
    name: "Silicone Piping Bags and Tips Set Cake DIY Decorating Kit with Stainless Steel Nozzle Reusable Silicone Pastry Baking tool",
    originalPrice: 8.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3IWpqrp"
  },
  {
    id: "1005007446233689",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Ad14cb527e14f4dd586b621e54f36f5d4e.jpg",
    name: "NEW R36S Retro Handheld Game Console Linux System 3.5 Inch IPS Screen Portable Pocket Video Player 64GB 128GB Games Kid Gift",
    originalPrice: 126.13,
    discountPrice: 28.63,
    url: "https://s.click.aliexpress.com/e/_c4nbSX2L"
  },
  {
    id: "1005008283766732",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7861214328ee434180e7fd8eee486eaf0.jpg",
    name: "New Automatic Buckle Belt, Canvas Tactical Workwear Casual Outdoor Military Training Pants Belt For Men",
    originalPrice: 6.93,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3yfjj9D"
  },
  {
    id: "32815558646",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf83b919794f0406798f8506fbacb6f80H.jpg",
    name: "Ooak only for the body fee, shipping cost etc please dont buy it alone",
    originalPrice: 6.0,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4nLnkp9"
  },
  {
    id: "1005006849065912",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc801b072e9734756a205692cd637b0f2j.jpg",
    name: "GENEVA High Quality Men's Luxury Belt Fashion Quartz Watch Men Round Business Student Sport Waterproof Glow Clock",
    originalPrice: 5.49,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c42iOu9N"
  },
  {
    id: "1005005062993089",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb207e4552a894f2cbb90976834447f31v.jpg",
    name: "9pcs/set 5mm-13mm Hex Sockets Sleeve Nozzles Nut Driver Set Screwdriver Set Schroevendraaier Set Bits Sets Tools Socket Wrenches",
    originalPrice: 7.46,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3b7C0Ft"
  },
  {
    id: "1005007699612656",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6417947385d94f6c90b302177b4fc0fcj.jpg",
    name: "200PCS Women Girls Colorful Nylon Elastic Hair Bands Ponytail Hold Small Hair Tie Rubber Bands Scrunchie Hair Accessories",
    originalPrice: 2.71,
    discountPrice: 0.97,
    url: "https://s.click.aliexpress.com/e/_c3xcQscF"
  },
  {
    id: "1005009211379088",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S36bd821f2fcb4b6c878b8ab2d3a8a72br.jpg",
    name: "Welding Wire Fixture Adjustable Suction Bracket Welding Table Clamp For Motherboard Soldering Welding Locator Soldering Tools",
    originalPrice: 1.83,
    discountPrice: 0.88,
    url: "https://s.click.aliexpress.com/e/_c3s9Hmg3"
  },
  {
    id: "1005006783851715",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4354f37e78cf43eebe226652db8c5f36q.jpg",
    name: "Thermal Underwear Tops Men Winter Clothes Thermal Shirt Autumn Men's Winter Tights High Neck Thin Slim Fit Long Sleeve T-shirt",
    originalPrice: 9.25,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3i7nJmL"
  },
  {
    id: "1005007469872293",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S19de961a2e8a4e038ae52a0d6e3279d2d.jpg",
    name: "Men's High-Quality Belt 110cm 120cm 130cm Luxury Belt, Black Men's Automatic Buckle Jeans Men's Belt Suit Belt",
    originalPrice: 10.92,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3UcNbnl"
  },
  {
    id: "1005007021015396",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9acb1a835ed64a68a411003140342648P.jpg",
    name: "Carving Hair Clipper Professional Hair Cutting Machine Barber Rechargeable Hair Trimmer Metal Haircut Machine Clipper for Men",
    originalPrice: 3.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AEsuYT"
  },
  {
    id: "1005006845192985",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S93be2d11ce9b43ff86bb252364b858a3a.jpg",
    name: "40 Hole Dinosaur Bubble Handheld Bubble Machine, Electric Bubble Gun Outdoor Wedding Party Toy(without Bubble Water)",
    originalPrice: 6.89,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3VP9Lsf"
  },
  {
    id: "1005007816403187",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sceb60d8918d8429eb1dfcefb15c14fb6m.png",
    name: "EPICJOY SummerCart 64 SC64 Open Source Game Card N64 with Built-in Emulator For N64 Console Gift 32GB TF Card 5400 Games",
    originalPrice: 73.91,
    discountPrice: 51.74,
    url: "https://s.click.aliexpress.com/e/_c3aScjl1"
  },
  {
    id: "1005005174831591",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S81c5632a170e46718840ec19384e907ao.jpg",
    name: "Tape Bluetooth USB LED Strip Light 5050 SMD 5V USB RGB Lights Flexible LED Lamp Tape Ribbon RGB Self-adhesive TV Desktop Diode",
    originalPrice: 9.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3i5VkWB"
  },
  {
    id: "1005007098280632",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1777c2fe462a48789cdbf9e24515209cE.png",
    name: "Kitchen Shelf Cleaning Cloth Storage Draining Rack Household Detergent Sponge Rack Water Sink Water Sink Water Sink Artifact",
    originalPrice: 8.69,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3gcJvAb"
  },
  {
    id: "1005009214273179",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc02dbd51e3794f139dd0334dc2d7a88dE.jpg",
    name: "3pcs Lightweight PC Frames Minimalist Square Clear Lens Glasses - Blue Light Blocking, Full Frame, for Everyday & Casual Wear",
    originalPrice: 4.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4PG5591"
  },
  {
    id: "1005005565954791",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc2a56cd2c0bc40fcaf0512bc07bab0882.jpg",
    name: "Noble New Arrive 925 Silver 4MM Chain for Men Women Bracelet Necklace Jewelry Set Lady Christma Gifts Charms Wedding",
    originalPrice: 7.23,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Sfh1Uf"
  },
  {
    id: "1005005921446741",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/See10656594ec4fcab2fec8fd929b2cf0o.jpg",
    name: "1PC PP Desktop Double Layer Storage Rack Rectangular White Organizing Student Desk Office Cosmetics Stationery",
    originalPrice: 12.39,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c34tF0Kn"
  },
  {
    id: "1005007297516372",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa89c37a48d0f4155a5b01bbf1f7c35baV.jpg",
    name: "LED Strong Light Flashlight Rechargeable Multi functional for Long Range Portable Outdoor Home Mini Flashlight Cap Clip Light",
    originalPrice: 5.79,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4riz7BN"
  },
  {
    id: "1005005492634304",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1c13adc42d3e4ae98754fc7cd103a1b9W.jpg",
    name: "Universal Mobile Phone Holder Flexible Lazy Holder Adjustable Cell Phone Clip Home Bed Desktop Mount Bracket Smartphone Stand",
    originalPrice: 5.28,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3vBH92L"
  },
  {
    id: "1005006851856601",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbc2eb701a1c246bd967fd2231e46cc250.jpg",
    name: "Mini GPS Locator AntiLost Alarm Wallet Keychain Smart Tag Bluetooth-Compatible Tracer Keychain Dog Pet Child Tracker Key Finder",
    originalPrice: 6.78,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4SdcwrZ"
  },
  {
    id: "1005007551320745",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S252a0715cded42aa92dbe11e2bc6b317x.jpg",
    name: "Multifunctional Solar Lamp Outdoor Garden Decoration Solar LED Light Waterproof Sunlight Powered Spotlight with Motion Sensor",
    originalPrice: 9.77,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2wHOklN"
  },
  {
    id: "1005007439344342",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfd43a49589d343a3b796f4c31af707e56.jpg",
    name: "Powerful LED Flashlight Rechargeable USB Waterproof Zoom Fishing Hunting Camping 100,00 Lumen Tactical Flashlight LED Torch",
    originalPrice: 6.26,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4NBpzix"
  },
  {
    id: "1005007102227306",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa46e81df858346ff9cc87ac7f5a2e8f2l.jpg",
    name: "Breathable Sunscreen Ice Silk Mask For Men And Women Motorcycle Fishing Bicycle Windproof Scarf Summer Facial Scarf Headscarf",
    originalPrice: 2.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4pAEvxH"
  },
  {
    id: "1005007856015606",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S96f3860443cb4a29844beeb96fb3f091N.jpg",
    name: "M10 Wireless Headphone Bluetooth Earphones Waterproof Earpieces Sport Earbuds For Huawei Iphone OPPO Xiaomi TWS Music Headset",
    originalPrice: 8.07,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4L5ULZZ"
  },
  {
    id: "1005007346288622",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S68eea332bf5e42a282b9951c6bee0ab47.jpg",
    name: "Automatic Drinking Love Pet Bowl Moisture-proof Cat Bowl Dog Basin Dual-use Multi-functional Drinking And Feeding",
    originalPrice: 9.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3sw8MML"
  },
  {
    id: "1005006781480826",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd5927c43f7e347fe840c0282174f25c8H.jpg",
    name: "YBFDO Men Body Shaper Slimming Compression Vest Undershirt Seamless Waist Trainer Tank Top Belly Control Weight Loss Shapewear",
    originalPrice: 7.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3HP8uhV"
  },
  {
    id: "1005007244139650",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/See1847f1343c4b27afb678e3b2fd6664A.jpg",
    name: "8 in 2 USB +Type C HUB Docking Station with 3.5mm Audio Jack Adapter Micro SD Card Reader Laptop Tablet Phone Disk Converter",
    originalPrice: 7.71,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4SiOsC3"
  },
  {
    id: "1005008277604522",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S330fd6d1246e4ba29d06d416d324511dA.jpg",
    name: "Camping Baking Barbecue Gas Torch Welding Fire Maker Lighter Butane Burner Flame Metal Flame Gun WeldingTorch Lighter Heating",
    originalPrice: 8.63,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3vKcKOB"
  },
  {
    id: "1005007470098695",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S173d0f13b83a488eb7bc15847bcc1858s.jpg",
    name: "3PCS/Set Men Business Watches Casual Leather Band Analog Male's Quartz Watch Necklace Bracelet Set",
    originalPrice: 6.99,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AQTwyL"
  },
  {
    id: "1005006502571731",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1ecfb881e7cf497b9c35a06c55024233q.jpg",
    name: "Resistance Bands With Handles, Exercise Bands, Workout Bands With Handles For Men Women, Strength Training Equipment At Home",
    originalPrice: 3.28,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4bdDXET"
  },
  {
    id: "1005007524113724",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfaf59c0b91534df496dacbf906f413eaL.jpg",
    name: "4D Black Mascara Thickening, Lengthening, Curling, Waterproof Liquid Fiber Mascara",
    originalPrice: 8.85,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4ezPCHd"
  },
  {
    id: "1005005504286671",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdb9ab22ff8d84d2e909b0d5c09f000343.jpg",
    name: "Large Capacity Clothes Storage Bag Organizer With Reinforced Handle Suitable For Blankets Bedding Foldable With Sturdy Zipper",
    originalPrice: 3.77,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3g75kOr"
  },
  {
    id: "1005009487533786",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se31879d7332446ad84aa20c1f7221f7cK.jpg",
    name: "Garden Solar Lamps Outdoor Wall Light Sconces Outdoor Gardens Decoration Led Lights Sunlight Lamp Lighting Waterproof Furniture",
    originalPrice: 13.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3X6tp2x"
  },
  {
    id: "1005007709713617",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc47d81ef296d42f9845732020daae3440.jpg",
    name: "Wireless USB Rechargeable Motion Sensor LED Bar Light Induction Night Light Portable Cordless Magnetic Cabinet Lamp for Kitchen",
    originalPrice: 4.81,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3cGklDp"
  },
  {
    id: "1005005450785085",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0af78966b3614be2b75b067b0c7c51e1z.jpg",
    name: "Night Vision Glasses PC Frame Polarized Sunglasses Men Outdoor Sport Sun Glasses Day Night Vision Driver Night Glasses Goggles",
    originalPrice: 2.49,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Vbuv0P"
  },
  {
    id: "1005006478866302",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2a4f4e6bedd4481390adca888374a28af.jpg",
    name: "Makeup Brush Set Soft Fluffy Professiona Cosmetic Foundation Powder Eyeshadow Kabuki Blending Make Up Brush Beauty Tool Makeup",
    originalPrice: 3.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2JZIEjp"
  },
  {
    id: "1005007468461943",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2e9849d5e420438d9e2aada93d091049Q.jpg",
    name: "Mimikyu Eevee Stuffed Plush Toy,Birthday Kids Gifts,Christmas,Anime Character Dolls 7\"",
    originalPrice: 11.51,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c35OHKeP"
  },
  {
    id: "1005005135973833",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1f4cafe63ea64820ab2af1e811743375g.jpg",
    name: "Rfid Smart Wallet Card Holder Metal Thin Slim Men Women Wallets Pop Up Minimalist Wallet Small Black Purse Vallet Walets for Men",
    originalPrice: 3.45,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4t5ZAvV"
  },
  {
    id: "1005006779445112",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S568c902db2cf46fa808dab3fbcb3e737W.jpg",
    name: "Wireless Mouse RGB Rechargeable Bluetooth Mice Wireless Computer Mause LED Backlit Ergonomic Gaming Mouse for Laptop PC 3600DPI",
    originalPrice: 7.56,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c43v094r"
  },
  {
    id: "1005006049606008",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf837aacd09b743b7892dd9aacd348964a.jpg",
    name: "2 in 1 USB 3.0 Card Reader Micro TF sd card Reader usb adapter High Speed Cardreader TF Memory card For PC Laptop Accessories",
    originalPrice: 2.84,
    discountPrice: 0.91,
    url: "https://s.click.aliexpress.com/e/_c3H0VM6R"
  },
  {
    id: "1005008359205845",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfef2cd4c7fec4e2fb797237f4502faadl.jpg",
    name: "Car Seat Gap Filler Side Seam Plug Strip Leak-proof Filling Strip For All Car Model Wallet Phone Holder Car Accessories",
    originalPrice: 6.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c44Q0ZS3"
  },
  {
    id: "1005008821439915",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7e338703c63144868bc666b4098dc419L.png",
    name: "4 Ports USB C PD Charger Quick Charge 3.0 Type C USB Phone Chargers Fast Charging Adapter For iPhone 16 15 Samsung Xiaomi Huawei",
    originalPrice: 5.3,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4F0qBKx"
  },
  {
    id: "1005006035357400",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4c3c73827fa748dc81d7096bae07f136K.jpg",
    name: "Men's Quick Dry Short Sleeve Gym Running Moisture Wicking Round Neck T-Shirt Training Exercise Gym Sport Shirt Tops Lightweight",
    originalPrice: 6.4,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c30CfWYb"
  },
  {
    id: "1005005231598768",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S284aa9f1305f4468baf2e1eceeb916405.jpg",
    name: "Mini LED Car Roof Star Night Light Projector Atmosphere Galaxy Lamp USB Decorative Adjustable for Auto Roof Room Ceiling Decor",
    originalPrice: 4.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3O2Q3Aj"
  },
  {
    id: "1005008791501410",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se455dce736bd4129bd545953b0732d77Q.jpg",
    name: "Dewalt DW089LG 12-Line Green Beam Laser Level - 360° 3-Side Coverage, 12V Li-Ion, Jobsite Ready for Any Task",
    originalPrice: 119.5,
    discountPrice: 51.53,
    url: "https://s.click.aliexpress.com/e/_c41R7Deb"
  },
  {
    id: "1005008323008233",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S770c78f1a15d40f197331a86c2d07f8a7.jpg",
    name: "Unique 3D Crystal Ball Night Light Led Lamp Bedside Table Glowing Galaxy Lamp Saturn Planets Moon Children Birthday Gift Toy 5cm",
    originalPrice: 14.45,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3iov6SJ"
  },
  {
    id: "1005007995387504",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S265dadc7fd524d988a8a92930d394dcfv.jpg",
    name: "4-IN-1 240W USB Type C To USB C Cable PD Fast Charger Wire For iPhone 16 Pro Max 15 iPad Xiaomi Samsung Tablet 1M Data Cord",
    originalPrice: 10.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3XxvRa3"
  },
  {
    id: "1005005244419690",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd43f6609222445219d07234b40a75569O.jpg",
    name: "1/3/5m Nano Tape Double-Sided Adhesive Tape Traceless Waterproof Tape For Bathroom Kitchen Sink Tap Gel Sticker",
    originalPrice: 3.88,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Ox6b3l"
  },
  {
    id: "1005006125248622",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S53a2acef1f864ff9bab8a9500ef9862cY.jpg",
    name: "Electric Neck Massager EMS Muscle Massage Stimulator Low Frequency Instrument Back Cervical Calf Patches Pain Joints Mini Device",
    originalPrice: 8.38,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3iI6zGJ"
  },
  {
    id: "1005007346156073",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd131dfa83b174f60b83b164d259b805fz.jpg",
    name: "Stylus Pen For Apple Pencil with LED Power Indicators Palm Rejection Touch Pencil for 2025 2022 2021 2020 2019 2018 iPad pencil",
    originalPrice: 9.69,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c42QVyin"
  }
];

export default function HotDealsPage() {
  const getDiscountPct = (orig, disc) =>
    disc ? Math.round((1 - disc / orig) * 100) : null;

  return (
    // paddingTop isliye diya hai taake website ka header design ke oopar na aaye
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <section className="hot-deals-section" id="hot-deals">
        <style>{`
        .hot-deals-section {
          padding: 3rem clamp(1rem, 4vw, 3rem) 6rem;
        }

        /* Header */
        .hd-header {
          max-width: 1400px;
          margin: 0 auto 2.5rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .hd-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fd79a8;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .hd-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.15;
          margin-bottom: 0.4rem;
        }
        .hd-title span {
          background: linear-gradient(135deg, #fd79a8, #6c5ce7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hd-sub {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .hd-count {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          white-space: nowrap;
          margin-bottom: 4px;
        }
        .hd-count span { color: #fd79a8; }

        /* Divider */
        .hd-divider {
          max-width: 1400px;
          margin: 0 auto 2.5rem;
          height: 1px;
          background: linear-gradient(90deg, #fd79a8 0%, transparent 60%);
          opacity: 0.4;
        }

        /* Grid */
        .hd-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* Card */
        .hd-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: var(--transition-smooth);
        }
        .hd-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg), 0 0 30px rgba(253,121,168,0.15);
          border-color: rgba(253,121,168,0.3);
        }

        /* Badges */
        .hd-disc-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          z-index: 2;
          text-transform: uppercase;
        }
        .hd-hot-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: linear-gradient(135deg, #fd79a8, #e84393);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          z-index: 2;
        }

        /* Image */
        .hd-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          background: var(--bg-primary);
          overflow: hidden;
        }
        .hd-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        .hd-card:hover .hd-img-wrap img { transform: scale(1.08); }

        /* Quick Buy overlay */
        .hd-quick-buy {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 0.75rem;
          background: linear-gradient(to top, rgba(10,10,15,0.95), transparent);
          transform: translateY(100%);
          transition: var(--transition-smooth);
          display: flex;
          justify-content: center;
        }
        .hd-card:hover .hd-quick-buy { transform: translateY(0); }
        .hd-buy-btn {
          width: 100%;
          padding: 0.6rem;
          background: linear-gradient(135deg, #fd79a8, #6c5ce7);
          color: white;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .hd-buy-btn:hover { opacity: 0.9; }

        /* Info */
        .hd-info { padding: 1.1rem 1.25rem 1.25rem; }
        .hd-name {
          font-size: 0.88rem;
          font-weight: 600;
          line-height: 1.35;
          margin-bottom: 0.85rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.4em;
          color: var(--text-primary);
        }
        .hd-price-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .hd-price-new {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent);
          font-family: 'Space Grotesk', sans-serif;
        }
        .hd-price-old {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: line-through;
        }
        .hd-save {
          margin-left: auto;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          background: rgba(0,206,201,0.12);
          color: var(--accent);
          border: 1px solid rgba(0,206,201,0.2);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hd-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .hd-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .hd-header { flex-direction: column; align-items: flex-start; }
          .hd-info { padding: 0.75rem; }
          .hd-name { font-size: 0.8rem; margin-bottom: 0.4rem; min-height: 2em; }
          .hd-price-new { font-size: 0.95rem; }
          .hd-price-old { font-size: 0.7rem; }
          .hd-save { font-size: 0.55rem; padding: 0.15rem 0.3rem; }
          .hd-disc-badge, .hd-hot-badge { padding: 0.2rem 0.5rem; font-size: 0.6rem; top: 0.5rem; }
          .hd-disc-badge { left: 0.5rem; }
          .hd-hot-badge { right: 0.5rem; }
          .hd-quick-buy { display: none; }
        }
      `}</style>

        {/* Header */}
        <div className="hd-header">
          <div>
            <div className="hd-tag">🔥 Limited Time</div>
            <h2 className="hd-title">Today's <span>Hot Deals</span></h2>
            <p className="hd-sub">Best prices. Real savings. Ships worldwide.</p>
          </div>
          <div className="hd-count">
            <span>{hotDealsProducts.length}</span> Products Available
          </div>
        </div>

        <div className="hd-divider" />

        {/* Grid */}
        <div className="hd-grid">
          {hotDealsProducts.map((p) => {
            const showPrice = p.discountPrice ?? p.originalPrice;
            const discPct = getDiscountPct(p.originalPrice, p.discountPrice);
            return (
              <div
                className="hd-card"
                key={p.id}
                onClick={() => window.open(p.url, '_blank')}
              >
                {discPct && <span className="hd-disc-badge">-{discPct}%</span>}
                {showPrice < 5 && <span className="hd-hot-badge">🔥 HOT</span>}
                <div className="hd-img-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => { e.target.style.opacity = '0.3'; }}
                  />
                  <div className="hd-quick-buy">
                    <button className="hd-buy-btn">🛒 Buy Now on AliExpress</button>
                  </div>
                </div>
                <div className="hd-info">
                  <div className="hd-name">{p.name}</div>
                  <div className="hd-price-row">
                    <span className="hd-price-new">${showPrice.toFixed(2)}</span>
                    {p.discountPrice && (
                      <span className="hd-price-old">${p.originalPrice.toFixed(2)}</span>
                    )}
                    {discPct && <span className="hd-save">SAVE {discPct}%</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}