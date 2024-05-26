import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
    return (
        <div>
            <SideBar />
            <div className="content">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
