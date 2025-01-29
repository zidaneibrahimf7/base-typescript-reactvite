import { Form } from "@/components/custom/Form"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useForm } from "@tanstack/react-form"
import { TiWorld } from "react-icons/ti"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import TitleText from "../TitleText"
import Label from "@/components/custom/Form/label"
import { Input } from "@/components/custom/Form/input"


export default function RegisterPage(){

     const navigate = useNavigate()
     const form = useForm({
          defaultValues: {
               firstName: '',
               lastName: '',
               username: ''
          },
          onSubmit: async({value}) => {
               const {username} = value

               let params = {
                    username,
               }

               if(params){
                    toast.success('Login Success!')
                    navigate('/playground')
               }
          }
     })

      return (
          <main className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                <div className={cn("flex flex-col gap-3")}>
                    <div>
                         <Card className="overflow-hidden">
                              <CardContent className="grid grid-cols-2 gap-4 p-0">
                                   {/* Kolom Kiri */}
                                   <div className="relative block bg-muted">
                                        <TiWorld
                                             size={200}
                                             className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
                                        />
                                   </div>

                                   {/* Kolom Kanan (col-span-2) */}
                                   <Form form={form} className="p-6 md:p-8">
                                        <div className="flex flex-col gap-6">
                                             <TitleText title="Sign Up" text="Create your account for free" />
                                             
                                             <div className="flex gap-2">
                                                  <form.Field
                                                       name="firstName"
                                                       children={(field) => {
                                                            return (
                                                                 <div className="grid gap-2">
                                                                           <Label htmlFor={field.name} isRequired value="First Name" />
                                                                           <Input 
                                                                                name={field.name}
                                                                                id={field.name}
                                                                                type="text"
                                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                                                placeholder="First Name"
                                                                                required
                                                                                className="w-[15rem]"
                                                                           />
                                                                      </div>
                                                       )}}
                                                  />
                                                  <form.Field
                                                       name="lastName"
                                                       children={(field) => {
                                                            return (
                                                                 <div className="grid gap-2">
                                                                           <Label htmlFor={field.name} isRequired value="Last Name" />
                                                                           <Input 
                                                                                name={field.name}
                                                                                id={field.name}
                                                                                type="text"
                                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                                                placeholder="Lastname"
                                                                                className="w-[15rem]"
                                                                                required
                                                                           />
                                                                      </div>
                                                       )}}
                                                  />
                                             </div>

                                             <form.Field 
                                                  name="username"
                                                  children={(field) => {
                                                       return (
                                                            <div className="grid gap-2">
                                                                 <Label htmlFor={field.name} isRequired value="Username" />
                                                                 <Input 
                                                                      name={field.name}
                                                                      id={field.name}
                                                                      type="text"
                                                                      onChange={(e) => field.handleChange(e.target.value)}
                                                                      placeholder="Username"
                                                                      required
                                                                 />
                                                            </div>
                                                       )
                                                  }}
                                             />
                                        </div>
                                   </Form>
                              </CardContent>
                         </Card>
                    </div>
                    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                         By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                         and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
          </main>
      )
}