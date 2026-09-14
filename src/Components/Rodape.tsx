import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Rodape() {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold tracking-wider">
            Leticia Marcela
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Fotografia que transforma momentos em memórias.
          </p>

          <div className="mt-6 flex gap-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/leticiamarcelasr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full
                         border border-gray-600 text-gray-300
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-white
                         hover:bg-white hover:text-gray-900
                         hover:shadow-lg"
            >
              <FaInstagram size={20} />
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full
                         border border-gray-600 text-gray-300
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-white
                         hover:bg-white hover:text-gray-900
                         hover:shadow-lg"
            >
              <FaFacebookF size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5533745109528?text=Ola%20gostaria%20de%20um%20trabalho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full
                         border border-gray-600 text-gray-300
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-white
                         hover:bg-white hover:text-gray-900
                         hover:shadow-lg"
            >
              <FaWhatsapp size={21} />
            </a>
          </div>

          <div className="mt-8 w-full border-t border-gray-700 pt-5 text-center">
            <p className="text-xs text-gray-500">
              © 2026 Leticia Marcela. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
