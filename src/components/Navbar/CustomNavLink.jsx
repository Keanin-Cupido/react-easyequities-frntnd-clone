import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = (id, name, link, dropdown, dropdownOptions) => {
  return (
    <NavLink to={link}>
        {Children}
    </NavLink>
  )
}

export default CustomNavLink;