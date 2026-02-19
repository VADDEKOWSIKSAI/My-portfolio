import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql, SiPostman, SiFigma } from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact />, level: 90, color: "text-cyan-400" },
            { name: "JavaScript", icon: <FaJs />, level: 85, color: "text-yellow-400" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95, color: "text-cyan-300" },
            { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
            { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Java", icon: <FaJava />, level: 90, color: "text-red-500" },
            { name: "Spring Boot", icon: <SiSpringboot />, level: 85, color: "text-green-500" },
            { name: "MySQL", icon: <SiMysql />, level: 80, color: "text-orange-400" },
            { name: "REST APIs", icon: <FaDatabase />, level: 85, color: "text-gray-400" },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git", icon: <FaGitAlt />, level: 85, color: "text-orange-600" },
            { name: "Docker", icon: <FaDocker />, level: 70, color: "text-blue-600" },
            { name: "Postman", icon: <SiPostman />, level: 90, color: "text-orange-500" },
            { name: "Figma", icon: <SiFigma />, level: 75, color: "text-purple-500" },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-20 bg-midnight relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-accent-primary mb-2 uppercase tracking-widest">02. My Arsenal</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-text-primary">Tech Stack</h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-surface rounded-xl p-6 border border-border-glow hover:border-accent-primary/30 transition-colors backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-accent-primary/10"
                        >
                            <h4 className="text-xl font-bold text-text-primary mb-6 border-b border-border-glow pb-2">{category.title}</h4>
                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-3">
                                                <span className={`text-2xl ${skill.color} p-2 bg-midnight rounded-lg group-hover:scale-110 transition-transform`}>{skill.icon}</span>
                                                <span className="text-text-muted font-medium group-hover:text-text-primary transition-colors">{skill.name}</span>
                                            </div>
                                            <span className="text-text-muted text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-midnight rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full rounded-full ${skill.name === "Java" ? "bg-red-500" : "bg-accent-primary"}`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
