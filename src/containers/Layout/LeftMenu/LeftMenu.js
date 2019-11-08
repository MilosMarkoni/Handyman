import React from 'react';

import { Link } from 'react-router-dom';
import './LeftMenu.css';

export default function LeftMenu() {
  return (
    <div className="left-menu-layout">
      <ul>
        <Link to="/">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-home"></i>
            <span>Dashboard</span>
          </li>
        </Link>
        <Link to="/myprofile">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-user"></i>
            <span>My Profile</span>
          </li>
        </Link>
        <Link to="/order">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-play"></i>
            <span>Order</span>
          </li>
        </Link>
        <Link to="/pricing">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-dollar"></i>
            <span>Pricing</span>
          </li>
        </Link>
        <Link to="/admindashboard">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-globe"></i>
            <span>Administration</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
