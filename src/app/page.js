export default function Home() {
  return (
    <section className="text-center px-6 md:px-0">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-green-900">
          Transformamos seu jardim em obra de arte
        </h2>
        <p className="text-lg md:text-xl text-green-800">
          Especialistas em jardinagem, paisagismo e manutenção de áreas verdes em Florianópolis.
        </p>
        <a
          href="https://wa.me/5548996466619"
          target="_blank"
          className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Fale Conosco no WhatsApp
        </a>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-green-500/50 transition hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4">Poda e Manutenção</h3>
          <p>Manutenção completa de jardins, podas de árvores e cuidados especializados.</p>
        </div>
        <div className="p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-green-500/50 transition hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4">Paisagismo</h3>
          <p>Criação de projetos personalizados que combinam estética e funcionalidade.</p>
        </div>
        <div className="p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-green-500/50 transition hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4">Gramados e Plantas</h3>
          <p>Cuidado com gramados, flores e plantas ornamentais para ambientes mais verdes.</p>
        </div>
      </div>
    </section>
  );
}
