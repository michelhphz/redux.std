import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import {removerReserva, updateAmountRequest} from '../../store/modules/reserva/actions'

import './style.css'
import reserva from '../../store/modules/reserva/reducer'

function Reservas()
{
    const dispatch = useDispatch()
    const reservas = useSelector(state => state.reserva)
    
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

    return(
        <div>
            <h1 className='title'>Voce solicitou {reserva.length} reservas</h1>

            {reservas.map(reserva => (
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
                <button type='button'>Solicitar Reservas</button>
            </footer>            
        </div>
    )
}

export default Reservas