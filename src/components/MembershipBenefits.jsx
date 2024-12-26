import { FaSignInAlt, FaUsers, FaCalendarAlt, FaBookOpen, FaNewspaper } from 'react-icons/fa';
import { MdConnectWithoutContact } from 'react-icons/md';

const benefits = [
  {
    icon: <FaSignInAlt className="w-8 h-8 text-blue-500" />,
    title: "Personalized Access",
    description: "Sign in to IEEE for information on local events and activities."
  },
  {
    icon: <FaUsers className="w-8 h-8 text-green-500" />,
    title: "Society Memberships",
    description: "Access individual Society memberships and subscriptions."
  },
  {
    icon: <MdConnectWithoutContact className="w-8 h-8 text-purple-500" />,
    title: "Local Connections",
    description: "Connect with local IEEE Sections and volunteer leadership."
  },
  {
    icon: <FaCalendarAlt className="w-8 h-8 text-red-500" />,
    title: "Find Upcoming Conferences",
    description: "Find and attend upcoming conferences in your field."
  },
  {
    icon: <FaBookOpen className="w-8 h-8 text-yellow-500" />,
    title: "Individual Benefits",
    description: "Learn more about the wide range of individual benefits."
  },
  {
    icon: <FaNewspaper className="w-8 h-8 text-indigo-500" />,
    title: "Latest News",
    description: "Read the latest news from IEEE, IEEE Spectrum, IEEE Standards News, and The Institute."
  }
];

const MembershipBenefits = () => {
  return (
    <div className="p-4 md:p-10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-4" data-aos="fade-up">Why Choose Us?</h2>
        <h3 className="text-2xl font-semibold text-center text-blue mb-12" data-aos="fade-up" data-aos-delay="100">Membership Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={150 + index * 50}
            >
              <div className="p-6">
                <div className="mb-4 flex justify-center" data-aos="zoom-in" data-aos-delay={200 + index * 50}>
                  <div className="p-3 rounded-full bg-gray-100">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center" data-aos="fade-up" data-aos-delay={250 + index * 50}>{benefit.title}</h4>
                <p className="text-gray-600 text-center" data-aos="fade-up" data-aos-delay={300 + index * 50}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MembershipBenefits;