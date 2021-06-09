import React from 'react';
import '../index.css';

 const HomeBody=(props)=>{
     return(
         <>
         
            <img alt="" className="ContentImage" src={props.pic}></img>
            <div className={props.Layout}>

            <p>{props.Text}</p>
               <p>{props.Name}</p>
                <p>{props.Location}</p>
                <p>{props.Contact}</p>
                </div>

       </>
     )
 }

export default HomeBody;