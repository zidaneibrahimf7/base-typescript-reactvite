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
import { ComponentProps, ReactNode } from "react"

type AlertProps = {
     trigger: ReactNode,
     title: string,
     description: string,
     content: ReactNode,
     onSubmit: () => void,
     onClose: () => void
} & ComponentProps<typeof AlertDialog>

export default function Confirmation({
     trigger,
     title = "Are you absolutely sure?",
     description = " This action cannot be undone",
     content,
     onSubmit,
     onClose,
     ...props
}: AlertProps){
     return (
          <AlertDialog {...props}>
               <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
               <AlertDialogContent>
                    <AlertDialogHeader>
                         <AlertDialogTitle>{title}</AlertDialogTitle>
                         <AlertDialogDescription>{description}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                         <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
                         <AlertDialogAction onClick={onSubmit}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
               </AlertDialogContent>
          </AlertDialog>
     )
}