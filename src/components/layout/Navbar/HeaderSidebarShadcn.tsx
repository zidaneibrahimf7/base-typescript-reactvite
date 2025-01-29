import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { camelCaseToText } from "@/lib/helpers";
import { NavLink, useLocation } from "react-router";
import { Fragment } from "react/jsx-runtime";

export default function HeaderSidebar(){
     const location = useLocation();
     const pathname = location.pathname.split('/')
     const pathnameLoc = location.pathname.split('/').filter((menu) => menu !== ""); // Filter elemen kosong
     const urlArr = pathname.splice(0, pathnameLoc.length)
     const lastUrl = urlArr.join('/')

     return (
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
               <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                         <BreadcrumbList>
                               {pathnameLoc.map((menu, index) => {
                                   const isLast = index === pathnameLoc.length - 1;
                                   return (
                                        <Fragment key={index}>
                                             <BreadcrumbItem className={`hidden md:block ${isLast ? "font-bold text-primary" : '' }`}>
                                                  {
                                                       urlArr.length > 1 ?
                                                            <NavLink to={lastUrl}>
                                                                 {camelCaseToText(menu)}
                                                            </NavLink>
                                                       :
                                                       camelCaseToText(menu)
                                                  }
                                             </BreadcrumbItem>
                                             {index < pathnameLoc.length - 1 && (
                                                  <BreadcrumbSeparator className="hidden md:block" />
                                             )}
                                        </Fragment>
                                   )
                               })}
                         </BreadcrumbList>
                    </Breadcrumb>
               </div>
          </header>
     )
}