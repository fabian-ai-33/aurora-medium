"use client"

import { useBookContext } from "@/context/BookContext"
import { BookCard } from "@/components/book"

export default function Home() {
  const { books } = useBookContext()

  return (
    <main className="p-4">
      <header>
        <h1 className="text-3xl font-bold mb-4">Available Books</h1>
        <p className="mb-4">
          Here are some books you might like. Click to view the book, add notes or add them to your reading list.
        </p>
      </header>

      <section aria-labelledby="books-heading">
        <h2 id="books-heading" className="sr-only">
          Book Collection
        </h2>
        <div
          className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center"
          role="list"
          aria-label="Available books"
        >
          {books.map((book) => (
            <div key={book.id} role="listitem">
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

