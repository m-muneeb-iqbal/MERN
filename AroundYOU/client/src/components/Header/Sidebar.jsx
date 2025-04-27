import React from 'react';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../node_modules/bootstrap/dist/js/bootstrap.js';
import './../../../src/styles/style.css';
import './../../../src/scripts/script.js';

const Sidebar = () => {

    return (

        <a className="menu-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">

            <img src="./../Images/icons/menu-button.png" alt="menu button" className="img-fluid"/>

            <div className="offcanvas offcanvas-start bg-light border" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: '1000px' }}>

                <div className="offcanvas-header">
                
                    <img src="./Images/icons/sidebar-close-button.svg" alt="close button" className="img-fluid" type="button" data-bs-dismiss="offcanvas" aria-label="close"/>

                    <img src="./Images/notIcons/AroundYou-sidebar.png" alt="edyou" className="img-fluid aroundyou-sidbar-heading"/>

                </div>

                <div className="offcanvas-body">

                    <div className="col-12">

                        <h4 className="text-black-50">Menu</h4>

                    </div>
                
                    <div className="col-12 d-lg-flex d-none justify-content-between mt-5" style={{ height: '200px' }}>
            
                        <div className="col-lg-4 d-flex flex-column justify-content-between">

                            <h3 className="fw-bold sidebar-menu-items-color">Features</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">About Us</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Schools</h3>

                        </div>

                        <div className="col-lg-8 col-12 d-flex flex-column justify-content-between">

                            <h3 className="fw-bold sidebar-menu-items-color">Wishlist</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Contact Us</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Privacy Policy</h3>

                        </div>

                    </div>

                    <div className="col-12 d-lg-none d-flex justify-content-between mt-5" style={{ height: '300px' }}>
            
                        <div className="col-lg-4 d-flex flex-column justify-content-between mb-5">
            
                            <h3 className="fw-bold sidebar-menu-items-color">Features</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">About Us</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Schools</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Wishlist</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Contact Us</h3>
                            <h3 className="fw-bold sidebar-menu-items-color">Privacy Policy</h3>
            
                        </div>
            
                    </div>
            
                    <div className="col-8 offcanvas-bottom mt-5">
            
                        <div className="container mt-5">
            
                            <div className="row mt-5">
            
                                <div className="col-md-6 col-12">
            
                                    <label className="fw-bold text-black-50">Email</label>
                                    <p className="fw-bold text-black-50">supportme@edyou.com</p>
            
                                </div>
            
                                <div className="col-md-6 col-12">
            
                                    <label className="fw-bold text-black-50">Phone</label>
                                    <p className="fw-bold text-black-50">+1 607 254 4636</p>
            
                                </div>
            
                                <div className="col-md-9 col-12">
            
                                    <label className="fw-bold text-black-50">Address</label>
                                    <p className="fw-bold text-black-50">Ithaca, NY 14850, United States</p>
            
                                </div>
            
                            </div>
            
                        </div>
            
                        <div className="container">

                            <div className="col-3">
            
                                <img src="./Images/notIcons/apple-button-sidebar-footer.svg" alt="apple button sidebar"/>
            
                            </div>

                        </div>
            
                    </div>

                </div>

            </div>

        </a>

    );

};

export default Sidebar;