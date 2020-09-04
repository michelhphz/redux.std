import {select, call, put, all, takeLatest} from 'redux-saga/effects'
import {addReservaSucces, updateAmountSucces} from './actions'
import api from '../../../services/api'
import history from '../../../services/history'

function* addToReserva({id})
{
    const tripExist = yield select(
        state => state.reserva.find(trip=>trip.id === id)
    )
    
    const myStock = yield call(api.get, `/stock/${id}`)
    const stockAmount = myStock.data.amount
    const currentStock = tripExist ? tripExist.amount : 0
    const amount = currentStock + 1

    if(amount > stockAmount)
    {
        alert('Quantidade maxima atingida.')
        return
    }

    if(tripExist)
    {
        yield put(updateAmountSucces(id, amount))
    }
    else
    {
        const response = yield call(api.get, `trips/${id}`)
        const data = 
        {
            ...response.data,
            amount: 1,
        }
        yield put(addReservaSucces(data))
        history.push('/reservas')
    }
}

function* updateAmount({id, amount})
{
    if(amount <= 0) return

    const myStock = yield call(api.get, `/stock/${id}`)
    const stockAmount = myStock.data.amount

    if(amount > stockAmount)
    {
        alert('Quantidade maxima atingida.')
        return
    }

    yield put(updateAmountSucces(id, amount))
}

export default all(
[
    takeLatest('ADD_RESERVA_REQUEST', addToReserva),
    takeLatest('UPDATE_RESERVA_REQUEST', updateAmount),
])