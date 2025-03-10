"use client"

import Link from "next/link"
import { useBookContext } from "@/context/BookContext"
import { Button } from "@/components/ui/button"
import { CopyIcon, LinkIcon } from "lucide-react"
import { BookCard } from "../book"
import { useState } from "react"
import copy from "copy-to-clipboard"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ReadingList() {
    const { books, readingList, sharingEnabled, toggleSharing } = useBookContext()
    const [showShareDialog, setShowShareDialog] = useState(false)

    const readingBooks = books.filter((book) => readingList.includes(book.id))

    const shareUrl = `/public/reading-list`

    return (
        <div className="p-4">
            <Dialog open={showShareDialog} onOpenChange={() => setShowShareDialog(false)}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                                Link
                            </Label>
                            <Input id="link" defaultValue={shareUrl} readOnly />
                        </div>
                        <Button onClick={() => copy(shareUrl)} type="submit" size="sm" className="px-3">
                            <span className="sr-only">Copy</span>
                            <CopyIcon className="h-4 w-4" />
                        </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 mb-6">
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">My Reading List</h1>
                    <p className="mb-4 text-sm sm:text-base">
                        {sharingEnabled ? "Your reading list is shared with others." : "Your reading list is private."}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:text-right sm:justify-end">
                    {sharingEnabled && (
                        <Button onClick={() => setShowShareDialog(true)} variant="outline" className="w-full sm:w-auto">
                            <LinkIcon className="h-4 w-4 mr-2" /> Share My List
                        </Button>
                    )}

                    <Button onClick={toggleSharing} className="w-full sm:w-auto">
                        {sharingEnabled ? "Disable Sharing" : "Enable Sharing"}
                    </Button>
                </div>
            </div>

            {readingBooks.length === 0 ? (
                <div className="flex flex-col items-center justify-center px-4 py-8">
                    <div className="mx-auto max-w-md space-y-4 text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                            No books in your list
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Add some books to your reading list to see them here.
                        </p>
                        <Link href="/" className="block mt-4">
                            <Button className="w-full sm:w-auto">View Books</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
                    {readingBooks.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>
            )}
        </div>
    )
}

