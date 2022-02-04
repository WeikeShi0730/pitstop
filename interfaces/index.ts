export interface Team {
  id: string;
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

export interface SignInType {
  email: string;
  password: string;
}
export interface SignUpType {
  displayName: string;
  email: string;
  password: string;
}
