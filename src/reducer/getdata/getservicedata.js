export default function GetDataReducer(state = { GetDataState:[]}, action)  {

    switch (action.type) {
        case 'GETDATA_STATE':
            return {
                GetDataState: action.GetDataState,
            }
        default:
            return state
    }

}