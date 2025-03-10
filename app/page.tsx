"use client";
// /pages/index.tsx
import Link from "next/link";
import { useBookContext } from "../context/BookContext";
import { Button } from "@/components/ui/button";
import { BookCard } from "./book";

export default function Home() {
  const { books, addToReadingList } = useBookContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard
          key={book.id}
          title="The Lord of the Rings"
          author="J.R.R. Tolkien"
          imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fentertainment.time.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2011%2F07%2Ft100_novels_lordoftherings.jpg&f=1&nofb=1&ipt=e0bf838507383be011eb9f4c5bcb55f5fa9c5018123106ef756005fa2c97f43c&ipo=images"
        />
          // <div
          //   key={book.id}
          //   className="border p-4 rounded shadow hover:shadow-lg transition"
          // >
          //   <h2 className="text-2xl font-semibold">{book.title}</h2>
          //   <p className="text-gray-600">by {book.author}</p>
          //   <div className="flex space-x-2 mt-2">
          //     <a
          //       href={book.goodreadsUrl}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="text-blue-600 underline"
          //     >
          //       Goodreads
          //     </a>
          //     <a
          //       href={book.storeUrl}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="text-blue-600 underline"
          //     >
          //       Buy
          //     </a>
          //   </div>
          //   <div className="mt-4 flex space-x-2">
          //     <Link href={`/book/${book.id}`}>
          //       <Button variant="outline">View Book</Button>
          //     </Link>
          //     <Button onClick={() => addToReadingList(book.id)}>
          //       Add to Reading List
          //     </Button>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
