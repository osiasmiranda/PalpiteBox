import React from "react";

const Footer = () => {
  return (
    <div className='bg-gray-900 p-4 flex flex-wrap justify-center items-center '>
      <div className='container flex flex-wrap text-white items-end justify-center'>
        <p>&copy;2021. Projeto Desenvolvido por - Osias Miranda&reg;</p>
        <div>
          <a href='https://github.com/osiasmiranda' target='_blank'>
            <img
              className='rounded bg-white mx-4 '
              align='center'
              alt='osias-github'
              height='30'
              width='30'
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
            />
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/osias-miranda-57b67a4b'
            target='_blank'
          >
            <img
              className='rounded'
              align='center'
              alt='osias-linkedin'
              height='30'
              width='30'
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg'
            />
          </a>
        </div>
      </div>

      <div className='container flex flex-wrap justify-center mt-4'>
        <div className='container flex flex-wrap justify-around'>
          <div>
            <img src='Assets/FSM_branco.png' atl='fullstack Master' />
          </div>
          <div>
            <img src='Assets/logo_devpleno.png' atl='logo Devpleno' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
