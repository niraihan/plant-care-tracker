// import { FaFacebook, FaGithub, FaTwitter, } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="bg-green-100 text-green-800 mt-10">
//             <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                     <h2 className="text-2xl font-bold">🌱 Plant Care Tracker</h2>
//                     <p className="mt-2">Your personal plant care assistant</p>
//                 </div>

//                 <div>
//                     <h3 className="text-xl font-semibold mb-2">Contact</h3>
//                     <p>Email: support@plantcare.com</p>
//                     <p>Phone: +880 1234 567890</p>
//                     <p>Location: Dhaka, Bangladesh</p>
//                 </div>

//                 <div>
//                     <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
//                     <div className="flex gap-4 text-2xl">
//                         <a href="https://www.facebook.com/niraihan2" target="_blank" rel="noreferrer" className="hover:text-blue-600">
//                             <i className="fa-brands fa-facebook"><FaFacebook /></i>
//                         </a>
//                         <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
//                             <i className="fa-brands fa-instagram"><FaInstagramSquare /></i>
//                         </a>
//                         <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500">
//                             <i className="fa-brands fa-twitter"><FaTwitter /></i>
//                         </a>
//                         <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
//                             <i className="fa-brands fa-github"><FaGithub /></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-center bg-green-200 py-3 text-sm">
//                 &copy; {new Date().getFullYear()} Plant Care Tracker. All rights reserved. <span className="text-green-300"> Create by NI Raihan</span>
//             </div>
//         </footer>
//     );
// };

// export default Footer;






import { FaFacebook, FaGithub, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Optional Wave SVG Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#dcfce7"
            fillOpacity="1"
            d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,122.7C672,160,768,224,864,234.7C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="bg-green-100 text-green-800">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold">🌱 Plant Care Tracker</h2>
            <p className="mt-2">Your personal plant care assistant for healthy greenery.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline hover:text-green-600">Home</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-green-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline hover:text-green-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>Email: support@plantcare.com</p>
            <p>Phone: +880 1234 567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.facebook.com/niraihan2" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600"><FaInstagramSquare /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500"><FaTwitter /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-800"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center bg-green-200 py-3 text-sm">
          &copy; {new Date().getFullYear()} Plant Care Tracker. All rights reserved. <span className="text-green-500 font-medium">Created by NI Raihan</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

