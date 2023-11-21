import {GET_ALL_USER} from "../State/user.state.js";

const filter = ()=>{
    return {
        type: "FILTER_BY_EMAIL"
    }
}
const userAction =()=>{
return{
    type:"testing"
}
}

const getAllUser =()=>{
    return{
        type: GET_ALL_USER
    }
}
export {userAction,
      getAllUser
}