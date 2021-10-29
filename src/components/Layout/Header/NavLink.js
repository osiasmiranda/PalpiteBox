import React from "react";
import Link from "next/link";

const NavLink = () => {
  return (
    <div className='bg-gray-700 shadow-md text-gray-300 flex flex-wrap justify-center '>
      <div className='hover:text-yellow-600 text-center px-2 m-2'>
        <Link href='/sobre'>
          <a>Sobre</a>
        </Link>
      </div>
      <div className='hover:text-yellow-600 text-center px-2 m-2'>
        <Link href='/contato'>
          <a>Contato</a>
        </Link>
      </div>
      <div className='hover:text-yellow-600 text-center px-2 m-2'>
        <Link href='/pesquisa'>
          <a>Pesquisa</a>
        </Link>
      </div>
    </div>
  );
};
export default NavLink;
