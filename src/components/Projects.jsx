import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiSpringboot, SiMysql, SiTailwindcss, SiJsonwebtokens, SiHtml5, SiCss3, SiJavascript, SiAxios } from "react-icons/si";

const projects = [
    {
        title: "College Cafeteria System",
        tagline: "Flagship Project",
        description: "A real-time web platform enabling pre-orders, reducing wait times by 40%. Features a live kitchen dashboard and secure payment integration.",
        tech: [
            { name: "React", icon: <SiReact /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "JWT", icon: <SiJsonwebtokens /> },
            { name: "Tailwind", icon: <SiTailwindcss /> }
        ],
        liveUrl: "https://cafeteria-app-alpha.vercel.app/",
        githubUrl: "https://github.com/VADDEKOWSIKSAI/Cafeteria-app",
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Multimedia Blog",
        tagline: "Content Platform",
        description: "A dedicated space for media enthusiasts featuring high-quality audio tracks and the latest movie trailers from Tollywood.",
        tech: [
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> }
        ],
        liveUrl: "https://multimediablogg1.netlify.app/",
        githubUrl: "https://github.com/VADDEKOWSIKSAI/MuLtimedia_BloG_1",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Travel Destination Guide",
        tagline: "Interactive Guide",
        description: "Interactive travel guide website with destination showcases and booking info. Features dynamic image galleries and map integration.",
        tech: [
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> }
        ],
        liveUrl: "https://traveldestinationguide-1.netlify.app/",
        githubUrl: "https://github.com/VADDEKOWSIKSAI/TravelDestinationGuide_1",
        color: "from-amber-400 to-orange-500"
    },
    {
        title: "Weather Dashboard",
        tagline: "Real-time Data",
        description: "Real-time weather application consuming OpenWeatherMap API. Visualizes temperature, humidity, and forecast data with dynamic charts.",
        tech: [
            { name: "React", icon: <SiReact /> },
            { name: "Axios", icon: <SiAxios /> },
            { name: "Tailwind", icon: <SiTailwindcss /> }
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/vaddekowsiksai",
        color: "from-blue-400 to-indigo-500"
    }
];

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-full"
            onMouseMove={onMouseMove}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity duration-500`} />

            <div className="relative h-full bg-surface border border-border-glow rounded-xl overflow-hidden hover:border-accent-primary/50 transition-all duration-300 flex flex-col">
                {/* Decoration Header */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-accent-primary uppercase tracking-wider">{project.tagline}</span>
                        <div className="flex gap-4">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-colors">
                                <FaExternalLinkAlt className="text-lg" />
                            </a>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-text-muted mb-8 flex-1 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="pt-6 border-t border-white/5">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="flex items-center space-x-1 text-xs font-mono text-accent-primary/80 bg-accent-primary/5 px-2 py-1 rounded border border-accent-primary/10">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-mono text-accent-primary mb-2 uppercase tracking-widest">03. Featured Works</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-text-primary">Selected Projects</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
