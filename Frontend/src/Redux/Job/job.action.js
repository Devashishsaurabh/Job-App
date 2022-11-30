import * as types from "./job.actionType"
import axios from "axios"

export const jobPost=(data)=>(dispatch)=>{
    console.log(data)
    dispatch({type:types.POST_REQUEST})
    return axios.post("https://job-app-9d0y.onrender.com/job/create",data)
    .then((res)=>{
        dispatch({type:types.POST_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.POST_FAILURE,payload:err})
    })
}
export const jobGET=(filterbyRole,sortbyDate,page)=>(dispatch)=>{
    // console.log(filterbyRole,sortbyDate,page)
    dispatch({type:types.GET_REQUEST})
    return axios.get(`https://job-app-9d0y.onrender.com/job/?limit=${10}&page=${page}&filterbyRole=${filterbyRole}&sortbyDate=${sortbyDate}`)
    .then((res)=>{
        dispatch({type:types.GET_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.GET_FAILURE,payload:err})
    })
}