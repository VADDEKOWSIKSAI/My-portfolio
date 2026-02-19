import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-midnight border-t border-border-glow py-20 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-sm font-mono text-accent-primary mb-2 uppercase tracking-widest">01. Within the code</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-text-primary">
                            About Me
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3 space-y-6 text-text-muted text-lg leading-relaxed bg-surface p-8 rounded-2xl border border-border-glow shadow-lg">
                            <p>
                                My journey into the world of technology began with a simple curiosity: <span className="text-accent-primary font-semibold">How do things work?</span> That curiosity quickly turned into a passion for building solutions that matter.
                            </p>
                            <p>
                                As a full-stack developer, I don't just write code; I craft digital experiences. From designing intuitive user interfaces with <span className="text-text-primary">React</span> to architecting robust <span className="text-text-primary">Java</span> backends, I thrive on the challenge of turning complex problems into elegant, scalable software.
                            </p>
                            <p>
                                My philosophy is simple: <span className="text-text-primary italic">Code is a tool, but the product is the goal.</span> Whether it's optimizing a database query or perfecting a micro-interaction, every detail counts towards the user's success.
                            </p>
                        </div>

                        <div className="md:col-span-2">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Experience", value: "Fresh" },
                                    { label: "Projects", value: "5+" },
                                    { label: "Commitment", value: "100%" },
                                    { label: "Focus", value: "Full Stack" }
                                ].map((stat, index) => (
                                    <div key={index} className="p-4 bg-surface backdrop-blur-sm rounded-lg border border-border-glow hover:border-accent-primary/50 transition-colors text-center shadow-lg">
                                        <h3 className="text-2xl font-bold text-text-primary mb-1">{stat.value}</h3>
                                        <p className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
