import {Product} from "./Product.model";

export interface Cart{
  id ?: String;
  products: Array<Product>;
  finalPrice: number;
  time: String;
  email: String;
  name: String;
  address: String;
}
