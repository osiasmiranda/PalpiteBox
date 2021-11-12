import React from "react";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/Layout/PageTitle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const index = () => {
  const { data, error } = useSWR("/api/get-promo", fetcher);
  return (
    <div className=' container flex flex-wrap justify-center'>
      <PageTitle title='Home' />
      <div className='container flex flex-wrap justify-center mt-10 text-2xl font-bold'>
        <p className='text-center'>
          O Restaurante X sempre busca por atender melhor seus clientes.
          <br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
      </div>
      <div className='my-12 text-center'>
        <Link href='/pesquisa'>
          <a className='bg-yellow-500 px-6 py-4 rounded-lg font-bold shadow-lg hover:bg-yellow-400 focus:border-blue-500'>
            Dar opinião ou Sugestão
          </a>
        </Link>
        <div className='container mt-10'>
          {!data && <p>Carregando...</p>}

          {!error && data && data.showCoupon && (
            <p className='my-12 text-center'>{data.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
