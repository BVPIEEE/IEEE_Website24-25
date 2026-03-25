import React from "react";
import Heading from "../components/Heading";
import Core from "../components/Core";
import TopLeaders from "../components/TopLeaders";
//Heads
import Chapters from "../components/Chapters";
import CsChair1 from "../assets/team/CsAbhinav.jpg";
import CsChair2 from "../assets/team/CsPiyushPatel.jpg";
import CsViceChair from "../assets/team/CsMadhavSachar.jpg";
import RasChair from "../assets/team/Ras Nitish.jpeg";
import RasViceChair1 from "../assets/team/RasSiddhantPatnaik.jpg";
import RasViceChair2 from "../assets/team/RasKartikDutt.jpg";
import IasChair from "../assets/team/IasKushalGoyal.jpeg";
import IasViceChair1 from "../assets/team/IasNiharikaKashyap.jpg";
import IasViceChair2 from "../assets/team/IasAnshdeep.jpeg";
import WieChair from "../assets/team/WiePriyanshiGupta.jpg";
import WieViceChair1 from "../assets/team/WieKirthika.jpg";
import WieViceChair2 from "../assets/team/WieArtiJoshi.jpg";
import HknChair1 from "../assets/team/HknPurva.png";
import HknChair2 from "../assets/team/HknKartish.jpg";
import HknViceChair from "../assets/team/HknMaitri.jpg";

//Execoms
import CsExecom1 from "../assets/team/ExeMrityunjay Kotwal.webp";
import CsExecom2 from "../assets/team/ExeAnshu.jpg";
import CsExecom3 from "../assets/team/ExeAryanMatta.jpeg";
import CsExecom4 from "../assets/team/ExeAyushSharma.jpg";
import CsExecom5 from "../assets/team/ExeRijul.jpg";
import CsExecom6 from "../assets/team/ExeAkshatKansal.jpeg";

import RasExecom1 from "../assets/team/ExeAgamRampal.jpg";
import RasExecom2 from "../assets/team/ExeKamal.jpg";
import RasExecom3 from "../assets/team/ExeAryan Singh.jpg";
import RasExecom4 from "../assets/team/ExeVivek.jpeg";
import RasExecom5 from "../assets/team/ExePrachiVerma.jpg";
import RasExecom6 from "../assets/team/ExeMehak.jpg";
import RasExecom7 from "../assets/team/ExeKuldeepSingh.jpg";

import IasExecom1 from "../assets/team/ExeAyushSharma2.jpg";
import IasExecom2 from "../assets/team/ExeYash Yadav.jpg";
import IasExecom3 from "../assets/team/ExeLakshayBhola.jpg";
import IasExecom4 from "../assets/team/ExeRish.jpg";
import IasExecom5 from "../assets/team/ExeAaditya.jpg";
import IasExecom6 from "../assets/team/ExeJai.jpg";
import IasExecom7 from "../assets/team/Exevinay.jpeg";

import WieExecom1 from "../assets/team/ExeHarshitaBhasin.png";
import WieExecom2 from "../assets/team/ExeKhushiTiwari.jpg";
import WieExecom3 from "../assets/team/ExeAnshikaJha.jpg";
import WieExecom4 from "../assets/team/ExeShristi.jpg";
import WieExecom5 from "../assets/team/ExeShreshthi Gusain.jpg";

import HknExecom1 from "../assets/team/ExeSrishti Thakur.jpg";
import HknExecom2 from "../assets/team/ExeAbhishekKumar.jpeg";
import HknExecom3 from "../assets/team/ExeAryan Singh.jpg";
import HknExecom4 from "../assets/team/ExeDhruv.jpeg";
import HknExecom5 from "../assets/team/ExeAakansha.jpg";
import HknExecom6 from "../assets/team/ExeMehak.jpg";
import HknExecom7 from "../assets/team/ExeUdbhavMathur.jpg";

import AuxStreaming1 from "../assets/team/ExeKrishGoel.jpeg";
import AuxStreaming2 from "../assets/team/ExeBhoumik.jpg";

import bqc1 from "../assets/team/ExeHrishabh Kr Singh.jpg";
import bqc2 from "../assets/team/ExeAnuragDubey.png";
import AuxiliaryPosts from "../components/AuxiliaryPosts";
import Sig from "../components/Sig";
import Volunteers from "../components/Volunteers";

const csHeads = [
  {
    image: CsChair1,
    name: "Abhinav Kumar Singh",
    role: "Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/abhinavkumarsingh1405",
  },
  {
    image: CsChair2,
    name: "Piyush Patel",
    role: "Chairperson",
    offset: "lg:-translate-y-4",
    linkedin: "https://www.linkedin.com/in/piyush-patel-679702263/",
  },
  {
    image: CsViceChair,
    name: "Madhav Sachar",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/madhav-sachar-0b6166176/",
  },
];

const rasHeads = [
  {
    image: RasViceChair1,
    name: "Siddhant Patnaik",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/siddhant-patnaik-93500b248",
  },
  {
    image: RasChair,
    name: "Nitish Abrol",
    role: "Chairperson",
    offset: "lg:-translate-y-4",
    linkedin: "#",
  },
  {
    image: RasViceChair2,
    name: "Kartik Dhyani",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/kartik-dhyani-453867222",
  },
];

const iasHeads = [
  {
    image: IasViceChair1,
    name: "Niharika Kashyap",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/niharika-kashyap-1b2428284/",
  },
  {
    image: IasChair,
    name: "Kushal Goyal",
    role: "Chairperson",
    offset: "lg:-translate-y-4",
    linkedin: "#",
  },
  {
    image: IasViceChair2,
    name: "Anshdeep Singh",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/anshdeep-singh-a01649231/",
  },
];

const wieHeads = [
  {
    image: WieViceChair1,
    name: "Kirthika",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/kirthika-sharma-027285285/"
  },
  {
    image: WieChair,
    name: "Priyanshi Gupta",
    role: "Chairperson",
    offset: "lg:-translate-y-4",
    linkedin: "https://www.linkedin.com/in/priyanshiguptaa",
  },
  {
    image: WieViceChair2,
    name: "Arti Joshi",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/arti-joshi-12289325a",
  },
];

const hknHeads = [
  {
    image: HknChair1,
    name: "Purva",
    role: "Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/purva-bansal-4b1639259/",
  },
  {
    image: HknChair2,
    name: "Kartish Bhadauria",
    role: "Chairperson",
    offset: "lg:-translate-y-4",
    linkedin: "https://www.linkedin.com/in/kartish-bhadauria-393b85256/",
  },
  {
    image: HknViceChair,
    name: "Maitri",
    role: "Vice Chairperson",
    offset: "lg:translate-y-6",
    linkedin: "https://www.linkedin.com/in/maitri-65b510257/",
  },
];

const csExecoms = [
  {
    image: CsExecom1,
    name: "Mrityunjay Kotwal",
    role: "Executive Publicity",
    linkedin: "#",
  },
  {
    image: CsExecom2,
    name: "Anshu Rani",
    role: "Executive Research and Development",
    linkedin: "https://www.linkedin.com/in/anshu-rani-45b9862b8/",
  },
  {
    image: CsExecom3,
    name: "Aryan Matta",
    role: "Executive Sponsorship",
    linkedin: "https://www.linkedin.com/in/aryan-matta-b0ba56249/",
  },
  {
    image: CsExecom4,
    name: "Ayush Sharma",
    role: "Executive Logistics",
    linkedin: "https://www.linkedin.com/in/ayush-sharma-4b3b84313/",
  },
  {
    image: CsExecom5,
    name: "Rijul Gulati",
    role: "Executive Content and Documentation",
    linkedin: "https://www.linkedin.com/in/rijul-gulati-6581152aa/",
  },
  {
    image: CsExecom6,
    name: "Akshat Kansal",
    role: "Executive Design and Creativity",
    linkedin: "http://linkedin.com/in/akshat-kansal-3188262b0",
  },
];

const rasExecoms = [
  {
    image: RasExecom1,
    name: "Agam Rampal",
    role: "Executive Publicity",
    linkedin: "https://www.linkedin.com/in/agam-rampal-0aa427262/",
  },
  {
    image: RasExecom2,
    name: "Kamal Singh Mehra",
    role: "Executive Research and Development",
    linkedin: "#",
  },
  {
    image: RasExecom3,
    name: "Aryan Singh",
    role: "Executive Sponsorship",
    linkedin: "https://www.linkedin.com/in/aryan-singh-32675928b",
  },
  {
    image: RasExecom4,
    name: "Vivek Yashwant Suryavanshi",
    role: "Executive Logistics",
    linkedin: "#",
  },
  {
    image: RasExecom5,
    name: "Prachi Kumari",
    role: "Executive Content and Documentation",
    linkedin: "https://www.linkedin.com/in/prachi-verma-032309211",
  },
  {
    image: RasExecom6,
    name: "Mehak Goyal",
    role: "Executive Design and Creativity",
    linkedin: "#",
  },
  {
    image: RasExecom7,
    name: "Kuldeep Singh",
    role: "Chapter Representatives",
    linkedin: "https://www.linkedin.com/in/kuldeep-singh-2b4b3930b"
  },
];

const iasExecoms = [
  {
    image: IasExecom1,
    name: "Ayush Sharma",
    role: "Executive Publicity",
    linkedin: "#",
  },
  {
    image: IasExecom2,
    name: "Yash Yadav",
    role: "Executive Research and Development",
    linkedin: "https://www.linkedin.com/in/yash-yadav-147678293",
  },
  {
    image: IasExecom3,
    name: "Lakshay Bhola",
    role: "Executive Sponsorship",
    linkedin: "#",
  },
  {
    image: IasExecom4,
    name: "Rishabh Goyal",
    role: "Executive Logistics",
    linkedin: "http://www.linkedin.com/in/rishabh-goyal-2ab5402ab",
  },
  {
    image: IasExecom5,
    name: "Aaditya Gautam",
    role: "Executive Content and Documentation",
    linkedin: "https://www.linkedin.com/in/aaditya-gautam-902785165/",
  },
  {
    image: IasExecom6,
    name: "Jai Jaiswal",
    role: "Executive Design and Creativity",
    linkedin: "https://www.linkedin.com/in/jai-jaiswal-6bba02259/",
  },
  {
    image: IasExecom7,
    name: "Vinay Arora",
    role: "Chapter Representatives",
    linkedin: "https://www.linkedin.com/in/vinay-arora16/"
  },
];

const wieExecoms = [
  {
    image: WieExecom1,
    name: "Harshita Bhasin",
    role: "Executive Publicity",
    linkedin: "https://www.linkedin.com/in/harshitabhasin123",
  },
  {
    image: WieExecom1,
    name: "Harshita Bhasin",
    role: "Executive RnD and STAR Coordinator",
    linkedin: "https://www.linkedin.com/in/harshitabhasin123",
  },
  {
    image: WieExecom2,
    name: "Khushi Tiwari",
    role: "Executive Logistics",
    linkedin: "https://www.linkedin.com/in/khushi-tiwari-1b4b50256/",
  },
  {
    image: WieExecom3,
    name: "Anshika Jha",
    role: "Executive Content and Documentation",
    linkedin: "http://www.linkedin.com/in/anshika-jha-a167aa303",
  },
  {
    image: WieExecom4,
    name: "Shristi Ojha ",
    role: "Executive Design and Creativity",
    linkedin: "https://www.linkedin.com/in/shristi-ojha-967749281/",
  },
  {
    image: WieExecom5,
    name: "Shreshthi Gusain",
    role: "Chapter Representatives",
    linkedin: "#"
  },
];

const hknExecoms = [
  {
    image: HknExecom1,
    name: "Srishti",
    role: "Executive Publicity",
    linkedin: "https://www.linkedin.com/in/srishti-thakur-2571bb311",
  },
  {
    image: HknExecom2,
    name: "Abhishek Kumar",
    role: "Executive Research and Development",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-244222299/",
  },
  {
    image: HknExecom3,
    name: "Aryan Singh",
    role: "Executive Sponsorship",
    linkedin: "https://www.linkedin.com/in/aryan-singh-32675928b/",
  },
  {
    image: HknExecom4,
    name: "Dhruv Agarwal",
    role: "Executive Logistics",
    linkedin: "https://www.linkedin.com/in/dhruv-agarwal-773b32287/",
  },
  {
    image: HknExecom5,
    name: "Aakansha Basera",
    role: "Executive Content and Documentation",
    linkedin: "#",
  },
  {
    image: HknExecom6,
    name: "Mehak Goyal",
    role: "Executive Design and Creativity",
    linkedin: "#",
  },
  {
    image: HknExecom7,
    name: "Udbhav Mathur",
    role: "Chapter Representatives",
    linkedin: "https://www.linkedin.com/in/udbhav-mathur-247622297/"
  },
];

const Heads = [];

const auxiliary = [
  {
    image: CsExecom6,
    name: "Akshat Kansal",
    role: "Head Design and Creativity",
    linkedin: "http://linkedin.com/in/akshat-kansal-3188262b0",
  },
  {
    image: WieExecom2,
    name: "Khushi Tiwari",
    role: "Head Social Media",
    linkedin: "https://www.linkedin.com/in/khushi-tiwari-1b4b50256/",
  },
  {
    image: AuxStreaming1,
    name: "Krish Goyal",
    role: "Head Streaming and Video editing",
    linkedin: "https://www.linkedin.com/in/khushi-tiwari-1b4b50256/",
  },
  {
    image: AuxStreaming2,
    name: "Bhoumik Mittal",
    role: "Head Streaming and Video editing",
    linkedin: "https://www.linkedin.com/in/khushi-tiwari-1b4b50256/",
  },
  {
    image: IasExecom7,
    name: "Vinay Arora",
    role: "Head Publicity and Outreach",
    linkedin: "https://www.linkedin.com/in/vinay-arora16/"
  },
  {
    image: RasExecom4,
    name: "Vivek Suryavanshi",
    role: "Head Publicity and Outreach",
    linkedin: "#",
  },
  
  {
    image: HknExecom7,
    name: "Udbhav Mathur",
    role: "Head Content and Documentation",
    linkedin: "https://www.linkedin.com/in/udbhav-mathur-247622297/"
  },
  {
    image: CsExecom2,
    name: "Anshu Rani",
    role: "Head Web Developer",
    linkedin: "https://www.linkedin.com/in/anshu-rani-45b9862b8/",
  },
];

const sigs = [
  {
    image: WieExecom4,
    name: "Shristi Ojha ",
    role: "Drishti",
    linkedin: "https://www.linkedin.com/in/shristi-ojha-967749281/",
  },
  {
    image: RasExecom1,
    name: "Agam Rampal",
    role: "Code-X",
    linkedin: "https://www.linkedin.com/in/agam-rampal-0aa427262/",
  },
  {
    image: CsExecom4,
    name: "Ayush Sharma",
    role: "GAMMA",
    linkedin: "https://www.linkedin.com/in/ayush-sharma-4b3b84313/",
  },
  {
    image: CsExecom5,
    name: "Rijul Gulati",
    role: "GAMMA",
    linkedin: "https://www.linkedin.com/in/rijul-gulati-6581152aa/",
  },
  {
    image: IasExecom1,
    name: "Ayush Sharma",
    role: "E-Cell",
    linkedin: "#",
  },
  {
    image: bqc1,
    name: "Hrishabh Kr Singh",
    role: "BQC",
    linkedin: "#",
  },
  {
    image: bqc2,
    name: "Anurag Dubey",
    role: "BQC",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <>
      <div className="pt-16"></div>
      <Heading
        heading="Meet the Team"
        quote="IEEE BVCOE: Igniting innovation, fostering collaboration, and shaping the future of technology"
      />
      <TopLeaders />
      <Core />
      <Chapters
        chaptername="Computer Society"
        profiles={csHeads}
        execoms={csExecoms}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      />
      <Chapters
        chaptername="Robotics & Automation Society"
        profiles={rasHeads}
        execoms={rasExecoms}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      />
      <Chapters
        chaptername="Industrial Applications Society"
        profiles={iasHeads}
        execoms={iasExecoms}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      />
      <Chapters
        chaptername="Women in Engineering"
        profiles={wieHeads}
        execoms={wieExecoms}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      />
      <Chapters
        chaptername="Eta Kappa Nu"
        profiles={hknHeads}
        execoms={hknExecoms}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      />
      <Sig
        chaptername="Student Interest Groups"
        profiles={Heads}
        execoms={sigs}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      />
      <AuxiliaryPosts
        chaptername="Auxiliary Team Posts"
        execoms={auxiliary}
        grid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      />  
      <Volunteers 
        chaptername="Volunteers"
      />    
    </>
  );
};

export default Team;
