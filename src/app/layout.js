import "./globals.css";
import Header from "./Header"; // Client Component do header

export const metadata = {
  title: "Goltz Jardinagem",
  description: "Serviços de jardinagem e paisagismo em Florianópolis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <style>

        </style>
      </head>
      <body className="bg-gradient-to-b from-green-50 to-green-100 text-green-900 font-sans scroll-smooth">
        <Header /> {/* Header com scroll */}
        <main className="pt-32 max-w-7xl mx-auto px-5">{children}</main>
        <footer className="bg-green-900 text-white text-center p-6 mt-16 shadow-inner">
          <p className="text-lg font-light">
            © {new Date().getFullYear()} Goltz Jardinagem - Todos os direitos reservados
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-green-300 transition-transform transform hover:scale-110">
              📘
            </a>
            <a href="#" className="hover:text-green-300 transition-transform transform hover:scale-110">
              📸
            </a>
            <a href="#" className="hover:text-green-300 transition-transform transform hover:scale-110">
              📧
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
