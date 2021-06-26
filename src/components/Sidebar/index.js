 import React from 'react';
 import {
 	SidebarContainer,
 	Icon,
 	CloseIcon,
 	SidebarWrapper,
 	SidebarMenu,
 	SidebarLink,
 	SideBtnWrap,
 	SidebarRoute
 } from './SidebarElements'
 
 const Sidebar = ({isOpen, toggle}) => {
 	return (
 		<SidebarContainer isOpen={isOpen} onClick={toggle}>
 			<Icon onClick={toggle}>
 				<CloseIcon/>
 			</Icon>
 			<SidebarWrapper>
 				<SidebarMenu>
 					<SidebarLink to="about" onClick={toggle}>Nosotros</SidebarLink>

 					<SidebarLink to="Discover" onClick={toggle}>Políticas de Calidad</SidebarLink>

 					<SidebarLink to="Services" onClick={toggle}>Línea de productos</SidebarLink>

 					
				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute to="Email" onClick={toggle}>Contáctanos</SidebarRoute>
				</SideBtnWrap>	
 			</SidebarWrapper>

 		</SidebarContainer>
 	)
 }
 
 export default Sidebar;
