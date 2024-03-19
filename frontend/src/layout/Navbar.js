import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{fontFamily:"Times New Roman",height: "8vh",
    fontSize: "40px",}}>
                        OrderManagement
                    </a>
                    <Link className="btn btn-outline-light" to="/addorder" style={{fontFamily:"Times New Roman",fontSize: "20px"}}>Add Order</Link>
                </div>
            </nav>
        </div>
    )
}
