import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaPagelines} from 'react-icons/fa'

import './styles.css'

function Header()
{
    const reservaSize = useSelector(state => state.reserva)

    return(
        <header className='container'>
            <Link to='/'>
                <div className='logo'>
                    <FaPagelines/>
                    <strong>FazenTech</strong>
                </div>               
            </Link>
            <Link className='reserva' to='/reservas'>
                <div>
                    <strong>Carrinho</strong>
                    <span>{reservaSize.length} itens</span>
                </div>
            </Link>
        </header>
    )
}

export default Header