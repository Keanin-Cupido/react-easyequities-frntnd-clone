import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({id, name, link, dropdown, dropdownOptions, icon}) => {
  return (
    <NavLink to={link} >
        {
          icon ? 'icon' : null
        }
        {name || ''}
        {dropdown ? '>' : null}
    </NavLink>
  )
}

export default CustomNavLink;