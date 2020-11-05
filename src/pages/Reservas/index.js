import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import {removerReserva, updateAmountRequest} from '../../store/modules/reserva/actions'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'

import './style.css'
import reserva from '../../store/modules/reserva/reducer'

function Reservas()
{
    const dispatch = useDispatch()
    const reserva = useSelector(state => state.reserva)
	
    function handleRemove(id)
    {
        dispatch(removerReserva(id))       
    }

    function decrementAmount(reserva)
    {
        dispatch(updateAmountRequest(reserva.id, reserva.amount - 1))
    }

    function incrementAmount(reserva)
    {
        dispatch(updateAmountRequest(reserva.id, reserva.amount + 1))
    }

	function sendPurchase() 
	{
        let name = document.getElementById('name').value
        let phone = document.getElementById('phone').value
        let adress = document.getElementById('adress').value        
		let reservaData = reserva
		
        if(name == '') 
        {
            alert("Nome não informado!")
            return
        }

        if(phone == '') 
        {
            alert("Telefone não informado!")
            return
        }

        if(adress == '')
        {
            alert("Endereço não informado!")
            return
        }

        if(reserva.length == 0)
        {
            alert("Seu carrinho está vazio!")
            return
        }

        let purchase = firebase.app.ref('purchase')
		let chave = purchase.push().key;
		purchase.child(chave).set(
		{
			name: name,
			phone: phone,
            adress: adress,			
			items:
			{
				reserva
			}
		})
		
		window.location.href = "/"
	}    

    return(
        <div>
            {reserva.map(reserva => (
                <div className='reservas' key={reserva.id}>
                <img
                    src={reserva.image}
                    alt={reserva.title}
                />
                <strong>{reserva.title}</strong>
                <div id='amount'>
                    <button
                        type='button'
                        onClick={()=> decrementAmount(reserva) }
                    >
                        <MdRemoveCircle size={25} color='#191919'/>
                    </button>
                    <input
                        type='text'
                        readOnly
                        value={reserva.amount}
                    />
                    <button
                        type='button'
                        onClick={()=> incrementAmount(reserva) }
                    >
                        <MdAddCircle size={25} color='#191919'/>
                    </button>                    
                </div>                
                <button
                    type='button'
                    onClick={()=> handleRemove(reserva.id) }
                >
                    <MdDelete size={20} color='#191919'/>
                </button>
                </div>
            ))}
            <footer>
            <h1 className='register-h1'>Dados do Comprador</h1>
				<form id='register'>
					<label>Nome:</label><br/>
					<input
                        id           = 'name'
                        type  	     = 'text'						
                        autoComplete = 'off'
						autoFocus
					/><br/>
					<label>Telefone:</label><br/>
					<input
                        id           = 'phone'
                        type  	     = 'text'                        
                        autoComplete = 'off'
					/><br/>	
					<label>Endereço:</label><br/>
					<input
                        id           = 'adress'
                        type  	     = 'text'
						autoComplete = 'off'
					/><br/>
				    <button type="button" onClick={()=> sendPurchase()}>Finalizar Compra</button>
				</form>             
            </footer>            
        </div>
    )
}

export default Reservas