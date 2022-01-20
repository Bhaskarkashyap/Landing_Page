import React , { useState } from 'react'
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent/index';
import Info from '../components/InfoContanier';
import { homeObjOne , homeObjTwo , homeObjThree} from '../components/InfoContanier/Data';
import Navbar from '../components/Navbar';
import Services from '../components/services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>{
      setIsOpen(!isOpen);
    }
    return (
        <>
            
   <Navbar toggle={toggle}/>
   <Sidebar isOpen={isOpen} toggle={toggle}/>
   <HomeContent />
   <Info {...homeObjOne}/>
   <Info {...homeObjTwo}/>
   <Services />
   <Info {...homeObjThree}/>
   <Footer />
        </>
    )
}

export default Home
