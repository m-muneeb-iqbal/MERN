import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const HomePage = ({ showSignupModal }) => {
  return (
    <div>
      <Header/>
      <Main showSignupModal={showSignupModal} />
      <Footer/>
    </div>
  );
};

export default HomePage;
