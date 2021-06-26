import styled from 'styled-components'

export const EmailContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f2f2f2;

	@media screen and (max-width:768px){
		height: 1000px;
	}

	@media screen and (max-width: 480px){
		height:1000px;
	}
`

export const EmailH1 = styled.h1`
	font-size: 2.5rem;
	color: #000;
	margin-bottom: 30px;

	@media screen and (max-width: 480px){
		font-size: 2rem;
	}
`

export const EmailWrapper = styled.div`
	max-width:1000px;
	margin: 0 auto;
	display: grid;
	align-items: center;
	grid-gap: 0 50px;

	@media screen and (max-width:768px){
		grid-template-columns:1fr;
		padding: 0 20px;
	}
`

export const Form = styled.form`
	width: 100%;
	max-width: 550px;
`

export const Label = styled.label`
	color: #737373;
	font-size: 18px;
	font-weight: 700;
`
export const Input = styled.input`
	width:100%;
	max-width:100%;
	padding: 14px;
	border-radius:8px;
	border:1px solid #333;
	margin-bottom:10px;
	margin-top: 10px;
`
export const Textarea = styled.textarea`
	width: 100%;
	max-width: 100%;
	height: 200px;
	margin-bottom:10px;
	margin-top:10px;
	border-radius:8px;
	resize: none;
	padding:10px;
`
export const Button = styled.button`
	background: #333;
	padding: 15px;
	width:100%;
	border-radius:8px;
	width: 100%;
	font-size: 15px;
	border: none;
	transition: 0.2s all ease;
	cursor: pointer;
	color:white;

	&:hover{
		transition: 0.2s all ease;
		background:#00cc88;
	}
`