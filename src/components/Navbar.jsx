import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../providers/AuthProvider";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = (
        <>
            <li><NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-indigo-600 text-red-500' : '')} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-indigo-600 text-red-500' : '')} to="/all-plants">All Plants</NavLink></li>
            {user && (
                <>
                    <li><NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-indigo-600 text-red-500' : '')} to="/add-plant">Add Plant</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-indigo-600 text-red-500' : '')} to="/my-plants">My Plants</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow sticky top-0 z-50">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold text-green-600">
                    🌿 PlantCare
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="navbar-end">
                <div className="mr-2">
                    <ThemeToggle></ThemeToggle>
                </div>
                {!user ? (
                    <>
                        <Link to="/login" className="btn btn-outline btn-sm mr-2">Login</Link>
                        <Link to="/register" className="btn btn-success btn-sm">Register</Link>
                    </>
                ) : (
                    <div className="flex items-center gap-2">
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-10 h-10 rounded-full border"
                            data-tooltip-id="user-tooltip"
                            data-tooltip-content={user.displayName}
                        />

                        <Tooltip id="user-tooltip" />
                        <button
                            onClick={logOut}
                            className="btn btn-outline btn-error btn-sm ml-2"
                        >
                            LogOut
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
