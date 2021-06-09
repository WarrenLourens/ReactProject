import React from 'react';
import '../index.css';
import LoginUseContext from '../views/LoginWithContext';

const FormBorder={
    border: "solid 1px black"
}

const Padding={
    padding:"20px"
}

 const LoginForm=()=>{
     return(
         <>
         <LoginUseContext/>
       </>
     )
 }

export default LoginForm;