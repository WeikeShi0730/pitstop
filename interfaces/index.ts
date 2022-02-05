// interface Product {
//   id: string;
//   imageUrl: string;
//   name: string;
//   price: number;
// }

export interface ProductType {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}
// export interface ProductsListType {
//   productsList: ProductType[];
// }
export interface TeamType {
  id: string;
  name: string;
  photos: string[];
  backgroundImg: string;
  productsList: ProductType[];
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
