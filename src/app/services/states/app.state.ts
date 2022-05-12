import { Injectable } from "@angular/core";
import { Query, Store, StoreConfig } from "@datorama/akita";

export interface IAppState {
    isRTL: boolean;
    isLoading: boolean;
}

// Store Service:
@StoreConfig({name: 'app'})
export class AppStore extends Store<IAppState> {
    public constructor() {
        const initialState: IAppState = {
            isRTL: true,
            isLoading: false
        };
        super(initialState);
    }
}

// Query Serive:
@Injectable({providedIn: 'root'})
export class AppQuery extends Query<IAppState> {
    
    public constructor(protected override store: AppStore) {
        super(store);
    }
}