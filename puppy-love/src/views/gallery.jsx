import React  from 'react';
import Header from '../components/header';
import FooterBar from '../components/footer';
import GalleryBody from '../components/GalleryBody';

const Gallery=()=>{
    return(
    <>
    <Header Title="Gallery"/>
    <p></p>
     <GalleryBody/>
     <FooterBar/>
    </>
    );
}
export default Gallery;