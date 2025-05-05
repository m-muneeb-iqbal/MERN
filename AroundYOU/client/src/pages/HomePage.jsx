import React from 'react';
// import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import '../../../styles/style.css';
// import '../../../scripts/script.js';
import Header from "../components/Homepage/Header/Header.jsx";
import Main from "../components/Homepage/Main/Main.jsx";

const HomePage = () => {
    
  return (

    <div>
        <Header/>
        <Main/>
    </div>
    
  );
};

export default HomePage;