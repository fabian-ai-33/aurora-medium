import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye as EyeIcon,
  Plus as PlusIcon,
} from "lucide-react";

import { useBookContext } from "@/context/BookContext";


import React, { useState } from "react";
import { Book, BookOpen } from "lucide-react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { toast } from "sonner"

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

export function BookCard({ title, author, imageUrl, id }: BookCardProps) {
  const { books, addToReadingList, removeFromReadingList, readingList } = useBookContext();
  const [open, setOpen] = useState(false);


  const added = readingList.includes(id);
  console.log(added);

  const toggleReadingList = (id: string) => {
    if (added) {
      setOpen(true);
    } else {
      addToReadingList(id);

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
    <div className="p-1 rounded-lg">
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
            <AlertDialogAction className="cursor-pointer" onClick={() => removeFromReadingList(id)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


      <Card className="w-80 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">

        <CardContent className="">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              width={320}
              height={480}
              className="object-cover w-full h-full transition-transform duration-300"
            />
          </div>
        </CardContent>

        <CardHeader className="px-4">
          <CardTitle className="text-xl font-semibold text-gray-800">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {author}
          </CardDescription>


          <div className="flex flex-col mt-4">
            <Link className="flex-grow mt-2" href={`/book/${id}`}>
              <Button className="w-full cursor-pointer" variant={"outline"}>
                <EyeIcon /> View
              </Button>
            </Link>

            <div className="flex-grow mt-2">
              <Button
                onClick={() => toggleReadingList(id)}
                variant={added ? "default" : "outline"}
                className="w-full flex items-center gap-2 cursor-pointer"
              >
                {added ? <BookOpen className="w-5 h-5" /> : <Book className="w-5 h-5" />}
                {added ? "In Your Reading List" : "Add To Reading List"}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
