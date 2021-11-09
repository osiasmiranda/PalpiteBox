import React, { useState } from "react";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
  });

  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (evt) => {
    const value = evt.target.value;
    const Key = evt.target.name;
    setForm((old) => ({
      ...old,
      [Key]: value,
    }));
  };

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
          <label>Nome:</label>
          <input
            name='Nome'
            onChange={onChange}
            value={form.Nome}
            type='text'
            className='rounded-md h-10  p-4 shadow-lg  mt-2 focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
      </div>
      <div className='container flex flex-wrap justify-center text-lg font-bold'>
        <div className='flex flex-col w-80'>
          <label>E-mail:</label>
          <input
            name='Email'
            onChange={onChange}
            value={form.Email}
            type='email'
            className='rounded-md h-10 p-4 shadow-lg  mt-2 focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
      </div>
      <div className='container flex flex-wrap justify-center text-lg font-bold'>
        <div className='flex flex-col w-80'>
          <label>Contato:</label>
          <input
            name='Whatsapp'
            onChange={onChange}
            value={form.Whatsapp}
            type='text'
            className='rounded-md h-10 p-4 shadow-lg  mt-2 mb-10 focus:outline-none focus:ring focus:border-blue-300'
          />
          <button
            onClick={save}
            className='bg-yellow-500 px-6 py-4 mb-4 rounded-lg font-bold shadow-lg hover:bg-yellow-400 focus:border-blue-500 transition delay-150 duration-300 ease-in-out...'
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pesquisa;
