"use client";

import Image from "next/image";
import { JSX, useEffect, useState } from "react";

export default function Home() {
  var [date, setDate] = useState<Date>(new Date());
  var [showTime, setShowTime] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setShowTime(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center h-[100vh]">
      <div className="content-start">
        <div className="flex flex-wrap flex-col">
          <div className="flex flex-row flex-wrap items-center justify-center">
            {date.getHours() > 6 && date.getHours() < 18 ? (
              <Image
                src="/img/sol.svg"
                alt={""}
                width={100}
                height={100}
              ></Image>
            ) : (
              <Image
                src="/img/luna.svg"
                alt={""}
                width={100}
                height={100}
              ></Image>
            )}
            <div className="flex flex-col flex-1 flex-wrap">
              <h2 className="text-xl">{showTime}</h2>
              <h2>{currentSeason(date.getMonth(), date.getDate())}</h2>
            </div>
          </div>
        </div>

        <div className="w-64 border-2 shadow rounded flex flex-row">
          {hearts(3)}
        </div>

        <div className="w-96 border-2 shadow rounded flex flex-wrap">
          {currentMood(Mood.Triste)}
        </div>

        <div className="w-96 border-2 shadow rounded">
          <div className="flex flex-row">
            {showButtons(ImageButton.Proyectos)}

            {showButtons(ImageButton.GitHub)}

            {showButtons(ImageButton.Games)}
          </div>
          <div className="flex flex-row">
            {showButtons(ImageButton.Instagram)}

            {showButtons(ImageButton.ArtStation)}

            {showButtons(ImageButton.YouTube)}
          </div>
        </div>
      </div>

      <div className="h-500 w-500 bg-red border-4">
        <Image
          src="/img/astrid.svg"
          alt={""}
          width={500}
          height={500}
          z-1
        ></Image>
      </div>
    </div>
  );
}

enum Season {
  Verano = "Verano",
  Otoño = "Otoño",
  Invierno = "Invierno",
  Primavera = "Primavera",
}

function currentSeason(month: number, day: number): Season {
  let seasons: { [month: number]: (day: number) => Season } = {
    0: (_) => Season.Verano,
    1: (_) => Season.Verano,
    2: (day: number) => (day < 21 ? Season.Verano : Season.Otoño),
    3: (_) => Season.Otoño,
    4: (_) => Season.Otoño,
    5: (day: number) => (day < 21 ? Season.Otoño : Season.Invierno),
    6: (_) => Season.Invierno,
    7: (_) => Season.Invierno,
    8: (day: number) => (day < 21 ? Season.Invierno : Season.Primavera),
    9: (_) => Season.Primavera,
    10: (_) => Season.Primavera,
    11: (day: number) => (day < 21 ? Season.Primavera : Season.Verano),
  };

  return seasons[month](day);
}

function hearts(filled: number): JSX.Element[] {
  let result = [];
  for (let heart = 0; heart <= 4; heart++) {
    result.push(
      <Image
        key={heart}
        src={heart < filled ? "Profile/img/heart.svg" : "/img/heart-line.svg"}
        alt={""}
        width={50}
        height={50}
      ></Image>
    );
  }
  return result;
}

enum Mood {
  Feliz = "Feliz",
  Vacaciones = "Vacaciones",
  Enferma = "Enferma",
  PreocupadaApretada = "PreocupadaApretada",
  PreocupadaTranquila = "PreocupadaTranquila",
  Triste = "Triste",
}

function currentMood(mood: Mood) {
  let moodValues: Record<Mood, any> = {
    Feliz: {
      imagen: "Profile/img/feliz.svg",
      texto:
        "Estoy con pocos proyectos, por lo que tengo tiempo disponible ◕⩊◕",
    },
    Vacaciones: {
      imagen: "Profile/img/vacaciones.svg",
      texto:
        "Estoy de vacaciones. Si me mandas un email o mensaje, lo voy a contestar de a partir del: **/** , perdón ૮₍ ˃ ⤙ ˂ ₎ა",
    },
    Enferma: {
      imagen: "Profile/img/enferma.svg",
      texto:
        "Estoy enferma, asi que por el momento no voy a contestar emails y/omensajes, perdón ૮₍ ˃ ⤙ ˂ ₎ა",
    },
    PreocupadaApretada: {
      imagen: "Profile/img/preocupada-apretada.svg",
      texto:
        "Estoy en momentos cruciales con varios proyectos. Si me mandas un email o mensaje, lo voy a contestar tarde, perdón ૮₍ ˃ ⤙ ˂ ₎ა",
    },
    PreocupadaTranquila: {
      imagen: "Profile/img/preocupada-tranquila.svg",
      texto: "Estoy con proyectos, pero aun hay lugar para uno más ◕⩊◕",
    },
    Triste: {
      imagen: "Profile/img/triste.svg",
      texto:
        "Estoy ocupadísimas con varios proyectos. Si me mandas un email o mensaje, lo voy a contestar tarde, perdón ૮₍ ˃ ⤙ ˂ ₎ა",
    },
  };
  return (
    <div className="flex flex-row">
      <Image
        src={moodValues[mood].imagen}
        alt={""}
        width={100}
        height={100}
      ></Image>
      <div className="flex flex-col">
        <h1>Mood:</h1>
        <h2>{moodValues[mood].texto}</h2>
      </div>
    </div>
  );
}

enum ImageButton {
  Proyectos = "Proyectos",
  ArtStation = "ArtStation",
  Games = "Games",
  Instagram = "Instagram",
  GitHub = "GitHub",
  YouTube = "YouTube",
}

function showButtons(button: ImageButton) {
  let buttonValues: Record<ImageButton, any> = {
    Proyectos: {
      imagen: "Profile/img/boton-proyects.svg",
      link: "/proyects",
    },
    ArtStation: {
      imagen: "Profile/img/boton-artstation.svg",
      link: "https://www.artstation.com/astridkittten",
    },
    Games: {
      imagen: "Profile/img/boton-games.svg",
      link: "/games",
    },
    Instagram: {
      imagen: "Profile/img/boton-instagram.svg",
      link: "https://www.instagram.com/astrid_nyaa/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    GitHub: {
      imagen: "Profile/img/boton-github.svg",
      link: "https://github.com/AngelaHCobos",
    },
    YouTube: {
      imagen: "Profile/img/boton-youtube.svg",
      link: "https://www.youtube.com/@paraparalat",
    },
  };
  return (
    <div>
      <button>
        <a href={buttonValues[button].link}>
          <Image
            src={buttonValues[button].imagen}
            alt={""}
            width={100}
            height={100}
          ></Image>
        </a>
      </button>
    </div>
  );
}
