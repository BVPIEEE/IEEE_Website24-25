import react from 'react'
import volunteer1 from "../assets/team/Vol Ananya Srivastava.JPG";
import volunteer2 from "../assets/team/Vol Ananyaa.jpg";
import volunteer3 from "../assets/team/Vol Arshiya Garg.jpg";
import volunteer4 from "../assets/team/Vol Aparna Gupta.jpg";
import volunteer5 from "../assets/team/Vol Atulyaa Singh.jpg";
import volunteer6 from "../assets/team/Vol Avani Sharma.jpg";
import volunteer7 from "../assets/team/Vol Bhavya Goel.JPG";
import volunteer8 from "../assets/team/Vol Bhoomi gupta.jpg";
import volunteer9 from "../assets/team/Vol Deepanshu pandey.jpg";
import volunteer11 from "../assets/team/Vol Gauri Aggarwal.jpg";
import volunteer12 from "../assets/team/Vol Ishaan Thakur.jpg";
import volunteer13 from "../assets/team/Vol Keshav Gupta.jpg";
import volunteer14 from "../assets/team/Vol Mayank Joshi.JPG";
import volunteer15 from "../assets/team/Vol Md Shahid Afridi.jpg";
import volunteer16 from "../assets/team/Vol Mohak Gupta.JPG";
import volunteer17 from "../assets/team/Vol Pavni Gupta.JPG";
import volunteer18 from "../assets/team/Vol RACHIT CHAUHAN.JPG";
import volunteer19 from "../assets/team/Vol Riddhi Dubey.JPG";
import volunteer20 from "../assets/team/Vol Shifali Gulati.JPG";
import volunteer21 from "../assets/team/Vol Shubham Kumar.png";
import volunteer22 from "../assets/team/Vol Suraj Bariwal.JPG";
import volunteer23 from "../assets/team/Vol Tejasvita.JPG";
import volunteer24 from "../assets/team/Vol Tushar_Kanti.png";
import volunteer25 from "../assets/team/Vol Vaanya Gaur.jpg";

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
  { image: volunteer1, name: "Ananya Srivastava", role: "Volunteer" },
  { image: volunteer2, name: "Ananyaa", role: "Volunteer" },
  { image: volunteer3, name: "Arshiya Garg", role: "Volunteer" },
  { image: volunteer4, name: "Aparna Gupta", role: "Volunteer" },
  { image: volunteer5, name: "Atulyaa Singh", role: "Volunteer" },
  { image: volunteer6, name: "Avani Sharma", role: "Volunteer" },
  { image: volunteer7, name: "Bhavya Goel", role: "Volunteer" },
  { image: volunteer8, name: "Bhoomi gupta", role: "Volunteer" },
  { image: volunteer9, name: "Deepanshu Pandey", role: "Volunteer" },
  { image: volunteer11, name: "Gauri Aggarwal", role: "Volunteer" },
  { image: volunteer12, name: "Ishaan Thakur", role: "Volunteer" },
  { image: volunteer13, name: "Keshav Gupta", role: "Volunteer" },
  { image: volunteer14, name: "Mayank Joshi", role: "Volunteer" },
  { image: volunteer15, name: "Md Shahid Afridi", role: "Volunteer" },
  { image: volunteer16, name: "Mohak Gupta", role: "Volunteer" },
  { image: volunteer17, name: "Pavni Gupta", role: "Volunteer" },
  { image: volunteer18, name: "Rachit Chauhan", role: "Volunteer" },
  { image: volunteer19, name: "Riddhi Dubey", role: "Volunteer" },
  { image: volunteer20, name: "Shifali Gulati", role: "Volunteer" },
  { image: volunteer21, name: "Shubham Kumar", role: "Volunteer" },
  { image: volunteer22, name: "Suraj Bariwal", role: "Volunteer" },
  { image: volunteer23, name: "Tejasvita", role: "Volunteer" },
  { image: volunteer24, name: "Tushar Kanti", role: "Volunteer" },
  { image: volunteer25, name: "Vaanya Gaur", role: "Volunteer" },
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
