export default function Servicos() {
    return (
      <section className="max-w-6xl mx-auto px-6 md:px-0 space-y-12">
        <h2 className="text-4xl font-extrabold text-center text-green-900">Nossos Serviços</h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Poda e manutenção", icon: "🌿" },
            { title: "Paisagismo personalizado", icon: "🌱" },
            { title: "Gramados e áreas verdes", icon: "🍃" },
            { title: "Decoração com plantas", icon: "🌸" },
            { title: "Consultoria de jardinagem", icon: "📋" },
          ].map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 shadow-2xl hover:shadow-green-500/50 transition transform hover:-translate-y-3">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-green-800">Serviço de alta qualidade, personalizado para cada cliente.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  