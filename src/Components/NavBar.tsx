import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface Categoria {
  nome: string;
  itens: string[];
}

export default function NavBar() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaAberta, setCategoriaAberta] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { i18n } = useTranslation();

  const navRef = useRef<HTMLElement>(null);

  // ==========================================
  // FECHAR MENU AO CLICAR FORA
  // ==========================================

  useEffect(() => {
    function fecharAoClicarFora(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setCategoriaAberta(null);
      }
    }

    document.addEventListener("mousedown", fecharAoClicarFora);

    return () => {
      document.removeEventListener(
        "mousedown",
        fecharAoClicarFora
      );
    };
  }, []);

  // ==========================================
  // ALTERAR NAVBAR AO ROLAR
  // ==========================================

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // CARREGAR CATEGORIAS
  // ==========================================

  useEffect(() => {
    async function carregarCategorias() {
      try {
        const response = await fetch(
          "https://backend-five-flame-72.vercel.app/categorias"
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const dados: Categoria[] = await response.json();

        setCategorias(dados);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }

    carregarCategorias();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between p-2 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 shadow-lg backdrop-blur-md after:bg-white/30"
          : "bg-transparent after:bg-black/30"
      } after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:content-['']`}
    >
      {/* ==========================================
          ESQUERDA
      ========================================== */}

      <Link
        to="/"
        onClick={() => setCategoriaAberta(null)}
        className="flex items-center gap-3"
      >
        <img
          src={logo}
          alt="Logo"
          className={`h-15 w-auto transition-all duration-500 ${
            scrolled ? "brightness-0 invert" : "brightness-0"
          }`}
        />

        <h1
          className={`text-sm tracking-widest transition-colors duration-500 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          Leticia Marcela
        </h1>
      </Link>

      {/* ==========================================
          IDIOMAS
      ========================================== */}

      <div className="flex items-center gap-4">
        {/* PT */}

        <button
          onClick={() => {
            i18n.changeLanguage("pt");
            localStorage.setItem("idioma", "pt");
          }}
          className={`text-sm tracking-widest transition-colors duration-500 ${
            scrolled
              ? i18n.language === "pt"
                ? "text-white"
                : "text-white/50 hover:text-white"
              : i18n.language === "pt"
                ? "text-black"
                : "text-black/50 hover:text-black"
          }`}
        >
          PT
        </button>

        <span
          className={`transition-colors duration-500 ${
            scrolled ? "text-white/30" : "text-black/30"
          }`}
        >
          /
        </span>

        {/* EN */}

        <button
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("idioma", "en");
          }}
          className={`text-sm tracking-widest transition-colors duration-500 ${
            scrolled
              ? i18n.language === "en"
                ? "text-white"
                : "text-white/50 hover:text-white"
              : i18n.language === "en"
                ? "text-black"
                : "text-black/50 hover:text-black"
          }`}
        >
          EN
        </button>

        <span
          className={`transition-colors duration-500 ${
            scrolled ? "text-white/30" : "text-black/30"
          }`}
        >
          /
        </span>

        {/* FR */}

        <button
          onClick={() => {
            i18n.changeLanguage("fr");
            localStorage.setItem("idioma", "fr");
          }}
          className={`text-sm tracking-widest transition-colors duration-500 ${
            scrolled
              ? i18n.language === "fr"
                ? "text-white"
                : "text-white/50 hover:text-white"
              : i18n.language === "fr"
                ? "text-black"
                : "text-black/50 hover:text-black"
          }`}
        >
          FR
        </button>
      </div>

      {/* ==========================================
          DIREITA
      ========================================== */}

      <div className="flex items-center gap-6">
        {/* HOME */}

        <Link
          to="/"
          onClick={() => setCategoriaAberta(null)}
          className={`text-lg font-semibold uppercase transition-colors duration-500 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          Home
        </Link>

        {/* ==========================================
            CATEGORIAS
        ========================================== */}

        {categorias.map((categoria) => (
          <details
            key={categoria.nome}
            open={categoriaAberta === categoria.nome}
            className="relative"
          >
            <summary
              onClick={(e) => {
                e.preventDefault();

                setCategoriaAberta(
                  categoriaAberta === categoria.nome
                    ? null
                    : categoria.nome
                );
              }}
              className={`list-none cursor-pointer text-lg font-semibold uppercase transition-colors duration-500 ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              {categoria.nome}
            </summary>

            {/* DROPDOWN */}

            <ul className="absolute top-full left-0 z-10 mt-3 min-w-[200px] overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
              {categoria.itens.map((item) => (
                <li key={item}>
                  <Link
                    to={`/fotos/${encodeURIComponent(
                      categoria.nome
                    )}/${encodeURIComponent(item)}`}
                    onClick={() => setCategoriaAberta(null)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:pl-5 hover:text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}

        {/* ABOUT */}

        <Link
          to="/about"
          onClick={() => setCategoriaAberta(null)}
          className={`text-lg font-semibold uppercase transition-colors duration-500 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          About
        </Link>

        {/* CONTACT */}

        <Link
          to="/contact"
          onClick={() => setCategoriaAberta(null)}
          className={`text-lg font-semibold uppercase transition-colors duration-500 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}