import { Injectable } from "@angular/core";
import { Query, Store, StoreConfig } from "@datorama/akita";

export interface IProsuctsState {
    productsList: Product[];
}
export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
  };

// Store Service:
@StoreConfig({name: 'product'})
export class ProductsStore extends Store<IProsuctsState> {
    public constructor() {
        const initialState: IProsuctsState = {
            productsList:[]
        };
        super(initialState);
    }
}

// Query Serive:
@Injectable({providedIn: 'root'})
export class ProductsQuery extends Query<IProsuctsState> {
    
    public constructor(protected override store: ProductsStore) {
        super(store);
    }
}