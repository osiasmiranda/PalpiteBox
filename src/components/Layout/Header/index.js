import React from "react";
import Navlink from "./NavLink";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className='bg-gray-900 p-4 shadow-md'>
        <figure className='container mx-auto'>
          <Link href='/'>
            <a>
              <img
                className='mx-auto w-40'
                src='Assets/logo_palpitebox.png'
                alt='logo palpitebox'
              />
            </a>
          </Link>
        </figure>
      </div>
      <Navlink />
    </>
  );
};

export default Header;
