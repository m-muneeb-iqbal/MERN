import React from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/bootstrap/dist/js/bootstrap.js';
import './../../src/styles/style.css';
import './../../src/scripts/script.js';
import Sidebar from './Header/Sidebar.jsx';
import LoginModal from './Header/LoginModal.jsx';

const Header = () => {
    
  return (

    <header>

        <div className="container-fluid">

            <div className="row pt-5">

                <div className="col-4">

                    <Sidebar/>

                </div>

                <div className="col-4 heading">
        
                    <img src="./Images/notIcons/AroundYou-heading-white.png" className='aroundyou-main-heading img-fluid' alt="" />
        
                </div>

                <LoginModal/>


            </div>

        </div>

    </header>
  );
};

export default Header;