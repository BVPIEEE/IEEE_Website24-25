'use client'

import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    role: "Lead Developer",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Designer",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Developer",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Marketing",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Tester",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "Product Manager",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 7,
    name: "Team Member 7",
    role: "HR",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
    bgImage: "/placeholder.svg?height=600&width=800",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  }
]
export default function TeamShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState(null)
  
    return (
      <div className="w-full min-h-screen relative overflow-hidden bg-gray-50">
        {/* Dynamic Background Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out`}
          style={{
            backgroundImage: hoveredIndex !== null ? `url(${teamMembers[hoveredIndex].bgImage})` : '',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: hoveredIndex !== null ? 0.2 : 0
          }}
        />
  
        <div className="relative z-10 flex flex-col items-center py-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-gray-600">TEAM MEMBERS</p>
          </div>
  
          {/* Circle Container */}
          <div className="flex justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Circle or Card */}
                <div
                  className={`transform transition-all duration-500 ease-in-out ${
                    hoveredIndex === index
                      ? 'scale-100 opacity-100 z-20'
                      : 'scale-90 opacity-80 z-10'
                  }`}
                >
                  {hoveredIndex === index ? (
                    <div className="w-64 bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
                      <div className="flex gap-4 mt-4">
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            className="text-gray-600 hover:text-blue-500"
                          >
                            <FaTwitter className="h-5 w-5" />
                          </a>
                        )}
                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <FaGithub className="h-5 w-5" />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="text-gray-600 hover:text-blue-700"
                          >
                            <FaLinkedin className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300 border flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

