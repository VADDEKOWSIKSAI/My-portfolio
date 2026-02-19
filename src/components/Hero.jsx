import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { PixelatedCanvas } from './ui/pixelated-canvas';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-accent-primary text-lg font-mono mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
                        Vadde Kowsik Sai
                    </h1>
                    <div className="text-2xl md:text-3xl text-text-muted font-light mb-8 h-20">
                        I am a{' '}
                        <TypeAnimation
                            sequence={[
                                'Full Stack Java Developer',
                                2000,
                                'React.js Enthusiast',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-accent-primary font-semibold"
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto md:mx-0">
                        Building cinematic, high-performance web applications that solve real-world problems.
                        Currently focused on building scalable Full Stack solutions.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-accent-primary text-midnight font-bold rounded-full hover:bg-accent-primary/80 transition-all cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.5)] transform hover:scale-105"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border border-accent-primary text-accent-primary font-bold rounded-full hover:bg-accent-primary/10 transition-all cursor-pointer transform hover:scale-105"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Icons Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex items-center justify-center w-full mt-10 md:mt-0"
                >
                    <div className="relative z-10 w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
                        {/* Spinning Glow Effect */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-primary via-purple-500 to-accent-primary blur-3xl opacity-30"
                        />

                        {/* Profile Image */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/20"
                        >
                            <img
                                src={profilePic}
                                alt="Vadde Kowsik Sai"
                                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-midnight"
                            />
                        </motion.div>
                    </div>

                    {/* Floating Icons */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="hidden md:flex absolute top-10 right-10 z-20 text-7xl text-accent-primary opacity-90 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] bg-midnight/50 backdrop-blur-sm p-4 rounded-2xl border border-accent-primary/20"
                    >
                        <FaReact />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="hidden md:flex absolute bottom-20 -left-12 z-20 text-7xl text-red-500 opacity-90 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] bg-midnight/50 backdrop-blur-sm p-4 rounded-2xl border border-red-500/20"
                    >
                        <FaJava />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="hidden md:flex absolute -bottom-24 left-1/2 -translate-x-1/2 z-20 text-6xl text-blue-400 opacity-90 bg-midnight/50 backdrop-blur-sm p-4 rounded-2xl border border-blue-500/20"
                    >
                        <FaDatabase />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
