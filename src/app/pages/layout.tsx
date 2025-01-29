// import { ReactElement } from "react";
import HeaderSidebar from "@/components/layout/Navbar/HeaderSidebarShadcn";
import { AppSidebar } from "@/components/layout/Sidebar/Shadcn/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function MainLayout(){
    return (
        <>
            <main>
                <SidebarProvider>
                     <AppSidebar />
                     <SidebarInset>
                        <HeaderSidebar />
                        <section className="px-5 py-2">
                            <Outlet />
                        </section>
                     </SidebarInset>
                </SidebarProvider>
            </main>
        </>
    );
};