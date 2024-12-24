const Herosection = () => {
  return (
    <section className="font-poppins px-4 md:px-10 font-poppins w-full pt-16 min-h-screen overflow-hidden bg-gradient-to-br from-[#000100] via-[#1a1a1a] to-[#000100]">
      <div className="container py-8 md:py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4 md:space-y-6 text-white">
            <h6 className="text-sm font-light text-center md:text-left tracking-wider text-blue">
              IEEE BVCOE
            </h6>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center md:text-left leading-tight">
              INNOVATIVE ENGINEERING HUB
            </h1>
            <p className="max-w-md mx-auto md:mx-0 text-base md:text-lg text-center md:text-left text-gray-300">
              IEEE BVCOE fosters a vibrant community for engineering
              enthusiasts, empowering them through technical workshops,
              seminars, and hands-on projects. Join us to shape the future of
              technology and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <a href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded hover:border hover:bg-black hover:border-blue px-6 py-2 hover:text-blue transition-colors bg-blue text-white">
                  About Us
                </button>
              </a>
              <button className="w-full sm:w-auto rounded border border-blue px-6 py-2 text-blue transition-colors hover:bg-blue hover:text-white">
                Pratibimb 2.0
              </button>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <img
                src="/placeholder.jpg"
                alt="AR Projector"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a href="events" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-[#01b5e2] px-4 py-1 text-sm text-white z-50">
                  EVENTS
                </button>
              </a>
              <a href="achievements" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-[#01b5e2] px-4 py-1 text-sm text-white">
                  ACHIEVEMENTS
                </button>
              </a>
            </div>
            <div className="absolute left-4 top-4 text-xl md:text-2xl font-light text-[#01b5e2]">
              035
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

