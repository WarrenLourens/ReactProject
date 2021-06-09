import React  from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import FooterBar from '../components/footer';
import ForumBody from '../components/forum';


const Forum=()=>{
    return(
        <>
        <Header Title="Forum"/>
        <ForumBody/>
        <FooterBar/>
        </>
    )
}
export default Forum;