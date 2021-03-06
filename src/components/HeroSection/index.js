import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	//HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements';


const HeroSection = () => {
	const [hover, setHover] = useState(false)
	const onHover = () =>{
		setHover(!hover)
	}

	return (
	
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
			</HeroBg>
			<HeroContent>
				<HeroH1>Equipo con más de 15 años de experiencia</HeroH1>
				
				<HeroBtnWrapper>
					<Button to="Email" onMouseEnter={onHover} 
					onMouseLeave={onHover}
					primary='true'
					dark='true'>Contáctanos {hover ? <ArrowForward/> : <ArrowRight/>}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection