// import homeImg from "../assets/home.png";
// import rentImg from "../assets/rent.jpg";
// import saleImg from "../assets/sale.jpg";

// const cards = [
//   {
//     id: 1,
//     title: "Featured New Launch",
//     img: homeImg,
//   },
//   {
//     id: 2,
//     title: "Luxury Townhouse",
//     img: rentImg,
//   },
//   {
//     id: 3,
//     title: "Premium Villa",
//     img: saleImg,
//   },
// ];

// export default function OverlapCards() {
//   return (
//     <section className="relative z-10 -mt-32 px-6">
      
//       {/* CARD CONTAINER */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden 
//             transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
//           >
            
//             {/* IMAGE */}
//             <div className="overflow-hidden">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="h-52 w-full object-cover transition duration-300 hover:scale-110"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-5">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {card.title}
//               </h3>

//               <button className="mt-3 text-purple-600 font-medium hover:underline">
//                 Explore →
//               </button>
//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }




import homeImg from "../assets/home.png";
import rentImg from "../assets/rent.jpg";
import saleImg from "../assets/sale.jpg";

const cards = [
  {
    id: 1,
    title: "Featured New Launch",
    img: homeImg,
  },
  {
    id: 2,
    title: "Luxury Townhouse",
    img: rentImg,
  },
  {
    id: 3,
    title: "Premium Villa",
    img: saleImg,
  },
];

export default function OverlapCards() {
  return (
    <section className="relative z-20 -mt-24 px-6 pb-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden 
            transition hover:scale-[1.03] duration-300"
          >
            <img
              src={card.img}
              className="h-48 w-full object-cover"
              alt={card.title}
            />

            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                {card.title}
              </h3>

              <button className="mt-2 text-purple-600 text-sm">
                Explore →
              </button>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}