export function addReservaRequest(id)
{
    return(
        {
            type: 'ADD_RESERVA_REQUEST',
            id
        })
}

export function addReservaSucces(trip)
{
    return(
        {
            type: 'ADD_RESERVA_SUCCES',
            trip
        })
}

export function removerReserva(id)
{
    return(
        {
            type: 'REMOVER_RESERVA',
            id,
        })    
}

export function updateAmountRequest(id, amount)
{
    return(
        {
            type: 'UPDATE_RESERVA_REQUEST',
            id,
            amount
        })
}

export function updateAmountSucces(id, amount)
{
    return(
        {
            type: 'UPDATE_RESERVA_SUCCES',
            id,
            amount
        })
}