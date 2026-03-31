import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

const images = [
  { id: 5, slot: 1, category: "dining rooms", img: "assets/image/gallery1.jpg" },
  { id: 3, slot: 2, category: "living rooms", img: "assets/image/gallery2.jpg" },
  { id: 1, slot: 3, category: "bedrooms", img: "assets/image/gallery4.jpg" },
  { id: 6, slot: 4, category: "dining rooms", img: "assets/image/gallery5.jpg" },
  { id: 4, slot: 5, category: "living rooms", img: "assets/image/gallery3.jpg" },
  { id: 2, slot: 6, category: "bedrooms", img: "assets/image/gallery6.jpg" },
];

const tabs = ["all", "bedrooms", "living rooms", "dining rooms"];

const Gallery = () => {
  const [active, setActive] = useState("all");

  // const filtered =
  //   active === "all" ? images : images.filter((i) => i.category === active);

  return (
    <div className="gallery-container">
      <h2>OUR GALLERY</h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={active === tab ? "active" : ""}
            onClick={() => setActive(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <motion.div layout className="gallery-grid">
        <AnimatePresence>
          {images.map((item) => {
            const isVisible = active === "all" || item.category === active;

            return (
              isVisible && (
                <motion.div
                  key={item.id}
                  layout
                  className={`gallery-item item-${item.slot}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <img src={item.img} alt="" />

                  <div className="overlay">
                    <span className="category"><FaSearchPlus /></span>
                    <h4 className="title">ROOM #{item.slot}</h4>
                  </div>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Gallery;
