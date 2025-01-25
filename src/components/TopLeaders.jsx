import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import monicamam from "../assets/team/MonicaMam.png"
import chair from "../assets/team/ChairChahat.jpg"
import vicechair from "../assets/team/ViceChairManasvi.jpeg"

const coordinator = {
  image: monicamam,
  linkedinUrl: "https://www.linkedin.com/in/dr-monica-bhutani-0955a5158/",
};

const chairperson = {
  name: "Chahat Nihalani",
  role: "Chairperson",
  image: chair,
  linkedinUrl: "https://www.linkedin.com/in/chahatnihalani",
  thought:
    "Leadership is about making others better as a result of your presence.",
};

const viceChairperson = {
  name: "Manasvi Chauhan",
  role: "Vice Chairperson",
  image: vicechair,
  linkedinUrl: "https://www.linkedin.com/in/manasvi-chauhan",
  thought: "Innovation distinguishes between a leader and a follower.",
};

function Team({ name, role, image, linkedinUrl }) {
  return (
    <div
      className="relative w-48 h-56 group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 bg-black/50 transform rotate-45 rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl">
        <div className="absolute inset-0 transform -rotate-45 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end items-center p-5 text-white transform rotate-45 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="transform -rotate-45 text-center">
          <h3 className="text-lg font-bold mb-1">{name}</h3>
          <p className="text-md text-skyblue mb-3">{role}</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-blue text-white rounded-full hover:bg-skyblue transition-colors duration-300"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
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
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div
          className="flex bg-darkblue rounded-xl p-2 md:w-2/5 flex-col items-center transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue/20"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="flex rounded-xl w-full p-2 border border-white flex-col items-center transition-all duration-300 ease-in-out hover:border-skyblue"
            data-aos="fade-up"
          >
            <div className="relative border border-2 p-1 border-blue rounded-full w-36 h-36 transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:border-skyblue">
              <img
                src={coordinator.image}
                alt="Dr. Monica Bhutani"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <a
                href={coordinator.linkedinUrl}
                className="absolute bottom-2 right-0 p-1 bg-blue rounded-full text-white transition-all duration-300 ease-in-out hover:bg-skyblue hover:scale-110"
                aria-label="Dr. Monica Bhutani's LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-lg text-center font-bold text-white transition-colors duration-300 ease-in-out hover:text-skyblue mt-4">
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
          <Team {...viceChairperson} />
        </div>
      </div>
    </div>
  );
};

export default TopLeaders;

