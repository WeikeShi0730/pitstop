// interface productsList {
//   id: string;
//   imageUrl: string;
//   name: string;
//   price: number;
// }
import { TeamType } from "../interfaces/index";
import { v4 as uuidv4 } from "uuid";

export const teams: TeamType[] = [
  {
    id: "mercedes",
    name: "Mercedes",
    fullname: "Mercedes-AMG Petronas F1 Team",
    photos: [
      "https://i.ibb.co/sRmnv9L/image.jpg",
      "https://i.ibb.co/fF0rWmQ/1.jpg",
      "https://i.ibb.co/CQYWdk1/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/LPc2pzj/Mercedes.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/mercedes/Angry Toto face.jpg",
        name: "Angry Toto face",
        price: 1.98,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mercedes/Lewis Hamilton's helmet.jpg",
        name: "Lewis Hamilton's helmet",
        price: 2.48,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mercedes/Lewis Hamilton figure.jpg",
        name: "Lewis Hamilton figure",
        price: 2.58,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mercedes/Angry Toto team radio.jpg",
        name: "Angry Toto team radio",
        price: 2.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mercedes/Valtteri Bottas number.jpg",
        name: "Valtteri Bottas number",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mercedes/Valtteri Bottas leaderboard.jpg",
        name: "Valtteri Bottas leaderboard",
        price: 1.98,
      },
    ],
  },
  {
    id: "redbull",
    name: "Red Bull",
    fullname: "Red Bull Racing",
    photos: [
      "https://i.ibb.co/6H5RfPB/image.png",
      "https://i.ibb.co/wCMGngx/1.jpg",
      "https://i.ibb.co/HF3S0Zc/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/bRR5vCG/Red-Bull.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/red bull/Max Verstappen symbol.jpg",
        name: "Max Verstappen symbol",
        price: 2.48,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/red bull/Max Verstappen number.jpg",
        name: "Max Verstappen number",
        price: 1.98,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/red bull/Sergio Pérez leaderboard.jpg",
        name: "Sergio Pérez leaderboard",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/red bull/Red Bull 2021 Car Japanese livery.jpg",
        name: "Red Bull 2021 Car Japanese livery",
        price: 1.98,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/red bull/Sergio Pérez podium.jpg",
        name: "Sergio Pérez podium",
        price: 2.28,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/red bull/Sergio Pérez figure.jpg",
        name: "Sergio Pérez figure",
        price: 2.08,
      },
    ],
  },
  {
    id: "ferrari",
    name: "Ferrari",
    fullname: "Scuderia Ferrari",
    photos: [
      "https://i.ibb.co/b7Fh3Kv/image.png",
      "https://i.ibb.co/XFbT34Q/1.jpg",
      "https://i.ibb.co/B6XSdH2/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/qsRdZTC/Ferrari.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/ferrari/Carlos and Charles.jpg",
        name: "Carlos and Charles",
        price: 2.58,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/ferrari/Carlos Sainz chilli.jpg",
        name: "Carlos Sainz chilli",
        price: 1.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/ferrari/Mattia Binotto sad face.jpg",
        name: "Mattia Binotto sad face",
        price: 1.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/ferrari/Carlos Sainz's helmet.jpg",
        name: "Carlos Sainz's helmet",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/ferrari/Charles Leclerc figure.jpg",
        name: "Charles Leclerc figure",
        price: 2.08,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/ferrari/Ferrari 2021 car.jpg",
        name: "Ferrari 2021 car",
        price: 2.58,
      },
    ],
  },
  {
    id: "mclaren",
    name: "McLaren",
    fullname: "McLaren F1 Team",
    photos: [
      "https://i.ibb.co/0rrx1VC/image.jpg",
      "https://i.ibb.co/mc96Ymq/1.jpg",
      "https://i.ibb.co/Ct7F53x/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/F45S9tZ/McLaren.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/Lando Norris' helmet.jpg",
        name: "Lando Norris' helmet",
        price: 2.28,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/Daniel Ricciardo shoey.jpg",
        name: "Daniel Ricciardo shoey",
        price: 2.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/McLaren team shoey.jpg",
        name: "McLaren team shoey",
        price: 2.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/Daniel and Lando.jpg",
        name: "Daniel and Lando",
        price: 2.18,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/McLaren 2021 car.jpg",
        name: "McLaren 2021 car",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/Daniel Ricciardo's helmet.jpg",
        name: "Daniel Ricciardo's helmet",
        price: 1.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/mclaren/Team one-two finish at Monza.jpg",
        name: "Team one-two finish at Monza",
        price: 2.68,
      },
    ],
  },
  {
    id: "alpine",
    name: "Alpine",
    fullname: "Alpine F1 Team",
    photos: [
      "https://i.ibb.co/4pMddxq/image.jpg",
      "https://i.ibb.co/6NjwWb0/1.jpg",
      "https://i.ibb.co/7K5MMgB/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/rt3hz4N/Alpine.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/alpine/Alpine 2021 car.jpg",
        name: "Alpine 2021 car",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpine/Esteban Ocon number.jpg",
        name: "Esteban Ocon number",
        price: 1.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpine/Fernando Alonso leaderboard.jpg",
        name: "Fernando Alonso leaderboard",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpine/Fernando Alonso Spain flag.jpg",
        name: "Fernando Alonso Spain flag",
        price: 1.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpine/Alpine F1 team logo.jpg",
        name: "Alpine F1 team logo",
        price: 1.98,
      },
    ],
  },
  {
    id: "astonmartin",
    name: "Aston Martin",
    fullname: "Aston Martin Aramco Cognizant F1 Team",
    photos: [
      "https://i.ibb.co/5KLbV6b/image.jpg",
      "https://i.ibb.co/p2B9QTZ/1.jpg",
      " https://i.ibb.co/2d7wSqr/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/wrQL5hg/Aston-Martin.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/aston martin/Sebastian Vettel number.jpg",
        name: "Sebastian Vettel number",
        price: 1.98,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/aston martin/Sebastian Vettel cartoon figure.jpg",
        name: "Sebastian Vettel cartoon figure",
        price: 2.38,
      },
      {
        id: uuidv4(),
        imageUrl:
          "/products/aston martin/Sebastian Vettel sarcastic team radio.jpg",
        name: "Sebastian Vettel sarcastic team radio",
        price: 2.28,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/aston martin/Lance Stroll leaderboard.jpg",
        name: "Lance Stroll leaderboard",
        price: 1.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/aston martin/Sebastian Vettel car.jpg",
        name: "Sebastian Vettel car",
        price: 2.08,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/aston martin/Aston Martin F1 team logo.jpg",
        name: "Aston Martin F1 team logo",
        price: 1.98,
      },
    ],
  },
  {
    id: "alphatauri",
    name: "Alpha Tauri",
    fullname: "Scuderia AlphaTauri",
    photos: [
      "https://i.ibb.co/pwjTCx9/image.jpg",
      "https://i.ibb.co/NpRnsPL/1.jpg",
      "https://i.ibb.co/B2V3dZR/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/7pWVRm0/Alpha-Tauri.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/alpha tauri/Yuki Tsunoda in Japanese.jpg",
        name: "Yuki Tsunoda in Japanese",
        price: 1.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpha tauri/Pierre Gasly leaderboard.jpg",
        name: "Pierre Gasly leaderboard",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpha tauri/Yuki Tsunoda leaderboard.jpg",
        name: "Yuki Tsunoda leaderboard",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpha tauri/Pierre Gasly podium.jpg",
        name: "Pierre Gasly podium",
        price: 2.28,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alpha tauri/Yuki and Pierre.jpg",
        name: "Yuki and Pierre",
        price: 2.08,
      },
    ],
  },
  {
    id: "alfaromeo",
    name: "Alfa Romeo",
    fullname: "Alfa Romeo F1 Team ORLEN",
    photos: [
      "https://i.ibb.co/RS9GyGT/image.jpg",
      "https://i.ibb.co/jV5HSW4/1.jpg",
      "https://i.ibb.co/kQPqPTk/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/RQQ8yt3/Alfa-Romeo.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/alfa romeo/Kimi Räikkönen figure.jpg",
        name: "Kimi Räikkönen figure",
        price: 2.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alfa romeo/Alfa Romeo 2021 car.jpg",
        name: "Alfa Romeo 2021 car",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alfa romeo/Antonio Giovinazzi leaderboard.jpg",
        name: "Antonio Giovinazzi leaderboard",
        price: 1.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/alfa romeo/Kimi Räikkönen leaderboard.jpg",
        name: "Kimi Räikkönen leaderboard",
        price: 1.98,
      },
    ],
  },
  {
    id: "williams",
    name: "Williams",
    fullname: "Williams Racing",
    photos: [
      "https://i.ibb.co/2nCGNkp/image.jpg",
      "https://i.ibb.co/7WRX1Nw/1.jpg",
      "https://i.ibb.co/jgCXWp6/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/fks0CJq/Williams.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/williams/Nicholas Latifi headshot.jpg",
        name: "Nicholas Latifi headshot",
        price: 1.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/williams/George Russell number.jpg",
        name: "George Russell number",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/williams/Nicholas Latifi figure.jpg",
        name: "Nicholas Latifi figure",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/williams/George Russell facts.jpg",
        name: "George Russell facts",
        price: 1.98,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/williams/Williams F1 team logo.jpg",
        name: "Williams F1 team logo",
        price: 1.88,
      },
    ],
  },
  {
    id: "haas",
    name: "Haas",
    fullname: "Uralkali Haas F1 Team",
    photos: [
      "https://i.ibb.co/p45BB2Q/image.jpg",
      "https://i.ibb.co/dDfVb19/1.jpg",
      "https://i.ibb.co/qMtN2KF/2.jpg",
    ],
    backgroundImg: "https://i.ibb.co/0j9Msc3/Haas.png",
    productsList: [
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Haas F1 team logo.jpg",
        name: "Haas F1 team logo",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Nikita Mazepin leaderboard.jpg",
        name: "Nikita Mazepin leaderboard",
        price: 1.68,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Mick Schumacher leaderboard.jpg",
        name: "Mick Schumacher leaderboard",
        price: 1.78,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Haas 2021 car.jpg",
        name: "Haas 2021 car",
        price: 1.98,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Nikita Mazespin.jpg",
        name: "Nikita Mazespin",
        price: 1.88,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Very angry Steiner.jpg",
        name: "Very angry Steiner",
        price: 2.58,
      },
      {
        id: uuidv4(),
        imageUrl: "/products/haas/Mick Schumacher figure.jpg",
        name: "Mick Schumacher figure",
        price: 1.88,
      },
    ],
  },
];
