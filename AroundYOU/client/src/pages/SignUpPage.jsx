import React from 'react';
import { useSignup } from '../hooks/useSignup';

const SignUpPage = () => {

    const {
        formData,
        handleChange,
        handleSubmit,
        errors,
        error,
        success,
    } = useSignup();

    return (

        <div className="container mt-5 pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <h2 className="fw-bolder text-center mb-4">
                        Join the Waiting List and Secure Your Spot!
                    </h2>
                    <p className="text-center mb-4">
                        Exciting things are coming, and you don't want to miss out!
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="needs-validation">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className={`form-control mb-3 ${formData.email ? (errors.email ? "is-invalid" : "is-valid") : ""}`}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            className={`form-control mb-3 ${formData.username ? (errors.username ? "is-invalid" : "is-valid") : ""}`}
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="role"
                            className={`form-control mb-3 ${formData.role ? (errors.role ? "is-invalid" : "is-valid") : ""}`}
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select your role</option>
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumni</option>
                        </select>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className={`form-control mb-3 ${formData.password ? (errors.password ? "is-invalid" : "is-valid") : ""}`}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter your password again"
                            className={`form-control mb-3 ${formData.confirmPassword ? (errors.confirmPassword ? "is-invalid" : "is-valid") : ""}`}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}

                        <button type="submit" className="btn btn-success w-100">
                            Join
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;