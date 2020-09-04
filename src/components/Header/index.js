import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import './styles.css'

function Header()
{
    const reservaSize = useSelector(state => state.reserva)

    return(
        <header className='container'>
            <Link to='/'>
                <h1 className='logo'>logo</h1>
            </Link>
            <Link className='reserva' to='/reservas'>
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reservaSize.length} reservas</span>
                </div>
            </Link>
        </header>
    )
}

export default Header