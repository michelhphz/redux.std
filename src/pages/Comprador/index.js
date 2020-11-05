/*
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './register.css'
import {resetReserva} from '../../store/modules/reserva/actions'

class Register extends Component
{
     
    constructor(props)
	{
		super(props)
		this.state = 
		{
			nome: '',
			telefone: '',
			endereco: ''
		}
		
		this.register = this.register.bind(this)
		this.onRegister = this.onRegister.bind(this)
    }  
    
    handleRemove()
    {
        resetReserva()
    }    
	
	register(e)
	{
		e.preventDefault()
		
		this.onRegister()
	}
	
	onRegister = async() =>
	{
		try
		{
			const {nome, telefone, endereco} = this.state;
			
			await firebase.register(nome, telefone, endereco)
			this.props.history.replace('/home')
		}
		catch(error)
		{
			alert(error.message)
		}
	}
	
	render()
	{
		return(
			<div>
					<h1 className='register-h1'>Dados do Comprador</h1>
				<form onSubmit={this.register} id='register'>
					<label>Nome:</label><br/>
					<input
						type  	     = 'text'
						value 	     = {this.state.nome}						
						autoComplete = 'off'
						onChange     = {(e)=> this.setState({nome: e.target.value})}
						autoFocus
					/><br/>
					<label>Telefone:</label><br/>
					<input
						type  	     = 'text'
						value 	     = {this.state.telefone}
						autoComplete = 'off'
						onChange     = {(e)=> this.setState({telefone: e.target.value})}
					/><br/>	
					<label>Endereço:</label><br/>
					<input
						type  	     = 'text'
						value 	     = {this.state.endereco}
						autoComplete = 'off'
						onChange     = {(e)=> this.setState({endereco: e.target.value})}
					/><br/>                    
                    <button type='submit'>Enviar</button>
				</form>
				
			</div>
		)
	}
}

export default withRouter(Comprador) */