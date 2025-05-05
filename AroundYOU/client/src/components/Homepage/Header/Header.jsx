import React from 'react';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../../../styles/style.css';
import '../../../scripts/script.js';
import Sidebar from './Sidebar.jsx';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };
    
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

                <button
                    onClick={goToLogin}
                    className="btn btn-success btn-sm fw-bold signin-btn"
                >
                    Log In
                </button>


            </div>

        </div>

    </header>
  );
};

export default Header;