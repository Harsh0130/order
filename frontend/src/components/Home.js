import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [orders,setorders] = useState([])
    
    const {id}=useParams

    useEffect(() => {
       loadorders();
    },[]);
    const loadorders =async()=>{
        const result =await axios.get("http://localhost:8081/orders")
        setorders(result.data)
    }


    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8081/orders/${id}`)
        loadorders()
    }
    return (
        <div className='container'style={{fontFamily:"Times New Roman",fontSize: "20px"}}>
            <div className='py-4'>
                <table className="table border shadow" style={{fontSize: "20px"}}>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Address</th>
                            <th scope="col">CustomerName</th>
                            <th scope="col">ProductName</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((orders)=>( 
                            <tr>
                                <th scope="row">{orders.id}</th>
                                <td>{orders.price}</td>
                                <td>{orders.quantity}</td>
                                <td>{orders.address}</td>
                                <td>{orders.customer_name}</td>
                                <td>{orders.product_name}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/vieworder/${orders.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/editorder/${orders.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2"
                                    onClick={()=>deleteUser(orders.id)}>Delete</button>
                                </td>
                            </tr>
                            ))
                        }

                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
