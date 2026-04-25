import { Outlet } from "react-router";
import Navbar from "../../Component/Header/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;