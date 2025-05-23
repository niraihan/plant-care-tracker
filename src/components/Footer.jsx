import { FaFacebook, FaGithub, FaTwitter, } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-100 text-green-800 mt-10">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-2xl font-bold">🌱 Plant Care Tracker</h2>
                    <p className="mt-2">Your personal plant care assistant</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p>Email: support@plantcare.com</p>
                    <p>Phone: +880 1234 567890</p>
                    <p>Location: Dhaka, Bangladesh</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-2xl">
                        <a href="https://www.facebook.com/niraihan2" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                            <i className="fa-brands fa-facebook"><FaFacebook /></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
                            <i className="fa-brands fa-instagram"><FaInstagramSquare /></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500">
                            <i className="fa-brands fa-twitter"><FaTwitter /></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                            <i className="fa-brands fa-github"><FaGithub /></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center bg-green-200 py-3 text-sm">
                &copy; {new Date().getFullYear()} Plant Care Tracker. All rights reserved. <span className="text-green-300"> Create by NI Raihan</span>
            </div>
        </footer>
    );
};

export default Footer;