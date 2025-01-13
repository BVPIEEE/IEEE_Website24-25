import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import monicamam from "../assets/team/MonicaMam.png"
import chair from "../assets/team/ChairChahat.jpg"
import vicechair from "../assets/team/ViceChairManasvi.jpeg"

const coordinator = {
  image: monicamam,
  linkedinUrl: "https://linkedin.com/in/johndoe",
};

const chairperson = {
  name: "Chahat Nihalani",
  role: "Chairperson",
  image: chair,
  linkedinUrl: "https://linkedin.com/in/janesmith",
  thought:
    "Leadership is about making others better as a result of your presence.",
};

// const chairperson2 = {
//   name: "Rishit Singh",
//   role: "Chairperson",
//   image: "/placeholder.svg?height=128&width=128",
//   linkedinUrl: "https://linkedin.com/in/janesmith",
//   thought:
//     "Leadership is about making others better as a result of your presence.",
// };

const viceChairperson = {
  name: "Manasavi Chauhan",
  role: "Vice Chairperson",
  image: vicechair,
  linkedinUrl: "https://linkedin.com/in/mikejohnson",
  thought: "Innovation distinguishes between a leader and a follower.",
};

function Team({ name, role, image, linkedinUrl }) {
  return (
    <div
      className="relative w-full md:w-auto flex flex-row md:flex-col justify-center items-center group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative border border-2 p-1 border-blue rounded-full w-36 h-36 transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:border-skyblue">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <a
          href={linkedinUrl}
          className="absolute bottom-2 right-0 p-1 bg-blue rounded-full text-white transition-all duration-300 ease-in-out hover:bg-skyblue hover:scale-110"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <FaLinkedinIn />
        </a>
      </div>
      
      <div className="px-2">
        <h3 className="text-base md:text-lg font-semibold text-center ">
          {name}
        </h3>
        <p className="text-xs md:text-sm text-center">
          {role}
        </p>
      </div>
    </div>
  );
}

const TopLeaders = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="font-poppins h-auto mb-4 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div
          className="flex bg-darkblue rounded-xl p-2 md:w-2/5 flex-col items-center transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue/20"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="flex bg-darkblue rounded-xl w-full p-2 border border-white flex-col items-center transition-all duration-300 ease-in-out hover:border-skyblue"
            data-aos="fade-up"
          >
            <Team {...coordinator} />
            <p className="text-lg text-center font-bold text-white transition-colors duration-300 ease-in-out hover:text-skyblue">
              Dr. Monica Bhutani
            </p>
            <p className="text-sm text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:text-blue">
              BRANCH COUNSELLOR, IEEE BVCOE
            </p>
            <p className="mt-2 text-sky-200 text-sm text-center transition-colors duration-300 ease-in-out hover:text-white">
              ASSOCIATE PROFESSOR, ECE BVCOE <br />
              SECRETARY, IEEE STUDENT BRANCH DS COUNCILLOR'S FORUM
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row justify-center md:w-3/5 items-center gap-12"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Team {...chairperson} />
          {/* <Team {...chairperson2} /> */}
          <Team {...viceChairperson} />
        </div>
      </div>
    </div>
  );
};

export default TopLeaders;
