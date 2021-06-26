 import React from 'react'
 import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
 import {
 	FooterContainer,
 	FooterWrap,
 	FooterLinksContainer,
 	FooterLinksWrapper,
 	FooterLinkItems,
 	FooterLinkTitle,
 	FooterLink,

 	SocialMedia,
 	Img,
 	SocialMediaWrap,
 	SocialLogo,
 	WebsiteRights,
 	SocialIcons,
 	SocialIconLink
 } from './FooterElements'
 import logo from '../../images/alplogo-01.png'
 const Footer = () => {
 	return (
 		<FooterContainer>
 			<FooterWrap>
 				<FooterLinksContainer>
 					<FooterLinksWrapper>
 						<FooterLinkItems>
 							<FooterLinkTitle> Menu </FooterLinkTitle>
							<FooterLink to="about">Nosotros</FooterLink>
							<FooterLink to="Discover">Políticas de calidad</FooterLink>
							<FooterLink to="Services">Línea de productos</FooterLink>
							<FooterLink to="Email">Contáctanos</FooterLink>
							
 						</FooterLinkItems>

 						<FooterLinkItems>
 							<FooterLinkTitle> Aquí estamos </FooterLinkTitle>
							
							<FooterLink to="/signin">Av. Periurbana Mz. S Lot. 09 Carabayllo, Lima, Perú</FooterLink>
							<FooterLink to="/signin">Ventas@alp.pe</FooterLink>
							
 						</FooterLinkItems>
 					</FooterLinksWrapper>
 				</FooterLinksContainer>

 				<SocialMedia>
 					<SocialMediaWrap>
 						<SocialLogo to="/">
 							<Img src={logo}/>
 						</SocialLogo>
 						<WebsiteRights> AlpBiopharma {new Date().getFullYear()} All rights reserved.</WebsiteRights>
 						<SocialIcons>
 							<SocialIcons>
 								<SocialIconLink href="/" target="_blank" aria-label="Faceboook">
 									<FaFacebook/>
 								</SocialIconLink>

 								<SocialIconLink href="/" target="_blank" aria-label="Instagram">
 									<FaInstagram/>
 								</SocialIconLink>

 								<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
 									<FaLinkedin/>
 								</SocialIconLink>
 							</SocialIcons>
 						</SocialIcons>
 					</SocialMediaWrap>
 				</SocialMedia>
 			</FooterWrap>
 		</FooterContainer>
 	)
 }
 
 export default Footer