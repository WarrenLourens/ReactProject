import React from 'react';
import '../index.css';
import { findByLabelText } from '@testing-library/react';


const Image=(props)=>{

    return(
        <div>
              <img alt="" src={props.ImageCategory}/> 
        </div>
      
    )
    
}
const GalleryBody=()=>{
    return(
        <>
    <div id="Rows">
        <Image ImageCategory="Services.png"/>
        <Image ImageCategory="puppy.png"/>
        <Image ImageCategory="nutrition.png"/>
        <Image ImageCategory="Forum.png"/>
        </div>
        <div id="Rows">
        <Image ImageCategory="Services.png"/>
        <Image ImageCategory="puppy.png"/>
        <Image ImageCategory="nutrition.png"/>
        <Image ImageCategory="Forum.png"/>
        </div>
        <div id="Rows">
        <Image ImageCategory="Services.png"/>
        <Image ImageCategory="puppy.png"/>
        <Image ImageCategory="nutrition.png"/>
        <Image ImageCategory="Forum.png"/>
        </div>
        <div id="Rows">
        <Image ImageCategory="Services.png"/>
        <Image ImageCategory="puppy.png"/>
        <Image ImageCategory="nutrition.png"/>
        <Image ImageCategory="Forum.png"/>
        </div>
    </>
    )

}
export default GalleryBody;