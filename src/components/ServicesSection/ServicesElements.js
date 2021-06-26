import styled from 'styled-components'

export const ServicesContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;

	@media screen and (max-width:768px){
		height: 1350px;
	}

	@media screen and (max-width: 480px){
		height:1350px;
	}
`

export const ServicesWrapper = styled.div`
	max-width:1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 0 50px;

	@media screen and (max-width: 1000px){
		grid-template-columns: 1fr 1fr 1fr;
		
	}

	@media screen and (max-width:768px){
		grid-template-columns:1fr;
		padding: 0 20px;
	}
`

export const ServicesCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	height:100%;
	max-height: 340px;
	margin-bottom: 15px;
	padding: 0px;
	
	box-shadow: 0 0px 15px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover{
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	@media screen and (max-width:768px){
		widthe: 100%;
		max-width: 300px;
	}
`

export const ServicesIcon = styled.img`
	height: 160px;
	width: 100%;
	margin-bottom: 10px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`

export const ServicesContent = styled.div`
	padding:30px;
	align-items:center;
	text-align:center;
	margin: auto;
`

export const ServicesH1 = styled.h1`
	font-size: 2.5rem;
	color: #333;
	margin-bottom: 64px;

	@media screen and (max-width: 480px){
		font-size: 2rem;
	}
`

export const ServicesH2 = styled.h2`
	font-size:1rem;
	margin-bottom: 15px;
	text-align:center;
`

export const ServicesP = styled.p`
	font-size: 1rem;
	text-align: center;
`