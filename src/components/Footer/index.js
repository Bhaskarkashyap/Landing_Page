import React from 'react';
import { FooterContainer , FooterWrap , FooterLinksContainer ,FooterLinksWrapper , FooterLinkItems , FooterLinkTitle , FooterLink} from './FooterElements';
import { FaFacebook , FaInstagram} from 'react-icons/fa';
import { SocialMedia , SocialMediaWrap , SocialLogo , WebsiteRights , SocialIcons , IconLink , } from './FooterElements';
import { animateScroll as scroll  } from 'react-scroll';

const Footer = () => {
    

    const ScrollTop = ()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
               
<FooterLinksWrapper>
           <FooterLinkItems>
                 <FooterLinkTitle>About</FooterLinkTitle>
                   <FooterLink to="/">How it Works</FooterLink>
                   <FooterLink to="/">Testimonials</FooterLink>
                   <FooterLink to="/">Careers</FooterLink>
                   <FooterLink to="/">Invester</FooterLink>
                   <FooterLink to="/">Terms of Service</FooterLink>
             </FooterLinkItems>
             <FooterLinkItems>
                 <FooterLinkTitle>Contact Us</FooterLinkTitle>
                   <FooterLink to="/">Contact</FooterLink>
                   <FooterLink to="/">Support</FooterLink>
                   <FooterLink to="/">Destinations</FooterLink>
                   <FooterLink to="/">Sponsarships</FooterLink>
             </FooterLinkItems>
 </FooterLinksWrapper>


 <FooterLinksWrapper>
           <FooterLinkItems>
                 <FooterLinkTitle>Videos</FooterLinkTitle>
                   <FooterLink to="/">SubmitVideo</FooterLink>
                   <FooterLink to="/">Ambassadors</FooterLink>
                   <FooterLink to="/">Agency</FooterLink>
                   <FooterLink to="/">Influencer</FooterLink>
             </FooterLinkItems>

             <FooterLinkItems>
                 <FooterLinkTitle>Social Media</FooterLinkTitle>
                   <FooterLink to="/">Instagram</FooterLink>
                   <FooterLink to="/">Facebook</FooterLink>
                   <FooterLink to="/">Youtube</FooterLink>
                   <FooterLink to="/">Twitter</FooterLink>
             </FooterLinkItems>
 </FooterLinksWrapper>



            </FooterLinksContainer>
           
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={ScrollTop}>VB</SocialLogo>
                    <WebsiteRights>VB &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <IconLink to="/" target='_blank' areaLabel = 'Facebook' >
                            <FaFacebook />
                        </IconLink>
                        <IconLink to="/" target='_blank' areaLabel = 'Instagram' >
                            <FaInstagram />
                        </IconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    )
}

export default Footer
