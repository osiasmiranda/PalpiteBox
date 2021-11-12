import React, { useState } from "react";
import PageTitle from "../components/Layout/PageTitle";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
    Nota: 0,
  });

  const nota = [0, 1, 2, 3, 4, 5];

  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await response.json();

      setSucess(true);
      setRetorno(data);
    } catch (error) {}
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
      <PageTitle title='Pesquisa' />
      <h1 className='text-center text-3xl font-bold'>Críticas e sugestões</h1>
      <p className='text-center text-lg sm:text-md'>
        O Restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!sucess && (
        <>
          <div className='container flex flex-wrap justify-center mt-4 text-lg font-bold'>
            <div className='flex flex-col w-80'>
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
          <div className='container flex flex-wrap justify-center '>
            <div className='flex flex-col w-80'>
              <label className='text-lg font-bold'>Contato:</label>
              <input
                name='Whatsapp'
                onChange={onChange}
                value={form.Whatsapp}
                type='text'
                className='rounded-md h-10 p-4 shadow-lg  mt-2 mb-8 focus:outline-none focus:ring focus:border-blue-300'
              />
              <label className='text-lg font-bold mb-4'>Nota:</label>
              <div className='mb-8 text-center flex'>
                {nota.map((nota) => {
                  return (
                    <label className='block w-1/6 text-center'>
                      {nota}
                      <br />
                      <input
                        type='radio'
                        name='Nota'
                        value={nota}
                        onChange={onChange}
                      />
                    </label>
                  );
                })}
              </div>

              {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
              <button
                onClick={save}
                className='bg-yellow-500 px-6 py-4 mb-4 rounded-lg font-bold shadow-lg hover:bg-yellow-400 focus:border-blue-500 transition delay-150 duration-300 ease-in-out...'
              >
                Salvar
              </button>
            </div>
          </div>
        </>
      )}
      {sucess && (
        <>
          <div className='container flex flex-wrap justify-center mt-4 text-lg mx-auto'>
            <p className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center mb-2'>
              Obrigado por sua <br />
              contribuição ou crítica!
            </p>
          </div>
          <div className='container justify-center mx-auto text-center '>
            <p>Seu Cupom:</p>
            {retorno.showCoupon && (
              <div className=' text-center font-bold text-2xl mt-4 mb-4 '>
                {retorno.Cupom}
              </div>
            )}
            <p className='mb-4 italic'>
              Tire um print ou foto desta tela e apresente ao garçom.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Pesquisa;
