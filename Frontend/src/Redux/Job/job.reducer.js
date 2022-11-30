import * as types from "./job.actionType"

const initialState={
    data:[],
    totalPages:0,
    isLoading:false,
    isError:false,
}
const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case types.POST_REQUEST:{
            return{...state,isLoading:true};
        }
        case types.POST_SUCCESS:{
            return{...state,isLoading:false};
        }
        case types.POST_FAILURE:{
            return{...state,isLoading:false,isError:true};
        }
        case types.GET_REQUEST:{
            return{...state,isLoading:true,isError:false}
        }
        case types.GET_SUCCESS:{
            return{...state,isLoading:false,data:payload.Job,totalPages:payload.totalPages,isError:false}
        }
        case types.GET_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        default:
        return state;

    }
}
export { reducer };