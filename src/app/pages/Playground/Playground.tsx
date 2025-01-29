import Fieldset from "@/components/custom/Fieldset";
import Modal from "@/components/custom/Modal/Modal";
import { ModeToggle } from "@/components/custom/SetTheme/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProductListDummyJson from "./_components/ProductsDummyJson";

export default function PlaygroundPage(){
     const [openModal, setOpenModal] = useState(false)
     const [openAlert, setOpenAlert] = useState(false)
     return (
          <main>
               <section className="flex justify-between">
                    <h1 className="text-xl">Playground Page</h1>
                    <ModeToggle />
               </section>
               <Fieldset title="Button">
                    <Button variant={"default"}>Primary</Button>
                    <Button variant={"secondary"}>Secondary</Button>
                    <Button variant={"success"}>Success</Button>
                    <Button variant={"warning"}>Warning</Button>
                    <Button variant={"danger"}>danger</Button>
                    <Button variant={"info"}>Info</Button>
                    <Button variant={"ghost"}>Ghost</Button>
                    <Button variant={"link"}>Link</Button>
               </Fieldset>
               <Fieldset title="Badge">
                    <Badge>Primary</Badge>
                    <Badge variant={'secondary'}>Secondary</Badge>
                    <Badge variant={'success'}>Success</Badge>
                    <Badge variant={'warning'}>Warning</Badge>
                    <Badge variant={'danger'}>Danger</Badge>
                    <Badge variant={'info'}>Info</Badge>
                    <Badge variant={'outline'}>Outline</Badge>
               </Fieldset>
               <div className="grid grid-cols-2 gap-2">
                    <Fieldset title="Modal">
                         <Modal
                              trigger={<Button>Modal</Button>} 
                              content="Content"
                              className="max-w-[30rem]"
                         />
                         <Button onClick={() => setOpenModal(true)}>Modal without triggers</Button>
                         <Modal 
                              open={openModal}
                              onOpenChange={setOpenModal}
                              title="Are you sure?"
                              description="this action cannot be undone"
                              content={
                                   <div className="flex justify-end gap-2">
                                        <Button variant={'secondary'} onClick={() => setOpenModal(false)}>Cancel</Button>
                                        <Button variant={'success'}>Submit</Button>
                                   </div>
                              }
                         />
                    </Fieldset>
                    <Fieldset title="Alert">
                         Alert
                    </Fieldset>
               </div>
               <Fieldset title="Try Hit API" className="overflow-y-scroll">
                         <ProductListDummyJson />
               </Fieldset>
          </main>
     )
}