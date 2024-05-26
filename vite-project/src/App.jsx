import { Route, Routes } from "react-router-dom";
import AdminLayout from "./root/admin/components/AdminLayout";
import Admin from "./root/admin/Admin";
import Update from "./root/admin/Update";
import Show from "./root/admin/Show";
import { RootLayout } from "./root/pages/components/RootLayout";
import Home from "./root/pages/Home";
import AuthLayout from "./auth/AuthLayout";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";

function App() {
    return (
        <main>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/" element={<SignInForm />} />
                    <Route path="/sign-up" element={<SignUpForm />} />
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="/show" element={<Show />} />
                </Route>
                <Route element={<RootLayout />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
