import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess]);

    const initialRegister = {
        email: "",
        password: "",
    };

    const validationRegister = yup.object({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
    });
    return (
        <Formik
            initialValues={initialRegister}
            validationSchema={validationRegister}
            onSubmit={async (values, onSubmitProps) => {
                const email = values.email;
                const password = values.password;
                await axios
                    .post(
                        "http://127.0.0.1:5000/user/register",
                        {
                            email: email,
                            password: password,
                        },
                        {
                            withCredentials: false,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            accept: "application/json",
                        }
                    )
                    .then(function (response) {
                        console.log(response);
                        setIsSuccess(true);
                    })
                    .catch(function (error) {
                        onSubmitProps.setErrors({
                            email: "Email already exists",
                        });
                        console.log(error.response.data);
                        console.log(error.response);
                        console.log(error);
                    });
            }}
        >
            {({ handleSubmit, handleBlur, values, handleChange, errors }) => (
                <form onSubmit={handleSubmit} className="w-1/2 m-auto">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="border-gray-400 border-solid block w-full bg-gray-300 rounded-md h-10 mb-3 outline-none p-2"
                    />
                    {errors.email ? (
                        <div className="text-red-500">{errors.email}</div>
                    ) : null}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className="border-gray-400 border-solid block w-full bg-gray-300 rounded-md h-10 mb-4 outline-none p-2"
                    />
                    {errors.password ? (
                        <div className="text-red-500">{errors.password}</div>
                    ) : null}

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-400 h-10 rounded-md"
                        >
                            Submit
                        </button>

                        <p className="pt-2">
                            Do you have an account? Sign up
                            <a className="text-blue-500" href="/">
                                Here!
                            </a>
                        </p>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default SignUpForm;
