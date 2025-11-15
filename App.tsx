import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Code, Cog, Car, Battery, Languages, Users, Award } from './components/Icons';
import type { TimelineItem, Project, SkillCategory } from './types';

const Header: React.FC = () => (
  <header className="py-16 px-4 text-center">
    <div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-300 tracking-tight">Hadil El Mossati</h1>
      <p className="mt-4 text-xl md:text-2xl text-white font-medium">
        Mechatronics Engineering Student
      </p>
      <p className="mt-4 max-w-2xl mx-auto text-slate-300">
        Seeking a final year internship in embedded systems development & automotive engineering. Passionate about leveraging technology to solve complex problems and drive innovation.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-300">
        <a href="mailto:hadil.elmossati@etu.uae.ac.ma" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
          <Mail className="w-5 h-5" />
          <span>hadil.elmossati@etu.uae.ac.ma</span>
        </a>
        <span className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span>+212 6 24 05 37 63</span>
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <span>Tétouan, Morocco</span>
        </span>
         <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </header>
);

const Section: React.FC<{ title: string; children: React.ReactNode; id: string }> = ({ title, children, id }) => (
  <section id={id} className="py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12 tracking-widest uppercase font-mono">
      {title}
    </h2>
    {children}
  </section>
);


const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
  <div className="relative">
    <div className="absolute top-0 left-4 md:left-1/2 -ml-px w-0.5 h-full bg-slate-700"></div>
    {items.map((item, index) => (
      <div key={index} className="relative mb-12 flex items-start md:items-center w-full">
        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'} ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
           <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-sm bg-cyan-400 ring-8 ring-slate-900 z-10 rotate-45" style={index % 2 === 0 ? { right: '-8px' } : { left: '-8px' }}></div>
           <div className="block md:hidden absolute top-1 w-4 h-4 rounded-sm bg-cyan-400 ring-8 ring-slate-900 z-10 rotate-45" style={{ left: '8px' }}></div>
        </div>
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} pl-12 md:pl-0`}>
          <div className="backdrop-blur-sm bg-slate-800/80 p-6 rounded-lg shadow-xl border border-slate-700 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">{item.date}</span>
               {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
            <p className="text-cyan-400 font-semibold">{item.subtitle}</p>
            <p className="text-sm text-slate-500 mb-4">{item.location}</p>
            <ul className="mt-3 text-slate-300 space-y-2 list-disc list-inside">
              {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
            {item.highlight && (
              <p className="mt-4 p-3 bg-cyan-900/50 border border-cyan-700 rounded-md text-cyan-300 font-semibold text-center font-mono">
                {item.highlight}
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="backdrop-blur-sm bg-slate-800/80 p-6 rounded-lg shadow-xl border border-slate-700 hover:shadow-cyan-500/20 hover:border-cyan-700 transition-all duration-300 flex flex-col hover:-translate-y-1">
    <div className="text-cyan-400 mb-4">{project.icon}</div>
    <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-wide">{project.title}</h3>
    <p className="text-slate-300 flex-grow">{project.description}</p>
  </div>
);

const Skills: React.FC<{ categories: SkillCategory[] }> = ({ categories }) => (
  <div className="space-y-8">
    {categories.map((category) => (
      <div key={category.title}>
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3 font-mono tracking-wider">
          {category.icon} {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <span key={skill} className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-md font-medium transition-colors hover:border-cyan-500 hover:text-cyan-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const App: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      date: 'July 2025 - Sept 2025',
      title: 'Production Flow Optimization - Battery Line (MEB)',
      subtitle: 'SEBN-MA',
      location: 'Tanger',
      description: [
        "DMAIC analysis to identify bottlenecks on the dynamic assembly line (LAD).",
        "Balancing work stations and reorganizing operator-machine tasks to improve cadence.",
        "Implemented a multi-machine operation on Komax (1 operator/2 machines)."
      ],
      highlight: "Result: +4.8% productivity gain.",
      icon: <Briefcase className="w-6 h-6 text-slate-500" />
    },
    {
      date: 'July 2024 - Aug 2024',
      title: 'Initiation to Production Processes & CAD',
      subtitle: 'NORDECH INDUSTRIE',
      location: 'Tétouan',
      description: [
        "Introduction to industrial production processes.",
        "Mastery of SOLIDWORKS for computer-aided design.",
        "Familiarization with iron cutting and shaping machinery."
      ],
      icon: <Briefcase className="w-6 h-6 text-slate-500" />
    },
    {
      date: 'Since 2020',
      title: 'Mechatronics Engineering',
      subtitle: 'École Nationale Des Sciences Appliquées (ENSA)',
      location: 'Tétouan',
      description: ["Pursuing a comprehensive engineering degree focused on the synergy of mechanical, electrical, and computer engineering."],
      icon: <GraduationCap className="w-6 h-6 text-slate-500" />
    },
    {
      date: '2019 - 2020',
      title: 'Baccalaureate in Physical Sciences',
      subtitle: 'Lycée MEKKI NASSIRI',
      location: 'Tétouan',
      description: ["French option, specializing in physics and mathematics."],
      icon: <GraduationCap className="w-6 h-6 text-slate-500" />
    },
  ];

  const projects: Project[] = [
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Automotive Technology',
      description: 'Designed a Battery Management System (BMS) in SolidWorks with state-of-charge simulation using MATLAB/Simulink.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Automation',
      description: 'Developed a simulated parking barrier system detecting vehicles and controlling entry/exit via a servomotor and Arduino Uno.'
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Embedded Electronics',
      description: 'Created an obstacle detection system using an HC-SR04 sensor on a servomotor, with real-time graphical display via Processing.'
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: 'Technical Skills',
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      skills: ['CATIA V5', 'SolidWorks', 'MATLAB/Simulink', 'ISIS Proteus', 'Step 7 (Siemens)', 'G-code (CNC)', 'Java', 'MySQL', 'VHDL', 'Arduino', 'Electronic Circuit Design']
    },
    {
      title: 'Quality Tools',
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      skills: ['DMAIC', 'VSM', 'AMDEC', 'Yamazumi', 'Pareto/ABC', 'Power BI', 'Excel']
    },
     {
      title: 'Personal Skills',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      skills: ['Stress Management', 'Teamwork', 'Communication', 'Problem Solving']
    },
    {
      title: 'Languages',
      icon: <Languages className="w-6 h-6 text-cyan-400" />,
      skills: ['Arabic (Native)', 'French (C1)', 'English (C1)', 'Spanish (Basic)']
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-200 font-sans leading-relaxed bg-[linear-gradient(to_right,theme(colors.slate.800)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.800)_1px,transparent_1px)] bg-[size:2rem_2rem]">
      <div className="max-w-6xl mx-auto">
        <Header />
        <main>
          <Section title="Career Path" id="experience">
            <Timeline items={timelineItems} />
          </Section>
          <Section title="Academic Projects" id="projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
            </div>
          </section>
          <Section title="Skills" id="skills">
            <Skills categories={skillCategories} />
          </Section>
        </main>
        <footer className="text-center py-8 text-slate-400 border-t border-slate-800 mt-16">
          <p>&copy; {new Date().getFullYear()} Hadil El Mossati. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;