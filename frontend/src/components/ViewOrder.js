import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewOrder() {

    const [order,setorder] = useState({
      price:"",
      quantity:"",
      address:"",
      customer_name:"",
      product_name:""
    })

    const {id} = useParams();

    useEffect(()=>{
        loadOrders()
    },[])

    const loadOrders= async()=>{
        const result = await axios.get(`http://localhost:8081/orders/`+id)
        setorder(result.data)
    }

  return (
    <div className="container" style={{fontFamily:"Times New Roman",fontSize: "30px"}}>
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-40" style={{fontSize: "40px"}}>Order Details</h2>
                <div className="card">
                    <div className="card-header">
                        Details of order id: {order.id}
                        <ul className="list-group list-group-flush">
                            {/* <li className="list-group-item">
                                <b>Order Id</b>
                            </li> */}
                            <li className="list-group-item">
                                <b>Price</b>: {order.price}
                            </li>
                            <li className="list-group-item">
                                <b>Quantity</b>: {order.quantity}
                            </li>
                            <li className="list-group-item">
                                <b>Address</b>: {order.address}
                            </li>
                            <li className="list-group-item">
                                <b>CustomerName</b>: {order.customer_name}
                            </li>
                            <li className="list-group-item">
                                <b>ProductName</b>: {order.product_name}
                            </li>
                        </ul>

                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"} style={{fontSize: "30px"}}>Back To Home</Link>
            </div>
        </div>
    </div>    

  )
}
