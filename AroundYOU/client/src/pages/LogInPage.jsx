import React from 'react';
import { useLogin } from "../hooks/useLogin.jsx"

const LoginPage = () => {
    const {
        formData,
        handleChange,
        handleSubmit,
        error,
        success,
        errors
    } = useLogin();

    return (
        <div className="container mt-5 pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <h2 className="fw-bold text-center mb-4">Sign In to Your Account</h2>
                    <p className="text-center">Welcome back! Please sign in to continue.</p>

                    <form className="needs-validation" noValidate onSubmit={handleSubmit}>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className={`form-control mb-3 ${
                                formData.email
                                    ? errors.email
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                            }`}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className={`form-control mb-3 ${
                                formData.password
                                    ? errors.password
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                            }`}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}

                        <button className="btn btn-success w-100" type="submit">
                            Sign In
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;