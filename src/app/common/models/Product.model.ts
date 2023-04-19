export interface Product{
  id: string;
  name: string
  type: string
  count: number;
  price: number;
  description: string;
  img: string;
  parameters: Map<any,any>
}
