import Header from "./HomePage/Header/Header";
import Main from "./HomePage/Main/Main";
import Footer from "./HomePage/Footer/Footer";

const HomePage = ({ showLoginModal, showSignupModal }) => {
  return (
    <div>
      <Header showLoginModal={showLoginModal} />
      <Main showSignupModal={showSignupModal} />
      <Footer/>
    </div>
  );
};

export default HomePage;
