function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-5 md:px-10">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <a
          href="#accueil"
          className="text-sm font-semibold text-white tracking-wide hover:text-purple-400 transition"
        >
          AlfTech
        </a>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-7">

          <a
            href="#accueil"
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Accueil
          </a>

          <a
            href="#apropos"
            className="text-xs text-gray-400 hover:text-white transition"
          >
            À propos
          </a>

          <a
            href="#competences"
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Compétences
          </a>

          <a
            href="#projets"
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Projets
          </a>

          <a
            href="#contact"
            className="text-xs text-white bg-purple-600/80 hover:bg-purple-600 px-3 py-2 rounded-lg transition"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;