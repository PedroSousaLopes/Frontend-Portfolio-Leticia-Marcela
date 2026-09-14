import { useState } from "react";

export default function Contactar() {
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Guardamos o formulário antes do await
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const dados = {
      nome: form.get("nome"),
      email: form.get("email"),
      tipoTrabalho: form.get("tipoTrabalho"),
      orcamento: form.get("orcamento"),
      descricao: form.get("descricao"),
    };

    try {
      setEnviando(true);
      setMensagem("");

      const response = await fetch("http://localhost:3000/contactar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMensagem("Mensagem enviada com sucesso!");

      // Agora funciona mesmo depois do await
      formElement.reset();
    } catch (error) {
      console.error(error);
      setMensagem("Não foi possível enviar a mensagem.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-cyan-500 px-6 py-30 md:px-10">
      {/* Conteúdo limitado e centralizado */}
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.4em] text-black drop-shadow-lg">
            Contacto
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-wide text-black drop-shadow-2xl md:text-7xl">
            Vamos conversar?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-8 text-black drop-shadow-lg md:text-xl">
            Conte-me um pouco sobre o seu projeto e entrarei em contacto consigo
            para conversarmos sobre todos os detalhes.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nome */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-black">
              Nome
            </label>

            <input
              name="nome"
              type="text"
              placeholder="Seu nome"
              required
              className="w-full rounded-lg border border-white/40 bg-white/95 px-4 py-4 text-gray-900 shadow-xl outline-none transition focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-black">
              E-mail
            </label>

            <input
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="w-full rounded-lg border border-white/40 bg-white/95 px-4 py-4 text-gray-900 shadow-xl outline-none transition focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Tipo de trabalho */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-black">
              Tipo de trabalho
            </label>

            <select
              name="tipoTrabalho"
              required
              className="w-full rounded-lg border border-white/40 bg-white/95 px-4 py-4 text-gray-900 shadow-xl outline-none transition focus:border-white focus:ring-2 focus:ring-white"
            >
              <option value="">Selecione uma opção</option>
              <option value="wedding">Casamento</option>
              <option value="pre-wedding">Pre-Wedding</option>
              <option value="family">Família</option>
              <option value="portrait">Retrato</option>
              <option value="travel">Viagem</option>
              <option value="other">Outro</option>
            </select>
          </div>

          {/* Orçamento */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-black">
              Qual o orçamento disponível?
            </label>

            <input
              name="orcamento"
              type="text"
              placeholder="Ex: 1.000€ - 1.500€"
              className="w-full rounded-lg border border-white/40 bg-white/95 px-4 py-4 text-gray-900 shadow-xl outline-none transition focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-black">
              Conte-me sobre o seu projeto
            </label>

            <textarea
              name="descricao"
              rows={6}
              placeholder="Conte-me sobre o trabalho que você deseja, data, local, quantidade de pessoas e outros detalhes..."
              required
              className="w-full resize-none rounded-lg border border-white/40 bg-white/95 px-4 py-4 text-gray-900 shadow-xl outline-none transition focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Mensagem */}
          {mensagem && (
            <p className="text-center font-medium text-black">{mensagem}</p>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-lg bg-white px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-gray-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {enviando ? "Enviando..." : "Enviar pedido"}
          </button>
        </form>
      </div>
    </div>
  );
}
