import React, { useEffect, useRef } from "react";
import { useLogin } from "../../hooks/useLogin";  // <-- import your hook
import { Modal } from "bootstrap";

const LoginModal = () => {
  const {
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
  } = useLogin();

  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  useEffect(() => {
    const modalElement = document.getElementById("signInModal");
    if (modalElement) {
      modalRef.current = modalElement;
      bsModalRef.current = new Modal(modalElement);

      modalElement.addEventListener("hidden.bs.modal", () => {
        setFormData({ email: "", password: "" });
        setErrors({});
        setError("");
        setSuccess("");
      });
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("hidden.bs.modal", () => {});
      }
    };
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        const modalEl = document.getElementById("signInModal");
        const modalInstance = Modal.getInstance(modalEl);

        if (modalInstance) {
          modalInstance.hide();
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="col-4 d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-success btn-sm fw-bold signin-btn"
        data-bs-toggle="modal"
        data-bs-target="#signInModal"
      >
        Log In
      </button>

      <div
        className="modal fade"
        id="signInModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <svg
              type="button"
              data-bs-dismiss="modal"
              viewBox="0 0 16 16"
              width="2em"
              height="2em"
              focusable="false"
              role="img"
              aria-label="arrow left circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="mx-5 mt-3 bi-arrow-left-circle b-icon bi"
            >
              <g>
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </g>
            </svg>

            <div className="modal-body p-5">
              <p
                className="modal-title fw-bolder text-start fw-bolder text-start sign-in"
                id="signInModalLabel"
              >
                Sign In to Your Account
              </p>

              <p className="text-start">
                Welcome back! Please sign in to continue.
              </p>

              <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`form-control col-md-12 mb-3 ${
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
                  className={`form-control col-md-12 mb-3 ${
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

                <button
                  className="btn btn-success col-md-12 w-100"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;