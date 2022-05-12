export interface Product {
    title: string;
    previewImgUrl: string;
  }
  
  export interface BookResponse {
    totalItems: number;
    products: Product[];
  }
  export interface SearchFilters {
    text: string;
  }
  
//   export interface BooksSearchFilters {
//     term: string;
//     itemsPerPage: number;
//     page: number;
//   }