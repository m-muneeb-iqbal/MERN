import React from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../../node_modules/bootstrap/dist/js/bootstrap.js'
import './../../src/styles/style.css'

const Header = () => {
  return (
    <header>
        <div class="container-fluid">

            <div class="row pt-5">

                <div class="col-4">

                    <a class="menu-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">

                        <img src="./Images/icons/menu-button.png" alt="menu button" class="img-fluid"/>

                        <div class="offcanvas offcanvas-start bg-light border" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: '1000px' }}>

                            <div class="offcanvas-header">
                
                                <img src="./Images/icons/sidebar-close-button.svg" alt="close button" class="img-fluid" type="button" data-bs-dismiss="offcanvas" aria-label="close"/>

                                <img src="./Images/notIcons/edyou-sidebar.svg" alt="edyou" class="img-fluid"/>

                            </div>

                            <div class="offcanvas-body">

                                <div class="col-12">

                                    <h4 class="text-black-50">Menu</h4>

                                </div>
                
                                <div class="col-12 d-lg-flex d-none justify-content-between mt-5" style={{ height: '200px' }}>
            
                                    <div class="col-lg-4 d-flex flex-column justify-content-between">

                                        <h3 class="fw-bold sidebar-menu-items-color">Features</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">About Us</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Schools</h3>

                                    </div>

                                    <div class="col-lg-8 col-12 d-flex flex-column justify-content-between">

                                        <h3 class="fw-bold sidebar-menu-items-color">Wishlist</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Contact Us</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Privacy Policy</h3>

                                    </div>

                                </div>

                                <div class="col-12 d-lg-none d-flex justify-content-between mt-5" style={{ height: '300px' }}>
            
                                    <div class="col-lg-4 d-flex flex-column justify-content-between mb-5">
            
                                        <h3 class="fw-bold sidebar-menu-items-color">Features</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">About Us</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Schools</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Wishlist</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Contact Us</h3>
                                        <h3 class="fw-bold sidebar-menu-items-color">Privacy Policy</h3>
            
                                    </div>
            
                                </div>
            
                                <div class="col-8 offcanvas-bottom mt-5">
            
                                    <div class="container mt-5">
            
                                        <div class="row mt-5">
            
                                            <div class="col-md-6 col-12">
            
                                                <label class="fw-bold text-black-50">Email</label>
                                                <p class="fw-bold text-black-50">supportme@edyou.com</p>
            
                                            </div>
            
                                            <div class="col-md-6 col-12">
            
                                                <label class="fw-bold text-black-50">Phone</label>
                                                <p class="fw-bold text-black-50">+1 607 254 4636</p>
            
                                            </div>
            
                                            <div class="col-md-9 col-12">
            
                                                <label class="fw-bold text-black-50">Address</label>
                                                <p class="fw-bold text-black-50">Ithaca, NY 14850, United States</p>
            
                                            </div>
            
                                        </div>
            
                                    </div>
            
                                    <div class="container">
                                        <div class="col-3">
            
                                            {/* <img src="../Images/notIcons/apple-button-sidebar-footer.svg" alt="apple button sidebar" > */}
            
                                        </div>

                                    </div>
            
                                </div>

                            </div>

                        </div>

                    </a>

                </div>

                <div class="col-4 heading">
        
                    <img src="./Images/notIcons/edyou-main-heading.png" alt="" />
        
                </div>
        
                <div class="col-4 d-flex justify-content-center">
        
                    <button type="button" class="btn btn-success btn-sm signin-btn" data-bs-toggle="modal" data-bs-target="#signInModal">
                        Log In
                    </button>

                    <div class="modal fade" id="signInModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">

                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                            <div class="modal-content">

                                <svg type="button" class="mx-5 mt-3" data-bs-dismiss="modal" aria-label="Close" viewBox="0 0 16 16" width="2em" height="2em" focusable="false" role="img" aria-label="arrow left circle" 
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-arrow-left-circle b-icon bi">
                                    <g>
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                                    </g>
                                </svg>

                                <div class="modal-body p-5">

                                    <p class="modal-title fw-bolder text-start fw-bolder text-start sign-in" id="signInModalLabel">Sign In to Your Account</p>

                                    <p class="text-start">Welcome back! Please sign in to continue.</p>

                                    <form action="" className="needs-validation" novalidate>
                                        
                                        <div className="mb-3">

                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                placeholder="Enter your email" 
                                                className="form-control col-md-12 mb-3" 
                                                required 
                                            />
                                            
                                        </div>
                                        
                                        <div className="mb-3">

                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input 
                                                type="password" 
                                                id="password" 
                                                name="password" 
                                                placeholder="Enter your password" 
                                                className="form-control col-md-12 mb-3" 
                                                required 
                                            />

                                        </div>
    
                                        <button className="btn btn-success col-md-12 w-100" type="submit">Sign In</button>

                                    </form>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </header>
  );
};

export default Header;