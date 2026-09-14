// import { useTranslation } from "react-i18next";
import home from "../assets/home.png";

export default function Canvas() {
  // const { t } = useTranslation();

  return (
    <div className="relative bg-[#BEB0A7] w-full min-h-screen overflow-hidden">

      <div className="absolute inset-0 flex items-center px-8 md:px-12">

        {/* TEXTO */}
        <div className="w-1/2 pl-20 flex items-center justify-center">
          <div className="text-white font-[Playfair_Display]">
            <h1 className="text-5xl p-5 md:text-7xl lg:text-[5rem] font-semibold stagger">
              Fotografia e filmes para histórias que merecem ser lembradas.
            </h1>
          </div>
        </div>

        {/* IMAGEM */}
        <div className=" flex items-center justify-center">
          <img
            src={home}
            alt="Photographer"
            className="
              p-5
              w-[50%]
              h-[50%]
              object-cover
              rounded-4xl
             
            "
          />
        </div>

      </div>

    </div>
  );
}