import React from 'react'
import resumo from '../icons/resumo.svg'
import vendas from '../icons/vendas.svg'
import webhooks from '../icons/webhooks.svg'
import configuracoes from '../icons/configuracoes.svg'
import contato from '../icons/contato.svg'
import sair from '../icons/sair.svg'
import FintechSVG from '../icons/FintechSVG'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title='Fintech logo' />
      <ul>
        <li>
          <span><img src={resumo} alt="" /></span>
          <NavLink to='/'>Resumo</NavLink>
        </li>
        <li>
          <span><img src={vendas} alt="" /></span>
          <NavLink to='/vendas'>Vendas</NavLink>
        </li>
        <li>
          <span><img src={webhooks} alt="" /></span>
          <a>Webhooks</a>
        </li>
        <li>
          <span><img src={configuracoes} alt="" /></span>
          <a>Configuracoes</a>
        </li>
        <li>
          <span><img src={contato} alt="" /></span>
          <a>Contato</a>
        </li>
        <li>
          <span><img src={sair} alt="" /></span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
