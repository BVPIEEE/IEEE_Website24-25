import { FaLayerGroup } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { GrRestroomWomen } from "react-icons/gr";

const cards = [
  {
    title: "Chapters",
    description:
      "The building blocks of IEEE BVCOE are its chapters. We have Computer Society(CS), Robotics and Automation Society(RAS), Industrial Applications Society(IAS), Eta Kappa Nu(HKN)",
    icon: <FaLayerGroup />,
  },
  {
    title: "Student interest Groups (SIGs)",
    description:
      "SIGs are created for the special interests of the students, they are independent to think and explore possibilities.",
    icon: <MdGroups />,
  },
  {
    title: "Women in Engineering (WIE)",
    description:
      "Women in Engineering (WIE - Affinity Group) is a professional organization dedicated to promoting women engineers and scientists.",
    icon: <GrRestroomWomen />,
  },
];

const HomeCard = () => {
  return (
    <div className="font-poppins grid lg:grid-cols-3 gap-4 pt-10 px-4 md:p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-3xl overflow-hidden backdrop-blur-sm bg-gradient-to-b from-sky-400/90 to-sky-600/90 text-white shadow-xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-500"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="p-4 border-b border-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center text-2xl rounded-full overflow-hidden bg-black transition-all duration-300 group-hover:text-blue group-hover:bg-white">
                {card.icon}
              </div>
              <div>
                <h3 className="uppercase text-black font-semibold">
                  {card.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-start gap-2">
              <p className="text-sm leading-relaxed">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCard;