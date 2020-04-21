import { ID } from '@datorama/akita';

export interface Product {
  additionalData?: AdditionalData;
    id?: ID;
    title?: string;
    price?: number;
    description?: string;
    image?: string;
}
export interface CartItem {

  productId: Product['id'];
    quantity: number;
    total: number;

}
export interface AdditionalData {
  id?: ID;
  title?: string;
  price?: number;
  description?: string;
  image?: string;

  productAdjective?: string;
  productMaterial?: string;

  department?: string;
  color?: string;
}

export function createCartItem(params: Partial<CartItem>) {
    return {
      total: 0,
      quantity: 1,
      ...params
    } as CartItem;
  }
export interface SearchResults {
    query: string;
    results: SearchResult[];
  }

export interface SearchResult {
    path: string;
    title: string;
    type: string;
    titleWords: string;
    keywords: string;
    topics: string;
    deprecated: boolean;
  }

export interface SearchArea {
    name: string;
    pages: SearchResult[];
    priorityPages: SearchResult[];
  }


