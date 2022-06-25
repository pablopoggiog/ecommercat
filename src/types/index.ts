export type ProductType = string; // TO DO: change to specific product types

export interface RawProduct {
  name: string;
  type: ProductType;
  price: number;
  image: string;
  head: string;
  tail: string;
}

export interface Product {
  name: string;
  type: ProductType;
  price: number;
  image: string;
  id: string;
}
