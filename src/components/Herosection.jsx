const Herosection = () => {
  return (
    <section className="px-10 font-poppins w-full pt-16 min-h-screen overflow-hidden bg-gradient-to-br from-[#000100] via-[#1a1a1a] to-[#000100]">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6 text-white">
            <h6 className="text-sm font-light tracking-wider text-blue">
              IEEE BVCOE
            </h6>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              INNOVATIVE ENGINEERING HUB
            </h1>
            <p className="max-w-md text-lg text-gray-300">
              IEEE BVCOE fosters a vibrant community for engineering
              enthusiasts, empowering them through technical workshops,
              seminars, and hands-on projects. Join us to shape the future of
              technology and unlock your potential.
            </p>
            <div className="flex gap-4">
              <a href="/about">
                <button className="rounded hover:border hover:bg-black hover:border-blue px-6 py-2 hover:text-blue transition-colors bg-blue text-white">
                  About Us
                </button>
              </a>

              <button className="rounded border border-blue px-6 py-2 text-blue transition-colors hover:bg-blue hover:text-white">
                Pratibimb 2.0
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] w-full">
              <img
                src="/placeholder.jpg"
                alt="AR Projector"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex gap-4">
              <a href="events">
                <button className="rounded-full bg-[#01b5e2] px-4 py-1 text-sm text-white z-50">
                  EVENTS
                </button>
              </a>
              <a href="achievements">
                <button className="rounded-full bg-[#01b5e2] px-4 py-1 text-sm text-white">
                  ACHIEVEMENTS
                </button>
              </a>
            </div>
            <div className="absolute left-4 top-4 text-2xl font-light text-[#01b5e2]">
              035
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-[#01b5e2] opacity-5 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 h-40 w-40 rounded-full bg-[#75d6ef] opacity-5 blur-3xl"></div> */}
    </section>
  );
};

export default Herosection;
