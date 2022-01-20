import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const ContentContainer = styled.div`
background:#fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(180deg , rgba(0,0,0,0.2) 0% , rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg , rgba(0,0,0,0.2) 0% ,transparent 100%); */
    z-index: 3;
}
`;

export const ContentBg = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;

`;
export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
background-color:black;
opacity:0.5;

`;

export const BgVideo = styled.video`
width: 100%;
height: 100%;

-o-object-fit: cover;
object-fit: cover;

`;

export const InnerContentContainer = styled.div`
max-width: 1200px;
z-index: 3;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const H1 = styled.h1`
font-size: 48px;
color: #fff;
text-align: center;

@media screen and (max-width:768px){
    font-size: 40px;
}
@media screen and (max-width:480px){
    font-size: 32px;
}
`

export const P = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;


@media screen and (max-width:768px){
    font-size: 24px;
}
@media screen and (max-width:480px){
    font-size: 18px;
}
`;

export const BtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

export const ArrowForword = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
