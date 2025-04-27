import { useState } from "react";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      case "password":
        fieldErrors.password = value.length < 8 ? "Password must be at least 8 characters" : "";
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
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (Object.values(errors).some((err) => err)) {
      setError("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await fetch("/api/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful!");
        setFormData({ email: "", password: "" });
        setErrors({});
        // Optionally redirect or store token
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    error,
    success,
    errors,
    setFormData,
    setError,
    setSuccess,
    setErrors,
  };
};