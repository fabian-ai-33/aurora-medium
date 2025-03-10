'use client';
import Link from "next/link";
import { useBookContext } from "@/context/BookContext";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon } from "lucide-react";

export default function ReadingList() {
    const {
        books,
        readingList,
        removeFromReadingList,
        sharingEnabled,
        toggleSharing,
    } = useBookContext();
    
    const readingBooks = books.filter((book) =>
        readingList.includes(book.id)
);

return (
    <div className="">
    <h1 className="text-3xl font-bold">My Reading List</h1>
    
    
    <div className="flex ...">
    <div className="flex-1 ...">
    
    </div>
    <div className="flex-1 text-right ...">
        {sharingEnabled && (
    <Button variant="outline" className="ml-2 mr-2">
        <LinkIcon /> Share My List
    </Button>
    )}
    
    <Button onClick={toggleSharing}>
    <LinkIcon /> {sharingEnabled ? "Disable Sharing" : "Enable Sharing"}
    </Button>

    <p className="text-sm text-gray-600 mt-2">
        {sharingEnabled
            ? "Your reading list is shared with others."
            : "Your reading list is private."}
            </p>
    {sharingEnabled && <Link href="/share">
        
        </Link>}
        </div>
        </div>
        
            
            <div className="mt-4">
            
            </div>
            {readingBooks.length === 0 ? (
                <p className="mt-4">Your reading list is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {readingBooks.map((book) => (
                    <div
                    key={book.id}
                    className="border p-4 rounded shadow hover:shadow-lg transition"
                    >
                    <h2 className="text-2xl font-semibold">{book.title}</h2>
                    <p className="text-gray-600">by {book.author}</p>
                    <div className="flex space-x-2 mt-2">
                    <a
                    href={book.goodreadsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    >
                    Goodreads
                    </a>
                    <a
                    href={book.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    >
                    Buy
                    </a>
                    </div>
                    {sharingEnabled && book.notes.length > 0 && (
                        <div className="mt-4">
                        <h3 className="font-semibold">Notes:</h3>
                        <ul className="list-disc ml-6">
                        {book.notes.map((note, idx) => (
                            <li key={idx}>{note}</li>
                        ))}
                        </ul>
                        </div>
                    )}
                    <div className="mt-4">
                    <Button
                    variant="destructive"
                    onClick={() => removeFromReadingList(book.id)}
                    >
                    Remove from List
                    </Button>
                    </div>
                    </div>
                ))}
                </div>
            )}
            </div>
        );
    }
    