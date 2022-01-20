import React, { useState , useEffect} from 'react';
import {Nav , NavbarContainer , NavbarLogo, MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './NavbarElements';
import { FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll  } from 'react-scroll';

const Navbar = ({toggle}) => {
  
    const [scrollNav , setScrollNav] = useState(false);



    const NavScroll = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll' , NavScroll);
    }, [])


    const HomeClick = ()=>{
        scroll.scrollToTop();
    }
    return (
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav scroll={scrollNav}>
            <NavbarContainer>
                <NavbarLogo  scroll={scrollNav}  to="/" onClick={HomeClick}>
                    VB
                </NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu scroll={scrollNav} >
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-80}
                       
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="discover"
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-80}
                      
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="services"
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-80}
                       
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="signup"
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    )
}

export default Navbar
