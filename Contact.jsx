function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d1324] px-6 py-20 md:px-12"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Parlons de votre projet
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Une idée, un projet ou simplement envie d'échanger ?
            N'hésitez pas à me contacter.
          </p>

        </div>

        <form className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">

          <div className="mb-6">

            <label className="block text-gray-300 text-sm font-medium mb-2">
              Nom
            </label>

            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
            />

          </div>

          <div className="mb-6">

            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
            />

          </div>

          <div className="mb-6">

            <label className="block text-gray-300 text-sm font-medium mb-2">
              Message
            </label>

            <textarea
              placeholder="Votre message..."
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
            ></textarea>

          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition"
          >
            Envoyer le message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;