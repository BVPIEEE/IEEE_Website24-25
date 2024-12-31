import React, { useState, useEffect } from "react";

function EventDisplay({ image, title, centerColor, centerContent, isActive }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showCenterColor, setShowCenterColor] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowOverlay(false);
      setShowContent(false);
      setShowCenterColor(false);
      setTimeout(() => setShowCenterColor(true), 300);
      setTimeout(() => setShowOverlay(true), 200);
      setTimeout(() => setShowContent(true), 200);
    } else {
      setShowOverlay(false);
      setShowContent(false);
      setShowCenterColor(false);
    }
  }, [isActive]);

  return (
    <div className={`relative lg:rounded-l-lg w-full h-full aspect-video overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute h-full inset-0 flex">
        <div className="w-1/6 h-full flex items-center justify-center bg-black/30">
          <div
            className={`transform -rotate-90 origin-center text-white text-lg md:text-3xl font-bold tracking-wider text-center transition-opacity duration-100 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </div>
        </div>
        <div className="w-4/6 h-full flex items-center justify-center relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <img src={image} alt="Center Content" className="object-cover" />
          </div>
          <div
            className={`absolute  inset-0 flex justify-center items-center transition-transform duration-500 ease-in-out ${
              showOverlay ? `${centerColor} opacity-80 translate-y-0` : ` -translate-y-full`
            }`}
          >
            <div className={`p-4 transition-opacity duration-300 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}>
              <p className="text-xs md:text-lg font-semibold">{centerContent}</p>
            </div>
          </div>
          
        </div>
        <div className="w-1/6 flex items-center justify-center bg-black/30">
          <div
            className={` rotate-90 origin-center text-white text-lg md:text-3xl font-bold tracking-wider text-center transition-opacity duration-100 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ events }) {
  const [activeContent, setActiveContent] = React.useState(events[0]?.label || "");
  const [isAnimating, setIsAnimating] = React.useState(false);

  const activeItem = events.find((item) => item.label === activeContent);

  React.useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [activeContent]);

  if (!activeItem) return null;

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:h-72 w-full bg-[#F5F5F5]">
      <div className="lg:w-1/2 flex-1 flex flex-col justify-center relative overflow-hidden">
        <EventDisplay
          image={activeItem.image}
          title={activeItem.label}
          centerColor={activeItem.color}
          centerContent={activeItem.content}
          isActive={!isAnimating}
        />
      </div>
      {/* Sidebar */}
      <div className="flex flex-col lg:flex-row order-last lg:w-1/2 overflow-hidden lg:overflow-visible">
        {events.map((item, index) => (
          <div
            key={index}
            className={`flex-1 transform lg:rounded-r-lg flex items-center justify-center p-4 lg:p-0 text-xs md:text-sm lg:text-base tracking-widest font-medium cursor-pointer transition-all duration-300 ${
              item.color
            } ${
              activeContent === item.label
                ? "opacity-100"
                : "opacity-70 hover:opacity-100"
            }`}
            onMouseEnter={() => setActiveContent(item.label)}
            style={{
              whiteSpace: "nowrap",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            <span
              className="transform lg:-rotate-90 text-center"
              style={{
                writingMode: "horizontal-tb",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCard;

