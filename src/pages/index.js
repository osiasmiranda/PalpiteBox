import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div className=' container flex flex-wrap justify-center'>
      <div className='container flex flex-wrap justify-center mt-10 text-2xl font-bold'>
        <p className='text-center'>
          O Restaurante X sempre busca por atender melhor seus clientes.
          <br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
      </div>
      <div className='my-12 '>
        <Link href='/pesquisa'>
          <a className='bg-yellow-500 px-6 py-4 rounded-lg font-bold shadow-lg hover:bg-yellow-400 focus:border-blue-500'>
            Dar opinião ou Sugestão
          </a>
        </Link>
        <p className='my-12 text-center'>Mensagem do desconto</p>
      </div>
    </div>
  );
};

export default index;
