"use client";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";  

import React from "react";

import { useBookContext } from "../../../context/BookContext";
import { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod";
import { Textarea } from "@/components/ui/textarea"
import { TestimonialCard } from "./avatar-card";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

export default function BookDetail(props: {
    params: Promise<{ id: string }>
}) {
    const {id} = use(props.params);
    
    const { books, addNote, addToReadingList } = useBookContext();
    const [note, setNote] = useState("");
    
    const FormSchema = z.object({
        note: z.string().min(1, {
            message: "Note must be at least 1 characters.",
        }),
    });
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            note: "",
        },
    })
    
    const book = books.find((b) => b.id === id);
    
    if (!book) return <div className="container mx-auto p-4">Book not found.</div>;
    
    function onSubmit(data: z.infer<typeof FormSchema>) {
        addNote(book!.id, data.note);
        form.reset();
        setNote("");
        
    }
    
    return (
        <div className="">
        <h1 className="text-3xl font-bold mt-4">{book.title}</h1>
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
        <div className="mt-8">
        <h2 className="text-2xl font-semibold">Notes</h2>
            <div className="flex flex-col gap-8 mt-4">
            <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
            {book.notes.map((note, i) => (
                <TestimonialCard 
                key={i} 
                text={note}
                />
            ))}
            </div>
            </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="note"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Add a note</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Add a note about the book" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        You can be as detailed as you want.
                                    </FormDescription>
                                    
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                
            </div>
            </div>
            </div>
        );
    }
    