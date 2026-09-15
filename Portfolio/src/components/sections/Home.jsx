export const Home =()=>{
    return<section id="home"
    className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600
            bg-clip-text text-transparent leading-rigth">
                Hi, I am Martine
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">

                I am a beginner in front-end developer passionate of crafting smart and scalable web
                pages. My goal is to become a full stack developer, offering 
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View projects
                </a>
            </div>

        </div>
    </section>
}