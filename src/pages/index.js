import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import CarouselContainer from '../components/carrousel';
import InfoSection from '../components/InfoSection';
import SecundarySection from '../components/SecundarySection';
import {homeObjOne} from '../components/InfoSection/Data';
import {secundaryObjOne} from '../components/SecundarySection/Data'
import Services from '../components/ServicesSection'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'


const Home = () => {

	const [isOpen, setIsOpen] = useState(false)

	const toggle = ()=>{
		setIsOpen(!isOpen) 
	};


	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle}/>
			
			<HeroSection/>
			<CarouselContainer/>
			<InfoSection {...homeObjOne}/>
			<SecundarySection {...secundaryObjOne}/>
			<Services/>
			<EmailSection/>
			<Footer />
		</>
	)
}

export default Home