function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] overflow-hidden bg-[#111827] px-6 pt-28 pb-20 md:px-12"
    >

      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>


      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>

          <p className="text-purple-400 text-sm font-medium uppercase tracking-[0.25em] mb-5">
            Développeur Web
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            Bonjour,
            <br />
            je suis <span className="text-purple-400">Alfrise KOSSO OLONTOUA.</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mt-7">
            Je crée des interfaces web modernes, simples et
            agréables à utiliser avec React, JavaScript et
            Tailwind CSS.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">

            <a
              href="#projets"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Voir mes projets
              <span className="ml-2">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center border border-white/10 hover:border-purple-400/40 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Me contacter
            </a>

          </div>

          <div className="flex flex-wrap gap-3 mt-10">

            <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              React
            </span>

            <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              JavaScript
            </span>

            <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              Tailwind CSS
            </span>

          </div>

        </div>

        <div className="relative flex justify-center md:justify-end">

          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>


          <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">

            {/* Cercle intérieur */}
            <div className="w-52 h-52 md:w-60 md:h-60 rounded-full bg-purple-500/10 border border-purple-400/20 flex items-center justify-center">

              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-purple-600/20 flex items-center justify-center">

                <span className="text-7xl md:text-8xl">
                  💻
                </span>

              </div>

            </div>


            <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50"></div>

            <div className="absolute bottom-10 left-8 w-2 h-2 bg-indigo-400 rounded-full"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;