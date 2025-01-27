import { Label as LabelUI } from "@/components/ui/label"
// import { InputHTMLAttributes } from "react";

type LabelProps = {
  isRequired?: boolean;
  htmlFor: string;
  value: string;
};


export default function Label({ isRequired, htmlFor, value, ...props}: LabelProps){
     return     <LabelUI 
                    htmlFor={htmlFor}
                    {...props}
               >
                    {value}{isRequired ? <span className="text-danger">*</span> : false}
               </LabelUI>
}