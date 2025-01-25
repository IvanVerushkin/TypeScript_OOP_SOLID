interface User {
  login: string;
  password: string;
  name: string;
  surname: string;
}

interface Comment {
  user: string;
  book: string;
  date: string;
  text: string;
}

export interface Book {
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
  fileName: string;
  fileBook: string;
  fileCover: string;
  comments: Comment[];
}