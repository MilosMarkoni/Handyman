import React from 'react';

import { Link } from 'react-router-dom';

export default function LeftMenu() {
  return (
    <div className="left-menu-layout">
      <ul>
        <Link to="/">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-home"></i>Dashboard
          </li>
        </Link>
        <Link to="/myprofile">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-user"></i>My Profile
          </li>
        </Link>
        <Link to="/order">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-play"></i>Order
          </li>
        </Link>
        <Link to="/pricing">
          <li>
            <i className="layout-menuitem-icon pi pi-fw pi-dollar"></i>Pricing
          </li>
        </Link>
      </ul>
    </div>
  );
}
