export default function Servicos() {
    return (
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Nossos Serviços</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            🌿 Poda e manutenção de jardins
          </li>
          <li className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            🌱 Paisagismo personalizado
          </li>
          <li className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            🍃 Gramados e áreas verdes
          </li>
          <li className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            🌸 Decoração com plantas ornamentais
          </li>
        </ul>
      </section>
    );
  }
  