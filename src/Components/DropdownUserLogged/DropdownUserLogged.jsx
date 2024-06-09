import React from "react";
import { useNavigate } from "react-router-dom";

const DropdownUserLogged = ({userData}) => {
    
    const navigate = useNavigate()
    return(
        <li className="dropdown">
        <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
        <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
        <div className="d-sm-none d-lg-inline-block">{userData}</div>

        </a>
        <div className="dropdown-menu dropdown-menu-right">
           
            
    
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item has-icon text-danger" onClick={
                (e)=>{
                    e.preventDefault()
                    localStorage.clear()
                    navigate('/login')
                }
            }>
                <i className="fas fa-sign-out-alt"></i> Logout
            </a>
        </div>
    </li>
    )

}

export default DropdownUserLogged;