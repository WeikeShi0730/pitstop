export interface Teams {
  name: string;
  photos: string[];
  backgroundImg: string;
  merch: Array<{
    id: string;
    imageUrl: string;
    name: string;
    price: number;
  }>;
}
