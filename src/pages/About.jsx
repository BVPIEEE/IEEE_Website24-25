import logo from '../assets/logo.png';
import { FaLightbulb, FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="font-poppins relative min-h-screen pt-24 md:px-10 px-4 overflow-hidden">
      {/* Circular background with logo */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-30">
          {/* Circular gradient background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#01b5e2] via-[#004d7a] to-transparent animate-pulse" />
          {/* Logo container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 relative">
              <img
                src={logo}
                alt="IEEE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* Additional decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#01b5e2] opacity-5 blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[#75d6ef] opacity-5 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-4xl text-darkblue md:text-5xl font-bold text-center mb-12 text-darkblue">
          About IEEE BVCOE
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-black backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue">Who We Are</h2>
            <p className="text-[#e6f7fc] leading-relaxed">
              IEEE, pronounced as I-Triple-E, is the world's largest technical society with a 125-year legacy. 
              The IEEE BVCOE Student Branch, part of Bharati Vidyapeeth's College of Engineering, is dedicated to 
              fostering technological innovation and excellence for the benefit of humanity.
            </p>
          </div>
          <div className="bg-skyblue backdrop-blur-sm rounded-lg p-8 shadow-lg">
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-black">Our Objectives</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaLightbulb />, text: "Provide a platform for knowledge sharing and skill development" },
              { icon: <FaUsers />, text: "Bridge the gap between academia and industry" },
              { icon: <FaGraduationCap />, text: "Expose students to cutting-edge technologies" },
              { icon: <FaHandshake />, text: "Foster teamwork, leadership, and management skills" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-skyblue backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4 text-darkblue">{item.icon}</div>
                <p className="text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center backdrop-blur-sm rounded-lg p-8 mb-16">
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

        <div className="text-center backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <button className="text-2xl md:text-xl font-semibold mb-4 bg-blue rounded-full py-2 px-8 text-white">Join Us</button>
          <p className="text-black leading-relaxed mb-6">
            Become a part of IEEE BVCOE and unlock a world of opportunities in technological innovation and professional growth.
          </p>
          {/* When form opens */}
          {/* <button className="bg-[#01b5e2] hover:bg-[#75d6ef] text-[#00304d] font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Become a Member
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;