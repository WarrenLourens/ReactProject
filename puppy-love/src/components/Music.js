import React from 'react';
import '../index.css';

import ReactPlayer from 'react-player';


const MusicPlayer =()=>{
    return(
        <>
        <div className=" VidPosition ">
           <ReactPlayer controls url="https://www.youtube.com/watch?v=vW7n4Y_GSJ4"/>
           <ReactPlayer controls url="https://www.youtube.com/watch?v=OTd-xsJVXzw"/>
           <ReactPlayer controls url="https://www.youtube.com/watch?v=K4N4SmA0nwo"/>
      
        </div>
           </>
    )
}
export default MusicPlayer;