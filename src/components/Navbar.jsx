import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../providers/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-2 py-1 rounded ${isActive
                            ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-200 font-semibold"
                            : "text-gray-800 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-plants"
                    className={({ isActive }) =>
                        `px-2 py-1 rounded ${isActive
                            ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-200 font-semibold"
                            : "text-gray-800 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                        }`
                    }
                >
                    All Plants
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-2 py-1 rounded ${isActive
                            ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-200 font-semibold"
                            : "text-gray-800 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                        }`
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-2 py-1 rounded ${isActive
                            ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-200 font-semibold"
                            : "text-gray-800 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/support"
                    className={({ isActive }) =>
                        `px-2 py-1 rounded ${isActive
                            ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-200 font-semibold"
                            : "text-gray-800 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                        }`
                    }
                >
                    Support
                </NavLink>
            </li>

            {user && (
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `px-2 py-1 rounded ${isActive
                                ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-200 font-semibold"
                                : "text-gray-800 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="bg-green-100 dark:bg-gray-900 shadow sticky top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars size={20} className="text-green-700 dark:text-green-300" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 dark:bg-gray-800 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link
                        to="/"
                        className="text-2xl font-bold text-green-700 dark:text-green-300 ml-2 select-none"
                    >
                        🌿 PlantCare
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-3">
                    <ThemeToggle />
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="btn btn-outline btn-sm text-green-700 dark:text-green-300"
                            >
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-success btn-sm">
                                Register
                            </Link>
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
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-green-200 dark:bg-green-700 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/my-profile" className="text-black dark:text-gray-200 font-semibold">
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="text-black dark:text-gray-200 font-semibold"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
