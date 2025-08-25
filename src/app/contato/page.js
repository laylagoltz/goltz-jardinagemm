export default function Contato() {
    return (
      <section className="max-w-2xl mx-auto px-6 md:px-0 space-y-8 text-center">
        <h2 className="text-4xl font-extrabold text-green-900">Entre em Contato</h2>
        <p className="text-green-800">Estamos prontos para transformar seu jardim. Fale conosco via WhatsApp:</p>
        <a
          href="https://wa.me/5548996466619"
          target="_blank"
          className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          WhatsApp
        </a>
      </section>
    );
  }
  