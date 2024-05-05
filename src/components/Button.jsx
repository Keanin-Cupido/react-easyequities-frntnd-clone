import React from 'react';
import { Link } from 'react-router-dom';

const Button = (name, link) => {
  return (
    <Link to={link} className='p-4 rounded-md'>
        {name}
    </Link>
  )
}

export default Button;