"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sections = [
    {
      top: "0vh",
      content: (
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl selection:bg-white selection:text-black"
          >
            Praneet G
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center justify-center gap-4 text-gray-400 tracking-[0.3em] uppercase text-xs md:text-sm font-medium"
          >
            <span className="w-8 h-[1px] bg-gray-600" />
            Creative Developer
            <span className="w-8 h-[1px] bg-gray-600" />
          </motion.div>
        </div>
      ),
    },
    {
      top: "150vh",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="max-w-5xl text-center px-8 relative"
        >
          <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full opacity-20" />
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] text-white tracking-tight relative z-10">
            &quot;I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">intelligent digital systems</span> combining backend engineering, data analytics and machine learning.&quot;
          </h2>
        </motion.div>
      ),
    },
    {
      top: "300vh",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="max-w-4xl text-left px-12 border-l-2 border-white/10 ml-8"
        >
          <motion.h2 
            className="text-5xl md:text-8xl font-black tracking-tight text-white leading-none mb-8"
          >
            BRIDGING DATA,<br/>ENGINEERING<br/>
            <span className="text-white/20">& SYSTEMS.</span>
          </motion.h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-md">
            Architecting scalable solutions where mathematics meets production-ready code.
          </p>
        </motion.div>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="absolute w-full h-screen flex items-center justify-center pointer-events-none"
          style={{ top: section.top }}
        >
          {section.content}
        </div>
      ))}
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </div>
  );
}
