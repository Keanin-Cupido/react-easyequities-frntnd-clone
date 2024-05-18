import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomNavLink.css';

const CustomNavLink = ({id, name, link, dropdown, dropdownOptions, icon}) => {
  return (
    <NavLink to={link} className="text-[0.925rem]">
        {
          icon ? '' : null
        }
        {name || ''}
        {dropdown ? <span className='dropdown__icon'></span> : null}
    </NavLink>
  )
}

export default CustomNavLink;