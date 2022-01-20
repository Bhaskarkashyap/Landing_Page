import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
min-height: 630px;
`;

export const FormWrap = styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: center;

@media screen and (max-width:480px){
    height: 80%;
}
`;
export const Icon = styled(Link)`
color: #000;
text-decoration: none;
margin-left: 32px;
margin-top: 32px;
font-size: 32px;
font-weight: 700;

@media screen and (max-width:480px){
    margin-left: 16px;
margin-top: 8px;
}

`;

export const FormContent = styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: center;

@media screen and (max-width:480px){
  padding: 10px;
}
`;

export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius:4px ;
box-shadow: 0 1px 3px rgbaa(0,0,0,0.9);

@media screen and (max-width:480px){
  padding: 32px 32px;
}
`;
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;
export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;
export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;


export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`;
export const Text = styled.p`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`;