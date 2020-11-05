import produce from 'immer'

export default function reserva(state = [], action)
{
    switch(action.type)
    {
        case 'ADD_RESERVA_SUCCES' :
            return produce(state, draft => 
            {
                draft.push(action.trip)

            })
        case 'REMOVER_RESERVA' :
            return produce(state, draft => 
            {
                const tripIndex = draft.findIndex(trip => trip.id === action.id)

                if(tripIndex >= 0)
                {
                    draft.splice(tripIndex, 1)
                }
            })	
        case 'UPDATE_RESERVA_SUCCES' :
            {   
                return produce(state, draft =>
                {
                    const tripIndex = draft.findIndex(trip => trip.id === action.id)
    
                    if(tripIndex >= 0)
                    {
                        draft[tripIndex].amount = Number(action.amount)
                    }
                })
            }          
        default:
            return state
    }
}