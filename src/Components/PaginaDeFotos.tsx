
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Imagem {
  id: string;
  nome: string;
  public_id: string;
  url: string;
  largura: number;
  altura: number;
}

export default function PaginaDeFotos() {
  const { categoria, item } = useParams();

  const [imagens, setImagens] = useState<Imagem[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarImagens() {
      try {
        const response = await fetch(
          `https://backend-five-flame-72.vercel.app/categorias/${encodeURIComponent(
            categoria || ""
          )}/${encodeURIComponent(item || "")}`
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const dados = await response.json();

        console.log("Imagens recebidas:", dados);

        setImagens(dados);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      } finally {
        setCarregando(false);
      }
    }

    if (categoria && item) {
      carregarImagens();
    } else {
      console.error("Categoria ou item não fornecidos na URL.");
    }
  }, [categoria, item]);

  if (carregando) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="flex justify-center m-20 text-6xl uppercase font-semibold">
        {item}
      </h1>

      <div className="mx-4 columns-1 gap-5 sm:columns-2 lg:columns-3">
  {imagens.map((imagem) => (
    <img
      key={imagem.id}
      src={imagem.url}
      alt={`${item} - ${imagem.nome}`}
      className="mb-5 h-auto w-full break-inside-avoid object-cover"
    />
  ))}

      
      </div>
    </main>
  );
}
