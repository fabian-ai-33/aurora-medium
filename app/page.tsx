"use client";

import { useBookContext } from "../context/BookContext";
import { BookCard } from "./book";

export default function Home() {
  const { books } = useBookContext();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Available Books</h1>
      <p className="mb-4">
        Here are some books you might like. Click to view the book, add notes or add them to your reading list.
      </p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
        {books.map((book) => (
          <BookCard
            key={book.id}
            {...book}
          />
        ))}
      </div>
    </div>
  );
}
