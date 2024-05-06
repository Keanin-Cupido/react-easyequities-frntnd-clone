import React from 'react';
import EasyEquitiesLogo from '../../assets/easyequities-logo.png';
import { NavbarData } from './NavbarData';
import CustomNavLink from './CustomNavLink';

const Navbar = () => {
  return (
    <nav>
        {/* Navbar logo */}
        <div className="">
            <img src={EasyEquitiesLogo} alt="easyequities-logo" className='' />
        </div>

        {/* Navbar Links */}
        <div className="">
            <ul>
                {
                    NavbarData.map((link, id) => {
                        return (
                            <CustomNavLink id={id} name={link.link__name} link={link.link__url} dropdown={link.dropdown} dropdownOptions={link.dropdownOptions} icon={link.link__menuicon} />
                        )
                    })
                }
            </ul>
        </div>

        {/* Navbar Buttons */}
        <div className="">
                {/* 
                    <Button name="Login" link='/login' />
                */}
        </div>
    </nav>
  )
}

export default Navbar;