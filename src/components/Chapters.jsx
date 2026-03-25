import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import TeamMember from "./TeamMember";

const Chapters = ({ chaptername, profiles, execoms, grid }) => {
  return (
    <div className="font-poppins bg-gradient-to-br from-black to-darkblue border-t-2 border-white py-10">
      <h2
        className="text-4xl font-bold text-center text-white mb-12"
        data-aos="fade-up"
      >
        {chaptername}
      </h2>
      <div className="container flex justify-center mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 mb-8 " data-aos="fade-up">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl ${profile.offset}`}
            >
              <div className="w-48 h-56 lg:h-56 relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-md font-semibold">{profile.name}</h3>
                <button className="text-sm  font-medium text-skyblue mb-1">
                  {profile.role}
                </button>

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
      <div className="flex justify-center items-center">
      <div className={`grid ${grid} gap-6 my-10 justify-center items-center`} >
        {execoms.map((execom, index) => (
          <div
            key={index}
          >
            <TeamMember
              name={execom.name}
              role={execom.role}
              image={execom.image}
              linkedinUrl={execom.linkedin}
            />
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
};

export default Chapters;
