function About() {
  return (
    <section
      id="apropos"
      className="bg-[#111827] px-6 py-20 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">
                À propos
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Qui suis-je ?
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Je suis un développeur web passionné par la création
                d'interfaces modernes et simples à utiliser.
                J'apprends progressivement React, JavaScript, Vite
                et Tailwind CSS afin de construire des applications
                web de qualité.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Mon objectif est de continuer à apprendre, de créer
                des projets concrets et de transformer progressivement
                mes idées en applications web fonctionnelles.
              </p>
            </div>

            <div className="flex justify-center">

              <div className="w-64 h-64 rounded-full bg-purple-500/20 border border-purple-400/20 flex items-center justify-center">

                <div className="w-48 h-48 rounded-full bg-purple-500/20 flex items-center justify-center">

                  <span className="text-7xl">
                    👨‍💻
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;