import React  from 'react';
import {LInk} from 'react-router-dom';
import Header from '../components/header';
import FooterBar from '../components/footer';
import ServicesBody from '../components/Services';
const Services=()=>{
    return(
<>
    <Header Title="Services"/>
    <ServicesBody/>
    <FooterBar/>
</>
    )
}
export default Services;