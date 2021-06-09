import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import {Login} from './Login';
import { login } from '../views/utils';



var SearchBar={
    
      width: "300px"

}
const Search =()=>{
    return(
        <>
        <input type='text' placeholder='Search...' style={SearchBar}></input><button>Search</button>
        </>
    )
}
const Header=(props)=>{
    return(
        <header id="headerBar" className="header" scroll>
            <div>
            <Link to="/"><div id="" >   
            <h4>Pupply Love</h4>
            </div></Link>
            <h2>{props.Title}</h2>
            </div>
        <div ><Search/></div>
                 <div>
                <div id="LoginPad">
                <login/>
                <img src="Login.png" id="Login"/>
                <Link to="./loginpage"><button>Login</button></Link>
                </div> 
                </div>
                
        </header>
    )
}
 
export default Header;