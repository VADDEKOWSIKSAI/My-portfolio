import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const timelineData = [
    {
        year: "2026",
        title: "Full Stack Java Developer",
        description: "Building scalable applications using Spring Boot and React. Developing the Smart College Cafeteria system.",
        icon: <FaBriefcase />,
    },
    {
        year: "2025",
        title: "Advanced Java & Frameworks",
        description: "Mastered Core Java, JDBC, and started working with Spring Framework. Built initial console-based projects.",
        icon: <FaCode />,
    },
    {
        year: "2024",
        title: "Web Development Basics",
        description: "Started journey with HTML, CSS, and JavaScript. Created first portfolio and static websites.",
        icon: <FaLaptopCode />,
    },
    {
        year: "2022",
        title: "Computer Science Engineering",
        description: "Joined B.Tech in Computer Science. Built strong foundation in algorithms and data structures.",
        icon: <FaGraduationCap />,
    },
];

const Timeline = () => {
    return (
        <section id="timeline" className="min-h-screen py-20 bg-midnight relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-accent-primary mb-2 uppercase tracking-widest">04. The Journey</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-text-primary">Experience Timeline</h3>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border-glow"></div>

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? "flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-5/12"></div>

                            <div className="z-10 bg-accent-primary text-midnight rounded-full p-4 border-4 border-surface shadow-xl">
                                <span className="text-xl">{item.icon}</span>
                            </div>

                            <div className={`w-5/12 bg-surface p-6 rounded-xl border border-border-glow shadow-xl ${index % 2 === 0 ? "text-right" : "text-left"
                                }`}>
                                <span className="text-accent-primary font-mono text-sm font-bold">{item.year}</span>
                                <h4 className="text-xl font-bold text-text-primary mb-2">{item.title}</h4>
                                <p className="text-text-muted text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
