"use client";

import Image from "next/image";

export default function Proyects() {
  return (
    <div>
      <h1 className="text-xl">Proyectos realizados</h1>
      <h2>
        Bienvenido/a a mi portafolio de proyectos. Aquí podrás explorar una
        selección de los trabajos en los que he estado involucrado/a. Desde
        diseños creativos hasta desarrollos tecnológicos, cada proyecto
        representa mi pasión por la excelencia y el compromiso con resultados
        excepcionales. Te invito a sumergirte en esta galería de proyectos y
        descubrir mi enfoque único en cada desafío. ¡Espero que disfrutes de
        esta muestra de mi trabajo!
      </h2>

      <div className="w-96 border-2 shadow rounded">
        <div className="flex flex-row">{showProyects(Proyect.Enjm)}</div>
      </div>
    </div>
  );
}

enum Proyect {
  Enjm = "Enjm",
}

function showProyects(proyect: Proyect) {
  let proyectValues: Record<Proyect, any> = {
    Enjm: {
      imagen: "/img/WebENJM.svg",
      titulo: "Encuentro Nacional de Juegos de Mesa",
      resumen:
        "La página oficial del Encuentro Nacional de Juegos de Mesa en Argentina: tu fuente central para descubrir y participar en este emocionante evento dedicado a los amantes de los juegos de mesa en nuestro país.",
      link: "https://enjm.ar/",
    },
  };
  return (
    <div>
      <Image
        src={proyectValues[proyect].imagen}
        alt={""}
        width={500}
        height={500}
      ></Image>

      <div className="flex flex-col">
        <h2>{proyectValues[proyect].titulo}</h2>
        <h2>{proyectValues[proyect].resumen}</h2>
      </div>

      <button className="h-10 px-6 font-semibold rounded-md bg-white text-black">
        <a href={proyectValues[proyect].link}>Ver más</a>
      </button>
    </div>
  );
}
