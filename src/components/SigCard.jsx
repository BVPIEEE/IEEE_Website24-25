import { useState } from "react";
import { motion } from "framer-motion";

const SigCard = ({
  name,
  logoSrc,
  teamPicSrc,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-sky-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      layout
      data-aos="fade-up"
    >
      <div className={`flex flex-col`}>
        <div
          className="relative w-full h-40 overflow-hidden"
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
        </div>
        <div className="text-sm p-6 w-full" data-aos="fade-up" data-aos-delay="100">{description}</div>
      </div>
    </motion.div>
  );
};

export default SigCard;

