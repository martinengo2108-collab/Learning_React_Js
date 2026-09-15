export const About = () => {

    const frontendSkills = ["React",
        "Vue",
        "TypeScript",
        "Tailwindcss",
        "Svelte",
    ]
    return
    <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-3xl mx-about px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me

            </h2>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

                <p className="text-gray-300 mb-6">
                    I am a beginner in front-end developer passionate of crafting smart and scalable web
                    pages. My goal is to become a full stack developer, offering
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">Frontend</h3>

                        <div className="flex flex-wrap gap-2"></div>
                    </div>
                </div>
            </div>

        </div>

    </section>
}