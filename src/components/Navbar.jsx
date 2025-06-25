import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../providers/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaUser } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 font-bold" : ""}>Home</NavLink></li>
            <li><NavLink to="/all-plants" className={({ isActive }) => isActive ? "text-green-600 font-bold" : ""}>All Plants</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/add-plant" className={({ isActive }) => isActive ? "text-green-600 font-bold" : ""}>Add Plant</NavLink></li>
                    <li><NavLink to="/my-plants" className={({ isActive }) => isActive ? "text-green-600 font-bold" : ""}>My Plants</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="bg-base-100 shadow sticky  top-0 z-50">
            <div className="navbar max-w-7xl mx-auto ">
                {/* Navbar Start */}
                <div className="navbar-start  ">
                    {/* Mobile Dropdown Button */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars size={20} />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-green-600 ml-2">🌿 PlantCare</Link>
                </div>

                {/* Navbar Center for Large Devices */}
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 space-x-1">{navLinks}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-2 mr-2 ">
                    <ThemeToggle />
                    {!user ? (
                        <>
                            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-success btn-sm">Register</Link>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-green-400 ring-offset-2">
                                    <img
                                        src={user?.photoURL || ""}
                                        alt="User"
                                        data-tooltip-id="user-tooltip"
                                        data-tooltip-content={user.displayName || "User"}


                                    />
                                    <Tooltip id="user-tooltip" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-green-400 rounded-box w-52">
                                <li><Link to="/my-profile"><span className="font-bold text-black">My Profile</span></Link></li>
                                <li><button onClick={logOut}><span className="font-bold text-black">LogOut</span></button></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
