import { Link } from "react-router-dom";
import useTitle from "../hook/useTitle";

const NotFound = () => {
  useTitle("Plants - Not Found");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center text-center px-4 py-10">
      {/* <img
        src="https://i.ibb.co/LDyTb6nL/What-is-404-error.jpg"
        alt="404 Not Found"
        className="w-80 max-w-full mb-8 rounded-lg shadow-lg"
      /> */}

      <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
        Oops! The page you are looking for might have been pruned, watered away, or never planted at all.
      </p>

      <Link to="/">
        <button className="btn btn-success px-6 py-2 rounded-md text-white shadow hover:scale-105 transition-transform duration-300">
          🌿 Back to Home
        </button>
      </Link>

      {/* Optional suggestions */}
      <div className="mt-10 text-sm text-gray-500">
        <p>If you think this is a mistake, please <Link to="/contact" className="underline text-green-700 font-medium">contact support</Link>.</p>
      </div>
    </div>
  );
};

export default NotFound;
