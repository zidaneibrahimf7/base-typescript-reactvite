import { cn } from "@/lib/utils";
import React from "react";

type FieldsetProps = {
     children: React.ReactNode,
     title: string
     className?: string
}

export default function Fieldset({children, title, className}: FieldsetProps){
     return (
          <fieldset className={cn('border border-primary rounded-lg flex gap-2 mt-3 py-5 p-4', className)}>
                    <legend>{title}</legend>
                    {children}
          </fieldset>
     )
}