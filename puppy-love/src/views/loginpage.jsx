import React  from 'react';
import Header from '../components/header';
import FooterBar from '../components/footer';
import LoginForm from '../components/LoginForm';

const LoginPage=()=>{
    return(
    <>
    <Header Title="Login"/>
    <LoginForm/>
     <FooterBar/>
    </>
    );
}
export default LoginPage;