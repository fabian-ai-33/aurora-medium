"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EyeIcon } from "lucide-react"

import { useBookContext } from "@/context/BookContext"

import { useState } from "react"
import { Book, BookOpen } from "lucide-react"
import Link from "next/link"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { toast } from "sonner"

interface BookCardProps {
  id: string
  title: string
  author: string
  imageUrl: string
}

export function BookCard({ title, author, imageUrl, id }: BookCardProps) {
  const { addToReadingList, removeFromReadingList, readingList } = useBookContext()
  const [open, setOpen] = useState(false)

  const added = readingList.includes(id)

  const toggleReadingList = (id: string) => {
    if (added) {
      setOpen(true)
    } else {
      addToReadingList(id)

      toast("Added to your reading list", {
        description: `${title} `,
        action: {
          label: "Undo",
          onClick: () => removeFromReadingList(id),
        },
      })
    }
  }

  return (
    <article className="p-1 rounded-lg">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove <em>{title}</em> from your reading list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="cursor-pointer"
              onClick={() => removeFromReadingList(id)}
              aria-label={`Remove ${title} from reading list`}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Card
        className="w-80 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        role="group"
        aria-labelledby={`book-title-${id}`}
      >
        <CardContent className="">
          <figure className="overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={`Cover of ${title} by ${author}`}
              width={320}
              height={480}
              className="object-cover w-full h-full transition-transform duration-300"
            />
          </figure>
        </CardContent>

        <CardHeader className="px-4">
          <CardTitle id={`book-title-${id}`} className="text-xl font-semibold text-gray-800">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">by {author}</CardDescription>

          <div className="flex flex-col mt-4">
            <Link className="flex-grow mt-2" href={`/book/${id}`} aria-label={`View details of ${title}`}>
              <Button className="w-full cursor-pointer" variant={"outline"}>
                <EyeIcon aria-hidden="true" />
                <span>View</span>
              </Button>
            </Link>

            <div className="flex-grow mt-2">
              <Button
                onClick={() => toggleReadingList(id)}
                variant={added ? "default" : "outline"}
                className="w-full flex items-center gap-2 cursor-pointer"
                aria-pressed={added}
                aria-label={added ? `Remove ${title} from reading list` : `Add ${title} to reading list`}
              >
                {added ? (
                  <>
                    <BookOpen className="w-5 h-5" aria-hidden="true" />
                    <span>In Your Reading List</span>
                  </>
                ) : (
                  <>
                    <Book className="w-5 h-5" aria-hidden="true" />
                    <span>Add To Reading List</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </article>
  )
}

