import { Canvas, useFrame } from "@react-three/fiber"; // Core React Three Fiber components
import { OrbitControls, useGLTF } from "@react-three/drei"; // Helper components for Three.js
import { Suspense, useState, useRef } from "react"; // Added useRef for animation
import { useSpring, a } from "@react-spring/three"; // For 3D animations
import { PiLinktreeLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

// 3D Model Component
const Model = () => {
  // State for hover effect on 3D model
  const [hovered, setHovered] = useState(false);
  // Load 3D model from public directory
  const { scene } = useGLTF("/WEBS2.glb");
  // Reference to track time for floating animation
  const floatRef = useRef(0);

  // Create continuous rotation and floating animation
  useFrame((state) => {
    floatRef.current += 0.01; // Increment time value for smooth animation

    // Rotate model around Y axis
    scene.rotation.y += 0.005;

    // Add floating motion using sine wave
    scene.position.y = Math.sin(floatRef.current) * 0.2; // Adjust 0.2 to control float height
  });

  // Define spring animation for smooth scaling
  const scale = useSpring({
    scale: hovered ? 3.1 : 2.9, // Scale up on hover
    config: { mass: 1, tension: 200, friction: 20 }, // Animation physics properties
  });

  // Render 3D model with animations and interactions
  return (
    <a.primitive
      object={scene} // The loaded 3D model
      scale={scale.scale} // Animated scale value
      onPointerOver={() => setHovered(true)} // Mouse hover handlers
      onPointerOut={() => setHovered(false)}
    />
  );
};

const Herosection = () => {
  return (
    <section className="font-poppins px-4 md:px-10 font-poppins w-full pt-16 h-screen overflow-hidden bg-gradient-to-br from-[#000100] via-[#1a1a1a] to-[#000100]">
      <div className="container py-8 md:py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div
            className="space-y-4 md:space-y-6 text-white"
            data-aos="fade-right"
          >
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
              <Link to="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded hover:border hover:bg-black hover:border-blue px-6 py-2 hover:text-blue transition-colors bg-blue text-white">
                  About Us
                </button>
              </Link>
              {/* <Link href="/pratibimb" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded border border-blue px-6 py-2 text-blue transition-colors hover:bg-blue hover:text-white">
                Pratibimb 2.0 
              </button>
              </Link> */}
              <Link to="https://linktr.ee/ieeebvcoe" className="flex items-center justify-center">
              <span>Linktree</span>
                <PiLinktreeLogoBold className="z-10 w-8 h-8"/>
              </Link>
            </div>
          </div>

          <div className="relative" >
            <div
              className="relative h-[250px] md:h-[350px]"
            >
              {/* Three.js Canvas Setup */}
              <Canvas
                shadows // Enable shadow rendering
                className="!absolute top-0 left-0 w-full h-full"
                camera={{ position: [0, 0, 10], fov: 50 }} // Camera position and field of view
              >
                {/* Scene Lighting Setup */}
                <ambientLight intensity={0.3} /> // Soft overall lighting
                <directionalLight
                  position={[5, 10, 5]} // Main light source position
                  intensity={3} // Brightness
                  castShadow // Enable shadow casting
                />
                <pointLight
                  position={[0, 5, 10]} // Secondary light position
                  intensity={3} // Brightness
                />
                <spotLight
                  position={[-5, 10, 5]} // Accent light position
                  angle={0} // Beam width
                  penumbra={1} // Edge softness
                  intensity={2} // Brightness
                  castShadow // Enable shadow casting
                />
                {/* Async Loading Wrapper for 3D Model */}
                <Suspense fallback={null}>
                  <Model /> // Our 3D model component
                </Suspense>
                {/* User Controls for 3D Scene */}
                <OrbitControls enableZoom={false} /> // Allow rotation but disable zoom
              </Canvas>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Link to="/events" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-[#01b5e2] px-4 py-1 text-sm text-white z-50">
                  EVENTS
                </button>
              </Link>
              <Link to="/achievements" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-[#01b5e2] px-4 py-1 text-sm text-white">
                  ACHIEVEMENTS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
