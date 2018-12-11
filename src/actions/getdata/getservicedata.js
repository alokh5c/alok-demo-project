import {GetServiceData} from '../../service/urlservice.js'
function getState(GetDataState){
    return{
            type:'GETDATA_STATE',
            GetDataState
    }
}

 export const GetDataAction=()=>dispatch=>{

    let GetDataState = [];

    GetServiceData((data => {
            (data) ? GetDataState = data.data[0].data : console.log('error in fetching data')
        console.log("readstateAction"+ GetDataState)
        dispatch(getState(GetDataState))
    }))
 }