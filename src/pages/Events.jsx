import React from 'react'
import Heading from '../components/Heading';
import EventCard from '../components/EventCard';
import wiestar from "../assets/Events/24I25/wiestar.png";
import funieee from "../assets/Events/24I25/funieee.jpg";
import mod from "../assets/Events/24I25/mod.jpg";
import designverse from "../assets/Events/24I25/designverse.jpg";

const events = [
  {
    label: "2024",
    content: "2024-25",
    color: "bg-gradient-to-r from-[#d4c3fc] to-[#b39ddb]", // Soft Lavender to Muted Lilac
    image: wiestar,
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
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    label: "POWERBI BOOTCAMP",
    content: "More exciting events coming soon.",
    color: "bg-gradient-to-r from-[#cceeff] to-[#99d6ff]", // Light Sky Pastel to Soft Azure
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    label: "MANY MORE...",
    content:
      "Drishti's storytelling photography event and the IEEE BVCOE Gaming Night offered creative outlets for students. Drishti allowed participants to blend images with narratives, while the Gaming Night provided a fun, competitive platform for gaming enthusiasts. Both events encouraged creativity, teamwork, and socializing beyond academics.",
    color: "bg-gradient-to-r from-[#f5f5dc] to-[#e0d4b7]", // Pastel Beige to Muted Sand
    image: "/placeholder.svg?height=400&width=600",
  },
];


const Events = () => {
  return (
    <>
    <div className="pt-16"></div>
    <Heading heading="Events" quote="IEEE BVCOE: Igniting innovation, fostering collaboration, and shaping the future of technology" />
    <EventCard events={events} />
    </>
  )
}

export default Events