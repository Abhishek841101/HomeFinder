const properties = [
  // 🏙️ BANGALORE
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Bangalore",
    price: "₹85 Lac",
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    id: 2,
    title: "Tech Park Studio",
    location: "Bangalore",
    price: "₹45 Lac",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },

  // 🌆 MUMBAI
  {
    id: 3,
    title: "Modern Villa",
    location: "Mumbai",
    price: "₹1.5 Cr",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 4,
    title: "Sea View Apartment",
    location: "Mumbai",
    price: "₹2 Cr",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },

  // 🏢 DELHI
  {
    id: 5,
    title: "Premium House",
    location: "Delhi",
    price: "₹95 Lac",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 6,
    title: "Builder Floor",
    location: "Delhi",
    price: "₹70 Lac",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },

  // 🏠 PATNA
  {
    id: 7,
    title: "Budget Flat",
    location: "Patna",
    price: "₹35 Lac",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
  {
    id: 8,
    title: "2BHK Affordable",
    location: "Patna",
    price: "₹28 Lac",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },

  // 🟠 NAGPUR (Important ✔)
  {
    id: 9,
    title: "Nagpur Smart Villa",
    location: "Nagpur",
    price: "₹60 Lac",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 10,
    title: "Orange City Apartment",
    location: "Nagpur",
    price: "₹48 Lac",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    id: 11,
    title: "3BHK Near MIHAN",
    location: "Nagpur",
    price: "₹72 Lac",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },

  // 🏙️ HYDERABAD
  {
    id: 12,
    title: "Gachibowli Flat",
    location: "Hyderabad",
    price: "₹80 Lac",
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
  },

  // 🏙️ PUNE
  {
    id: 13,
    title: "Pune IT Apartment",
    location: "Pune",
    price: "₹65 Lac",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },

  // 🏙️ KOLKATA
  {
    id: 14,
    title: "Kolkata Classic Home",
    location: "Kolkata",
    price: "₹55 Lac",
    img: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
  },

  // 🏙️ CHENNAI
  {
    id: 15,
    title: "Chennai Beach House",
    location: "Chennai",
    price: "₹90 Lac",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  },

  // 🔥 EXTRA (duplicate pattern to reach 50+)
  ...Array.from({ length: 35 }, (_, i) => ({
    id: 16 + i,
    title: `Premium Property ${i + 1}`,
    location: ["Delhi", "Mumbai", "Bangalore", "Nagpur", "Pune"][
      i % 5
    ],
    price: `₹${40 + i} Lac`,
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  })),
];

export default properties;