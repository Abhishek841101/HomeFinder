import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function B2BList() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    // 🔥 ELECTRONICS (10)
    { name: "ABC Traders Pvt Ltd", desc: "Bulk electronics supplier", location: "Delhi", rating: 4.5, category: "electronics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", verified: true },
    { name: "Tech World Supply", desc: "Laptop & accessories wholesale", location: "Mumbai", rating: 4.3, category: "electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", verified: false },
    { name: "Digital Hub India", desc: "Mobile & gadgets supplier", location: "Bangalore", rating: 4.6, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", verified: true },
    { name: "Smart Devices Co.", desc: "Smart home devices", location: "Hyderabad", rating: 4.4, category: "electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661", verified: true },
    { name: "Electro Mart", desc: "Wholesale electronics", location: "Pune", rating: 4.2, category: "electronics", image: "https://images.unsplash.com/photo-1581090700227-1e8e2b7e3a5b", verified: false },
    { name: "Future Tech", desc: "IT hardware supplier", location: "Chennai", rating: 4.7, category: "electronics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", verified: true },
    { name: "Gadget Zone", desc: "Bulk gadget store", location: "Noida", rating: 4.3, category: "electronics", image: "https://images.unsplash.com/photo-1510557880182-3f8a3c1c98a7", verified: false },
    { name: "Electro India", desc: "Electronics distribution", location: "Ahmedabad", rating: 4.4, category: "electronics", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", verified: true },
    { name: "NextGen Electronics", desc: "Latest devices supplier", location: "Surat", rating: 4.6, category: "electronics", image: "https://images.unsplash.com/photo-1512499617640-c2f999018b72", verified: true },
    { name: "Mega Tech Supply", desc: "Wholesale tech products", location: "Kolkata", rating: 4.2, category: "electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", verified: false },

    // 🔥 EXPORT (8)
    { name: "Global Export Hub", desc: "Import-export services", location: "Mumbai", rating: 4.2, category: "export", image: "https://images.unsplash.com/photo-1581091870622-2c5f1f0c1c4f", verified: true },
    { name: "Ocean Trade Corp", desc: "International logistics", location: "Chennai", rating: 4.5, category: "export", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231", verified: true },
    { name: "Export India Ltd", desc: "Global shipping", location: "Delhi", rating: 4.3, category: "export", image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7", verified: false },
    { name: "Trade Connect", desc: "Export consultancy", location: "Pune", rating: 4.4, category: "export", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", verified: true },
    { name: "World Cargo", desc: "Freight forwarding", location: "Mumbai", rating: 4.6, category: "export", image: "https://images.unsplash.com/photo-1515165562835-c4cfc6f9e6b4", verified: true },
    { name: "Export Masters", desc: "Bulk exports", location: "Kolkata", rating: 4.1, category: "export", image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514", verified: false },
    { name: "TradeLine", desc: "Global trade network", location: "Hyderabad", rating: 4.5, category: "export", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a", verified: true },
    { name: "Cargo Experts", desc: "Export logistics", location: "Delhi", rating: 4.3, category: "export", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231", verified: false },

    // 🔥 MACHINERY (8)
    { name: "Industrial Supply Co.", desc: "Machinery supplier", location: "Pune", rating: 4.4, category: "machinery", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758", verified: false },
    { name: "Heavy Machines Ltd", desc: "Industrial equipment", location: "Delhi", rating: 4.6, category: "machinery", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", verified: true },
    { name: "Machine World", desc: "Factory machines", location: "Ahmedabad", rating: 4.3, category: "machinery", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231", verified: false },
    { name: "Steel Works", desc: "Heavy tools", location: "Ludhiana", rating: 4.5, category: "machinery", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f", verified: true },
    { name: "BuildTech Machines", desc: "Construction machines", location: "Noida", rating: 4.2, category: "machinery", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", verified: false },
    { name: "Industrial Hub", desc: "Machinery wholesale", location: "Nagpur", rating: 4.4, category: "machinery", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f", verified: true },
    { name: "Power Machines", desc: "Industrial motors", location: "Indore", rating: 4.6, category: "machinery", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", verified: true },
    { name: "Factory Tools", desc: "Tool supplier", location: "Jaipur", rating: 4.3, category: "machinery", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f", verified: false },

    // 🔥 TEXTILE (6)
    { name: "Rajasthan Textile Mart", desc: "Fabric supplier", location: "Jaipur", rating: 4.6, category: "textile", image: "https://images.unsplash.com/photo-1521334884684-d80222895322", verified: true },
    { name: "Silk House", desc: "Silk export", location: "Varanasi", rating: 4.5, category: "textile", image: "https://images.unsplash.com/photo-1521334884684-d80222895322", verified: true },
    { name: "Cotton World", desc: "Cotton wholesale", location: "Surat", rating: 4.3, category: "textile", image: "https://images.unsplash.com/photo-1521334884684-d80222895322", verified: false },
    { name: "Fashion Fabrics", desc: "Designer fabrics", location: "Delhi", rating: 4.4, category: "textile", image: "https://images.unsplash.com/photo-1521334884684-d80222895322", verified: true },
    { name: "Textile Hub", desc: "Bulk textile", location: "Mumbai", rating: 4.2, category: "textile", image: "https://images.unsplash.com/photo-1521334884684-d80222895322", verified: false },
    { name: "Cloth Center", desc: "Clothing material", location: "Ahmedabad", rating: 4.5, category: "textile", image: "https://images.unsplash.com/photo-1521334884684-d80222895322", verified: true },
  ];

  const filtered = data.filter((item) => {
    return (
      item.category === category &&
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4 z-20">
        <h1 className="text-lg md:text-2xl font-bold text-center capitalize">
          {category} Companies 🏢
        </h1>

        <div className="mt-3 max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search company or city..."
            className="w-full border rounded-full pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-6 max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center mt-10">No companies found 😕</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

            {filtered.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />

                  <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs rounded">
                    ⭐ {item.rating}
                  </span>

                  {item.verified && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      ✔ Verified
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {item.category}
                  </span>

                  <h2 className="font-semibold mt-2">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.desc}</p>

                  <p className="text-xs text-gray-400 mt-2">📍 {item.location}</p>

                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl">
                      View
                    </button>
                    <button className="flex-1 border py-2 rounded-xl">
                      Contact
                    </button>
                  </div>
                </div>

              </div>
            ))}

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}