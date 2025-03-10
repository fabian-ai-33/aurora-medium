import { cn } from "@/lib/utils"
import React from "react"

export interface NoteProps {
  content: string
  className?: string
}

export function Note({ content, className }: NoteProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <div className="space-y-1">
        <p className="text-sm text-foreground">
          {content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}

