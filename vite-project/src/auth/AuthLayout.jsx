import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
    // const isAuthenticated = false;
    return (
        <>
            {window.localStorage.getItem("isLogged") ? (
                <Navigate to="/home" />
            ) : (
                <div className="flex items-center">
                    <div className="w-1/2">
                        <Outlet />
                    </div>
                    <img
                        src="../../public/assets/side-bg.jpg"
                        alt="logo"
                        className="hidden xl:block h-screen w-1/2 bg-no-repeat object-cover"
                    />
                </div>
            )}
        </>
    );
};

export default AuthLayout;
