import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const TeamMember = ({name, role, image, linkedinUrl}) => {

  return (
    <div className="font-poppins relative h-36 md:h-48 group" data-aos="fade-up">
      <div className="relative border rounded-full border-white w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
        <a
          href={linkedinUrl}
          className="absolute bottom-2 right-0 p-1 bg-blue rounded-full text-white"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="flex flex-col  justify-center items-center">
      <h3 className="text-base md:text-lg font-semibold text-center">{name}</h3>
      <p className="text-xs md:text-sm text-center">{role}</p>
      </div>
     
    </div>
  );
};

export default TeamMember;
