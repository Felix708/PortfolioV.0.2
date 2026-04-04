import NavbarComponent from "./components/NavbarComponent";
import { Outlet, useLocation } from "react-router-dom";

export default function Template() {
    const location = useLocation();
    const projects = location.pathname.includes('/projects');
    return(
        <>
            <NavbarComponent pageState={projects} />
            <Outlet />
        </>
    )
}