import React  from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import FooterBar from '../components/footer';
import Title from '../components/PageTitle';
import MusicPlayer from '../components/Music';
import MessageBoard from '../components/IntroMessage';

const Music=() =>{
return(
    <>
    <Header Title="Music"/>
    <p></p>
    <MusicPlayer/>
    <FooterBar/>
    </>
)
}
export default Music;