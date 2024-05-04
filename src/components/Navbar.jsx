import React from 'react';
import EasyEquitiesLogo from '../assets/easyequities-logo.png';

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
                <li>Get Started</li>
                <li>Invest</li>
                <li>EasyVSTR Hub</li>
                <li>EasyApps</li>
                <li>About</li>
                <li>Support</li>

                {/* 
                    const getStarted = [
                        {
                            link__name: 'New To Investing',
                            link__url: '/newToInvesting'
                        },
                        . 
                        .
                        .
                    ]
                    <Navlink name="Get Started" dropdown={true} dropdownOptions={getStarted}>
                        // svg
                    </Navlink>
                */}
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