"use client"

import { useBookContext } from "@/context/BookContext"
import { Button } from "@/components/ui/button"
import { BookCard } from "@/components/book"
import Link from "next/link"
import { BanIcon } from "lucide-react"

export default function PublicReadingList() {
  const { books, readingList, sharingEnabled } = useBookContext()

  const readingBooks = books.filter((book) => readingList.includes(book.id))

  if (!sharingEnabled) {
    return (
      <main className="flex flex-col items-center justify-center px-4 py-12">
        <section className="mx-auto max-w-md space-y-4 text-center" aria-labelledby="unavailable-heading">
          <div className="flex items-center justify-center">
            <BanIcon className="h-16 w-16 text-red-500" aria-hidden="true" />
            <span className="sr-only">Access denied</span>
          </div>
          <h1 id="unavailable-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Reading List Unavailable
          </h1>
          <p className="text-gray-600 dark:text-gray-400">The owner of this reading list has disabled sharing.</p>
          <Link href="/" aria-label="Return to home page">
            <Button className="cursor-pointer">Go Home</Button>
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Public Reading List</h1>
        <p className="mb-4 text-sm sm:text-base">
          {readingBooks.length} {readingBooks.length === 1 ? "book" : "books"} in this list.
        </p>
      </header>

      {readingBooks.length === 0 ? (
        <section className="flex flex-col items-center justify-center px-4" aria-labelledby="empty-list-heading">
          <div className="mx-auto max-w-md space-y-4 text-center">
            <h2 id="empty-list-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              No books in this list
            </h2>
            <p className="text-gray-600 dark:text-gray-400">There are no books in this reading list.</p>
          </div>
        </section>
      ) : (
        <section aria-label="Public reading list books">
          <div
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center"
            role="list"
            aria-label="Books in the public reading list"
          >
            {readingBooks.map((book) => (
              <div key={book.id} role="listitem">
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

