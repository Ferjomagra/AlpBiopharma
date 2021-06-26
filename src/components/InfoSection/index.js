 import React from 'react'
 import {Button} from '../ButtonElements'
 import car from '../../images/handshake-01.png'

 import {
     InfoContainer,
     InfoWrapper,
     InfoRow,
     Column1,
     Column2,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     BtnWrap,
     ImgWrap,
     Img
 } from './InfoElements'
 
 const InfoSection = ({
     lightBg,
     id,
     imgStart,
     topLine,
     lightText,
     darkText,
     headline,
     description,
     description1,
     buttonLabel,
     alt
 }) => {
 	return (
 		<>
 			<InfoContainer lightBg = {lightBg} id={id}>
 				<InfoWrapper>
 					<InfoRow imgStart = {imgStart}>
 						<Column1>
 						<TextWrapper>
 							<TopLine>{topLine}</TopLine>
 							<Heading lightText = {lightText}>{headline}</Heading>
 							<Subtitle darkText = {darkText}>{description}</Subtitle>
                            <Subtitle darkText = {darkText}>{description1}</Subtitle>
 							<BtnWrap>
 								<Button to='Email'>{buttonLabel}</Button>
 							</BtnWrap>
 						</TextWrapper>	
 						</Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={car} alt={alt}/>
                            </ImgWrap>
                        </Column2>
 					</InfoRow>
 				</InfoWrapper>
 			</InfoContainer>	
 		</>
 	)
 }
 
 export default InfoSection