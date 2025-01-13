import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

const TeamMember = ({ name, role, image, linkedinUrl, thought }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
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
      <h3 className="text-base   md:text-lg font-semibold text-center">{name}</h3>
      <p className="text-xs md:text-sm text-center">{role}</p>
    </div>
  );
};

export default TeamMember;
