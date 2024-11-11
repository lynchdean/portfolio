import {ThemeController} from "@/app/components/theme-controller";

import {FaGithub, FaLinkedin} from "react-icons/fa";


export function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                {/*<a className="btn btn-ghost text-xl">Dean Lynch</a>*/}
            </div>

            {/*Links */}
            <a href="https://www.linkedin.com/in/deanlynch97/" target="_blank" className="btn btn-ghost btn-circle p-2">
                <FaLinkedin className="w-full h-full"/>
            </a>
            <a href="https://www.github.com/lynchdean" target="_blank" className="btn btn-ghost btn-circle p-2">
                <FaGithub className="w-full h-full"/>
            </a>

            <div className="flex-none">
                <ThemeController/>
            </div>
        </div>
    )
}