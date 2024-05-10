import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({name, link, primary = false}) => {
  return (
      <Link to={link} className={`btn ${primary ? "btn--primary" : "btn--secondary"}`}>
        {name}
      </Link>
  )
}

export default Button;