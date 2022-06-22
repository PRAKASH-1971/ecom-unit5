import * as types from "./actionTypes";
import Axios from "axios";

const fetchdataRequest = (payload) =>{
  return{
    type: types.FETCH_DATA_REQUEST,
    payload,
  }
}
const fetchdataSuccess = (payload) =>{
  return{
    type: types.FETCH_DATA_SUCCESS,
    payload,
  }
}
const fetchdataFailure = (payload) =>{
  return{
    type: types.FETCH_DATA_FAILURE,
    payload,
  }
}

const fetchData =(payload)=>{
   return(dispatch) =>{
    dispatch(fetchdataRequest());
    Axios.get("/products")
    .then((r)=> dispatch(fetchdataSuccess(r.data)))
    .catch((e)=> dispatch(fetchdataSuccess(e.data)));
   };
};

export {fetchData}