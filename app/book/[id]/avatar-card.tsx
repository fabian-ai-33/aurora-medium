import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {Card} from "@/components/ui/card"

export interface TestimonialCardProps {
  text: string
  className?: string
}

export function TestimonialCard({ 
  text,
  className
}: TestimonialCardProps) {  
  return (
    <Card
      className={cn(
        "flex flex-1 rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80" />
        </Avatar>
        <div className="flex flex-col items-start">
        <p className="sm:text-md text-sm text-muted-foreground">
        {text}
      </p>
        </div>
      </div>
     
    </Card>
  )
}