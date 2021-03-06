import { ID } from '@datorama/akita';

export interface AdditionalData {
  price?: number;
  productAdjective?: string;
  productMaterial?: string;
  description?: string;
  department?: string;
  color?: string;
  title?: string;

  image?: string;

}

export interface BaseProduct {
    id?: ID;
    title?: string;
    price?: number;
    description?: string;
    image?: string;
}

export interface Product extends BaseProduct {
  additionalData?: AdditionalData;
}
