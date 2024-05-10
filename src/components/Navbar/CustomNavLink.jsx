import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomNavLink.css';

const CustomNavLink = ({id, name, link, dropdown, dropdownOptions, icon}) => {
  return (
    <NavLink to={link}>
        {
          icon ? '' : null
        }
        {name || ''}
        {dropdown ? <span className='dropdown__icon'></span> : null}
    </NavLink>
  )
}

export default CustomNavLink;