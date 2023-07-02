import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import SingupComponent from '../../components/Signup/SignupComponent';
// import Signup from "../components/Signup/Signup";

const Register = () => {
  const navigate = useNavigate();
  //   const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    // if(isAuthenticated === true){
    //   navigate("/");
    // }
  }, []);
  return (
    <div>
      <Header activeHeading={1} />

      <SingupComponent />

      {/* <Footer /> */}
    </div>
  );
};

export default Register;
