import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addReservaRequest} from '../../store/modules/reserva/actions'
import {MdFlightTakeoff} from 'react-icons/md'

import api from '../../services/api'
import './style.css'

function Home()
{
    const dispatch = useDispatch()
    const [trips, setTrips] = useState([])

    useEffect(()=>
    {
        async function loadApi()
        {
            const response = await api.get('trips')
            setTrips(response.data)
        }

        loadApi()

    }, [])
    
    function handleAdd(id)
    {
        dispatch(addReservaRequest(id))
    }

    return(
        <div>
            <div className='box'>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
                        <button
                            type='button'
                            onClick={()=> handleAdd(trip.id)}
                        >
                            <div>
                                <MdFlightTakeoff/>
                            </div>
                            <span>SOLICITAR RESERVA</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Home