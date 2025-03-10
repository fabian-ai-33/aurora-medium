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

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

export function BookCard({ title, author, imageUrl }: BookCardProps) {
  return (
    <div className="p-1 rounded-lg">
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
          


          <Button variant={"outline"} className="mt-4 flex-1">
          <EyeIcon /> View Book
          </Button>
          <Button variant={"outline"} className="mt-4 flex-1">
          <PlusIcon />Add to Reading List
          </Button>
          
        </CardHeader>
      </Card>
    </div>
  );
}
