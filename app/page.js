'use client';


// Total products: 197
const allProducts = [
  {
    id: "1005001792603411",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Hafa1c2b9d9074cab8634d3096a301ba0o.jpg",
    name: "925 Silver 34mm 18K Gold Circle Hoop Earrings For Women Fashion Wedding Jewelry",
    originalPrice: 7.28,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4MVNxxd"
  },
  {
    id: "1005006400875214",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0275fed246424a9f8ad10f4312f561a8t.jpg",
    name: "925 sterling Silver classic 5MM long box Chain Bracelets necklace Jewelry set for men Fashion Party wedding accessories Gifts",
    originalPrice: 3.9,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Xy6lmx"
  },
  {
    id: "1005005799704505",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S40145038eda24b6abf679a1d400cbc5eN.jpg",
    name: "Case For Samsung Galaxy S26 Ultra S25 Edge S24 A56 A36 A17 Full 3 in 1 Shockproof Heavy Duty Anti-Scratch Rugged Kickstand Cover",
    originalPrice: 5.02,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xc5MOJ"
  },
  {
    id: "1005008312884859",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0e31f6adc75a495a9d2e854149b9eb008.jpg",
    name: "Sun Moon Couple Leather Bracelet Hot Selling Item Noctilucent Handmad Weave Bracelets Valentine's Day Couple Jewelry Gifts",
    originalPrice: 2.46,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c35RNIv5"
  },
  {
    id: "1005008322226701",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sec1185f3c3b74f56a2c0a61bf9bffe99N.jpg",
    name: "Magical Wicked Witch Leather Bracelet Magic Witch Hat Wicked Movie Inspired Glass Couple Bracelets Jewelry Gifts",
    originalPrice: 2.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c333THO3"
  },
  {
    id: "1005005664926561",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sda1ba6095b9d4c0ab696d7ad311a7724P.jpg",
    name: "Kinitia Fashion Simple Laser Carved Stainless Steel Jewelry Even Eye Earrings Personalized Commemorative Gift Jewelry",
    originalPrice: 1.39,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3NiWswX"
  },
  {
    id: "1005006295930624",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa2112c9e39bc40518496dcaf6d21e93aH.jpg",
    name: "Card Holder Case For iPhone 17 Pro Max 17e 16 Pro Max 15 14 13 12 Heavy Duty Wallet Hidden Flip Slot Protective Hard Back Covers",
    originalPrice: 4.67,
    discountPrice: 4.51,
    url: "https://s.click.aliexpress.com/e/_c4dSgqNd"
  },
  {
    id: "1005009354285517",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfe46ed72d11149b08e53870523d54417b.jpg",
    name: "Axis Powers Anime Acrylic Fun Keychain Animation Related Products Gift Key Chain Bag Charms Souvenir Creative Pendant Jewelry",
    originalPrice: 1.92,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3uIqu15"
  },
  {
    id: "1005007260813895",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S665e75c770514790951c3b283cf1c103z.jpg",
    name: "StarFire Kory Anders Koriand'r Cosplay Costume For Women Hero Halloween Roleplay Theme Party Comic Top Skirt",
    originalPrice: 65.0,
    discountPrice: 31.85,
    url: "https://s.click.aliexpress.com/e/_c4rdYOBD"
  },
  {
    id: "1005006490088713",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdb7be30e8c1f49938496050053d28f26h.jpg",
    name: "Charm 925 Sterling Silver Bracelets for Women fine Water droplets bangles lady Fashion Wedding Party Christmas Gift Jewelry",
    originalPrice: 2.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3dUpYx1"
  },
  {
    id: "1005007824744125",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Saee7ed34ef134b28bc8389ce128e7c3aN.jpg",
    name: "6pcs Leather Hole Punching Tools Steel Hollow Round Hole Puncher - Sharp, Durable Round Cutters For Watch Bands, Belts, Paper",
    originalPrice: 2.85,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AL3vZv"
  },
  {
    id: "32768357043",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H28c0f6c45036400a9efee2a2f3854ca9F.jpg",
    name: "DOTEFFIL 925 Sterling Silver Dragon Cuff Bracelet For Man Women Charm Wedding Engagement Party Fashion Jewelry",
    originalPrice: 2.84,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4NIbtd1"
  },
  {
    id: "1005006306066050",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S15843ab085c34d8c9a116fb9e0ab43fbS.jpg",
    name: "Fashion charm 925 Sterling Silver Bracelet for man woman 4MM Twisted rope chain fine jewelry Wedding party Christmas gift",
    originalPrice: 1.46,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3DNCHL5"
  },
  {
    id: "1005006220264605",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Saccf78f001f649908c69dbb56c92d6d9y.jpg",
    name: "Charm 925 Sterling Silver Bracelets for Women Simple Fine 4MM Chain Fashion Wedding Party Christmas Gifts Jewelry",
    originalPrice: 1.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4dDbvej"
  },
  {
    id: "1005009964333488",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se8879631e6b648b4b007edc9dc8945ffY.jpg",
    name: "16 colors men's shirts casual fashion long sleeve shirts men's business shirts high quality tops large size fast delivery",
    originalPrice: 14.66,
    discountPrice: 7.33,
    url: "https://s.click.aliexpress.com/e/_c4Dcj1GR"
  },
  {
    id: "1005004888968760",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbf62f6a7ba2a4f3fa6d76b4f6f3f2345t.jpg",
    name: "925 sterling silver bracelet chain fashion design product beautiful Jewelry High quality Bracelet bead for women lady wedding",
    originalPrice: 1.79,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3cFU85l"
  },
  {
    id: "1005009984985905",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S62db5eba630d4fc58445523247a6cbd9c.jpg",
    name: "LeaFLAG custom Flag 90x150cm any logo any size any color custom flag For indoor outdoor Home Decoration",
    originalPrice: 1.51,
    discountPrice: 0.91,
    url: "https://s.click.aliexpress.com/e/_c4qst2R1"
  },
  {
    id: "1005008841320302",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc86a312eb8c44c38784c112ba347523W.jpg",
    name: "1 Creative Vintage Rat Adjustable Alloy Ring - Simple and Cute Hypoallergenic and Eco-Friendly Decorative Accessories Gifts",
    originalPrice: 1.21,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3pr8vOF"
  },
  {
    id: "4001256081869",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H734c092f8aeb4f8b81de651b8840820by.jpg",
    name: "30 PCS 6 colors available moto parts universal motorbike screws fixed accessories motorcycle bolts kit fastener screw",
    originalPrice: 2.64,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4aavf0n"
  },
  {
    id: "1005005943762197",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S59d4ebb39d364ad690587cb09caa9623A.jpg",
    name: "10pcs Simulation Mineral Water Bottle Charms For Pendant DIY Handmade Jewelry for Earring Necklace Keychain",
    originalPrice: 1.67,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4XDm5m7"
  },
  {
    id: "1005008663834358",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S269a4d1646904e81ba0223b18e52d8bfW.jpg",
    name: "Anime Fullmetal Alchemist Edward Elric Acrylic Fun Keychain Jewelry Friends Gift Bag Charms Keyring Creative Key Chain Pendant",
    originalPrice: 2.52,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4a2KWIX"
  },
  {
    id: "1005007413310157",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb399990d247e433aac870cf8df02efc3J.jpg",
    name: "5 Pair Set Small Fresh Colored Resin Pendant Earrings Art Sweet and Cute Fruit Animal Milk Tea Earrings Female",
    originalPrice: 2.09,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3PV1N8P"
  },
  {
    id: "1005003810793034",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H4cc68b3355f5470a8e170b303bf21b38w.jpg",
    name: "10PCS 8*34MM Cute Resin  Bottle Charms Pendants Handmade Accessories Jewelry DIY Earring Necklace Keychain",
    originalPrice: 1.74,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3M2Nu2f"
  },
  {
    id: "1005007481066569",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S835fba6db6ca441080c007c68eda44d8T.jpg",
    name: "Guitar Beginner Accessories Set Guitar Capo Tuner Includes 10 picks (Random) Plectrum Holder - Perfect For Fast Accurate Tuning",
    originalPrice: 2.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4FzMs6B"
  },
  {
    id: "1005008243276283",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb1a11e75438e49f58a11e4a46c9c6421L.jpg",
    name: "New Alloy Star Moon Keychain Creative Four Pointed Stars Accessories Key ring Pendant Backpack Decoration Women Men Jewelry Gift",
    originalPrice: 2.04,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Shk7xz"
  },
  {
    id: "1005008062564156",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sceb8b713c5944ea1808e73618365e2f4S.jpg",
    name: "Charizard Costume Pokemon Onesie Men Women Boys Girls Festival Outfit Winter Pajama Party Jumpsuit Dragon Cosplay Kigurumis",
    originalPrice: 30.64,
    discountPrice: 22.98,
    url: "https://s.click.aliexpress.com/e/_c3G9ioob"
  },
  {
    id: "1005010186552071",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbd1b4f123aa04798bba43de3a436b368Z.jpg",
    name: "Print Sweatshirt Suit Men's Fleece Hoodie Pants Set Spring Autumn Winter Warm Casual Sports Pullover Trousers Sets",
    originalPrice: 21.63,
    discountPrice: 12.98,
    url: "https://s.click.aliexpress.com/e/_c41YCQQB"
  },
  {
    id: "1005006165219472",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7483d3be489c4db69f4e9ba952c72401Y.jpg",
    name: "925 Sterling silver bracelet charm fashion beautiful High quality for Women lady chain Silver Jewelry wedding party",
    originalPrice: 2.14,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4EEPL1p"
  },
  {
    id: "1005007451840960",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sae42f31d611c4e0d8453341e55394e331.jpg",
    name: "Gold Snowflake Bowknot Snowman Lovely Christmas 3D Self Adhesive Nail Art Sticker Rhinestone 5D Embossed Reliefs Manicure Decals",
    originalPrice: 1.96,
    discountPrice: 1.96,
    url: "https://s.click.aliexpress.com/e/_c35NT9wF"
  },
  {
    id: "1005006384954363",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d92b34bba544737aa4cfa684d26ab89f.jpg",
    name: "new arrive 925 Sterling Silver 4MM Chain Bracelet for Women Men Blade Fashion Wedding Fine Jewelry Christmas Gift 8inches",
    originalPrice: 1.68,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3lYwu8F"
  },
  {
    id: "1005003546265008",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa3e0ab8b0d31429d970e98d6857c4f9do.jpg",
    name: "TS M4/M5/M6/M8X10/15/20/25/30/35-60mm multicolor Titanium Bolts Screws Button Torx Head Bicycle Motorcycle Disc Brake 10 PCS",
    originalPrice: 14.3,
    discountPrice: 2.8,
    url: "https://s.click.aliexpress.com/e/_c4mc8Sv9"
  },
  {
    id: "1005008066160737",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sab392466355c46f0b3669f9eeb8daa51z.jpg",
    name: "925 Sterling Silver Smooth Water Drop Rings For Woman 18K Gold Open Ring Wedding Couple Rings Aesthetic Jewelry Gift",
    originalPrice: 1.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Ei3WNz"
  },
  {
    id: "32835895809",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6269d0b507df41a5a67f758c7038f717I.jpg",
    name: "Modian 100% 925 Sterling Silver Rectangle 5A Clear Zircon Luxury Rings Anniversary Engagement Jewelry For Women Fashion Rings",
    originalPrice: 33.16,
    discountPrice: 5.08,
    url: "https://s.click.aliexpress.com/e/_c3sT7J0f"
  },
  {
    id: "1005009756100327",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa7a9d902b4aa43f8bb65a9c0dd46800eM.jpg",
    name: "Men's light luxury 3D long sleeved shirt, men's and women's exquisite long sleeved shirt, 100% polyester fiber, fashionable and",
    originalPrice: 24.91,
    discountPrice: 8.22,
    url: "https://s.click.aliexpress.com/e/_c4S9iu6r"
  },
  {
    id: "1005007085495859",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf1f18912b36845ba9e0db98dcb8d4ecaN.jpg",
    name: "for wedding dress for barbie doll",
    originalPrice: 3.86,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3TOMI55"
  },
  {
    id: "1005007258898388",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S493ea513e2d04e85a60a78aa76490434S.jpg",
    name: "Charms Wedding 925 Sterling Silver Jewelry Fashion Pretty Pendant Necklace Earring Women Party Set TOP Quality Stamped",
    originalPrice: 1.89,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AtlHDv"
  },
  {
    id: "1005008757274245",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Ad115c12c5d2b46d18870fce434eb9410E.jpg",
    name: "Handmade Cute Animal earring Charm| Cute SKZ K-Pop Boy Group Inspired Gift or Accessory",
    originalPrice: 2.19,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2uqPXkJ"
  },
  {
    id: "1005005344083124",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2e28d633bcae4f9abfc449f7bedcbaeaX.jpg",
    name: "Natural Tanzanite Blue Sapphire Cushion Cut AAAA+ 12×12mm 10.50Ct Loose Gemstone For Jewelry Making",
    originalPrice: 10.57,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Y8dYzV"
  },
  {
    id: "1005008784465635",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0b3d4b1c17a44964905a439db0acf6d2F.jpg",
    name: "Game Hinako Shimizu Cosplay Costume Silent Women's School Uniform Hill Halloween Party RolePlay Tops Skirt Tie Socks Takerlama",
    originalPrice: 34.9,
    discountPrice: 31.41,
    url: "https://s.click.aliexpress.com/e/_c4pDOhVZ"
  },
  {
    id: "1005005079318077",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5024a93d8c5443ed8ebc1281e60df343A.jpg",
    name: "Fine 925 sterling silver earrings wedding high quality popular product fashion women party Earring Jewelry",
    originalPrice: 1.8,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3fRrgfZ"
  },
  {
    id: "1005004523421920",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S621609eda23f4735a8ea9ef06ac48988Z.jpg",
    name: "Cute Cartoon ABS Paper Clipper Bookmark Binder Multicolor Office Accessories Document Clip School Supplies Kawaii Stationery",
    originalPrice: 2.52,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4NQEuTt"
  },
  {
    id: "1005007601400299",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S413748ebcaf94942b1deb6c31d2128bdU.jpg",
    name: "ALITREE 925 Sterling Silver 33mm Big Circle Round Hoop Earring For Women Fashion Design Earrings Birthday Christmas Fine Jewelry",
    originalPrice: 2.39,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3VnSZF5"
  },
  {
    id: "1005008456256511",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7d5accaf3b474f67bae04493339d71d7j.jpg",
    name: "luxury dress for barbie doll clothes clothing and accessories for 30cm dresses costume sportwear uniform gowns fashionista",
    originalPrice: 2.84,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3DUUtMJ"
  },
  {
    id: "1005001599760490",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H0d37ee18f2fc47b091caacbf24ff929cJ.jpg",
    name: "Leather Gloves Women's Sheepskin Mid-length Plus Velvet Thickened Winter Warmth Color Touch screen Authentic 2025 New style",
    originalPrice: 47.8,
    discountPrice: 22.94,
    url: "https://s.click.aliexpress.com/e/_c4CSxpmj"
  },
  {
    id: "1005007354096481",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S88653a5663834b18bd6a6f352b99caeb6.jpg",
    name: "ALITREE Fine Classic 8MM sideways 18K gold Necklace charms 925 Sterling silver for men woman Jewelry wedding party Holiday gifts",
    originalPrice: 4.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3TBUZeL"
  },
  {
    id: "1005009662724804",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S15760dfecf624db59047ab2221db2de9U.jpg",
    name: "32cm Fashion Star Supermodel Nude Doll Multiple Skin Colours Joints Movable Sweet Cool Makeup Flat Bangs Head + Nude Accessories",
    originalPrice: 2.7,
    discountPrice: 2.3,
    url: "https://s.click.aliexpress.com/e/_c3T379Fl"
  },
  {
    id: "1005005708390735",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4ee97cabe0ff4da19af59018cd1a0397V.jpg",
    name: "Fashion 925 Sterling Silver Woman Cuff Bracelet Open Leaf Shaped Adjustable Charm Bangle Girls Party Jewelry Christmas Gifts",
    originalPrice: 2.45,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3vDl6ir"
  },
  {
    id: "1005007400904750",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S816846b7ee6743d5ba9872e661535bbff.png",
    name: "100g Resin DIY Cream Fake Whipped Clay Glue Simulation Gel Mobile Shell DIY Craft Soft Clay Decoration Accessory Diy",
    originalPrice: 4.66,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xObJHD"
  },
  {
    id: "1005010186470572",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc15ff6ab3aa94b2ea4a19b3c4ec776a1j.jpg",
    name: "2025 Autumn/Winter Men's jogging Fitness sportswear Set: Fashionable long-sleeved sweatshirt",
    originalPrice: 20.25,
    discountPrice: 12.15,
    url: "https://s.click.aliexpress.com/e/_c40lOsDH"
  },
  {
    id: "1005009791857058",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6493609e852c4716954fe5c28da6576cW.jpg",
    name: "Heart Bracelet Chain Charm Bracelets for Kids Girls Toddle Children Daily Wear Birthday Party Gift",
    originalPrice: 6.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4UhYxI3"
  },
  {
    id: "1005006377835070",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9b18ac2a17f545ae8a08fce4bf87c59f1.jpg",
    name: "Fine 925 Sterling Silver Drop Earrings Charm for Women Jewelry Fashion Wedding Engagement Party HOOP Nice Gift",
    originalPrice: 2.95,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c31C5vi7"
  },
  {
    id: "1005008639303275",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc92c1aa3e1f6409294972c80e8504353J.jpg",
    name: "Wonderful Scenes Dies Metal Cutting Dies Stamps for 2026 Scrapbook Diary Decoration Embossi Template DIY Greetin Card Handmade",
    originalPrice: 4.19,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3TY6M5l"
  },
  {
    id: "1005006943035969",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb502531e0e7e441a845491196b4969b9r.jpg",
    name: "Fine 925 Sterling Silver Luxury 5CM Big Circle Hoop Earrings for Women Charms Original Designer Party Wedding Jewelry Gifts",
    originalPrice: 1.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3M7YgOf"
  },
  {
    id: "1005009090101466",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0e19f375d091435d9add780f0b8b3533Y.jpg",
    name: "Twilight Gift set Bella's bracelet eclipse merchandise graduation Bellas with freebies Stainless Steel Edward Jacob gift wolf",
    originalPrice: 3.52,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4dhBJ5v"
  },
  {
    id: "1005009646156897",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa9bf36b5fefd416caf2e19eca986b4e39.jpg",
    name: "90x150cm Twenty One Pilots Scaled And Icy Rock Flag Tapestry Wall Hanging Modern Music Art banner Vintage Blanket",
    originalPrice: 2.07,
    discountPrice: 1.39,
    url: "https://s.click.aliexpress.com/e/_c45i1NiL"
  },
  {
    id: "1005009504584342",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S01c12b64a1064830bbab2529da32783bJ.jpg",
    name: "Japanese Y2k Cute Ruffled Plaid Skirt Punk Rock Subculture Cake Skirts Japanese Preppy Style Casual New 2025 Women Skirts",
    originalPrice: 9.57,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4eN7ezl"
  },
  {
    id: "1005003362533881",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf909925d6e55405c82619ad0f3e77d58u.png",
    name: "NATUHANA YY Shape Eyelash Extensions C/D Curl Black Brown Y Lashes Premade Volume Fans Individual Eyelashes Supplies Makeup",
    originalPrice: 3.25,
    discountPrice: 3.25,
    url: "https://s.click.aliexpress.com/e/_c41QtMv9"
  },
  {
    id: "1005004263940659",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8b614eadc1bf41a38ee0fcacae7f41011.jpg",
    name: "Car Window Cleaning Brush Accessories Sticker For Honda Civic Accord Fit Crv Hrv Jazz City CR-Z Element Insight MDX S2000",
    originalPrice: 2.09,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3C4dENN"
  },
  {
    id: "1005005486553258",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S22e3222abd72497c9e783ac0504fafbdT.jpg",
    name: "Natural Pigeon blood Ruby Pass UV Test Ruby 12x16mm 12.50 Cts Sri-Lanka VVS Emerald Cut Loose Gemstone For Jewelry Beads",
    originalPrice: 7.35,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3LthWU7"
  },
  {
    id: "1005007867779288",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S441f3561ea9a403caef11560bef55160J.jpg",
    name: "Luxury 925 Sterling Silver Noble Phoenix Bracelets Bangles For Women Fashion Party Wedding Jewelry Holiday Gifts Adjustable",
    originalPrice: 2.24,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2u8uNKT"
  },
  {
    id: "1005011591665600",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2c0f4230de4f40e798bcef9904feaa02Y.jpg",
    name: "Anti-Falling Case For XTEINK X4 E-Book 4.3\" Original Protective Back Cover Soft TPU Shockproof Back Clear Case ON Xteink X4",
    originalPrice: 2.99,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3COuPgX"
  },
  {
    id: "1005009065623411",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0016621fa814499cbfae683cf889994eh.jpg",
    name: "LED Trunk Emblem Ambient Light for Tesla Model 3/Y/X/S, Two Modes for Ambient Light or Brake Light",
    originalPrice: 66.46,
    discountPrice: 17.57,
    url: "https://s.click.aliexpress.com/e/_c3P2YjcP"
  },
  {
    id: "1005009089030550",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbab16ccfd1e248e590d8987c26abf180Q.png",
    name: "Vseebox ELITE ULTRA with Voice control 8K 2025 Model Timeshift Feature 4GB RAM + 128 GB Storage  Streaming Box",
    originalPrice: 449.0,
    discountPrice: 439.0,
    url: "https://s.click.aliexpress.com/e/_c4M3lcWr"
  },
  {
    id: "32799228243",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Hea5d7057ec2843d6a0f41208b9d85937M.jpg",
    name: "DOTEFFIL 925 Sterling Silver 2pcs Bracelet 10mm Smooth Sideways Chain For Men Women Wedding Engagement Party Jewelry",
    originalPrice: 7.06,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2Joj90X"
  },
  {
    id: "1005006746001201",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa9745c167c10402591498c51d1c8df62b.jpg",
    name: "Pokemon Costumes Boys Girls Onesie Anime Kigurumis Charizard Outfit Carnival Halloween Jumpsuit Cute Pajama Party Suit",
    originalPrice: 25.81,
    discountPrice: 19.36,
    url: "https://s.click.aliexpress.com/e/_c4Ou5POF"
  },
  {
    id: "1005009344850778",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sff5bdecdb64a464aa090520a7287a068S.jpg",
    name: "Honda Accord Car Steering Wheel Cover Special GK5 GE5 GD5 Model Car Handle Cover For 04-21 Years Shinshin Sauce 20",
    originalPrice: 22.92,
    discountPrice: 11.46,
    url: "https://s.click.aliexpress.com/e/_c3jzBd9h"
  },
  {
    id: "1005003807780182",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H8088da568dbd434a96ddc24fbe9532feS.jpg",
    name: "Fashion Ethnic Style Cotton Cord Weave Round Ear Accessories Vintage Sparkly Crystal Dangle Earrings For Women Luxury Jewelry",
    originalPrice: 3.05,
    discountPrice: 3.0,
    url: "https://s.click.aliexpress.com/e/_c3ub1hCB"
  },
  {
    id: "1005006404347806",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd29ecc7919e84d2c94c97c7468c291f5e.jpg",
    name: "Popular brands 925 Sterling Silver crystal flower moissanite diamond Rings For Women Fashion Wedding Party Gifts Jewelry",
    originalPrice: 2.18,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4pzAacT"
  },
  {
    id: "1005005387277496",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/A9c371ff4b24d43aaa10ba3e4423cb365w.jpg",
    name: "Love Heart Luminous Stainless Steel Rings For Couples Free Shipping Glow In Dark Fluorescent Finger Rings Jewelry Gift Anillo",
    originalPrice: 1.45,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3nUIaH5"
  },
  {
    id: "1005008881128184",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8a60db0ecb5c493b99a29fdb727d281bQ.jpg",
    name: "2025 New Men's Spring Autumn Sports Trend Casual Pants Running Sports Pants Fashion Street Style Sweatpants S-3XL",
    originalPrice: 14.81,
    discountPrice: 0.74,
    url: "https://s.click.aliexpress.com/e/_c3bORO7v"
  },
  {
    id: "1005002708125522",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H81aa49a6046943d6972f3d95214e4b2fT.jpg",
    name: "1PCS 5-25MM X 33M Professional Heat Resistant High Temperature Insulation Electronics Industry Welding Polyimide Kapton Tape",
    originalPrice: 1.34,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3g5Cz3d"
  },
  {
    id: "1005006187833198",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se6d3a30a62cf46c6bd45aa6c9f7b58ebw.jpg",
    name: "12/16/19/22MM Waterproof Metal Push Button Switch LED Light Momentary Latching Car Engine Power Switch  5V 12V 24V 220V Red Blue",
    originalPrice: 2.81,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4rIL9Dt"
  },
  {
    id: "1005008798893381",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5be61ee3db3b4f049daaea0ad8446d04h.jpg",
    name: "Case For Samsung Galaxy S26 Ultra S25 Edge S24 S23 A16 A56 Body 3 in 1 Shockproof Heavy Duty Anti-Scratch Rugged Kickstand Cover",
    originalPrice: 5.7,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4a5iKEn"
  },
  {
    id: "1005008002286134",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbf176ae91262465c8ef609b6bba0d57ei.jpg",
    name: "Cute Mane 6 Pony Flawed Enamel Pins Anime Lapel Badge Brooch for Jewelry Accessory",
    originalPrice: 2.04,
    discountPrice: 2.04,
    url: "https://s.click.aliexpress.com/e/_c3t41M5d"
  },
  {
    id: "1005007769189593",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se10b88f3908e45dcae546a1337c660aed.jpg",
    name: "Charm 925 Sterling Silver Bracelets for Women fine Water droplets bangles lady Fashion Wedding Party Christmas Gift Jewelry",
    originalPrice: 1.78,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2QUQtkB"
  },
  {
    id: "1005008625029211",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S60b04610d49b4deb8ceedd112310b9efr.png",
    name: "15cmALIEN STAGE IVAN & TILL Gift Toy Figures Acrylic Stand Anime Model Action Figure Ornament Accessories Models Desktop Ornamen",
    originalPrice: 4.03,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3cq5HP5"
  },
  {
    id: "1005007333797736",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1f1f64834869453b97ffc905a38df32dg.jpg",
    name: "fashion wholesale beautiful 925 Sterling silver Earring for women classic charm Jewelry cute lady wedding party",
    originalPrice: 2.0,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Ox92fh"
  },
  {
    id: "1005009589767519",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S458775f57a444157a0f7d5c75e1de937a.jpg",
    name: "2-5PCS 9H HD Tempered Glass For BATLEXP G350  Handheld Game Console  ON G350 3.5inch Screen Protector Cover Film",
    originalPrice: 2.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3RYTncX"
  },
  {
    id: "1005007568051921",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S210bf7201c6e4e41b75553f567b8b975E.jpg",
    name: "fashion For women 925 Sterling Silver wedding hook beautiful High quality Earring Jewelry free shipping cute gift",
    originalPrice: 2.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c42UJUbp"
  },
  {
    id: "1005008052703289",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S232767f425ed4e2e946178a45ef1691aH.jpg",
    name: "ALIZERO 925 Sterling Silver Full-blown Flowers Bangle Bracelet For Women's Delicate Open Adjustable Bracelets Fashion Jewelry",
    originalPrice: 3.38,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4NPYSHH"
  },
  {
    id: "1005010367310640",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S89a44b22f905492aa82bb5350fe18578e.png",
    name: "Factory Shipment Of High Quality Free Shipping Mini Excavator Showroom Model Limited Edition Kubota Engine Customized",
    originalPrice: 4455.49,
    discountPrice: 300.39,
    url: "https://s.click.aliexpress.com/e/_c3pYe49z"
  },
  {
    id: "1005006404222712",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sff0d6a57da5a4da3af9feec2c4b19cdav.jpg",
    name: "Wholesale 925 Sterling Silver Bracelets Jewelry chain women lady men 6mm 4MM high quality valentine gift beautiful factory price",
    originalPrice: 1.97,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3MSH3ST"
  },
  {
    id: "1005009578960936",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa51edd956e1d4c55813c3f6e2511f96ey.jpg",
    name: "Gengar Jigglypuff Costume Boy Girl Pokemon Cosplay Anime Kigurumis Onesie Pajama Halloween Festival Suit Winter Flannel Outfit",
    originalPrice: 21.82,
    discountPrice: 16.36,
    url: "https://s.click.aliexpress.com/e/_c3isrpF9"
  },
  {
    id: "1005009534626584",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6f8540723a014fc3b2c9bb725b8cefb54.jpg",
    name: "NEW 2021 AutoSmart 3 E Book Set - Asian, European & Domestic Book Set - By Michael Hyde LockSmith",
    originalPrice: 25.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2zUZyRt"
  },
  {
    id: "1005006490296463",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S782b39cfd5704d2e8f20089be15e4381Q.jpg",
    name: "New 925 Sterling Silver Hoop Earrings For Women Wedding Gift Fine Europe Jewelry Christmas Gift Engagement Party",
    originalPrice: 1.79,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4o2GsoT"
  },
  {
    id: "1005003791826641",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se57fe04d5a5b4f429d6c5978d26c3d16q.jpg",
    name: "Excellent Quality Game Enamel Pin Cloud Strife Buster Sword Meteor Chocobo Red Mage Vivi Badge Shinra Attack Menu Gamer Brooches",
    originalPrice: 2.26,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3cPp89V"
  },
  {
    id: "1005009746232760",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9f32f2f07b2b49ffa1868b80dd9ad72a4.jpg",
    name: "American Vintage Japanese Jacket Hooded Women 2026 Cotton Coats Outwear Design Subculture Gothic Sweatshirts Harajuku",
    originalPrice: 19.43,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3LaaHMr"
  },
  {
    id: "1005010143004609",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4bac66c7b7a34000a996c029b07805bd8.jpg",
    name: "Super cute mini packaging box, drip glue fully transparent silicone mold",
    originalPrice: 4.2,
    discountPrice: 3.57,
    url: "https://s.click.aliexpress.com/e/_c315p5XH"
  },
  {
    id: "1005008885831282",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sae7ea577eac84fa3a49d5d09e46a37b46.jpg",
    name: "U7 Stainless Steel Big Skull Rings for Man Woman Size 7-14 Cross 3D Skeleton Cuban Chain Celtic Knot Pattern Gothic Punk Jewelry",
    originalPrice: 3.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3jWGXiF"
  },
  {
    id: "1005009318989597",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S16ad5d73a921495a94fadbe842ab6b39f.jpg",
    name: "The Summer Hikaru Died Acrylic Stand Model Plate Decoration Originality Desk Figure Display HOT BL Cartoon Anime Accessories",
    originalPrice: 3.31,
    discountPrice: 3.01,
    url: "https://s.click.aliexpress.com/e/_c40btkMb"
  },
  {
    id: "1005008329342623",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S18b6d7ba5c554df394fe5f34d7d7f2169.jpg",
    name: "90X150CM Playboi I Am Music Carti Die Lit Music Art Flag Tapestry Wall Hanging Bed Room Bar Modern Banner Aesthetic Room Decor",
    originalPrice: 3.09,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3qUVS1d"
  },
  {
    id: "1005008858589924",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6fce4c00e45741c398dfe676eec6607b8.jpg",
    name: "Ultra Small Titanium Utility Knife, EDC Tiny Knife Box/Package Opener with Stainless Steel Blade,Ultra Lightweight and Quality",
    originalPrice: 3.67,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3skj6pH"
  },
  {
    id: "1005006170719272",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se8cbb523a0e34541a6015b5fe8aebc22m.jpg",
    name: "9H HD Original Tempered Glass For Xiaomi Qin F22 Pro F21 Plus F21 F21Pro+ F22Pro F21Pro Screen Protection Protector Cover Film",
    originalPrice: 3.31,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3uxeW9V"
  },
  {
    id: "1005009752301865",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa99b5aef0ea24f76b6323bf7cd1a7051N.jpg",
    name: "Subculture Gothic Women Coats with Hoodies Vintage Korean Harajuku Black Jackets Faux Fur Coat Female Loose Casual Sweatshirt",
    originalPrice: 15.23,
    discountPrice: 8.23,
    url: "https://s.click.aliexpress.com/e/_c31NQWKR"
  },
  {
    id: "1005008964780204",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2b9086a578e84d328a481fe645d48fddQ.jpg",
    name: "Huitan Geometric Square Shaped Cubic Zirconia Women Rings for Wedding Engagement Band Accessories Sparkling Trendy Jewelry",
    originalPrice: 14.2,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3YPusfh"
  },
  {
    id: "1005007049318736",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc3fd4b4baa8f4cb486e1d1fa49e4daf2O.jpg",
    name: "Hexagon Initial letter Mariner Gold Color Chain Anklets Bracelet for Women Teens, Length-Adjustable, QC24",
    originalPrice: 2.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3fVZ5tt"
  },
  {
    id: "1005001540302512",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdcfed2e7ca644888afe2aa2542811ed1s.jpg",
    name: "Meetee 10Pc 16-38mm Bag Strap Hook Buckle Metal Swivel Lobster Clasp DIY Webbing Snap Hooks Carabiner Keychain Buckles Accessory",
    originalPrice: 5.95,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4N6t7Rz"
  },
  {
    id: "1005005889483778",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S15683f40b088441ab89b136dad145548k.jpg",
    name: "Noble 925 Sterling Silver Square Solid Chain Bracelet for Women Men Charm Party Gift Wedding Fashion Jewelry",
    originalPrice: 1.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c40Xkj0B"
  },
  {
    id: "1005006061154631",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa20071a691794c32a7914eaa9bf5a8ddI.jpg",
    name: "Noble 925 Sterling Silver Square Solid Chain Bracelet For Women Men Charm Party Gift Wedding Fashion Jewelry",
    originalPrice: 1.61,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3iJLkb1"
  },
  {
    id: "1005008534189613",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb85dd4fdf3764eaa8404ea79df028ed2Y.jpg",
    name: "Heavy Duty US 3x5 Feet Waterproof Nylon Embroidered Stars Sewn Stripes USA American Flag Embroidery",
    originalPrice: 4.68,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3BzeL3N"
  },
  {
    id: "1005005213208356",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/A6577acc608404c81b83f346bf9e8716cM.jpg",
    name: "Spinning Anxiety Relaxing Ring With Star And Moon For Women Stainless Steel Rotate Freely Fidget Spinner Rings Bohemia Jewelry",
    originalPrice: 2.04,
    discountPrice: 0.9,
    url: "https://s.click.aliexpress.com/e/_c4EJgOzH"
  },
  {
    id: "1005005736363378",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0ee9ebd3d5954b00b3a5638da3399303A.jpg",
    name: "Charm 925 Sterling Silver Rings For Women Shining crystal size 7/8/9/10 Fashion Party Gifts engagement wedding Jewelry",
    originalPrice: 1.77,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4E8xD67"
  },
  {
    id: "1005005837058800",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0dbd8ba672cf42018e41fb7bfe6d05f5p.jpg",
    name: "10pcs Simulation Bottle Charms For Pendant DIY Handmade Jewelry for Earring Necklace Keychain",
    originalPrice: 1.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3pgJh6F"
  },
  {
    id: "1005007585416375",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1797d2130a084c559c696d0aa7e5d7fet.jpg",
    name: "Golden Thread Butterfly Jelly Series Nail Art Stickers High Quality New Bronzing DIY Manicure Decal Decoration",
    originalPrice: 1.59,
    discountPrice: 1.54,
    url: "https://s.click.aliexpress.com/e/_c3AYFDqb"
  },
  {
    id: "1005003593401791",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5d1cc8564ad048c4ab164aecd3f6b8a4X.jpg",
    name: "Artificial Plants Bonsai Small Tree Pot Fake Plant Flowers Potted Ornaments For Home Room Table Decoration Hotel Garden Decor",
    originalPrice: 2.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xt4FYJ"
  },
  {
    id: "1005009466359726",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S709f72e16b184a938c8db79292e0364aI.jpg",
    name: "Simple Colorful Heart Chain Adjustable Bracelet Gift Fashion Kids Child Girl Jewelry",
    originalPrice: 5.95,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4W3b2uj"
  },
  {
    id: "1005004379770776",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf5cb146168f141bb92fe6e64b86ab914v.jpg",
    name: "Case For Samsung Galaxy S26 Ultra S25 Edge S24 A17 A56 Heavy Anti-Scratch Rugged Protective Kickstand Full Body Shockproof Cover",
    originalPrice: 4.69,
    discountPrice: 4.56,
    url: "https://s.click.aliexpress.com/e/_c4qgfjND"
  },
  {
    id: "1005009620643906",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7e871d6b5d974cc9a5db5aca9ccfd76fn.jpg",
    name: "US Warehouse Fardriver ND72450 450A High Power BLDC Programming Controller With Bluetooth Adapter for 3000W-4000W Motor",
    originalPrice: 129.14,
    discountPrice: 115.68,
    url: "https://s.click.aliexpress.com/e/_c2RNAJbl"
  },
  {
    id: "1005004712792906",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S92c69fb172b84bd3813ab3231aa95713C.jpg",
    name: "URMYLADY 925 Sterling Silver Hollow Heart 7-10# Ring For Women Wedding Charm Engagement Fashion Jewelry",
    originalPrice: 1.92,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3hn3UlH"
  },
  {
    id: "1005006172699458",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa8e8f00f5d504a06bcb7c2fcb1421e20z.jpg",
    name: "Anti Stress Stainless Steel Spinner Rings For Men Carved Demon Eye Rotatable Fidget Anxiety Joint Ring Jewelry Bague Homme",
    originalPrice: 1.65,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2yHo1of"
  },
  {
    id: "1005005086255111",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/A29c46b20292846c39f9a5e82eae40fb9z.jpg",
    name: "Vintage The Carved Eye Of God Mens Stress Ring For Rotating Anxiety Stainless Steel Fidget Spinner Rings Anillos De Ansiedad",
    originalPrice: 5.12,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3DfR0d5"
  },
  {
    id: "1005006321492077",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2ea6e8aa4fae4aaea3af4ca941e94391D.jpg",
    name: "Top Sale 925 Sterling Silver Needle Earrings for Women's Wedding Fashion High Quality Jewelry Crystal Zircon Flower Cute Stud",
    originalPrice: 1.7,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3mPkDFd"
  },
  {
    id: "1005006318631996",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S91312088d44345d59e6e7d434c13934bq.jpg",
    name: "Hot new High quality 925 Sterling Silver hoop Earrings for Woman fashion party wedding Jewelry elegant Christmas Gifts",
    originalPrice: 1.94,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3O4KNth"
  },
  {
    id: "1005003146401840",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H9333afe46864410f95a945e23b09a668c.jpg",
    name: "4mm 6mm Mini Energy Charm Bracelet Natural Stone Beads Yoga Healing Bracelet Jewelry for Women Men Best Friend Gift Dropshipping",
    originalPrice: 1.69,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c413EpGB"
  },
  {
    id: "1005009132691554",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa8ba6c27eae54844aec950b5dc44185d2.png",
    name: "10pcs Cartoon Charm Jewelry Accessories Diy Making Enamel Necklace Earring Pendant Keychain Charms Alloy Metal Gold Plated",
    originalPrice: 4.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3iVmOHH"
  },
  {
    id: "1005008098322437",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S54f3e65a2e16441ea1c5c77a133945cbw.jpg",
    name: "Huitan Bling Bling Gold Color Rings Gorgeous Women Wedding Accessories Full Sparkling Cubic Zirconia Party Luxury Trendy Jewelry",
    originalPrice: 11.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3c6Bcaf"
  },
  {
    id: "1005006396578545",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sddc4043e3c704d539a0ff668889ff91ar.jpg",
    name: "925 Sterling Silver Cat Rings For Women Engagement Luxury Designer Jewelry Female Offers With Jewellery",
    originalPrice: 1.71,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3eZxSXh"
  },
  {
    id: "1005007640699865",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Saf485d7c00a44cb690dea7f6b369c1a1N.jpg",
    name: "Cosplay Hell Inn Keychains Cartoon Anime Characters Vaggie Angel Charlie Lucifer Pendant Accessories Halloween Jewelry Kids Gift",
    originalPrice: 2.36,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Wrws6J"
  },
  {
    id: "1005005913787827",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc322d4bb1e9549d8a765e4a784b73762U.jpg",
    name: "Fine charms 925 Sterling Silver Pretty elephant pendant Necklace For Women fashion Wedding accessories party Jewelry gifts",
    originalPrice: 1.58,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3XKmPd1"
  },
  {
    id: "1005006458880180",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb409ff6bebb64bd3927d3b98e182043af.jpg",
    name: "Top Quality 925 Sterling Silver Earrings Simple Round Circle Hoop Earrings For Woman Fashion Wedding Engagement Charm Jewelry",
    originalPrice: 1.98,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3602M1d"
  },
  {
    id: "1005006387304955",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S58702aa3f6524441b80c5af10149c2bcy.jpg",
    name: "factory price 925 Sterling silver Ring Jewelry noble Charms women lady crystal gorgeous wedding party",
    originalPrice: 1.99,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3EUE6an"
  },
  {
    id: "1005005044570214",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S95225ff1adf340fe8716f80ad254a072m.jpg",
    name: "40-75cm 925 Sterling Silver 1MM/2MM/3MM solid Snake Chain Necklace For Men Women Fashion Jewelry for pendant",
    originalPrice: 1.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4dsdtLz"
  },
  {
    id: "1005008744908022",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4c49f0f7294946dfbe5efdf36635f24az.png",
    name: "7pcs Mixed Kc Gold Color Elegant Style Sacred Heart Alloy Pendant DIY Charms Jewelry Metal Accessories F3",
    originalPrice: 2.01,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Un2LDZ"
  },
  {
    id: "1005009755815481",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S730dc3e62d1b4f8a90ea6e278cc9291ae.png",
    name: "2025 men's printed T-shirt, men's and women's long sleeved shirt, 100% polyester fiber, fashionable and comfortable casual men's",
    originalPrice: 28.17,
    discountPrice: 9.3,
    url: "https://s.click.aliexpress.com/e/_c3ESifBV"
  },
  {
    id: "1005007777440977",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S42bb7963f7704f2e9cc2f761a516620e2.jpg",
    name: "925 Sterling Silver Cat Rings For Women Engagement Luxury Designer Jewelry Female Offers With Free Shipping URBABY Jewellery",
    originalPrice: 1.48,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3aTKg9N"
  },
  {
    id: "4000310843382",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H3561ddb5fd51446fa860ccd896f06d0d3.jpg",
    name: "Natural Stone Beads Matte Colourful Mineral Two Holes Hematite Beads Square Spacer Beads For Jewelry Making Gift DIY Bracelets",
    originalPrice: 4.85,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3InkV2T"
  },
  {
    id: "1005006382584750",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4bca9bfe0a04414eb453f441adc27e46r.jpg",
    name: "Fine 925 Sterling silver bracelets 6-8mm Women Men chain wedding fashion top quality Silver Jewelry Figaro 20cm",
    originalPrice: 1.71,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4CEYwwn"
  },
  {
    id: "1005007569107704",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S48686ba8f3644d3592077499d1a7a918P.jpg",
    name: "925 sterling silver Snake chain Necklace Noble for women men jewelry designer wedding engagement gifts 50/60cm wholesale price",
    originalPrice: 3.85,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3BRINph"
  },
  {
    id: "1005008387494449",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdaa6cd75e8c34453acc430c3b8c450b2r.jpg",
    name: "2025 Electric Windproof Metal Lighter Double Arc Flameless Plasma Rechargeable USB Lighter LED Power Display Touch Lighters Gift",
    originalPrice: 0.01,
    discountPrice: 0.01,
    url: "https://s.click.aliexpress.com/e/_c3440ay3"
  },
  {
    id: "1005004244528295",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se92e0afd07a04ad189c585b85510d04ci.jpg",
    name: "FLAGLAND Custom Any Pattern Color Size Logo Flag Banner Printing Decoration (company Advertising Sports Outdoor Logo) 3x5Ft",
    originalPrice: 2.09,
    discountPrice: 1.46,
    url: "https://s.click.aliexpress.com/e/_c3XNW2rD"
  },
  {
    id: "1005008875230429",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4e3c5b087325476da9195defb7781b274.jpg",
    name: "Murder Drones Uzi Doorman Acrylic Keychain Jewelry Friends Gift Bag Charms Keyring Souvenir Creative Key Chain Fanshion Pendant",
    originalPrice: 2.39,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3KFHjCP"
  },
  {
    id: "1005003385450519",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H3266d41bf4d6469cb75eb2438cc7e0b9b.jpg",
    name: "URPRETTY 925 Sterling Silver Beaded Necklace 20/24 Inch Chain For Woman Men Wedding Engagement Party Jewelry",
    originalPrice: 3.46,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c32wXMer"
  },
  {
    id: "1005009097536920",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2733e596ea724bb194b79823630a2a9cE.png",
    name: "Handmade 3D Fairy Keychain Y2K Pink and Black Beaded Keychain Gift",
    originalPrice: 2.44,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2JU09uR"
  },
  {
    id: "1005009644909880",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S846c67b33b7f46bc8c4e5a8428e1862cY.jpg",
    name: "Red Pearl Chain Heart Charm Adjustable Bracelet Gift Fashion Jewelry for Little Girls Kids Toddler",
    originalPrice: 5.33,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4syBWjZ"
  },
  {
    id: "1005007880506606",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2245cd32c6734c64bccc3893a3d890951.jpg",
    name: "New Solid Color Phone Case for IPhone 16 15 14 13 12 11 Pro Max 16Pro Soft Silicone Shockproof Protective Accessories Cover",
    originalPrice: 2.23,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3VwhGox"
  },
  {
    id: "1005009645666110",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7b81c90c2a914fb5902db327d2390cfdH.jpg",
    name: "Cute! Little Animals Kindergarten Theme - Strawberry Set w/ Collectible Box + Full Clear Resin Molds",
    originalPrice: 5.64,
    discountPrice: 4.79,
    url: "https://s.click.aliexpress.com/e/_c2yZjKY3"
  },
  {
    id: "1005006089447065",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1986ab5472724ce691aa4543d8922a06b.jpg",
    name: "Fishbone Beads Bracelet | Fish Jewelry Gifts | Star & Bead | Cute Minimalist Earrings | Unique Sealife Bracelet | Kawaii Animal",
    originalPrice: 2.9,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2wuoohd"
  },
  {
    id: "1005006220208172",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf6230997cf3e4355a548aa93f0c8b4753.jpg",
    name: "Fashion brand 925 Sterling Silver Necklace For Women luxury Wedding Jewelry elegant horse pendants chain neckalce",
    originalPrice: 1.57,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4Mjd5mT"
  },
  {
    id: "1005010362340032",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S17ab2be87ba44d5dafb8902b9ed8d155V.jpg",
    name: "Huitan Creative Design Women Rings with Sparkling Cubic Zirconia Claws Setting Two Tone Luxury Wedding Rings New Trendy Jewelry",
    originalPrice: 9.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c34P5spN"
  },
  {
    id: "1005007542158831",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S16561193731a41a3aeec9ec85bac1842a.jpg",
    name: "10pcs/lot Promotion! wholesale 925 sterling silver necklace, silver fine jewelry Rolo Chain 1mm Necklace 16 18 20 22 24\"",
    originalPrice: 4.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3si9rHv"
  },
  {
    id: "1005008056789722",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf3dc840b168444f5833617f1ba69189ai.jpg",
    name: "ALIZERO 925 Sterling Silver 4MM Rope Chain Necklaces For Women Men Fashion Hip Hop Party Punk Necklace Jewelry Wholesale",
    originalPrice: 2.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3nPMrkf"
  },
  {
    id: "1005008133642544",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S64fbc924bb36401082e1eafc1861b0c2U.jpg",
    name: "CDD Luxury Vintage Four Leaf Clover Charm Bracelet for Women Five-petal Flower Fashion Wrist Chain Jewelry Party Gifts  Bijoux",
    originalPrice: 2.83,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4OsNmHz"
  },
  {
    id: "1005006305647396",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sef5567fbba4b44289248ee3bf7fe89ca4.jpg",
    name: "40-75cm 925 sterling Silver 16-30 Inches fine 4MM chain Necklaces for women fashion party wedding Jewelry Christmas gifts",
    originalPrice: 1.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3jKZrUr"
  },
  {
    id: "1005006146841885",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf069570e43954644b32cc06ebe1bee15m.jpg",
    name: "ALIZERO 925 Sterling Silver Zircon 8-Shape Ring for Women Wedding Rings Engagement Band Eternal Manifesto Jewelry Couple Gift",
    originalPrice: 2.67,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c364H5uX"
  },
  {
    id: "32956331686",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/HTB1DfnkXPvuK1Rjy0Faq6x2aVXa6.jpg",
    name: "Kinitial Simple Design Treble and Bass Clef Heart Pendant Necklace Chain for Gift Charm Heart Music Teacher Necklaces Jewelry",
    originalPrice: 1.31,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3w0K4lz"
  },
  {
    id: "32862802747",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/HTB1rdn1nVGWBuNjy0Fbq6z4sXXaD.jpg",
    name: "Aihua New Fashion Silver Color Infinity Necklaces & Pendants for Women Choker Party Jewelry Gifts Bijuter Collar",
    originalPrice: 1.67,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3QVZrq7"
  },
  {
    id: "1005010336292580",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd5bee015baea475985514a91b22119fah.jpg",
    name: "Nesting Fancy Rectangle Die Set Embossing Cut Dies and Stamps Handmade DIY Scrapbook Greeti Card Diary Craft Decoration 2026 New",
    originalPrice: 5.17,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4No7oZ9"
  },
  {
    id: "1005009584193869",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S267f8e602aa148d0bc0c2f647bd884eff.jpg",
    name: "Pokemon Cosplay Costume Men Women Kigurumis Anime Onesie Hallween Carnival Party Outfit Gengar Pikachu Funny Jumpsuit",
    originalPrice: 27.95,
    discountPrice: 20.96,
    url: "https://s.click.aliexpress.com/e/_c4tIJzb9"
  },
  {
    id: "1005005629693186",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdf4973041bce49e3b26bd8b1c60e4463c.jpg",
    name: "925 Sterling Silver 6-10 Size Rings For Women Man Round Large Zircon Ring Fashion Wedding Engagement Charms Party Fine Jewelry",
    originalPrice: 3.83,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3OPHUan"
  },
  {
    id: "1005008358562361",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf394e5c9643e4528885f81eeba196f7bE.jpg",
    name: "New women bags handbag for women 2025 shoulder bag female handbags fashion crossbody luxury bags shoulder bag",
    originalPrice: 9.66,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3s9vN0X"
  },
  {
    id: "1005008557912605",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0a71558136844741b7590be1e92fd33fd.jpg",
    name: "Men's and Women's Fashion Knitted Melon Skin Hats Casual Berets Comfortable Landlord Hats Warm Painter Hats Pacifier Cap",
    originalPrice: 15.4,
    discountPrice: 6.93,
    url: "https://s.click.aliexpress.com/e/_c45X8CPp"
  },
  {
    id: "1005010077614635",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb4a8828444d04b88bea33577b7d3c484R.jpg",
    name: "JMFLAG 90x150cm Professional Custom Car Motorcycle FC Team or Conpany Logo Flag Polyester Printed Decoration Banner Tapestry",
    originalPrice: 2.09,
    discountPrice: 1.42,
    url: "https://s.click.aliexpress.com/e/_c4azIst5"
  },
  {
    id: "1005005642606422",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfb36f5985f7b45af82bf5aff05ff03e7T.jpg",
    name: "Charm 925 Sterling Silver Rings For men Shining crystal adjustable size Fashion Gifts engagement wedding high quality Jewelry",
    originalPrice: 1.85,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4kEJP2T"
  },
  {
    id: "1005005291221090",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc63772b601fe49ac958d2dcebd5b0211U.jpg",
    name: "90x150cm Professional Custom Car Motorcycle Team or Conpany Logo Flag Polyester Printed Decoration Banner Tapestry",
    originalPrice: 2.26,
    discountPrice: 1.54,
    url: "https://s.click.aliexpress.com/e/_c2vRLUgx"
  },
  {
    id: "1005007624986208",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5740734761394cebbf7bd96c78f3c2b70.jpg",
    name: "2024 New Windproof Electric Metal Lighter Double Arc Flameless Plasma Lighter USB Rechargeable LED Power Display Touch Sensor",
    originalPrice: 0.01,
    discountPrice: 0.01,
    url: "https://s.click.aliexpress.com/e/_c3T0SwH5"
  },
  {
    id: "1005007378140883",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd9b07f9f27b74fc08c18adda736de4eaq.jpg",
    name: "Men's 925 Sterling Silver Necklace 2/4/6/8/10/12MM 40-75cm Face Chain Necklace Lobster Clasp Men And Women Engagement Jewelry",
    originalPrice: 2.0,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3vOktyr"
  },
  {
    id: "1005007828124291",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd899d528f32c4b54b4877a0623e4fd39G.jpg",
    name: "Pokemon Costume 0-5 Y Baby Snorlax Romper Anime Cosplay Kigurumi Cute Pajama Boys Girls Onesie Halloween Clothes",
    originalPrice: 22.36,
    discountPrice: 16.77,
    url: "https://s.click.aliexpress.com/e/_c3W4SVtp"
  },
  {
    id: "1005005065134064",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Saf6b3ede70d542bba50f651ef22f0aa7g.jpg",
    name: "Spinning Anxiety Rings Free Shipping Items For Men Titanium Steel Rotatable Chain Fidget Joint Ring Jewelry Anillos De Hombres",
    originalPrice: 1.42,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2vSkxGR"
  },
  {
    id: "1005005048418497",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4e9c35fa0f18487184d3a12cfa7f1cc2D.jpg",
    name: "Noble new arrive 925 sterling silver 4MM chain for men Women Bracelet Necklace jewelry set lady Christma gifts charms wedding",
    originalPrice: 2.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3ki2Prd"
  },
  {
    id: "1005007686491656",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5d08dcfe12c74d7e8b064aa498215bdd2.jpg",
    name: "ALIZERO 18K Gold Necklace 16/18/20/22/24/26/28/30 Inch 6mm Figaro Chain Necklaces For Men Women Fine Jewelry Accessories",
    originalPrice: 4.68,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2IZ6F1v"
  },
  {
    id: "1005007445093740",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd59a86edc0b446bfb23218278b817a4d9.jpg",
    name: "Wholesale 925 Sterling Silver Necklace 2-12mm Width 40-75cm Long Chain Lobster Clasp Men and Women Engagement Jewelry",
    originalPrice: 2.03,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3pGxSKB"
  },
  {
    id: "1005006126645124",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd7f38c3f35c34c44b614d7bc844432842.jpg",
    name: "Fashion Candy Colors Soft Phone Case for IPhone 16 12 14 13 15 Pro Max 14Plus Camera Bumper Shock Protection Matte Cover Coque",
    originalPrice: 1.65,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3ne57Dh"
  },
  {
    id: "1005007488708852",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4be07fc492ba46d6a7b0bcfd1d337b22v.jpg",
    name: "Solid 925 Sterling Silver Necklace For Men Classic 12mm Cuban Chain 18-30 Inch Charm High Quality Fashion Jewelry Wedding",
    originalPrice: 7.67,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3LNFtI3"
  },
  {
    id: "1005005006020419",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Aea219281da284407941e886a028d2c412.jpg",
    name: "New Layer Frames Metal Cutting Dies for 2025 Scrapbook Rectangle Square Circle Oval Heart Star Background Stencils Card Making",
    originalPrice: 2.73,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3UDIfPd"
  },
  {
    id: "1005008134278899",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc6fe537bdba148f58e404e09e1df46c2S.jpg",
    name: "Men's 925 Sterling Silver Necklace 2/4/6/8/10/12MM 40-75cm Face Chain Necklace Lobster Clasp Men Women Engagement Jewelry Gifts",
    originalPrice: 2.17,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3mJONNZ"
  },
  {
    id: "1005007411996138",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S05b09339678b4c2dacff0f01034b4ad4D.jpg",
    name: "Special offer 18K gold Necklaces 925 Stamp Silver color Classic 8MM sideways chain for Men woman fine Jewelrys Wedding party",
    originalPrice: 4.72,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3Bxi81H"
  },
  {
    id: "1005010139072233",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se02aff168c474ae78cafd67fc0a0ea5fi.png",
    name: "S-Scotty C-Camerons Printed Flag,Interior decoration, outdoor decoration, stadium decoration,Golf products, golf flags, interior",
    originalPrice: 2.09,
    discountPrice: 1.26,
    url: "https://s.click.aliexpress.com/e/_c4kx6A4j"
  },
  {
    id: "1005007351769998",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S35e32078cbe54734b64fc9296eb7c453U.jpg",
    name: "Trendy 925 Sterling Silver Bangles Bracelet Charms Cute Open for Women Fashion Jewelry Adjustment Size Cuff Wedding Party",
    originalPrice: 2.06,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3MPN0ox"
  },
  {
    id: "1005003324016159",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H1d1df496d6c9440181ee445f63f2e72eo.jpg",
    name: "10Pcs DC Connectors 5.5x2.1mm 3.5x1.3mm DC Power Plug Male Female Jack Socket Nut Panel Mount DC Power Adapter Connector 5.5*2.1",
    originalPrice: 1.68,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2yT9h1t"
  },
  {
    id: "1005006242824737",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S82976217227e4e5ba1ea6134749153781.jpg",
    name: "Viking Celtic Knot Rune Rings For Men Rotating Stainless Steel Anti Stress Anxiety Relife Spinning Ring Anillo Antiestres",
    originalPrice: 2.17,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4eYMoD5"
  },
  {
    id: "1005006674793057",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2f2b125468094b7ca14ea09d157d7209P.jpg",
    name: "Men's 925 Sterling Silver Necklace 2/4/6/8/10/12MM 40-75cm Face Chain Necklace Lobster Clasp Men Women Engagement Jewelry Gifts",
    originalPrice: 2.37,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4V8T8sL"
  },
  {
    id: "1005001756119964",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2888bd441b164fe1be2564e7de662e29M.jpg",
    name: "Girl Princess Cinderella Dress Elsa Anna Mermaid Jasmine Belle Snow White Costume Girls Birthday Party Halloween Dress 2-10 Year",
    originalPrice: 6.08,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2xBBONl"
  },
  {
    id: "1005003799096513",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S24518abff3ba441badf9c1ef12f8fc5dF.jpg",
    name: "Coil Copper Wire0.1mm 0.2mm 0.3mm 0.4mm 0.5mm 0.6mm 0.7mm 0.8mm 1.20mmCable Copper Wire Magnet Wire Enameled Copper Winding Wire",
    originalPrice: 2.18,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c2viUrej"
  },
  {
    id: "1005008357852191",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Scc06c153998844b29dbbe22a77a618e1s.jpg",
    name: "2-in-1 Guitar Pick & Tuner - Portable, Multi-Purpose Pitch Calibrator for Folk Guitars and Ukuleles, 12-Tone Equal Temperament,",
    originalPrice: 3.76,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4B6CVm7"
  },
  {
    id: "1005007778238254",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa65ab9d87eca46a6a0a66fcad61d5ce4f.jpg",
    name: "Handmade Original Fine Jewelry 925 Sterling Silver Charm Bracelet Soft Smooth Snake Bone Bracelets for Women",
    originalPrice: 1.5,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3DtfcD9"
  },
  {
    id: "1005005744249901",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7e36c3d0791d4d8da449273b31b742ddq.jpg",
    name: "DOTEFFIL 925 Sterling Silver 5/10pcs/Lot 16/18/20/22/24/26/28/30 Inch 1.2mm Snake Chain Necklace For Woman Man Fashion Jewelry",
    originalPrice: 2.52,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3npeG3v"
  },
  {
    id: "1005007332964701",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc4ffec646f4f448f8c561071fefbc0303.jpg",
    name: "Fine 925 Sterling Silver Noble Nice Chain Solid Bracelet for Women Men Charms Party Gift Wedding Fashion Jewelry Hot Model",
    originalPrice: 1.84,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c30XjUBD"
  },
  {
    id: "1005010047477931",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5497bbd91bf547af9e5175252e6d1bf7r.jpg",
    name: "90x150cm Motorcycle Car Sports Company Advertising Logo Custom Flag Polyester Printing Banner Wall Art Decoration Tapestry",
    originalPrice: 2.08,
    discountPrice: 1.39,
    url: "https://s.click.aliexpress.com/e/_c3sswAqX"
  },
  {
    id: "1005004138189665",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdba66a6e3b544e8a97bb934c51803c4de.jpg",
    name: "YUSUN 1PC 45° Degree  Lock Miter Router Bit  Woodworking Milling  Cutter For Wood Tools",
    originalPrice: 18.13,
    discountPrice: 6.63,
    url: "https://s.click.aliexpress.com/e/_c4mbqXRd"
  },
  {
    id: "1005003926182467",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf6f08acb5de44082bee565a889e05aa0O.jpg",
    name: "Natural Stone Beads Bracelet For Women Men Amethysts Crystal Quartzs Aquamarines Jades Jewelry Agates Elastic Bangle Bracelets",
    originalPrice: 2.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4n6w66P"
  },
  {
    id: "1005006683502749",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8a3e05f877ad423da630f51cbe8593b7v.jpg",
    name: "Special offer 18K gold Necklaces 925 Stamp Silver color Classic 8MM sideways chain for Men woman fine Jewelrys Wedding party",
    originalPrice: 4.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3nKa7SF"
  },
  {
    id: "1005005709693833",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Saa1167ca1e41425a8265cdc8fd10198fg.jpg",
    name: "High quality 925 Sterling Silver fine Love dolphins heart Rings For Women Couple gifts Fashion Party wedding Jewelry",
    originalPrice: 1.55,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3K4h6qf"
  },
  {
    id: "1005007572668554",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfe6007207b9d4ab1b72bf41391145205t.jpg",
    name: "ALIZERO 18K Gold 2mm Snake Chain Necklaces 16/18/20/22/24/26/28/30 Inches Women Men Fashion Fine Jewelrys Gifts",
    originalPrice: 3.6,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4LlVrdD"
  },
  {
    id: "1005007484825718",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S79858aa003f046558a4b921adba735c6M.jpg",
    name: "Men's 925 Sterling Silver 2MM/4MM/6MM/8MM/12MM Chain Necklace 16-30 Inch for Man Women Fashion Jewelry High End Necklace",
    originalPrice: 2.17,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3dpoVRN"
  },
  {
    id: "1005008131374405",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S721c1df2b0a748339e724998f8131b97z.jpg",
    name: "Original 925 Sterling Silver Snake Bone Charm Bracelet Bangle Fine Jewelry Basic Charm Bracelets for Women men Party DIY Jewelry",
    originalPrice: 2.1,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3azlKmf"
  },
  {
    id: "1005001649158434",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H2933cc823f014791944a760dc579aac8R.jpg",
    name: "10Sets SH1.0 JST1.25 ZH1.5 PH2.0 XH2.54 Connector Female+Male 2/3/4/5/6/7/8/9/10P Plug With Cable 10/20/30cm",
    originalPrice: 2.0,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c32NsjEL"
  },
  {
    id: "1005004784437959",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S63ecf628c52d46e9bdb533dc5ca8c0b7t.jpg",
    name: "50pcs Mysterious Cross Ghost Destiny's Gate Key Pendant charm Punk Cross Ghoul chain Ghost Band Grucifix Pope emeritus DIY",
    originalPrice: 7.81,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3LegTYX"
  },
  {
    id: "1005007632722077",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S14bc01c0d9664f21b5a3085b92555644D.jpg",
    name: "Men's 925 Sterling Silver Necklace 2/4/6/8/10/12MM 40-75cm Figaro Chain Necklace Lobster Clasp Men Women Engagement Jewelry",
    originalPrice: 1.87,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3AmM7zh"
  },
  {
    id: "1005008057648687",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc7e67c3213ab4aca93a08edb9256eee6s.jpg",
    name: "ALIZERO 18K Gold 4MM Figaro Chain Necklace For Women Men Fashion Hip Hop Punk Necklaces Jewelry Wholesale 40-75cm",
    originalPrice: 3.27,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c43Vjf1p"
  },
  {
    id: "1005008768737102",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sed49e7cdc27949e2ab03124971eb2b74v.jpg",
    name: "Anime The Guy She Was Interested in Wasn't a Guy at All Figure Acrylic Stand Model Birthday Tabletop Decoration Christmas Gift",
    originalPrice: 2.38,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3VR1SNl"
  },
  {
    id: "1005008119122313",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb78fe22ee4974923b298bbe38f43e6a4V.jpg",
    name: "Exquisite Fashion 18K Gold Filled Necklace For Women Men Size 16-30 Inch Jewelry 4mm Figaro Chain Necklaces Wholesale",
    originalPrice: 2.41,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4ogWUqf"
  },
  {
    id: "1005005709612338",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9bf0b37826d84a5fba2896cda2eb1a75Q.jpg",
    name: "New 925 sterling silver elegant Peacock opening screen bracelet Bangles for women fashion party wedding Accessories jewelry gift",
    originalPrice: 2.41,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4ebyZWx"
  },
  {
    id: "1005009792011076",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7c577a5afc5a490ca53b16154e086f37p.jpg",
    name: "Heart Love Butterfly Chain Adjustable Bracelet Gift Fashion Kid's Jewelry Gift for Baby Girl Toddler",
    originalPrice: 6.22,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c4cdS2dV"
  },
  {
    id: "2040054634",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S544319b9f0cc4341a85e75995ae487e69.jpg",
    name: "Eco Paper Ball Pen Black Ink Custom Ballpoint Green Concept Environment Friendly Customized Promotion Gift Personalize Logo Pens",
    originalPrice: 0.12,
    discountPrice: 0.1,
    url: "https://s.click.aliexpress.com/e/_c436TN91"
  },
  {
    id: "1005008174381894",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Seb41b4ca9459407bbefa81afd0013457O.jpg",
    name: "Boys Girls Squirtle Costume 0-3 Y Baby Romper Anime Pokemon Cosplay Kigurumi Blue Cute Pajama Onesie Halloween Animal Clothes",
    originalPrice: 22.36,
    discountPrice: 16.77,
    url: "https://s.click.aliexpress.com/e/_c2u6kXVp"
  },
  {
    id: "1005004793227586",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd296db50de32484e958bd0895d4684168.jpg",
    name: "URMYLADY 925 Sterling Silver Water Drop Turquoise 7-10# Ring For Women Wedding Charm Engagement Fashion Jewelry",
    originalPrice: 2.21,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3QsiD6T"
  },
  {
    id: "1005009114177485",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sacd62438ac6446ccaeb88a5fc40868faK.jpg",
    name: "Top Quality 925 Sterling Silver Earrings Simple Round Circle Hoop Earrings For Woman Fashion Wedding Engagement Charm Jewelry",
    originalPrice: 1.75,
    discountPrice: 0.99,
    url: "https://s.click.aliexpress.com/e/_c3KKl5R5"
  }
];

const BADGES = ['Hot', 'New', 'Sale', 'Trending'];
const BADGE_CLASSES = ['badge-hot', 'badge-new', 'badge-sale', 'badge-trending'];

export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse"></span>
              🔥 Best AliExpress Deals
            </div>

            <h1>
              <span className="gradient-text">Massive Collection</span><br />
              Of Premium Goods
            </h1>

            <p className="hero-description">
              CartovoHub brings you curated products at unbeatable prices. Shop our handpicked selections and save big every day.
            </p>

            <div className="hero-buttons">
              <a href="#all-products" className="btn-hero-primary">
                Shop All Products →
              </a>
              {/* Ye naya button add kiya hai jo naye page par le jayega */}
              <a href="/hot-deals" target="_blank" className="btn-hero-secondary">
                Shop Hot Deals 🔥
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{allProducts.length}+</div>
                <div className="stat-label">Live Deals</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              {allProducts.slice(0, 3).map((p, i) => (
                <div className="hero-product-card" key={p.id}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="hero-card-img"
                    onError={(e) => { e.target.style.opacity = '0.3'; }}
                  />
                  <div className="hero-card-info">
                    <h4>{p.name.slice(0, 40)}{p.name.length > 40 ? '…' : ''}</h4>
                    <span className="hero-card-price">
                      ${(p.discountPrice ?? p.originalPrice).toFixed(2)}
                    </span>
                    <span className="hero-card-rating">★★★★★</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ALL PRODUCTS SECTION (HOT DEALS REMOVED) ===== */}
      <section className="products-section" id="all-products">
        <div className="section-header">
          <div className="section-tag">🛍️ SHOP ALL</div>
          <h2 className="section-title">All Products Collection</h2>
          <p className="section-subtitle">
            Browse our complete catalog of amazing deals just for you
          </p>
        </div>

        <div className="products-grid">
          {allProducts.map((product, i) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => window.open(product.url, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  onError={(e) => { e.target.style.opacity = '0.3'; }}
                />
                <span className={`product-badge ${BADGE_CLASSES[i % 4]}`}>
                  {BADGES[i % 4]}
                </span>
                <button className="product-wishlist" aria-label="Add to wishlist">♡</button>
                <div className="product-quick-add">
                  <button className="quick-add-btn">Buy on AliExpress</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-category">AliExpress Deal</div>
                <div className="product-name">{product.name}</div>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(verified)</span>
                </div>
                <div className="product-price-row">
                  <div className="product-price">
                    ${(product.discountPrice ?? product.originalPrice).toFixed(2)}
                    {product.discountPrice && (
                      <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  {product.discountPrice && (
                    <span className="commission-badge">
                      SAVE {Math.round((1 - (product.discountPrice / product.originalPrice)) * 100)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}