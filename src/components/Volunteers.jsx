import React from "react";
import volunteer1 from "../assets/team/VolVrinda Garg.jpg";
import volunteer2 from "../assets/team/Vol Ansh Jain.jpeg";
import volunteer3 from "../assets/team/Vol Anvie.png";
import volunteer4 from "../assets/team/Vol Avya Giri.jpg";
import volunteer5 from "../assets/team/Vol Bhavya Gupta.jpg";
import volunteer6 from "../assets/team/Vol Bhoomika Sohandwani.jpeg";
import volunteer7 from "../assets/team/Vol Cheshta Khurana.jpg";
import volunteer8 from "../assets/team/Vol DEVANSH KUMAR SINGH.jpg";
import volunteer9 from "../assets/team/Vol Dhruvi Srivastava.jpg";
import volunteer11 from "../assets/team/Vol Gauri Aggarwal.jpg";
import volunteer12 from "../assets/team/Vol Gayatri Gahtori.jpg";
import volunteer13 from "../assets/team/Vol Ishmeet Kaur.jpeg";
import volunteer14 from "../assets/team/Vol lavanya Goyal.jpg";
import volunteer15 from "../assets/team/Vol Manishka Gupta.jpeg";
import volunteer16 from "../assets/team/Vol Pakhi Kumar.jpg";
import volunteer17 from "../assets/team/Vol Priyanshi Singh.jpg";
import volunteer18 from "../assets/team/Vol Rakshit Negi.jpg";
import volunteer19 from "../assets/team/Vol-Riya-Garg.jpeg";
import volunteer20 from "../assets/team/Vol Shambhav.jpeg";
import volunteer21 from "../assets/team/Vol SHEETAL GARG.jpg";
import volunteer22 from "../assets/team/Vol shourya singhal.jpg";
import volunteer23 from "../assets/team/Vol Simran Kaushal.jpg";
import volunteer24 from "../assets/team/Vol Srishti Mittal.jpg";
import volunteer25 from "../assets/team/VolAbhipsita.jpg";
import volunteer26 from "../assets/team/VolAdwaith P Nambiar.jpg";
import volunteer28 from "../assets/team/VolAnushka Saxena.jpg";
import volunteer29 from "../assets/team/VolAradhay Saxena.jpg";
import volunteer30 from "../assets/team/VolAryan vats mishra.jpg";
import volunteer31 from "../assets/team/VolAyush Bindal.jpg";
import volunteer32 from "../assets/team/VolDEVANSH KUMAR SINGH.jpg";
import volunteer33 from "../assets/team/VolDiva Goel.png";
import volunteer34 from "../assets/team/VolDrishti Juneja.jpg";
import volunteer35 from "../assets/team/VolFaizaan.jpeg";
import volunteer36 from "../assets/team/VolGauransh Mahawar.jpg";
import volunteer37 from "../assets/team/VolHarshtej Singh Makkar.jpg";
import volunteer38 from "../assets/team/VolJaivardhan Singh.jpg";
import volunteer39 from "../assets/team/VolJaskeerat Singh.jpg";
import volunteer40 from "../assets/team/VolKaashvi.jpg";
import volunteer41 from "../assets/team/VolNiharika Arora.jpeg";
import volunteer42 from "../assets/team/VolNIKHIL TYAGI.jpg";
import volunteer43 from "../assets/team/VolSaksham Deva.jpg";
import volunteer44 from "../assets/team/VolSeema Garg.jpg";
import volunteer45 from "../assets/team/VolSHEETAL GARG.jpg";
import volunteer46 from "../assets/team/VolTanish Dhingra.jpg";
import volunteer47 from "../assets/team/VolTanmay Choudhary.jpg";
import volunteer48 from "../assets/team/VolVanshika Gupta.jpg";
import volunteer49 from "../assets/team/Volyashovardhan vats.jpg";
import volunteer50 from "../assets/team/VolYubraj Bhardwaj.png";

const TeamMember = ({name, role, image}) => {
  return (
    <div className="font-poppins relative h-36 md:h-48 group" data-aos="fade-up">
      <div className="relative border rounded-full border-darkblue w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col  justify-center items-center">
      <h3 className="text-base md:text-lg font-semibold text-center">{name}</h3>
      <p className="text-xs md:text-sm text-center">{role}</p>
      </div>
     
    </div>
  );
};

const volunteers = [
  { image: volunteer1, name: "Vrinda Garg", role: "Volunteer" },
  { image: volunteer2, name: "Ansh Jain", role: "Volunteer" },
  { image: volunteer3, name: "Anvi Tyagi", role: "Volunteer" },
  { image: volunteer4, name: "Avya Giri", role: "Volunteer" },
  { image: volunteer5, name: "Bhavya Gupta", role: "Volunteer" },
  { image: volunteer6, name: "Bhoomika Sohandwani", role: "Volunteer" },
  { image: volunteer7, name: "Cheshta Khurana", role: "Volunteer" },
  { image: volunteer8, name: "Devansh Kumar Singh", role: "Volunteer" },
  { image: volunteer9, name: "Dhruvi Srivastava", role: "Volunteer" },
  { image: volunteer11, name: "Gauri Aggarwal", role: "Volunteer" },
  { image: volunteer12, name: "Gayatri Gahotri", role: "Volunteer" },
  { image: volunteer13, name: "Ishmeet Kaur", role: "Volunteer" },
  { image: volunteer14, name: "Lavanya Goyal", role: "Volunteer" },
  { image: volunteer15, name: "Manishka Gupta", role: "Volunteer" },
  { image: volunteer16, name: "Pakhi Kumar", role: "Volunteer" },
  { image: volunteer17, name: "Priyanshi Singh", role: "Volunteer" },
  { image: volunteer18, name: "Rakshit Negi", role: "Volunteer" },
  { image: volunteer19, name: "Riya Garg", role: "Volunteer" },
  { image: volunteer20, name: "Shambhav Gupta", role: "Volunteer" },
  { image: volunteer21, name: "Aarushi Garg", role: "Volunteer" },
  { image: volunteer22, name: "Shourya Singhal", role: "Volunteer" },
  { image: volunteer23, name: "Simran Kaushal", role: "Volunteer" },
  { image: volunteer24, name: "Srishti Mittal", role: "Volunteer" },
  { image: volunteer25, name: "Abhipsita Sarkar", role: "Volunteer" },
  { image: volunteer26, name: "Adwaith P Nambiar", role: "Volunteer" },
  { image: volunteer28, name: "Anushka Saxena", role: "Volunteer" },
  { image: volunteer29, name: "Aradhay Saxena", role: "Volunteer" },
  { image: volunteer30, name: "Aryan Vats", role: "Volunteer" },
  { image: volunteer31, name: "Ayush Bindal", role: "Volunteer" },
  { image: volunteer32, name: "Devansh Kumar Singh", role: "Volunteer" },
  { image: volunteer33, name: "Diva Goel", role: "Volunteer" },
  { image: volunteer34, name: "Daisy", role: "Volunteer" },
  { image: volunteer35, name: "Faizaan", role: "Volunteer" },
  { image: volunteer36, name: "Gauransh Mahawar", role: "Volunteer" },
  { image: volunteer37, name: "Harshtej Singh Makkar", role: "Volunteer" },
  { image: volunteer38, name: "Jaivardhan Singh", role: "Volunteer" },
  { image: volunteer39, name: "Jaskeerat Singh", role: "Volunteer" },
  { image: volunteer40, name: "Kaashvi", role: "Volunteer" },
  { image: volunteer41, name: "Niharika Arora", role: "Volunteer" },
  { image: volunteer42, name: "Nikhil Tyagi", role: "Volunteer" },
  { image: volunteer43, name: "Saksham Deva", role: "Volunteer" },
  { image: volunteer44, name: "Seema Garg", role: "Volunteer" },
  { image: volunteer45, name: "Sheetal Garg", role: "Volunteer" },
  { image: volunteer46, name: "Tanish Dhingra", role: "Volunteer" },
  { image: volunteer47, name: "Tanmay Choudhary", role: "Volunteer" },
  { image: volunteer48, name: "Vanshika Gupta", role: "Volunteer" },
  { image: volunteer49, name: "Yashovardhan Vats", role: "Volunteer" },
  { image: volunteer50, name: "Yubraj Bhardwaj", role: "Volunteer" },
];

const Volunteers = ({ chaptername }) => {
  return (
    <div className="font-poppins  border-t-2 border-white py-10">
      <h2
        className="text-4xl font-bold text-center text-darkblue mb-8"
        data-aos="fade-up"
      >
        {chaptername}
      </h2>
      <div className="flex justify-center items-center">
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-10 justify-center items-center`}>
          {volunteers.map((volunteer, index) => (
            <div key={index}>
              <TeamMember
                name={volunteer.name}
                role={volunteer.role}
                image={volunteer.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
