'use client';

import { useBookContext } from "@/context/BookContext";
import { Button } from "@/components/ui/button";
import { BookCard } from "../../book";
import Link from "next/link";
import { Ban as BanIcon } from "lucide-react";


export default function PublicReadingList() {
    const {
        books,
        readingList,
        sharingEnabled,
    } = useBookContext();

    const readingBooks = books.filter((book) =>
        readingList.includes(book.id)
    );

    if (!sharingEnabled) {
        return (
            <div className="flex flex-col items-center justify-center px-4 py-12">
                <div className="mx-auto max-w-md space-y-4 text-center">
                    <div className="flex items-center justify-center">
                        <BanIcon className="h-16 w-16 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Reading List Unavailable</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        The owner of this reading list has disabled sharing.
                    </p>
                    <Link
                        href="/"
                    >
                        <Button className="cursor-pointer">
                            Go Home
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }


    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Public Reading List</h1>
            <p className="mb-4 text-sm sm:text-base">
                {readingBooks.length} books in this list.
            </p>
            {readingBooks.length === 0 ? (
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="mx-auto max-w-md space-y-4 text-center">
                        <div className="flex items-center justify-center">
                            {/* <BanIcon className="h-16 w-16 text-red-500" /> */}
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">No books in this list</h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            There are no books in this reading list.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
                    {readingBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            {...book}
                        />
                    ))}
                </div>
            )
            }
        </div >
    );
}
