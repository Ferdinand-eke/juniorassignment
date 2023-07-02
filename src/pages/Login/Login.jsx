import React from 'react';
import Header from '../../components/Layout/Header.jsx';
import LoginComponent from '../../components/Login/LoginComponent.jsx';

const Login = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <LoginComponent />
    </div>
  );
};

export default Login;
