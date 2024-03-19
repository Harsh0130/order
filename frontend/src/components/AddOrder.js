
import React, { useState } from 'react';
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export default function AddUser() {

  let navigate = useNavigate()

    const [orders,setorders] = useState({
      id:"",
      price:"",
      quantity:"",
      address:"",
      customer_name:"",
      product_name:""
    })

    const{id,price,quantity,address,customer_name,product_name} = orders

    const onInputChange=(e)=>{

      setorders({...orders,[e.target.name]:e.target.value})

    }

    const onSubmit= async(e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8081/orders",orders)
      navigate("/")
    }

  return (
    <div className="container"style={{fontFamily:"Times New Roman",fontSize: "30px"}}>
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{fontSize: "40px"}}>
              <h2 className="text-center m-40"style={{fontSize: "40px"}}>Enter The Order</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              {/* <div className="mb-3">
                <label htmlFor="Number" className="form-label">
                  Id
                </label>
                <input
                type={"interger"}
                className="form-control"
                placeholder="Enter the Id"
                name="id"
                value={id}
                onChange={(e)=>onInputChange(e)}
                />
              </div> */}
              <div className="mb-3" style={{fontFamily:"Times New Roman"}}>
                <label htmlFor="Number" className="form-label">
                  Price
                </label>
                <input
                type={"interger"}
                className="form-control"
                placeholder="Enter the Price"
                name="price"
                value={price}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
                
              </div>
              <div className="mb-3" style={{fontFamily:"Times New Roman"}}>
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
              <div className="mb-3" style={{fontFamily:"Times New Roman"}}>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Address"
                name="address"
                value={address}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>
              <div className="mb-3" style={{fontFamily:"Times New Roman"}}>
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
              <div className="mb-3"style={{fontFamily:"Times New Roman"}}>
                <label htmlFor="product_name" className="form-label" >
                  ProductName
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the ProductName"
                name="product_name"
                value={product_name}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>
              <button type="submit" class="btn btn-outline-primary" style={{fontFamily:"Times New Roman",fontSize: "30px"}}>Submit</button>
              <Link class="btn btn-outline-danger mx-2" to="/" style={{fontFamily:"Times New Roman",fontSize: "30px"}}>Cancel</Link>
              </form>
           </div>

        </div>
    </div>
  )
}
