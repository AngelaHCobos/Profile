"use client";

import Image from "next/image";

export default function Proyects() {
  return (
    <div>
      <h1 className="text-xl">
        De la Idea al Entretenimiento: Mi Portafolio de Desarrollo de Juegos
      </h1>
      <h2>
        Bienvenido/a a 'Los Fedorines', el fascinante mundo de los juegos que
        creamos yo y mi compañero Joaquín. En este portafolio, podrás explorar
        una variedad de emocionantes creaciones que hemos desarrollado juntos.
        Sumérgete en los desafiantes juegos de la jam Ludum Dare, donde pusimos
        a prueba nuestra creatividad y habilidades en tiempo limitado. También
        te invitamos a descubrir los juegos de mesa que hemos diseñado, con
        experiencias únicas y estrategias cautivadoras. Como dijo alguna vez un
        reconocido Albert Einstein: 'El juego es la forma más elevada de
        investigación'.
      </h2>

      <div className="flex flex-row">
        <div className="w-96 border-2 shadow rounded">
          {showGames(Game.LudumDare)}
        </div>
        <div className="w-96 border-2 shadow rounded">
          {showGames(Game.JuegoDeMesa)}
        </div>
      </div>
    </div>
  );
}

enum Game {
  LudumDare = "LudumDare",
  JuegoDeMesa = "JuegoDeMesa",
}

function showGames(game: Game) {
  let gameValues: Record<Game, any> = {
    LudumDare: {
      imagen: "/img/ludumdare-controller.svg",
      titulo: "Ludum Dare",
      resumen:
        "Ludum Dare es una competencia de creación de juegos en la que participantes de todo el mundo diseñan y desarrollan juegos en un corto período de tiempo. Es un desafío creativo donde la innovación y la diversión se combinan en experiencias únicas.",
      link: "https://ldjam.com/users/astrid/games",
    },
    JuegoDeMesa: {
      imagen: "img/ludumdare-controller.svg",
      titulo: "Juego de Mesa",
      resumen:
        "Sumérgete en un emocionante juego de mesa en desarrollo de la categoría deckbuilder. Construye tu mazo de cartas único mientras exploras estrategias, tomas decisiones tácticas y te enfrentas a desafíos intrigantes. Prepárate para una experiencia inmersiva y llena de emoción mientras descubres el mundo en constante evolución de este juego de mesa de próxima generación. ¡Prepárate para construir, competir y dominar en este emocionante juego de mesa deckbuilder en desarrollo!",
      link: "/games/my-games",
    },
  };
  return (
    <div>
      <Image
        src={gameValues[game].imagen}
        alt={""}
        width={500}
        height={500}
      ></Image>

      <div className="flex flex-col flex-wrap">
        <h2>{gameValues[game].titulo}</h2>
        <h2>{gameValues[game].resumen}</h2>
      </div>

      <button className="h-10 px-6 font-semibold rounded-md bg-white text-black">
        <a href={gameValues[game].link}>Ver más</a>
      </button>
    </div>
  );
}
