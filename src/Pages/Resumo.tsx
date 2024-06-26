import React from 'react'
import { useData } from '../Context/DataContext'
import GraficoVendas from '../Components/GraficoVendas';

const Resumo = () => {
  const {data} = useData();
  
  if (data === null) return null;
  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <div>
            <h2>Vendas</h2>
            {data.filter((item) => item.status !== 'falha').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </div>
        </div>

        <div className='box'>
          <div>
            <h2>Recebido</h2>
            {data.filter((item) => item.status === 'pago').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </div>
        </div>

        <div className='box'>
          <div>
            <h2>Processando</h2>
            {data.filter((item) => item.status === 'processando').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </div>
        </div>
      </div>

      <div className='box mb'>
        <GraficoVendas data={data} />
      </div>
    </section>
  )
}

export default Resumo
