import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react";

type ModalProps = {
     title?: string,
     description?: string,
     trigger?: ReactNode; // Elemen pemicu modal
     content: ReactNode
     className?: string
} & React.ComponentProps<typeof Dialog>;

export default function Modal({
     title = "Modal Title",
     description = "Modal Description",
     trigger,
     content,
     className,
     ...props
}: ModalProps){
     return (
         <Dialog {...props}>
               <DialogTrigger asChild>{trigger}</DialogTrigger>
               <DialogContent className={className}>
                    <DialogHeader>
                         <DialogTitle>{title}</DialogTitle>
                         <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    {content}
               </DialogContent>
           </Dialog>
     )
}