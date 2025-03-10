'use client';

// /contexts/BookContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";

export interface Book {
  id: string;
  title: string;
  author: string;
  goodreadsUrl: string;
  storeUrl: string;
  notes: string[];
}

interface BookContextType {
  books: Book[];
  addNote: (bookId: string, note: string) => void;
  readingList: string[];
  addToReadingList: (bookId: string) => void;
  removeFromReadingList: (bookId: string) => void;
  sharingEnabled: boolean;
  toggleSharing: () => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  // Dummy data for the demo
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      goodreadsUrl: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
      storeUrl:
        "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
      notes: [
        "Hello moto"
      ],
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      goodreadsUrl: "https://www.goodreads.com/book/show/5470.1984",
      storeUrl:
        "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934",
      notes: [],
    },
    // Add more books as needed...
  ]);

  const [readingList, setReadingList] = useState<string[]>([]);
  const [sharingEnabled, setSharingEnabled] = useState<boolean>(true);

  const addNote = (bookId: string, note: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === bookId ? { ...book, notes: [...book.notes, note] } : book
      )
    );
  };

  const addToReadingList = (bookId: string) => {
    if (!readingList.includes(bookId)) {
      setReadingList([...readingList, bookId]);
    }
  };

  const removeFromReadingList = (bookId: string) => {
    setReadingList(readingList.filter((id) => id !== bookId));
  };

  const toggleSharing = () => {
    setSharingEnabled(!sharingEnabled);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addNote,
        readingList,
        addToReadingList,
        removeFromReadingList,
        sharingEnabled,
        toggleSharing,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
