"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GridDistortion from "./GridDistortion";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerImageSource = isMobile
    ? "/images/hero-section/hero-final.jpg"  // <-- IMPORTANT: Replace with your actual mobile image file name
    : "/images/hero-section/hero-final.jpg"; // <-- IMPORTANT: Replace with your actual desktop image file name

  return (
    <section style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Background Image Container with Grid Distortion */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}>
        <GridDistortion
          imageSrc={bannerImageSource}
          grid={45}
          mouse={0.19}
          strength={0.15}
          relaxation={0.9}
        />
        {/* Dark overlay for text readability */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0)"
        }} />
      </div>

      <div className="container hero-content-container" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        paddingTop: "20vh",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ maxWidth: "1200px" }}
        >
          <motion.h1
            className="hero-title"
            style={{
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              color: "white"
            }}
          >
            Where Cultures Convert. Brands Win.
          </motion.h1>

          <p className="hero-description" style={{
            fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
            fontWeight: 400,
            opacity: 0.8,
            marginBottom: "3rem",
            maxWidth: "600px",
            color: "white"
          }}>
            The multicultural marketing agency built for brands ready to lead in the world's most diverse markets.
          </p>
<motion.button
  whileHover="hover"
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PUl1axcbE4O_8tOgSeLP6OGYBJrBAem_WWsrJq9u6MNjgySisCJdUmz43NwVkuGppFuHrstYd", "_blank", "noopener,noreferrer")}
  style={{
    padding: "clamp(0.5rem, 2vw, .6rem) clamp(1rem, 4vw, .8rem)",
    background: "transparent",
    color: "white",
    border: "1px solid rgba(255, 255, 255)",
    borderRadius: "50px",
    fontSize: "clamp(0.875rem, 2vw, 1rem)",
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "clamp(1rem, 2vw, 1.5rem)",
    width: "auto",
    minWidth: "fit-content",
    position: "relative",
    overflow: "hidden"
  }}
>
  <span>Let's Talk</span>
  <motion.span 
    variants={{ hover: { x: 3 } }}
    style={{
      background: "white",
      color: "black",
      borderRadius: "50%",
      width: "clamp(28px, 5vw, 36px)",
      height: "clamp(28px, 5vw, 36px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }}
  >
    <ArrowRight size={18} style={{ width: "clamp(14px, 3vw, 18px)", height: "clamp(14px, 3vw, 18px)" }} />
  </motion.span>
</motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content-container {
            padding-bottom: 5vh !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hero-title {
            font-size: 2.8rem !important;
            line-height: 1.15 !important;
            margin-bottom: 1rem !important;
          }
          .hero-description {
            // font-size: rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
