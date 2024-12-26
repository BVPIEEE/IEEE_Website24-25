import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { FaLightbulb, FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import Heading from '../components/Heading';

const About = () => {

  const objectiveItems = [
    { icon: <FaLightbulb />, text: "Provide a platform for knowledge sharing and skill development" },
    { icon: <FaUsers />, text: "Bridge the gap between academia and industry" },
    { icon: <FaGraduationCap />, text: "Expose students to cutting-edge technologies" },
    { icon: <FaHandshake />, text: "Foster teamwork, leadership, and management skills" }
  ];

  return (
    <>
      <div className="pt-16"></div>
      <Heading heading="About IEEE BVCOE" quote="IEEE BVCOE: Igniting innovation, fostering collaboration, and shaping the future of technology" />
      <div className="font-poppins relative min-h-screen md:px-10 px-4 overflow-hidden">
        <div className="fixed inset-0 -z-10 flex items-center justify-center">
          <motion.div 
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-30"
            animate={{ rotateY: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#01b5e2] via-[#004d7a] to-transparent animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative">
                <img
                  src={logo}
                  alt="IEEE Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#01b5e2] opacity-5 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[#75d6ef] opacity-5 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-black backdrop-blur-sm p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue">Who We Are</h2>
              <p className="text-[#e6f7fc] leading-relaxed">
                IEEE, pronounced as I-Triple-E, is the world's largest technical society with a 125-year legacy. 
                The IEEE BVCOE Student Branch, part of Bharati Vidyapeeth's College of Engineering, is dedicated to 
                fostering technological innovation and excellence for the benefit of humanity.
              </p>
            </div>
            <div className="bg-skyblue backdrop-blur-sm rounded-lg p-8 shadow-lg" data-aos="fade-left">
              <h3 className="text-xl font-semibold mb-3 text-darkblue">Quick Facts</h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>125+ years of advancing technology</li>
                <li>World's largest technical society</li>
                <li>Headquartered in New York</li>
                <li>Global community of innovators</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-black" data-aos="fade-up">Our Objectives</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {objectiveItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-skyblue backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl mb-4 text-darkblue">{item.icon}</div>
                  <p className="text-white">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center backdrop-blur-sm rounded-lg p-8 mb-16" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">What We Do</h2>
            <p className="text-darkblue leading-relaxed mb-4">
              IEEE BVCOE organizes a wide range of events and activities, including:
            </p>
            <ul className="list-disc list-inside text-darkblue space-y-2">
              <li>2-Day conferences</li>
              <li>24-hour hackathons</li>
              <li>Technical workshops</li>
              <li>Competitions</li>
              <li>Networking events</li>
            </ul>
          </div>

          <div className="text-center backdrop-blur-sm p-8 rounded-lg shadow-xl" data-aos="fade-up">
            <motion.button 
              className="text-2xl md:text-xl font-semibold mb-4 bg-blue rounded-full py-2 px-8 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.button>
            <p className="text-black leading-relaxed mb-6">
              Become a part of IEEE BVCOE and unlock a world of opportunities in technological innovation and professional growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

