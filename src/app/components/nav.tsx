export function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Dean Lynch</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    {/*<li><a>Projects</a></li>*/}
                    {/*<li><a>Hobbies</a></li>*/}
                </ul>
            </div>
        </div>
    )
}