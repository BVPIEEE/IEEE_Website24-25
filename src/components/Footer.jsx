import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id='contact' className="font-poppins text-white p-4 md:p-10">
      <div className="bg-gradient-to-r from-darkblue via-black to-darkblue z-50 border shadow-lg shadow-black/50 rounded-full py-2 md:py-4">
        <div className="flex w-full flex-col md:flex-row justify-center items-center md:gap-2">

          <div className="flex md:w-1/3 justify-center gap-4">
            <a 
              href="https://instagram.com/ieeebvcoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://facebook.com/ieeebvcoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#60A5FA] transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://linkedin.com/company/ieee-bvcoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#93C5FD] transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>

          <div className="flex md:w-1/3 justify-center items-center gap-2 md:gap-3 text-sm md:text-lg font-light">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse w-3 h-3 md:w-6 md:h-6" />
            <span>by Team IEEE BVCOE</span>
          </div>

          <div className="text-[10px] md:w-1/3 flex justify-center md:text-sm text-gray-300 font-light tracking-wider">
            ©IEEEBVCOE All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

