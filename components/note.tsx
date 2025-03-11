import { cn } from "@/lib/utils"
import React from "react"

export interface NoteProps {
  content: string
  className?: string
}

export function Note({ content, className }: NoteProps) {
  return (
    <article className={cn("flex gap-3", className)} role="region" aria-label="Note">
      <div className="space-y-1">
        <p className="text-sm text-foreground">
          {content.split("\n").map((line, index, contentArr) => (
            <React.Fragment key={index}>
              {line || <span className="sr-only">Empty line</span>}
              {index < contentArr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </article>
  )
}

