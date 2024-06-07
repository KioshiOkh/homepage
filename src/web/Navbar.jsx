import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { icon, menu, close } from '../assets';
import { navLinks } from '../const';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState(null);

  // Filter out #id
  const idLinks = navLinks.filter(nav => nav.id.includes('#'));

  const handleNavLinkClick = (nav) => {
    setActiveIdLink(nav);
    setToggle(false); // Close the mobile menu 
  };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={icon} alt='logo' className='logo' />

      <ul className='list-none sm:flex hidden justify-start items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <NavLink
              to={`/${nav.id}`}
              activeClassName='active' // Apply 'active' 
              className={idLinks.includes(nav) && activeIdLink === nav ? 'active-id-link' : ''}
              onClick={() => handleNavLinkClick(nav)}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <NavLink
                  to={`/${nav.id}`}
                  onClick={() => handleNavLinkClick(nav)}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
