import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/LOGO_IEEE_BVCOE.png";

const DecorativeBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="w-full h-full">
      {/* Large circle */}
      <circle cx="10%" cy="10%" r="70" fill="#60a5fa" opacity="0.2" />
      <circle cx="90%" cy="90%" r="50" fill="#2563eb" opacity="0.2" />
      <circle cx="30%" cy="60%" r="20" fill="#3b82f6" opacity="0.15" />
      
      {/* Medium circles */}
      <circle cx="80%" cy="20%" r="30" fill="#1e3a8a" opacity="0.2" />
      <circle cx="20%" cy="80%" r="25" fill="#93c5fd" opacity="0.15" />
      
      {/* Small circles */}
      <circle cx="50%" cy="50%" r="15" fill="#60a5fa" opacity="0.2" />
      <circle cx="70%" cy="30%" r="10" fill="#2563eb" opacity="0.2" />
      <circle cx="40%" cy="70%" r="10" fill="#3b82f6" opacity="0.15" />
    </svg>
  </div>
);


const AwardCard = ({
  logo = Logo,
  recipientImage,
  recipientName,
  awardName,
  eventName,
  eventYear,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="font-poppins max-w-lg relative"
      data-aos="fade-up"
      style={{
        perspective: 1000,
        height: "420px",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence initial={false}>
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-sky-200 shadow-2xl rounded-xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                height: "100%",
              }}
            >
              <DecorativeBackground />
              {/* Front Side */}
              <div className="h-full flex flex-col items-center py-4 relative z-10">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-28 h-8">
                    <img
                      src={logo}
                      alt="IEEE BVCOE Logo"
                      className="h-full object-contain"
                    />
                  </div>
                  <h1 className="text-xl text-black font-bold mb-2 font-serif italic">Congratulates</h1>
                  <div className="w-36 h-36 mb-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={recipientImage}
                      alt={recipientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-darkblue">
                    {recipientName}
                  </h2>
                  <h3 className="text-lg font-bold text-center px-4 text-black">
                    {awardName}
                  </h3>
                  <div className="text-sm text-center font-semibold text-sky-900 mb-2">
                    <p>{eventName}</p>
                    <p>{eventYear}</p>
                  </div>
                  <button
                    className="px-4 py-2 bg-skyblue text-white rounded-full shadow-md hover:bg-blue transition-colors duration-300 text-sm"
                    onClick={flipCard}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white shadow-2xl rounded-xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                height: "100%",
              }}
            >
              <DecorativeBackground />
              {/* Back Side */}
              <div className="p-6 h-full flex flex-col justify-center items-center text-center relative z-10">
                <div>
                  <h2 className="text-2xl font-bold text-blue-600 mb-3">
                    {awardName}
                  </h2>
                  <p className="text-sm text-gray-700 mb-2">
                    Awarded to{" "}
                    <span className="font-semibold text-blue-600">
                      {recipientName}
                    </span>{" "}
                    for outstanding achievements.
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    This prestigious award recognizes excellence in academic
                    performance, research, and leadership within the IEEE
                    community.
                  </p>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-blue-700 font-semibold">
                      {eventName}
                    </p>
                    <p className="text-sm text-blue-700 font-semibold">
                      {eventYear}
                    </p>
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-skyblue text-white rounded-full shadow-md hover:bg-blue transition-colors duration-300 text-sm"
                  onClick={flipCard}
                >
                  Back to Award
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AwardCard;