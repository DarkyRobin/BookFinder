export interface Book {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
}


export interface GoogleBooksResponse {
  items: {
    id: string;
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks?: { thumbnail: string };
      infoLink: string;
    };
  }[];
}