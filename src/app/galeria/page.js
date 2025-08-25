export default function Galeria() {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-0 space-y-12">
        <h2 className="text-4xl font-extrabold text-center text-green-900">Galeria de Projetos</h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="p-10 flex justify-center items-center rounded-2xl shadow-2xl bg-gradient-to-br from-green-100 to-green-200 hover:shadow-green-500/40 transition transform hover:-translate-y-2 text-green-900 font-bold text-2xl">
              Projeto {i}
            </div>
          ))}
        </div>
      </section>
    ) ;
  }
  