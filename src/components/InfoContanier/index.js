import React from 'react'
import { Button } from '../ButtonElement';
import {InfoContainer , InfoWrapper , InfoRow , Column1,TextWrapper,TopLine,Heading,SubTitle,BtnWrap,Column2,ImgWrap,Img} from './infoElements';


const Info = ({id , lightBg , lightText , topLine , headline , description , buttonLabel , imgStart , img ,alt ,darkText, dark ,primary,lightTextDesc }) => {
    return (
        <>
         <InfoContainer id={id} lightBg={lightBg}>
             <InfoWrapper >
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <BtnWrap>
                            <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 :0}
                            dark={dark ? 1 : 0}
                            // dark2={dark2}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                     </Column1>
                     <Column2>
                     <ImgWrap>
                         <Img src={img} alt={alt} lightTextDesc={lightTextDesc}/>
                     </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default Info;
