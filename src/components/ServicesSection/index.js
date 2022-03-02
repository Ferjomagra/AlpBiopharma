import React, {Component} from 'react'
import Icon1 from '../../images/farmaceutica.jpg'
import Icon2 from '../../images/nutricion-salud-adelgazar-848x477x80xX.jpg'
import Icon3 from '../../images/LAB_FSX_TIT_FoodandBeverageAnalysis_Apr19.jpg'

import {
	ServicesContainer,
	ServicesWrapper,
	ServicesH1,
	ServicesCard,
	ServicesH2,
	ServicesIcon,
    ServicesContent
	//ServicesP
} from './ServicesElements'


export default class Services extends Component{

    render(){

        const Astyle = {
            textDecoration: "none",
            color: "white",
            marginTop: "13px",
            padding: "12px 30px",
            borderRadius: "50px",
            background: "#00cc88"
        }

       return (
            <ServicesContainer id="Services">
                <ServicesH1>Línea de productos</ServicesH1>

                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>

                        <ServicesContent>
                            <ServicesH2>Industria Farmacéutica</ServicesH2>
                            <a style={Astyle} href="https://res.cloudinary.com/dintair/image/upload/v1646225555/Pharma.pdf" rel="noopener noreferrer" target="_blank">Ver productos</a>
                        </ServicesContent>

                    </ServicesCard>
                    
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>

                        <ServicesContent>
                            <ServicesH2>Nutrición y Salud</ServicesH2>
                            <a style={Astyle} href="https://res.cloudinary.com/dintair/image/upload/v1646225555/Health.pdf" rel="noopener noreferrer" target="_blank">Ver productos</a>
                        </ServicesContent>

                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>

                        <ServicesContent>
                            <ServicesH2>Ingredientes alimenticios</ServicesH2>
                            <a style={Astyle} href="https://res.cloudinary.com/dintair/image/upload/v1646225555/Food.pdf" rel="noopener noreferrer" target="_blank">Ver productos</a>
                        </ServicesContent>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        )
    }
}