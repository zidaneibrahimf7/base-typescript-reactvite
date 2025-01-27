// import { ReactElement } from "react";
import { Outlet } from "react-router";

export default function MainLayout(){
    return (
        <>
            <header>Header</header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    );
};