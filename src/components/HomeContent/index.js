import React, { useState } from 'react'
import video from '../../video/video.mp4';
import {Button} from '../ButtonElement';
import { ContentContainer , ContentBg , BgVideo , InnerContentContainer, H1,P,BtnWrapper , ArrowForword ,ArrowRight, Overlay } from './HomeContentElements';

const HomeContent = () => {
    const [hover , setHover] = useState(false);

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <ContentContainer>
            <ContentBg>
                <Overlay />
                <BgVideo  muted  autoPlay loop src={video} type='vido/mp4'/>
            </ContentBg>
            <InnerContentContainer>
                <H1>Virtual Banking Made Easy</H1>
                <P>Sign up for a new account today and receive Amount in creadit towards your next payment.</P>
                <BtnWrapper>
                    <Button
                    to="signup"
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >Get started{hover ? <ArrowForword /> : <ArrowRight />}</Button>
                </BtnWrapper>
            </InnerContentContainer>
        </ContentContainer>
    )
}

export default HomeContent
