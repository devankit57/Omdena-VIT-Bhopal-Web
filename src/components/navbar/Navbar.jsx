import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_omdena.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#womdena">What is Omdena?</a></p>
    <p><a href="#possibility">Projects</a></p>
    <p><a href="#features">Insights</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='omdena__navbar'>
      <div className='omdena__navbar-links'>
        <div className='omdena__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='omdena__navbar-links_container'>
          <Menu />
        </div>
        <div className='omdena__navbar-sign'>
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>

        <div className='omdena__navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className='omdena__navbar-menu_container scale-up-center'>
              <div className='omdena__navbar-menu_conatiner-links'>
                <Menu />

                <div className='omdena__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
