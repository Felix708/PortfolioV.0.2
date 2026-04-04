import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template from "../Template";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "projects",
                element: <Projects />
            }
        ]
    }
], {
    basename: "/PortfolioV.0.2/"
})