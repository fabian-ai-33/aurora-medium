"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import Image from "next/image"

import React from "react"

import { useBookContext } from "../../../context/BookContext"
import { useState, use } from "react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Note } from "@/components/note"
import Link from "next/link"

export default function BookDetail(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(props.params)

  const { books, addNote } = useBookContext()

  const FormSchema = z.object({
    note: z.string().min(1, {
      message: "Note must be at least 1 characters.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      note: "",
    },
  })

  const book = books.find((b) => b.id === id)

  if (!book) return <div className="container mx-auto p-4">Book not found.</div>

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addNote(book!.id, data.note)
    form.reset()
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <header className={cn("flex flex-col md:flex-row md:items-start gap-6")}>
        <div className="relative flex-shrink-0 overflow-hidden rounded-md mx-auto md:mx-0 max-w-[250px] md:max-w-[320px]">
          <Image
            src={book.imageUrl || "/placeholder.svg"}
            alt={book.title}
            width={320}
            height={480}
            className="object-cover w-full h-full transition-transform duration-300"
            priority
          />
        </div>
        <div className="space-y-4 w-full">
          <h1 className="text-2xl md:text-3xl font-bold border-b border-gray-200 pb-2 mb-2 text-center md:text-left">
            {book.title}
          </h1>
          <p className="text-gray-600 text-center md:text-left">by {book.author}</p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link target="_blank" href={book.goodreadsUrl}>
              <Button variant="outline" className="cursor-pointer w-full sm:w-auto">
                View on Goodreads
              </Button>
            </Link>

            <Link target="_blank" href={book.storeUrl}>
              <Button variant="outline" className="cursor-pointer w-full sm:w-auto">
                Buy
              </Button>
            </Link>
          </div>

          <div className="mt-6">
            <h2 className="text-xl md:text-2xl font-semibold border-b border-gray-200 pb-2 mb-4">Notes</h2>
            <div className="flex flex-col gap-4">
              <div className="space-y-4">
                {book.notes.length > 0 ? (
                  <div className="grid gap-4">
                    {book.notes.map((note, i) => (
                      <Note key={i} content={note} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm italic">No notes yet. Add your first note below.</p>
                )}
              </div>
            </div>

            <div className="pt-4 mt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Add a note</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Add a note about the book" className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs md:text-sm">
                          You can be as detailed as you want.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full md:w-auto">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

