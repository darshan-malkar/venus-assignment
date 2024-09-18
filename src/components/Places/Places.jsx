import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/place4.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place3.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Sydney Opera",
    location: "Australia",
    description: "The Sydney Opera House, a UNESCO World Heritage Site, is an iconic architectural masterpiece known for its distinctive sail-like shells.",
    price: 50000,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 27000,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Maldives",
    location: "Maldives islands",
    description:
      "The Maldives, a tropical island nation in the Indian Ocean, is renowned for its crystal-clear turquoise waters, and luxurious overwater bungalows.",
    price: 120000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Ibiza",
    location: "Spain",
    description: "Ibiza, a Spanish island in the Balearic Sea, is renowned for its vibrant nightlife, stunning beaches, and a popular destination for partygoers.",
    price: 85000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Rajasthan",
    location: "India",
    description:
      "Rajasthan, the Land of Kings, is a state in northwestern India known for its majestic forts, colorful festivals. It is also home to the Thar Desert.",
    price: 35000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Srinagar",
    location: "Kashmir-India",
    description:
      "Srinagar, the Venice of the East,is the summer capital of Jammu and Kashmir, India, known for its picturesque Dal Lake, houseboats, and Mughal gardens.",
    price: 40000,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
