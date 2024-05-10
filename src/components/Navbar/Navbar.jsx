import React from 'react';
import EasyEquitiesLogo from '../../assets/easyequities-logo.png';
import { NavbarData } from './NavbarData';
import CustomNavLink from './CustomNavLink';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <>
        <nav className='m-auto max-w-["1340px"] pt-["1em"] pb-["1em"] pl-["20px"] pr-["20px"]'>
            {/* Navbar logo */}
            <div className="">
                <img src={EasyEquitiesLogo} alt="easyequities-logo" className='w-52 max-w-["unset"] h-auto align-middle' />
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
                <Button name="Login" link='/login' primary />
                <Button name="Register" link='/register' />
            </div>
        </nav>
    </>
  )
}

export default Navbar;