import React from 'react'
import Heading from '../components/Heading';
import EventCard from '../components/EventCard';
import main from "../assets/Events/24I25/main.png";
import wiestar from "../assets/Events/24I25/wiestar.png";
import funieee from "../assets/Events/24I25/funieee.jpg";
import mod from "../assets/Events/24I25/mod.jpg";
import designverse from "../assets/Events/24I25/designverse.jpg";
import summer from "../assets/Events/24I25/summer.png";
import snapgaming from "../assets/Events/24I25/snap_gaming.png";

import algorithm from '../assets/Events/23i24/algorithm.png';
import designheist from '../assets/Events/23i24/designheist.png';
import funieee23 from '../assets/Events/23i24/funieee.png';
import learncontri from '../assets/Events/23i24/learncontri.png';
import main23 from '../assets/Events/23i24/main.png';
import many from '../assets/Events/23i24/many.png';
import robosoccer23 from '../assets/Events/23i24/robosoccer.png';
import sharktank from '../assets/Events/23i24/sharktank.png';
import techmedia from '../assets/Events/23i24/techmedia.png';
import venture from '../assets/Events/23i24/venture.png';
import wiedrive from '../assets/Events/23i24/wiedrive.png';
import wiehack5 from '../assets/Events/23i24/wiehack5.png';
import zenith from '../assets/Events/23i24/zenith.png';
import zeroworkshop23 from '../assets/Events/23i24/zeroworkshop.png';

import arduino from '../assets/Events/22I23/arduino.png';
import felicitation from '../assets/Events/22I23/felicitation.png';
import funiee22 from '../assets/Events/22I23/funiee.png';
import main22 from '../assets/Events/22I23/main.png';
import manymore from '../assets/Events/22I23/manymore.png';
import roadmap from '../assets/Events/22I23/roadmap.png';
import robosoccer from '../assets/Events/22I23/robosoccer.png';
import techathlon from '../assets/Events/22I23/techathlon.png';
import techfest from '../assets/Events/22I23/techfest.png';
import wiehack4 from '../assets/Events/22I23/wiehack.png';
import wiestar22 from '../assets/Events/22I23/wiestar.png';
import zeroworkshop from '../assets/Events/22I23/zeroworkshop.png';

const events = [
  {
    label: "2024-2025",
    color: "bg-black/40", // Soft Lavender to Muted Lilac
    image: main,
  },
  {
    label: "WIESTAR",
    content:
      "WIE STAR aimed to inspire high school girls to pursue STEM fields through engaging educational outreach. IEEE members interacted with students through fun experiments, project displays, and a lively quiz session. The event concluded with goodies, leaving a positive impression of engineering careers.",
    color: "bg-gradient-to-r from-[#bae8e8] to-[#88d4d4]", // Light Aqua Pastel to Muted Seafoam
    image: wiestar,
  },
  {
    label: "FUNIEEE",
    content:
      "IEEE BVCOE hosted a vibrant welcome event for the incoming batch of 2024-2028. The fun-filled day included classic games like musical chairs and tug of war, along with creative activities like Pictionary, talent show and paper dance. Quizzes and photo booths added to the festive atmosphere.",
    color: "bg-gradient-to-r from-[#ffe9cc] to-[#ffc7a8]", // Soft Peach Pastel to Warm Apricot
    image: funieee,
  },
  {
    label: "MIND OVER DATA",
    content:
      "MOD: Mind Over Data, presented by the IEEE Society of BVCOE during BVEST XI, combined data analytics and mental health awareness. The event featured a quiz on mental health and tech, followed by a data visualization challenge where participants created dashboards using cleaned data. It promoted technical skills and strategic thinking while raising mental health awareness.",
    color: "bg-gradient-to-r from-[#b0d9ff] to-[#8bb8f0]", // Light Blue Mist to Muted Periwinkle
    image: mod,
  },
  {
    label: "DESIGN VERSE",
    content:
      "Design Verse empowers students to explore UI/UX design by tackling real-world challenges focused on sustainability and global interconnectedness. It promotes collaboration, skill development, and design excellence, offering a platform for students to connect and showcase their creativity.",
    color: "bg-gradient-to-r from-[#e5ffcc] to-[#ccf5a8]", // Light Pastel Green to Muted Lime
    image: designverse,
  },
  {
    label: "SUMMER PROJECTS",
    content:
      "The Summer Projects event brought together all chapters to showcase innovative student projects, encouraging creativity and practical problem-solving. It provided a platform for participants to present their work, exchange ideas, and gain valuable insights into real-world applications, fostering a collaborative learning environment.",
    color: "bg-gradient-to-r from-[#ffe3e3] to-[#ffb3b3]", // Soft Blush Pink to Muted Rose
    image: summer,
  },
  // {
  //   label: "POWERBI BOOTCAMP",
  //   content: "More exciting events coming soon.",
  //   color: "bg-gradient-to-r from-[#cceeff] to-[#99d6ff]", // Light Sky Pastel to Soft Azure
  //   image: "/placeholder.svg?height=400&width=600",
  // },
  {
    label: "MANY MORE...",
    // content:
    //   "Drishti's storytelling photography event and the IEEE BVCOE Gaming Night offered creative outlets for students. Drishti allowed participants to blend images with narratives, while the Gaming Night provided a fun, competitive platform for gaming enthusiasts. Both events encouraged creativity, teamwork, and socializing beyond academics.",
    color: "bg-white/10", // Pastel Beige to Muted Sand
    image: snapgaming,
  },
];

const events23 = [
  {
    label: "2023-2024",
    color: "bg-black/40", // Soft Lavender to Muted Lilac
    image: main23,
  },
  {
    label: "WIEHACK 5.0",
    content:
      "WIEHack 5.0, a 36-hour hybrid international hackathon, brought together 1,800 participants from 31 countries. With a $502,000 prize pool, it celebrated innovation and teamwork while empowering women in STEM. The event showcased groundbreaking ideas and the spirit of collaboration.",
    color: "bg-gradient-to-r from-[#bae8e8] to-[#88d4d4]", // Light Aqua Pastel to Muted Seafoam
    image: wiehack5,
  },
  {
    label: "FUNIEEE",
    content:
      "FunIEEE welcomed the batch of 2027 with engaging games like Pictionary, musical chairs, tug of war, and paper dance. Over 150 students participated, making it a joyful and memorable event. It strengthened the sense of belonging among newcomers.",
    color: "bg-gradient-to-r from-[#ffe9cc] to-[#ffc7a8]", // Soft Peach Pastel to Warm Apricot
    image: funieee23,
  },
  {
    label: "OTH WORKSHOP",
    content:
      "On September 22, IEEE BVCOE hosted a workshop introducing freshers to its chapters, achievements, and benefits like scholarships and grants. It inspired active participation through engaging presentations. Participants left with a better understanding of IEEE's impact.",
    color: "bg-gradient-to-r from-[#b0d9ff] to-[#8bb8f0]", // Light Blue Mist to Muted Periwinkle
    image: zeroworkshop23,
  },
  {
    label: "WIE EDUCATIONAL DRIVE",
    content:
      "The WIE Educational Drive, in collaboration with Robin Hood Army, engaged underprivileged children with interactive lessons on basic topics, promoting education and holistic development. It reinforced the importance of learning through hands-on activities.",
    color: "bg-gradient-to-r from-[#e5ffcc] to-[#ccf5a8]", // Light Pastel Green to Muted Lime
    image: wiedrive,
  },
  {
    label: "VENTURE SCAPE",
    content:
      "Venture Scape, led by entrepreneur Gaurav Vashisht, inspired students with insights into entrepreneurship, creativity, and problem-solving, fostering an innovative spirit among participants. The event cultivated a culture of entrepreneurial thinking.",
    color: "bg-gradient-to-r from-[#ffe3e3] to-[#ffb3b3]", // Soft Blush Pink to Muted Rose
    image: venture,
  },
  {
    label: "TECH MEDIA FEST",
    content:
      "Tech Media Fest empowered underprivileged students with hands-on computer training and awarded top scorers with exciting prizes, fostering digital literacy and enthusiasm. It was a step towards bridging the digital divide.",
    color: "bg-gradient-to-r from-[#bae8e8] to-[#88d4d4]", // Light Sky Pastel to Soft Azure
    image: techmedia,
  },
  {
    label: "LEARN TO CONTRIBUTE",
    content:
      "Learn to Contribute introduced freshers to open source through Hacktoberfest, expert talks, and quizzes, empowering students to start meaningful contributions in open source. The event built confidence in navigating open-source platforms.",
    color: "bg-gradient-to-r from-[#ffe9cc] to-[#ffc7a8]", // Pastel Beige to Muted Sand
    image: learncontri,
  },
  {
    label: "DESIGN HEIST",
    content:
      "Design Heist '23 brought together designers to create innovative UI/UX solutions under the theme 'Leveraging Technology for a Better Future,' celebrating creativity and collaboration. It pushed participants to think outside the box.",
    color: "bg-gradient-to-r from-[#b0d9ff] to-[#8bb8f0]", // Soft Lavender to Muted Lilac
    image: designheist,
  },
  {
    label: "IEEE SHARK TANK",
    content:
      "IEEE Shark Tank invited over 200 participants to pitch creative ideas, competing for a ₹15,000 prize pool and receiving valuable feedback from an expert panel of judges. The event fostered innovation and practical thinking.",
    color: "bg-gradient-to-r from-[#e5ffcc] to-[#ccf5a8]", // Light Aqua Pastel to Muted Seafoam
    image: sharktank,
  },
  {
    label: "ROBOSOCCER",
    content:
      "RoboSoccer combined robotics and AI as teams built soccer-playing robots, showcasing technical skills and innovation in an exciting tournament setting. It inspired participants to explore robotics further.",
    color: "bg-gradient-to-r from-[#ffe3e3] to-[#ffb3b3]", // Soft Peach Pastel to Warm Apricot
    image: robosoccer23,
  },
  {
    label: "ZENITH",
    content:
      "Zenith Gaming Fest celebrated gaming culture with tournaments, cosplay, and previews, fostering community and skill among gaming enthusiasts. It brought gamers together in a vibrant and dynamic atmosphere.",
    color: "bg-gradient-to-r from-[#b0d9ff] to-[#8bb8f0]", // Soft Lavender to Muted Lilac
    image: zenith,
  },
  {
    label: "ALGORITHM ARENA",
    content:
      "Algorithm Arena tested coding and problem-solving skills through competitive rounds, preparing students for placements and offering exciting rewards. It emphasized the importance of efficiency in algorithms.",
    color: "bg-gradient-to-r from-[#e5ffcc] to-[#ccf5a8]", // Light Pastel Green to Muted Lime
    image: algorithm,
  },
  {
    label: "MANY MORE...",
    color: "bg-white/10", // Light Blue Mist to Muted Periwinkle
    image: manymore,
  },
];

const events22 = [
  {
    label: "2022-2023",
    color: "bg-black/40", // Soft Lavender to Muted Lilac
    image: main22,
  },
  {
    label: "WIEHACK 4.0",
    content:
      "WIEHACK 4.0, a 36-hour women-centric hybrid hackathon, saw over 1650 global registrations, with participants innovating and competing for a prize pool worth $50,000, promoting inclusivity and engineering excellence. It highlighted the global impact of empowering women in technology.",
    color: "bg-gradient-to-r from-[#bae8e8] to-[#88d4d4]", // Light Aqua Pastel to Muted Seafoam
    image: wiehack4,
  },
  {
    label: "WIESTAR",
    content:
      "WIESTAR, an outreach initiative, inspired high school girls to pursue STEM through interactive sessions, fun experiments, and quizzes, promoting engineering careers among students. It fostered collaboration between IEEE volunteers and local schools to spark interest in science.",
    color: "bg-gradient-to-r from-[#ffe9cc] to-[#ffc7a8]", // Soft Peach Pastel to Warm Apricot
    image: wiestar22,
  },
  {
    label: "FUNIEEE",
    content:
      "Funieee, an engaging offline event by BVPIEEE, welcomed freshers with games like Pictionary, musical chairs, tug of war, and fun activities like quizzes and photo booths. With over 150 participants, it provided an exciting and memorable college welcome.",
    color: "bg-gradient-to-r from-[#b0d9ff] to-[#8bb8f0]", // Light Blue Mist to Muted Periwinkle
    image: funiee22,
  },
  {
    label: "ROBOSOCCER",
    content:
      "Robosoccer, organized by RAS, encouraged participants to build robots capable of kicking a ball into the opponent's goalpost, fostering creativity and innovation in robotics. The event united students from various engineering branches to explore the exciting field of robotics.",
    color: "bg-gradient-to-r from-[#e5ffcc] to-[#ccf5a8]", // Light Pastel Green to Muted Lime
    image: robosoccer,
  },
  {
    label: "FELICITATION",
    content:
      "The IEEE Delhi Section's 48th Foundation Day culminated in a 15-day celebration with 35+ events, showcasing talents and fostering innovation through initiatives like WIEHACK 4.0. It reflected the commitment to advancing technology and inclusivity in engineering.",
    color: "bg-gradient-to-r from-[#ffe3e3] to-[#ffb3b3]", // Soft Blush Pink to Muted Rose
    image: felicitation,
  },
  {
    label: "TECH-A-THLON 2.0",
    content:
      "Tech-a-thlon 2.0 featured coding-based rounds like a G20 quiz, Debug-a-palooza for debugging challenges, and Code-a-thon to test coding skills while focusing on time and space complexity. It provided participants with a platform to enhance their technical expertise and competitive spirit.",
    color: "bg-gradient-to-r from-[#bae8e8] to-[#88d4d4]", // Light Sky Pastel to Soft Azure
    image: techathlon,
  },
  {
    label: "OTH WORKSHOP",
    content:
      "Held on November 17th, 2022, the 0th Workshop introduced freshers to IEEE BVCOE, its chapters, and SIGs. Led by joint secretaries Anushka Mishra and Bhavini Bisht, the session highlighted past events, future roadmaps, and membership benefits like scholarships and grants, inspiring active participation.",
    color: "bg-gradient-to-r from-[#ffe9cc] to-[#ffc7a8]", // Pastel Beige to Muted Sand
    image: zeroworkshop,
  },
  {
    label: "TECH MEDIA FEST",
    content: "Tech Media Fest, held on IEEE Day, featured events like Hack-BVICAM, poster-making, group discussions, and a CV-building competition. It fostered creativity, learning, and community engagement, offering participants valuable opportunities to showcase skills and win prizes.",
    color: "bg-gradient-to-r from-[#b0d9ff] to-[#8bb8f0]", // Soft Lavender to Muted Lilac
    image: techfest,
  },
  {
    label: "INTRO TO ARDUINO",
    content:
      "This session introduced participants to Arduino programming and hardware integration, enabling them to build basic electronics projects. The event sparked an interest in embedded systems and robotics.",
    color: "bg-gradient-to-r from-[#e5ffcc] to-[#ccf5a8]", // Light Aqua Pastel to Muted Seafoam
    image: arduino,
  },
  {
    label: "ROADMAP TO AI/ML",
    content:
      "A seminar by Mr. Harshit Gaur introduced students to AI and ML, providing a detailed roadmap to excel in the field. The session included a quiz with goodies for winners and a live demonstration of ML/AI projects, showcasing real-world applications and industry relevance.",
    color: "bg-gradient-to-r from-[#ffe3e3] to-[#ffb3b3]", // Soft Peach Pastel to Warm Apricot
    image: roadmap,
  },
  {
    label: "MANY MORE...",
    color: "bg-white/10", // Light Blue Mist to Muted Periwinkle
    image: manymore,
  },
];

const Events = () => {
  return (
    <>
    <div className="pt-16"></div>
    <Heading heading="Events" quote="IEEE BVCOE: Igniting innovation, fostering collaboration, and shaping the future of technology" />
    <div className="lg:px-6 pb-6">
      <div className='lg:p-2 lg:border lg:border-darkblue lg:rounded-lg'>
      <EventCard events={events} />
      </div>
    </div>
    
    <div className="lg:p-6">
      <div className='lg:p-2 lg:border lg:border-darkblue lg:rounded-lg'>
      <EventCard events={events23} />
      </div>
    </div>

    <div className="lg:p-6">
      <div className='lg:p-2 lg:border lg:border-darkblue lg:rounded-lg'>
      <EventCard events={events22} />
      </div>
    </div>
    </>
  )
}

export default Events