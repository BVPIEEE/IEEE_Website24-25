import { motion } from "framer-motion";
import CommunityCard from "../components/CommunityCard";
import CS from "../assets/Communities/cs.jpg";
import RAS from "../assets/Communities/ras.jpg";
import IAS from "../assets/Communities/ias.jpg";
import WIE from "../assets/Communities/wie.jpg";
import HKN from "../assets/Communities/hkn.jpg";
import LogoCS from "../assets/Communities/cs_logo.jpeg";
import LogoRAS from "../assets/Communities/ras_logo.jpeg";
import LogoIAS from "../assets/Communities/ias_logo.jpeg";
import LogoWIE from "../assets/Communities/wie_logo.png";
import LogoHKN from "../assets/Communities/hkn_logo.png";
import Heading from "../components/Heading";
import LogoCodeX from "../assets/Communities/codex.png";
import LogoECell from "../assets/Communities/ecell.png";
import LogoBQC from "../assets/Communities/bqc.png";
import LogoGamma from "../assets/Communities/gamma.png";
import LogoDrishti from "../assets/Communities/drishti.png";
import SigCard from "../components/SigCard";
import CodeX from "../assets/Communities/bgcodex.png";
import Gamma from "../assets/Communities/bggamma.png";
import Bqc from "../assets/Communities/bgbqc.png";
import Ecell from "../assets/Communities/bgecell.png";
import Drishti from "../assets/Communities/bgdrishti.png"

const subchapters = [
  {
    name: "Computer Society",
    logoSrc: LogoCS,
    teamPicSrc: CS,
    description:
      "The Computer Society (CS) of IEEE BVCOE is a professional entity focused on advancing computer science and technology while nurturing its members. CS drives innovation in areas like cloud storage and AI, fostering a research-driven environment for budding engineers. It organizes initiatives such as Design Heist, Build Your Own Portfolio, a web development workshop empowering students to showcase their skills, and Learn to Contribute, simplifying GitHub for open-source collaboration. Events like Hacktoberfest Repository and Newark Hackquest enhance coding and problem-solving skills. CS stands as a beacon of knowledge and professional growth, shaping students for a future of boundless opportunities.",
    quote:
      "At the forefront of tech's evolution, the Computer Society simplifies the complex, propelling us into a digital future with every keystroke.",
    color: "bg-orange-700/80",
    reverseLayout: false, 
  },
  {
    name: "Robotics & Automation Society",
    logoSrc: LogoRAS,
    teamPicSrc: RAS,
    description:
      "The Robotics and Automation Society (RAS) at IEEE BVCOE, founded in 2014 by Shivam Bharadwaj, is a thriving subchapter dedicated to advancing robotics and automation. Bridging theory and practice, RAS provides hands-on experiences and exhilarating competitions that fuel students' curiosity and technical skills. Events like Robo Soccer, Robotic Mazes, Arcades, and Robo Rugby push the boundaries of robotics and innovation, while OpenCV workshops delve into computer vision and gaming. Over seven years, RAS has inspired students, showcasing their talents on national and international stages, with notable achievements in eYantra and Celestini competitions. A catalyst for excellence, RAS nurtures aspirations into accomplishments, embodying IEEE BVCOE’s vision of innovation and growth in robotics.",
    quote:
      "In the realm where innovation intertwines with machinery, the Robotics and Automation Society choreographs a future where automation dances to the rhythm of human potential.",
    color: "bg-purple-900/80",
    reverseLayout: true,  
  },
  {
    name: "Industrial Applications Society",
    logoSrc: LogoIAS,
    teamPicSrc: IAS,
    description:
      "The Industrial Applications Society (IAS) at IEEE BVCOE advances electrical and electronic engineering in industrial settings, bridging academia and industry. IAS fosters innovation, knowledge exchange, and career growth through industrial visits to renowned companies, offering real-world insights, and project collaborations with industry partners to solve practical challenges. It organizes technical contests, hackathons, and research initiatives to promote problem-solving and innovation. IAS also supports career development with tools, trend insights, skill-building, and networking opportunities. Joining IAS equips members with the skills and connections to excel in the ever-evolving industrial sector.",
    quote:
      "In the heart of industrial evolution, the IEEE Industrial Applications Society engineers innovation, forging a path to a brighter, electrified future.",
    color: "bg-green-900/80",
    reverseLayout: false,  
  },
  {
    name: "Women in Engineering",
    logoSrc: LogoWIE,
    teamPicSrc: WIE,
    description:
      "IEEE Women in Engineering (WIE) is a global network promoting women engineers and inspiring girls to pursue careers in STEM. The IEEE BVCOE WIE affinity group, established on June 21, 2007, provides a platform for young women to thrive in engineering and science. It envisions a community of diverse talents innovating for humanity's benefit. The chapter recognizes outstanding achievements of women through IEEE Awards, promotes member grade advancements to Senior Member and Fellow, and fosters programs to support women in engineering education and careers. Through initiatives like the STAR Program, it mentors young women and advocates for leadership roles and career advancement in engineering.",
    quote:
      "In the heart of industrial evolution, the IEEE Industrial Applications Society engineers innovation, forging a path to a brighter, electrified future.",
    color: "bg-pink-900/80",
    reverseLayout: true,
  },
  {
    name: "Eta Kappa Nu",
    logoSrc: LogoHKN,
    teamPicSrc: HKN,
    description:
      "IEEE BVCOE - Eta Kappa Nu (IEEE-HKN) is an honor society recognizing excellence in IEEE-designated fields, including Computer Science and Information Technology. It shapes future leaders through service programs, training, and fostering interdisciplinary leadership. Members engage in activities that promote engineering and community responsibility, encouraging both personal and academic growth. The society publishes Pratibimb and Cognizance, platforms for research, enhancing technical communication skills. IEEE-HKN BVCOE celebrates academic excellence and motivates members to strive for greatness, preparing them to make a positive impact on society and shaping the future of technology.",
    quote:
      "IEEE BVCOE-Eta Kappa Nu (HKN): Nurturing Excellence in a World of Possibilities. Encouraging, Recognizing, and Shaping Future Innovators in Engineering and Beyond.",
    color: "bg-black/80",
    reverseLayout: false,
  },
];

const sigs = [
  {
    name: "Code X",
    logoSrc: LogoCodeX,
    teamPicSrc: CodeX,
    description:
      "Code X, under IEEE BVCOE, supports beginners in programming by offering projects, opportunities, and expert mentorship, fostering growth and collaboration.",
  },
  {
    name: "E-Cell",
    logoSrc: LogoECell,
    teamPicSrc: Ecell,
    description:
      "E-Cell helps and promotes entrepreneurship within students of our college. It will be conducting competitions in the fields of stock markets, crypto world, entrepreneurship and more.",
  },
  {
    name: "BQC",
    logoSrc: LogoBQC,
    teamPicSrc: Bqc,
    description: "BQC’s goal is to establish a quizzing community in the college and provide a platform for anyone interested in Quizzes and Crosswords. Quizzes and Trivia are something that intrigues everyone.",
  },
  {
    name: "GAMMA",
    logoSrc: LogoGamma,
    teamPicSrc: Gamma,
    description: "Gaming, Multi Media and Animation yearns to make a community where the members can show off their skills, learn different styles and ways to game or make creative content.",
  },
  {
    name: "Drishti",
    logoSrc: LogoDrishti,
    teamPicSrc: Drishti,
    description:
      "Drishti aims to build a community to provide learning opportunities to all. Digital Arts includes a lot of things like photography, video editing, animations etc.",
  },
];

const Communities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="pt-16"></div>
      <Heading heading="Communities" quote="Explore our vibrant IEEE communities in the world of technology and innovation" />
      <div className="font-poppins min-h-screen md:px-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-center text-blue mb-10" data-aos="fade-up">
              Subchapters
            </h2>
            <motion.div
              className="grid grid-cols-1 gap-10"
              variants={containerVariants}
            >
              {subchapters.map((subchapter, index) => (
                <motion.div key={`subchapter-${index}`} variants={itemVariants} data-aos="fade-up" data-aos-delay={index * 100}>
                  <CommunityCard {...subchapter} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-center text-blue mb-10" data-aos="fade-up">
              Student Interest Groups (SIGs)
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={containerVariants}
            >
              {sigs.map((sig, index) => (
                <motion.div key={`sig-${index}`} variants={itemVariants} data-aos="fade-up" data-aos-delay={index * 100}>
                  <SigCard {...sig} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Communities;
