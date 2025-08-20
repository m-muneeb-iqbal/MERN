import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row pt-5 align-items-center">
                    
                    {/* Left: Menu Button */}
                    <div className="col-4">
                        <button
                            className="menu-btn border-0 bg-transparent p-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                        >
                            <img
                                src="/Images/icons/menu-button.png"
                                alt="menu button"
                                className="img-fluid"
                            />
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="col-4 text-center">
                        <img
                            src="/Images/notIcons/edyou-main-heading.png"
                            alt="Edyou logo"
                            className="img-fluid"
                        />
                    </div>

                    {/* Right: Log In Button */}
                    <div className="col-4 d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#signInModal"
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Offcanvas Sidebar --- */}
            <div
                className="offcanvas offcanvas-start bg-light border"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
                style={{ width: "1000px" }}
            >
                <div className="offcanvas-header justify-content-between">
                    <button
                        type="button"
                        className="border-0 bg-transparent"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <img
                            src="/Images/icons/sidebar-close-button.svg"
                            alt="close"
                            className="img-fluid"
                        />
                    </button>
                    <img
                        src="/Images/notIcons/edyou-sidebar.svg"
                        alt="Edyou Sidebar Logo"
                        className="img-fluid"
                    />
                </div>

                <div className="offcanvas-body">
                    {/* Menu Items */}
                    <div className="col-12">
                        <h4 className="text-black-50">Menu</h4>
                    </div>

                    {/* Desktop Menu */}
                    <div className="d-lg-flex d-none justify-content-between mt-5" style={{ height: "200px" }}>
                        <div className="d-flex flex-column justify-content-between col-lg-4">
                            <h3 className="fw-bold sidebar-menu-items-color">Features</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">About Us</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Schools</h3>
                        </div>
                        <div className="d-flex flex-column justify-content-between col-lg-8">
                            <h3 className="fw-bold sidebar-menu-items-color">Wishlist</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Contact Us</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Privacy Policy</h3>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="d-lg-none d-flex flex-column mt-5">
                        {["Features", "About Us", "Schools", "Wishlist", "Contact Us", "Privacy Policy"].map((item, idx) => (
                            <h3 key={idx} className="fw-bold sidebar-menu-items-color">{item}</h3>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-md-6 col-12 mb-3">
                                <label className="fw-bold text-black-50">Email</label>
                                <p className="fw-bold text-black-50">supportme@edyou.com</p>
                            </div>
                            <div className="col-md-6 col-12 mb-3">
                                <label className="fw-bold text-black-50">Phone</label>
                                <p className="fw-bold text-black-50">+1 607 254 4636</p>
                            </div>
                            <div className="col-12">
                                <label className="fw-bold text-black-50">Address</label>
                                <p className="fw-bold text-black-50">Ithaca, NY 14850, United States</p>
                            </div>
                        </div>

                        <div className="mt-3">
                            <img
                                src="/Images/notIcons/apple-button-sidebar-footer.svg"
                                alt="apple button sidebar"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Modal --- */}
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
                        <div className="d-flex justify-content-start p-3">
                            <button
                                type="button"
                                className="border-0 bg-transparent"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    width="2em"
                                    height="2em"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="modal-body p-5">
                            <p className="fw-bolder text-start fs-5">Sign In to Your Account</p>
                            <p className="text-start">Welcome back! Please sign in to continue.</p>
                            <form className="needs-validation" noValidate>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="form-control mb-3"
                                    required
                                />
                                <button
                                    className="btn btn-success w-100"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
