import { ModeToggle } from "@/components/custom/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function HomePage(){
     const navigate = useNavigate()
     return (
          <main className="flex justify-center items-center min-h-screen">
               <section className="grid grid-rows-2 gap-1">
                    <div className="flex gap-2 items-center justify-center">
                         <h1>Hello World</h1>
                         <ModeToggle />
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                         <Button onClick={() => navigate('/login')}>Login</Button>
                         <Button onClick={() => navigate('/playground')}>Playground</Button>
                    </div>
               </section>
          </main>
     )
}