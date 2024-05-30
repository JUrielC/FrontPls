import React from "react";

const DropdownUserLogged = ({userData}) => {

    return(
        <li className="dropdown">
        <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
        <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
        <div className="d-sm-none d-lg-inline-block">{userData}</div>

        </a>
        <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-title">Logged in 5 min ago</div>
            <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
            </a>
            <a href="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i> Activities
            </a>
            <a href="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog"></i> Settings
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
            </a>
        </div>
    </li>
    )

}

export default DropdownUserLogged;