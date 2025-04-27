import { useState } from 'react';
import bcrypt from 'bcryptjs';

export const useSignup = () => {
    const [formData, setFormData] = useState ({
        email: "",
        username: "",
        role: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
     
    const validateField = (name, value) => {

        let fieldErrors = {};

        switch (name) {

            case "email":
                fieldErrors.email = !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : "";
                break;

            case "username":

                fieldErrors.username = value.trim().length < 3 ? "Username too short" : "";
                break;

            case "password":

                fieldErrors.password = value.length < 8 ? "Password must be at least 8 characters" : "";
                break;

            case "confirmPassword":

                fieldErrors.confirmPassword =
                  value !== formData.password ? "Passwords do not match!" : "";
                break;

            default:
                break;

        }

        setErrors((prev) => ({
            ...prev,
            ...fieldErrors,
        }));

    };

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData ((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateField(name, value);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");
        setSuccess("");
        
        const { email, username, role, password, confirmPassword } = formData;
        
        // Final validation before sending to backend
        if (Object.values(errors).some((err) => err)) {
            setError("Please correct the errors in the form.");
            return;
        }
        
        if (password !== confirmPassword) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: "Passwords do not match!",
            }));
            return;
        }
        
        try {
        
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
              
            const response = await fetch("/api/add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({ email, username, role, password: hashedPassword }),
            });
        
            const data = await response.json();
        
            if (response.ok) {
                setSuccess("User registered successfully!");
                setFormData({
                    email: "",
                    username: "",
                    role:"",
                    password: "",
                    confirmPassword: "",
                });
                setErrors({});
            } else {
                setError(data.error || "Something went wrong");
            }
        } catch (err) {
            setError("Server error");
        }
    };

    return {
        formData,
        error,
        success,
        errors,
        handleChange,
        handleSubmit,
        setFormData,
        setError,
        setSuccess,
        setErrors,
    };
    
};