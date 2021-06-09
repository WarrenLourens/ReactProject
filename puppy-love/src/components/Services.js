import React from 'react';
import '../index.css';
import Title from '../components/PageTitle';
import HomeBody from '../components/body';
import ImageFrame from '../components/images';

const ServicesBody=()=>{
    return(
        <>
        <div className="FlexContent1">
        <HomeBody pic="nutrition.png" Name="Animatetes "
         Location="7 Bridge street,Richmond"
         Contact="0800-123456"/>
        </div>
        <div  className="FlexContent2 ">
        <HomeBody pic="Services.png" Name="Stoke Vet"
        Location="13 Main road Stoke,Nelson"
        Contact="0800-987654" />
        </div>
        <div className="FlexContent1">
        <HomeBody pic="puppy.png" Name="Puppy Day care"
        Location=" 1789 Upper moutere" 
        Contact="0800-1239876"/>
        </div>
       
        </>
    )
}

export default ServicesBody;