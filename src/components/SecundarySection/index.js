 import React from 'react'
 import {Button} from '../ButtonElements'
 import product from '../../images/box_detailing-01.png'

  import {
     SecundaryContainer,
     SecundaryWrapper,
     SecundaryRow,
     Column1,
     Column2,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     BtnWrap,
     ImgWrap,
     Img
 } from './secundaryElements'
 
 const SecundarySection = ({
 	lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    darkText,
    headline,
    description,
    description1,
    description2,
    description3,
    buttonLabel,
    alt}) => {
 	return (
 		<>
 			<SecundaryContainer id={id}>
 				<SecundaryWrapper>
 					<SecundaryRow imgStart = {imgStart}>
 						<Column1>
 						<TextWrapper>
 							<TopLine>{topLine}</TopLine>
 							<Heading lightText = {lightText}>{headline}</Heading>
 							<Subtitle darkText = {darkText}>{description}</Subtitle>
                            <Subtitle darkText = {darkText}>{description1}</Subtitle>
                            <Subtitle darkText = {darkText}>{description2}</Subtitle>
                            <Subtitle darkText = {darkText}>{description3}</Subtitle>
 							<BtnWrap>
 								<Button to='Email'>{buttonLabel}</Button>
 							</BtnWrap>
 						</TextWrapper>
 						</Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={product} alt={alt}/>
                            </ImgWrap>
                        </Column2>
 					</SecundaryRow>
 				</SecundaryWrapper>
 			</SecundaryContainer>
 		</>
 	)
 }
 
 export default SecundarySection