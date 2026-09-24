function Projects() {
  const projets = [
    {
      id: 1,
      titre: "Gestion de finances",
      description:
        "Application permettant de gérer ses revenus et ses dépenses.",
      technologie: "React + Vite",
    },
    {
      id: 2,
      titre: "Task Manager",
      description:
        "Application permettant d'ajouter, modifier et organiser ses tâches.",
      technologie: "React + Vite + Tailwind CSS",
    },
    {
      id: 3,
      titre: "Portfolio",
      description:
        "Mon portfolio personnel pour présenter mes compétences et mes projets.",
      technologie: "React + Vite + Tailwind CSS",
    },
  ];

  return (
    <section
      id="projets"
      className="bg-[#111827] px-6 py-20 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">
            Mes projets
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quelques projets
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">

          {projets.map((projet) => (
            <article
              key={projet.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/30 transition duration-300"
            >

              <div className="h-40 bg-purple-500/10 flex items-center justify-center">

                <span className="text-5xl">
                  💻
                </span>

              </div>

              {/* Contenu */}
              <div className="p-6">

                <p className="text-xs text-purple-400 uppercase tracking-wider mb-2">
                  {projet.technologie}
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition">
                  {projet.titre}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {projet.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;