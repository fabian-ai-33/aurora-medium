'use client';

import { createContext, useState, useContext, ReactNode } from "react";

export interface Book {
  id: string;
  title: string;
  author: string;
  goodreadsUrl: string;
  storeUrl: string;
  notes: string[];
  imageUrl: string;
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
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      goodreadsUrl: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
      storeUrl: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      goodreadsUrl: "https://www.goodreads.com/book/show/5470.1984",
      storeUrl: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "3",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      goodreadsUrl: "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird",
      storeUrl: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      goodreadsUrl: "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice",
      storeUrl: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "5",
      title: "Moby-Dick",
      author: "Herman Melville",
      goodreadsUrl: "https://www.goodreads.com/book/show/153747.Moby_Dick_or_the_Whale",
      storeUrl: "https://www.amazon.com/Moby-Dick-Herman-Melville/dp/1503280780",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "6",
      title: "War and Peace",
      author: "Leo Tolstoy",
      goodreadsUrl: "https://www.goodreads.com/book/show/656.War_and_Peace",
      storeUrl: "https://www.amazon.com/War-Peace-Leo-Tolstoy/dp/1420958613",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "7",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      goodreadsUrl: "https://www.goodreads.com/book/show/5107.The_Catcher_in_the_Rye",
      storeUrl: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "8",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      goodreadsUrl: "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings",
      storeUrl: "https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0544003411",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "9",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      goodreadsUrl: "https://www.goodreads.com/book/show/5907.The_Hobbit",
      storeUrl: "https://www.amazon.com/Hobbit-J-R-R-Tolkien/dp/054792822X",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "10",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      goodreadsUrl: "https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone",
      storeUrl: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "11",
      title: "The Lion, the Witch and the Wardrobe",
      author: "C.S. Lewis",
      goodreadsUrl: "https://www.goodreads.com/book/show/100915.The_Lion_the_Witch_and_the_Wardrobe",
      storeUrl: "https://www.amazon.com/Lion-Witch-Wardrobe-C-S-Lewis/dp/0064404994",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "12",
      title: "Animal Farm",
      author: "George Orwell",
      goodreadsUrl: "https://www.goodreads.com/book/show/7613.Animal_Farm",
      storeUrl: "https://www.amazon.com/Animal-Farm-George-Orwell/dp/0451526341",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "13",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      goodreadsUrl: "https://www.goodreads.com/book/show/7144.Crime_and_Punishment",
      storeUrl: "https://www.amazon.com/Crime-Punishment-Fyodor-Dostoyevsky/dp/0486415872",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "14",
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      goodreadsUrl: "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude",
      storeUrl: "https://www.amazon.com/One-Hundred-Years-Solitude-Harperperennial/dp/0060883286",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "15",
      title: "Brave New World",
      author: "Aldous Huxley",
      goodreadsUrl: "https://www.goodreads.com/book/show/5129.Brave_New_World",
      storeUrl: "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "16",
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      goodreadsUrl: "https://www.goodreads.com/book/show/10210.Jane_Eyre",
      storeUrl: "https://www.amazon.com/Jane-Eyre-Charlotte-Bront/dp/0141441143",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "17",
      title: "Wuthering Heights",
      author: "Emily Brontë",
      goodreadsUrl: "https://www.goodreads.com/book/show/6183.Wuthering_Heights",
      storeUrl: "https://www.amazon.com/Wuthering-Heights-Emily-Bronte/dp/0141439556",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "18",
      title: "The Odyssey",
      author: "Homer",
      goodreadsUrl: "https://www.goodreads.com/book/show/1381.The_Odyssey",
      storeUrl: "https://www.amazon.com/Odyssey-Homer/dp/0140268863",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "19",
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      goodreadsUrl: "https://www.goodreads.com/book/show/3836.Don_Quixote",
      storeUrl: "https://www.amazon.com/Don-Quixote-Miguel-de-Cervantes/dp/0060934344",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    },
    {
      id: "20",
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      goodreadsUrl: "https://www.goodreads.com/book/show/880.The_Divine_Comedy",
      storeUrl: "https://www.amazon.com/Divine-Comedy-Dante-Alighieri/dp/0142437220",
      notes: [
        
      ],
      imageUrl: "https://placehold.co/320x480/png"
    }
  ]);

  const [readingList, setReadingList] = useState<string[]>([]);
  const [sharingEnabled, setSharingEnabled] = useState<boolean>(false);

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
