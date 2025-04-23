import React, { useEffect, useRef } from "react";
import { useSignup } from '../../hooks/useSignup';
import { Modal } from "bootstrap";

const SignupModal = () => {
    const {
        formData,
        handleChange,
        handleSubmit,
        errors,
        error,
        success,
        setFormData,
        setError,
        setSuccess,
        setErrors,
      } = useSignup();

    const modalRef = useRef(null);
    const bsModalRef = useRef(null);

    useEffect(() => {
        const modalElement = document.getElementById("staticBackdrop");
        if (modalElement) {
          modalRef.current = modalElement;
          bsModalRef.current = new Modal(modalElement);

          modalElement.addEventListener("hidden.bs.modal", () => {
            setFormData({
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
            });
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
            const modalEl = document.getElementById('staticBackdrop');
            const modalInstance = Modal.getInstance(modalEl);
      
            if (modalInstance) {
              modalInstance.hide();
      
              // Wait for Bootstrap modal hidden event
              modalEl.addEventListener('hidden.bs.modal', () => {
                // 1. Remove modal-open class from body
                document.body.classList.remove('modal-open');
      
                // 2. Remove leftover backdrop manually if any
                const backdrops = document.querySelectorAll('.modal-backdrop');
                backdrops.forEach((backdrop) => backdrop.remove());
      
                // 3. Reset body's overflow (if still hidden)
                document.body.style.overflow = 'auto';
              }, { once: true }); // once:true so event listener is auto-removed after firing
            }
          }, 1500);
      
          return () => clearTimeout(timer);
        }
      }, [success]);
      
    return (

        <div className="mt-5 pt-5 pb-1 mt-md-3 pt-md-3 pb-md-0 ">

            <p type="button" className="btn btn-success fw-bold join-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

                Sign up Now
                <img src="./Images/icons/Arrow-Icon.png" alt="" className="img-fluid" />
            </p>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

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
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                            />
                        </g>
                        </svg>

                        <div className="modal-body p-5">

                            <p className="modal-title fw-bolder text-start waiting-list" id="staticBackdropLabel">
                                Join the Waiting List and Secure Your Spot!
                            </p>

                            <p className="text-start">Exciting things are coming, and you don't want to miss out!</p>
                            <form action="" className="needs-validation" noValidate onSubmit={handleSubmit}>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className={`form-control col-md-12 mb-3 ${ formData.email ? errors.email ? "is-invalid" : "is-valid" : "" }`}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    className={`form-control col-md-12 mb-3 ${ formData.username ? errors.username ? "is-invalid" : "is-valid" : "" }`}
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className={`form-control col-md-12 mb-3 ${ formData.password ? errors.password ? "is-invalid" : "is-valid" : "" }`}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Enter your password again"
                                    className={`form-control col-md-12 mb-3 ${ formData.confirmPassword ? errors.confirmPassword ? "is-invalid" : "is-valid" : "" }`}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />

                                {error && <p className="text-danger">{error}</p>}
                                {success && <p className="text-success">{success}</p>}

                                <button className="btn btn-success col-md-12 w-100 main-submit" type="submit">
                                Join
                                </button>

                            </form>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
    
};

export default SignupModal;