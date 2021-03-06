import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
	background: white;
	height: 80px;
	margin-top:-80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px){
		transition: 0.8px all ease;
	}
`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
	color: #00cc88;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`

export const Img = styled.img`
	max-width: 130px;
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px){
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #333;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px){
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
`

export const NavLinks = styled(LinkS)`
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active{
		border-bottom: 3px solid #01bf71;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px){
		display:none;
	}
`

export const NavBtnLink = styled(LinkS)`
	border-radius: 50px;
	background: #0066ff;
	white-space: nowrap;
	padding: 10px 20px;
	color: white;
	font-size: 16px;
	font-weight:bold;
	outline: none;
	border:none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover{
		transition: all 0.2s ease-in-out;
		background: white;
		color: #0066ff;
	}
`