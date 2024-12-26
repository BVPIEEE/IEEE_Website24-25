import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommunityCard = ({
  name,
  logoSrc,
  teamPicSrc,
  description,
  quote,
  color,
  reverseLayout = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      layout
      data-aos="fade-up"
    >
      <div className={`flex flex-col md:flex-row ${reverseLayout ? "md:flex-row-reverse" : ""}`}>
        <div
          className="relative w-full md:w-1/2 h-80 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={teamPicSrc}
            alt={`${name} team`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className={`absolute inset-0 bg-black opacity-60`} />
          <div className="absolute bottom-4 left-4 flex items-center">
            <div className="bg-white p-2 border border-4 border-skyblue rounded-full">
              <img
                src={logoSrc}
                alt={`${name} logo`}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <h3 className="ml-3 text-2xl font-bold text-white">{name}</h3>
          </div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className={`absolute inset-0 ${color} flex items-center justify-center p-6`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.p
                  className="text-white text-center text-lg font-medium italic"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  "{quote}"
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="p-6 w-full md:w-1/2" data-aos="fade-up" data-aos-delay="200">{description}</div>
      </div>
    </motion.div>
  );
};

export default CommunityCard;

