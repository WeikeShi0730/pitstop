// interface Merch {
//   id: string;
//   imageUrl: string;
//   name: string;
//   price: number;
// }
interface Team {
  name: string;
  photos: string[];
  merch: {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
  }[];
}

export const teams: Team[] = [
  {
    name: "Mercedes",
    photos: [],
    merch: [
      {
        id: "",
        imageUrl: "",
        name: "",
        price: 0,
      },
    ],
  },
  {
    name: "Red Bull",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Ferrari",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Mclaren",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Alpine",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Aston Martin",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Alpha Tauri",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Alfa Romeo",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Williams",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
  {
    name: "Hass",
    photos: [],
    merch: [{ id: "", imageUrl: "", name: "", price: 0 }],
  },
];
