import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import gensec1 from "../assets/team/CoreTishya.jpg"
import gensec2 from "../assets/team/CoreNishchay.jpg"
import jointsec1 from "../assets/team/CoreDhananjay.png"
import jointsec2 from "../assets/team/CoreDivye.jpg"
import treasurer1 from "../assets/team/CoreOorgita.jpg"
import treasurer2 from "../assets/team/CoreAditya.jpeg"
import webmaster from "../assets/team/CoreRitu.jpg"

const Core = () => {
  const profiles = [
    {
      image: gensec1,
      name: "Tishya Nangia",
      role: "General Secretary",
      offset: "lg:translate-y-4",
      linkedin: "https://www.linkedin.com/in/tishya-nangia/"
    },
    {
      image: gensec2,
      name: "Nishchay Gupta",
      role: "General Secretary",
      offset: "lg:-translate-y-4",
      linkedin: "https://www.linkedin.com/in/nishchay-gupta-417619283/"
    },
    {
      image: jointsec1,
      name: "Dhananjay",
      role: "Joint Secretary",
      offset: "lg:translate-y-6",
      linkedin: "https://www.linkedin.com/in/dhananjay6561/"
    },
    {
      image: jointsec2,
      name: "Divye Chandna",
      role: "Joint Secretary",
      offset: "lg:-translate-y-4",
      linkedin: "https://www.linkedin.com/in/divyechandna/"
    },
    {
      image: treasurer1,
      name: "Oorgita Sur",
      role: "Treasurer",
      offset: "lg:translate-y-6",
      linkedin: "https://www.linkedin.com/in/oorgita-sur-258b36253/"
    },
    {
      image: treasurer2,
      name: "Aditya Popli",
      role: "Treasurer",
      offset: "lg:-translate-y-4",
      linkedin: "https://www.linkedin.com/in/aditya-popli-70559b28a/"
    },
    {
      image: webmaster,
      name: "Ritu Gupta",
      role: "Webmaster",
      offset: "lg:translate-y-4",
      linkedin: "https://www.linkedin.com/in/ritu-gupta23/"
    },
  ];

  return (
    <div className="font-poppins bg-gradient-to-br from-black to-darkblue mt-12 py-10">
      <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">
        Core Team
      </h2>
      <div className="container mx-auto px-16 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8 " data-aos="fade-up">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl ${profile.offset}`}
            >
              <div className="w-full h-56 lg:h-56 relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-md font-semibold">{profile.name}</h3>
                <button className="text-sm  font-medium text-skyblue mb-1">{profile.role}</button>
                
                <a
                  href={profile.linkedin}
                  className="absolute -bottom-1 -right-1 p-2 bg-blue rounded-l-full text-white hover:bg-skyblue transition-colors duration-300 z-10"
                  aria-label={`${profile.name}'s LinkedIn profile`}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Core;

