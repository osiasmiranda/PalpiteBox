import React from "react";

const Pesquisa = () => {
  return (
    <div className='container pt-8 flex flex-col flex-wrap gap-4'>
      <h1 className='text-center text-3xl font-bold'>Críticas e sugestões</h1>
      <p className='text-center text-lg sm:text-md'>
        O Restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='container flex flex-wrap justify-center mt-4 text-lg font-bold'>
        <div className='flex flex-col w-80 '>
          <label for='name' className=''>
            Nome:
          </label>
          <input
            id='name'
            type='text'
            className='rounded-md h-10  p-4 shadow-lg  mt-2'
          />
        </div>
      </div>
      <div className='container flex flex-wrap justify-center text-lg font-bold'>
        <div
          className='flex flex-col w-80
         '
        >
          <label for='email' className=''>
            E-mail:
          </label>
          <input
            id='email'
            type='email'
            className='rounded-md h-10 p-4 shadow-lg  mt-2 focus:border-yellow-500'
          />
        </div>
      </div>
      <div className='container flex flex-wrap justify-center text-lg font-bold'>
        <div className='flex flex-col w-80'>
          <label for='contato' className=''>
            Contato:
          </label>
          <input
            id='contato'
            type='text'
            className='rounded-md h-10 p-4 shadow-lg  mt-2 mb-10 focus:border-yellow-500'
          />
        </div>
      </div>
    </div>
  );
};

export default Pesquisa;
