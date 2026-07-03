import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  Briefcase,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "St. Joseph's Convent School",
      mascot: "📘",
      year: "2019 - 2021",
      achievements: ["CGPA: 8.2", "Science Stream"],
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work, scientific research methodologies, and hands-on experience in data analysis and experimental procedures.",
    },
    {
      degree: "Bachelor's (B.Tech, CSE - AI/ML)",
      school: "Dehradun Institute of Technology (DIT University)",
      mascot: "📗",
      year: "2021 - 2025",
      achievements: ["CGPA: 7.43", "Specialization: AI/ML"],
      skills: ["Python", "Java", "DBMS", "DSA", "ML", "OS"],
      description:
        "Specialized in AI/ML with strong foundations in data structures, algorithms, machine learning, and full-stack development. Built production-grade AI projects including FitnessFuel and PrepBud.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const experienceData = [
    {
      role: "Data Engineer",
      company: "Infosys Limited",
      location: "Hyderabad",
      period: "Nov 2025 - Present",
      mascot: "🏢",
      tags: ["Python", "SSIS", "SQL", "Selenium", "Shell Scripting", "Unix"],
      points: [
        "Designed and optimized scalable ETL workflows using SSIS, SQL, Python, Shell Scripting, and Unix to improve data processing reliability and reporting efficiency.",
        "Developed Selenium-based automation solutions for web workflow testing, data extraction, validation, and process automation, reducing manual effort significantly.",
        "Built and maintained automation pipelines focused on reliability and faster execution feedback, leveraging DSA concepts and scripting-based optimization.",
      ],
    },
    {
      role: "Full Stack Intern",
      company: "National Informatics Centre (NIC)",
      location: "Delhi",
      period: "May 2024 - July 2024",
      mascot: "🖥️",
      tags: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      points: [
        "Designed and developed a full-stack server management web application with a responsive dashboard using HTML, CSS, and JavaScript.",
        "Built backend services using Python Flask and integrated PostgreSQL for secure database management and real-time data handling.",
        "Engineered complete frontend-backend integration for dynamic data flow, real-time server updates, and reliable CRUD operations.",
      ],
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Building real-world impact through engineering and automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === `exp-${index}`
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(`exp-${index}`)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{exp.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-teal-500" />
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />{exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />{exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm border-l-2 border-teal-500 pl-3">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
