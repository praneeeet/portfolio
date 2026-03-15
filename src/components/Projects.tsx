"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, ExternalLink, GraduationCap, Code2, Cpu, Globe } from "lucide-react";

export default function Projects() {
  const skills = {
    Languages: { 
      icon: <Code2 className="w-4 h-4" />, 
      items: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "Cypher"] 
    },
    Frameworks: { 
      icon: <Cpu className="w-4 h-4" />, 
      items: ["FastAPI", "NestJS", "React", "Node.js"] 
    },
    Tools: { 
      icon: <Globe className="w-4 h-4" />, 
      items: ["Git", "VS Code", "Postman", "PgAdmin", "MySQL Workbench", "Excel"] 
    },
    OS: { 
      icon: <Globe className="w-4 h-4" />, 
      items: ["Ubuntu", "Windows", "MacOS"] 
    },
  };

  const projects = [
    {
      title: "HIVE by PSGCT",
      subtitle: "Club Registration Platform",
      description: "Designed and developed a full-stack web application to streamline club discovery and registration within a university. Implemented role-based access control for students and administrators with real-time registration tracking using Nestjs and Postgresql in the backend.",
      tech: ["NestJS", "PostgreSQL", "Full-stack"],
      github: "https://github.com/praneeeet",
      accent: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Payroll Management System",
      subtitle: "Academic Project",
      description: "Built a web-based Payroll Management System using FastAPI to manage employee records, payroll calculations, and authentication. Developed RESTful APIs for CRUD operations, salary generation, and tax deductions. Integrated HTML, CSS, and JavaScript with a structured database and API validation for secure employee access.",
      tech: ["FastAPI", "Python", "SQL"],
      github: "https://github.com/praneeeet",
      accent: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "ION AI",
      subtitle: "Personal Health Agent",
      description: "AI-powered health assistant that analyzes nutrition, workouts, sleep and wearable data to generate personalized insights using LLM based agents.",
      tech: ["Node.js", "Supabase", "PostgreSQL", "Gemini Vision API", "LLM agents"],
      github: "https://github.com/praneeeet/ionworking",
      accent: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Regulations Portal",
      subtitle: "Workflow orchestration system",
      description: "Workflow orchestration system for managing semester regulations using a 3 level approval pipeline with role based access control.",
      tech: ["NestJS", "PostgreSQL", "React"],
      github: "https://github.com/praneeeet/RegulationsPSG",
      accent: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "RetailPulse",
      subtitle: "Retail analytics dashboard",
      description: "Retail analytics dashboard transforming CSV sales data into insights with ETL pipelines and ML based revenue forecasting.",
      tech: ["Python", "SQLite", "Prophet", "XGBoost"],
      github: "https://github.com/praneeeet/RetailPulse-",
      accent: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Predictive Maintenance",
      subtitle: "Aircraft Engine ML System",
      description: "ML system predicting aircraft engine failures using NASA CMAPSS dataset with CatBoost and ADWIN drift detection.",
      tech: ["Python", "CatBoost", "Machine Learning"],
      github: "https://github.com/praneeeet/PredictiveMaintanence",
      accent: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Electricity Forecasting",
      subtitle: "Time series analytics",
      description: "Time series analytics system forecasting electricity demand in Tamil Nadu using SARIMAX models.",
      tech: ["Python", "Pandas", "SARIMAX"],
      github: "https://github.com/praneeeet/Electricity-Demand-Analysis-and-Forecasting",
      accent: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] py-32 px-6 md:px-20 w-full relative z-10">
      {/* Bio / Bento Header */}
      <div className="max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-[2.5rem] p-12 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/50 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for projects
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Praneet G</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                A passionate software systems student focused on building robust backends and intelligent agents. Currently pursuing Master of Science at <span className="text-white font-medium">PSG College of Technology</span>.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/5 pt-10 relative z-10">
               <div>
                 <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Education</p>
                 <div className="flex items-center gap-2 text-white/80">
                   <GraduationCap className="w-4 h-4" />
                   <span className="text-sm">M.Sc Software Systems</span>
                 </div>
               </div>
               <div>
                 <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Performance</p>
                 <span className="text-sm font-semibold text-white/90">8.15 CGPA</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-[2.5rem] p-10 flex flex-col justify-between"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-8">Technical Stack</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, { icon, items }]) => (
                <div key={category} className="group/item">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/40 group-hover/item:text-white transition-colors">{icon}</span>
                    <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider">{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(i => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-white/40 border border-white/5">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">Crafting Solutions</h2>
            <p className="text-gray-500 text-lg">A collection of systems ranging from ML forecasting to fullstack agents.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold hidden md:block"
          >
            Work Archive / 2024-2026
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.05, type: "spring", bounce: 0.4 }}
              className="glass rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-500 border-white/[0.08]"
            >
              {/* Background Accent Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                     <Code2 className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                   </div>
                   <a 
                     href={project.github} 
                     target="_blank" 
                     className="p-3 rounded-full bg-white/5 hover:bg-white text-white/50 hover:text-black transition-all duration-300"
                   >
                     <Github className="w-5 h-5" />
                   </a>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-glow transition-all whitespace-pre-wrap">{project.title}</h3>
                  <p className="text-sm font-medium text-white/30 uppercase tracking-widest">{project.subtitle}</p>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-auto group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-8">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md text-white/40 border border-white/5">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[9px] font-bold text-white/20 pt-1">+{project.tech.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Connect */}
      <footer className="max-w-7xl mx-auto mt-60">
        <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-40 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -ml-40 -mb-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">Let&apos;s talk.</h2>
              <p className="text-gray-400 text-lg font-light">Open to collaborations and interesting engineering problems.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:23pw20@psgtech.ac.in" className="group flex items-center gap-4">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/30">Email Me</p>
                   <p className="text-lg text-white font-medium">23pw20@psgtech.ac.in</p>
                </div>
              </a>
              <a href="https://github.com/praneeeet" target="_blank" className="group flex items-center gap-4">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <Phone className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/30">Call Me</p>
                   <p className="text-lg text-white font-medium">+91 7845463540</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
             <p>© 2026 Praneet G</p>
             <p>Next.js 14 • Framer Motion • WebP Sequence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
