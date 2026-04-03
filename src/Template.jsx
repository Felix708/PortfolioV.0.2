import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";

export default function Template() {
    return(
        <>
            <NavbarComponent />
            <Outlet />
        </>
    )
}