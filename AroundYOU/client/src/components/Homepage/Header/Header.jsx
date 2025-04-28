import React from 'react';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../../../styles/style.css';
import '../../../scripts/script.js';
import Sidebar from './Sidebar.jsx';
import LoginModal from './LoginModal.jsx';

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