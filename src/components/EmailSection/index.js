 import React, {useState} from 'react'
 import axios from 'axios'
 //import {Redirect} from 'react-router-dom'
 import toast, {Toaster} from 'react-hot-toast'

 import {EmailContainer, EmailWrapper, EmailH1, Form, Input, Label, Button, Textarea} from './EmailElements'

 const successNotify = () => toast.success('Correo enviado')
 
 function EmailSection(props) {
 	
	const [datos, setDatos] = useState({
		from_name: '',
		from_email: '',
  		message:'',
  		date: new Date()
	})
	
	const handleInputChange = (event) =>{
		setDatos({
			...datos,
			[event.target.name] : event.target.value,
			
		})
		console.log(event.target.name + ': '+ event.target.value)
	}

	const enviarDatos = (event) => {
		event.preventDefault()

		const Email = {
			from_name: datos.from_name,
			from_email: datos.from_email,
			message: datos.message,
			date: datos.date,
		}

	    axios.post('http://localhost:8080/email', Email)
	    // eslint-disable-next-line
	      .then(res=> console.log(res.data))

	    //return <Redirect component={EmailSection}/>
	    window.location = "/" 
	}



	return (
		<>
			<EmailContainer id="Email">
				<EmailWrapper>
 				<Form onSubmit={enviarDatos}>
 					<EmailH1>Nos mantenemos en contacto contigo</EmailH1>
 					<Label>
	 					Nombre:
	 					<Input type="text" required  name="from_name" onChange={handleInputChange}/>
	 				</Label>

	 				<Label>
	 					Email:
	 					<Input type="email" required name="from_email" onChange={handleInputChange}/>
	 				</Label>

	 				<Label>
	 					Escribe un mensaje
	 					<Textarea required name="message" onChange={handleInputChange}/>
	 				</Label>

	 				<Button type="submit">Enviar</Button>
	 				<Toaster/>
 				</Form>
 			</EmailWrapper>
			</EmailContainer>
		</>
	)
 	
 	
 }
 
 export default EmailSection