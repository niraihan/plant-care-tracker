
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="min-h-[80vh]">
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;