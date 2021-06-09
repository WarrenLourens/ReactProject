import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import FooterBar from '../components/footer';
import Homebody from '../components/body';
import Header from '../components/header';





const ImageNavbar=(props)=>{

    return(
        <div>
            
              <img className='ImageSize' alt="" src={props.ImageCategory}></img>
              
        </div>
      
    )
    
}

const Image =()=>{
    return(
        <>
        <div className='FlexNave'>
            
            <div className="category"><Link to="./gallery"><ImageNavbar ImageCategory="Gallery.png"/></Link>
            <p>Gallery</p>
            </div>
            <div className="category"><Link to="./Music"><ImageNavbar ImageCategory="Puppy.png"/></Link>
            <p>Music</p>
            </div>
            <div className="category"><Link to="./Services"><ImageNavbar ImageCategory="Services.png"/></Link>
            <p>Services</p>
            </div>
         
        </div>
        </>
    )
}
const NavBar=()=>{
    return(
        <>
    <html>
        <header>
      <Header Title="Home"/>
      </header>
        <Image/>
        
            <div className="FlexContent1">
            <Homebody pic ="Gallery.png" Text="Etiam tempor sem leo, ac rhoncus turpis luctus quis. Nulla porta nisi sed magna rhoncus ultricies. Integer magna erat, imperdiet ornare rutrum quis, tristique quis quam. Suspendisse lacinia dui magna, vehicula efficitur est tempor vitae. Quisque non orci id felis finibus ornare non nec diam. Maecenas tincidunt sapien quis urna bibendum, quis auctor est porta. Phasellus rhoncus mattis leo laoreet congue. Praesent suscipit, quam eget ullamcorper ullamcorper, ipsum ligula maximus nulla, venenatis rutrum odio nisi in leo. Nulla tempus molestie dolor sed aliquam. Nulla faucibus vehicula dolor, a facilisis mauris vulputate nec. Fusce luctus leo libero. Aliquam gravida neque at scelerisque ullamcorper. Suspendisse et finibus leo. Vestibulum et congue nibh. Etiam justo mi, varius non erat quis, posuere sollicitudin nisi."/>
            </div>
            <div className="FlexContent2 ">
            <Homebody pic ="puppy.png" Text="Etiam tempor sem leo, ac rhoncus turpis luctus quis. Nulla porta nisi sed magna rhoncus ultricies. Integer magna erat, imperdiet ornare rutrum quis, tristique quis quam. Suspendisse lacinia dui magna, vehicula efficitur est tempor vitae. Quisque non orci id felis finibus ornare non nec diam. Maecenas tincidunt sapien quis urna bibendum, quis auctor est porta. Phasellus rhoncus mattis leo laoreet congue. Praesent suscipit, quam eget ullamcorper ullamcorper, ipsum ligula maximus nulla, venenatis rutrum odio nisi in leo. Nulla tempus molestie dolor sed aliquam. Nulla faucibus vehicula dolor, a facilisis mauris vulputate nec. Fusce luctus leo libero. Aliquam gravida neque at scelerisque ullamcorper. Suspendisse et finibus leo. Vestibulum et congue nibh. Etiam justo mi, varius non erat quis, posuere sollicitudin nisi."/>
            </div>
            <div className="FlexContent1">
            <Homebody pic ="Forum.png" Text="Etiam tempor sem leo, ac rhoncus turpis luctus quis. Nulla porta nisi sed magna rhoncus ultricies. Integer magna erat, imperdiet ornare rutrum quis, tristique quis quam. Suspendisse lacinia dui magna, vehicula efficitur est tempor vitae. Quisque non orci id felis finibus ornare non nec diam. Maecenas tincidunt sapien quis urna bibendum, quis auctor est porta. Phasellus rhoncus mattis leo laoreet congue. Praesent suscipit, quam eget ullamcorper ullamcorper, ipsum ligula maximus nulla, venenatis rutrum odio nisi in leo. Nulla tempus molestie dolor sed aliquam. Nulla faucibus vehicula dolor, a facilisis mauris vulputate nec. Fusce luctus leo libero. Aliquam gravida neque at scelerisque ullamcorper. Suspendisse et finibus leo. Vestibulum et congue nibh. Etiam justo mi, varius non erat quis, posuere sollicitudin nisi."/>
            </div>
    
        <footer>
        <FooterBar/>
        </footer>
    </html>
     </>   
    )
}
export default NavBar;