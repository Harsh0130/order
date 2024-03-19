
import React, { useEffect, useState } from 'react';
import axios from "axios"
import {Link, useNavigate, useParams} from "react-router-dom"

export default function EditOrder() {

  
  let navigate = useNavigate()
  
  

    const [orders,setorders] = useState({
      quantity:"",
      address:"",
      customer_name:""
    })
    const {id} = useParams();

    const{quantity,address,customer_name} = orders

    const onInputChange=(e)=>{

      setorders({...orders,[e.target.name]:e.target.value})

    }

    useEffect(()=>{
        loadOrders()
    },[])

    const onSubmit= async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8081/orders/${id}`,orders)
      navigate("/")
    }

    const loadOrders = async()=>{
        const result = await axios.get(`http://localhost:8081/orders/`+id)
        setorders(result.data)
    }
  return (
    <div className="container" style={{fontFamily:"Times New Roman",fontSize: "30px"}}>
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"style={{fontFamily:"Times New Roman"}}>
              <h2 className="text-center m-40" style={{fontFamily:"Times New Roman",fontSize: "40px"}}>Edit The Order</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                type={"number"}
                className="form-control"
                placeholder="Enter the Quantity"
                name="quantity"
                value={quantity}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Address"
                name="address"
                value={address}
                style={{fontSize: "30px"}}
                onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customer_name" className="form-label">
                  CustomerName
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the CustomerName"
                name="customer_name"
                value={customer_name}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>

              <button type="submit" class="btn btn-outline-primary"style={{fontSize: "30px"}}>Submit</button>
              <Link class="btn btn-outline-danger mx-2" to="/"style={{fontSize: "30px"}}>Cancel</Link>
              </form>
           </div>

        </div>
    </div>
  )
}
