import userdata from "../../json-api/Data.json";
import { GET_ALL_USER } from "../State/user.state";


const defaultState= {
    name : "Rahul",
    data : []
}

const useReducer = (state=defaultState,action) =>{
   if (action.type === GET_ALL_USER)
   {
    return {
        ...state,
      
        data : userdata
    }
   }
}
export default useReducer;