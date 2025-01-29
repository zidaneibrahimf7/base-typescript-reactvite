import { Form } from "@/components/custom/Form";
import { Input } from "@/components/custom/Form/input";
import Label from "@/components/custom/Form/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import TitleText from "../TitleText";
import OptionLogin from "./_components/OptionLogin";
import { Eye, EyeClosed, Loader2} from "lucide-react";
import {NavLink, useNavigate} from "react-router";
import { useState } from "react";
import { toast } from "sonner";
import { TiWorld } from "react-icons/ti";

export default function LoginPage(){
     const [showPassword, setShowPassword] = useState(false)
     const navigate = useNavigate();

     const form = useForm({
          defaultValues: {
               username: '',
               password: ''
          },
          onSubmit: async({value}) => {
               const {username, password} = value

               let params = {
                    username,
                    password
               }

               if(params){
                    // const response = await ApiDummyJsonPost({dest: 'login', params})
                    // console.log(response, ':response')
                    toast.success('Login Success!')
                    navigate('/playground')
               }
          }
     })

     return (
          <main className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
               <div className={cn("flex flex-col gap-3")}>     
                    <Card className="">
                         <CardContent className="grid p-0 md:grid-cols-2">
                              {/* left start */}
                              <Form form={form} className="p-6 md:p-8">
                                   <div className="flex flex-col gap-6">
                                        <TitleText />

                                        <form.Field 
                                             name={'username'}
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

                                        <form.Field 
                                             name="password"
                                             children={(field) => {
                                                  return (
                                                       <>
                                                            <div className="grid gap-2">
                                                                 <Label htmlFor={field.name} isRequired value="Password" />
                                                                 <div className="relative">
                                                                      <Input 
                                                                           name={field.name}
                                                                           id={field.name}
                                                                           type={showPassword ? 'text' : 'password'}
                                                                           onChange={(e) => field.handleChange(e.target.value)}
                                                                           placeholder="password"
                                                                           required
                                                                      />
                                                                      <div className="absolute z-20 top-2 right-2">
                                                                           <button type="button" className="hover:text-destructive" onClick={() => setShowPassword(!showPassword)}>
                                                                                {
                                                                                     showPassword ?
                                                                                     <Eye size={20} />
                                                                                     :
                                                                                     <EyeClosed size={20} />
                                                                                }
                                                                           </button>
                                                                      </div>
                                                                 </div>
                                                                 <a
                                                                      href="#"
                                                                      className="ml-auto text-xs underline-offset-2 hover:underline"
                                                                 >
                                                                      Forgot your password?
                                                                 </a>
                                                            </div>
                                                       </>
                                                  )
                                             }}
                                        />

                                        <form.Subscribe 
                                             selector={(state) => [state.canSubmit, state.isSubmitting]}
                                             children={([canSubmit, isSubmitting]) => (
                                                  <Button
                                                       type="submit"
                                                       disabled={!canSubmit}
                                                       className=""
                                                  >
                                                  {isSubmitting ? 
                                                       <>
                                                            <Loader2 className="mr-2 animate-spin" /> Loading...
                                                       </>
                                                  : 
                                                       "Login"
                                                  }
                                                  </Button>
                                             )}
                                        />

                                        <OptionLogin />
                                        
                                        {/* Sign Up refers */}
                                        <div className="text-center text-sm">
                                             Don&apos;t have an account?{" "}
                                             <NavLink to={'/register'} className="underline underline-offset-4">
                                                  Sign up
                                             </NavLink>
                                        </div>
                                   </div>
                              </Form>

                              {/* Right  */}
                              <div className="relative hidden bg-muted md:block">
                                   <TiWorld 
                                        size={200} 
                                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
                                   />
                                   {/* <img
                                        src="/placeholder.svg"
                                        alt="Image"
                                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                   /> */}
                              </div>
                         </CardContent>
                    </Card>
                    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                         By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                         and <a href="#">Privacy Policy</a>.
                    </div>
               </div>
          </main>
     )
}