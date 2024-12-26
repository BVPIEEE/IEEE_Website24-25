import { motion } from 'framer-motion';
import '../index.css';
const Heading = ({heading, quote}) => {
  return (
    <div className="relative py-12 overflow-hidden">
      <h1 
        className="text-4xl md:text-6xl text-darkblue font-bold text-center mb-4 "
        data-aos="fade-up"
      >
        {heading}
      </h1>
      <div
        className="w-24 h-1 bg-gradient-to-r from-blue to-darkblue mx-auto rounded-full"
        data-aos="zoom-in"
        data-aos-delay="300"
      />
      <p
        className="mt-4 text-lg text-black text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {quote}
      </p>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-darkblue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-8 left-20 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-8 right-20 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
    </div>
  );
};

export default Heading;