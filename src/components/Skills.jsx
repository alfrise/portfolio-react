function Skills() {
  const competences = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Tailwind CSS"
  ];

  return (
    <section
      id="competences"
      className="min-h-screen bg-gray-100 px-4 py-20"
    >

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Mes compétences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {competences.map((competence) => (
            <div
              key={competence}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {competence}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
