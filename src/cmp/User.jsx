
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
//import { Button } from "react-bootstrap";
import {userAction,
getAllUser,
filter
} from "../Redux/Action/action.user";


const User = () => {
    const dispatch = useDispatch();
    const response = useSelector(response=>response);
    useEffect(()=>{
   dispatch(getAllUser());
    },[dispatch])

    const Tr = ({item}) =>{
        const trDesign = (
       <>
       <tr>
       <td>{item.index+1}</td>
       <td>{item.email}</td>
       <td>{item.mobile}</td>
       </tr>
       </>

        );
        return trDesign;
    }
    const design = (

        <>
      
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <select className="p-2 w-100">
                            <option value="FILTER_BY_EMAIL">filter by email</option>
                            <option Value="FILTER_BY_MOBILE">filter by mobile</option>
                        </select>
                    </div>



                    <div className="col-md-10">
                        <input
                         type="text" 
                        placeholder="Search" 
                        className="p-2 w-100" 
                        onChange={()=>dispatch(filter())}
                        />
                    </div>
                </div>
                <table className="table text-center mt-4">
                    <thead>
                        <tr>
                            <th>Sr.no</th>
                            <th>@email id</th>
                            <th>Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>{
                        response && response.data.map((item, index) =>{
                            item['index'] = index ;
                                     return <Tr key={index} item={item}/>
                        })
                    }</tbody>
                </table>
            </div>

        </>
    );
    return design;
}
export default User;