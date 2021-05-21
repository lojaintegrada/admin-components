import React from 'react'

export const Sidebar = () => {
  return (
    <div className="sidebar z-1 w-0 " id="sidebar-menu">
      <a className="sidebar-mode-toggle hidden lg:flex" href="javascript:;">
        <svg className="fill-current " viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.75 14a.995.995 0 01-.665-.253l-4.5-4a1.001 1.001 0 010-1.495l4.5-4a1 1 0 111.329 1.495L7.757 9l3.659 3.252A1 1 0 0110.75 14z" clip-rule="evenodd"></path>
        </svg>
      </a>
      <a className="sidebar-mobile-close hidden" href="javascript:;">
        <svg className="fill-current " viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.75 14a.995.995 0 01-.665-.253l-4.5-4a1.001 1.001 0 010-1.495l4.5-4a1 1 0 111.329 1.495L7.757 9l3.659 3.252A1 1 0 0110.75 14z" clip-rule="evenodd"></path>
        </svg>
      </a>
      <nav className="sidebar-content z-1 scroll">
        <div className="sidebar-item active">
          <a className="sidebar-item-btn" href="/painel" id="cat-group-inicio">
            <svg className="fill-current sidebar-item-btn-icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.462 8.249l-1.09 7.782a.511.511 0 01-.504.439H12.25v-5.979A3.256 3.256 0 009 7.238a3.256 3.256 0 00-3.25 3.253v5.979H3.13a.51.51 0 01-.503-.439l-1.09-7.782a1.016 1.016 0 01.341-.913L8.25 1.81a1.146 1.146 0 011.502.001l6.37 5.526c.261.227.39.568.341.912zM10.75 16.47H7.25v-5.979c0-.966.785-1.752 1.75-1.752.964 0 1.75.786 1.75 1.752v5.979zm6.372-10.289L10.751.654a2.67 2.67 0 00-3.504 0L.88 6.181a2.546 2.546 0 00-.854 2.28l1.09 7.783A2.038 2.038 0 003.13 18h11.737a2.038 2.038 0 002.017-1.756l1.09-7.783a2.548 2.548 0 00-.854-2.28z" clip-rule="evenodd"></path>
            </svg>
            <span className="sidebar-item-full">
              Início
            </span>
          </a>
        </div>
        <div className="sidebar-item ">
          <a className="sidebar-item-btn" data-dropdown-sidebar="#sidebar-item-dropdown-vendas" href="javascript:;" id="cat-group-vendas">
            <svg className="fill-current sidebar-item-btn-icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M14.75 12a.75.75 0 00-.75-.75H4a.75.75 0 000 1.5h10a.75.75 0 00.75-.75zm0-4a.75.75 0 00-.75-.75H4a.75.75 0 000 1.5h10a.75.75 0 00.75-.75zm-8-4A.75.75 0 006 3.25H4a.75.75 0 000 1.5h2A.75.75 0 006.75 4zM16 0H2a2 2 0 00-2 2v14.375a1.502 1.502 0 002.057 1.393l2.109-.844a2.011 2.011 0 011.637.068l.961.481a5.01 5.01 0 004.472 0l.961-.481a2.004 2.004 0 011.637-.068l2.109.844A1.499 1.499 0 0018 16.375V2a2 2 0 00-2-2zm0 1.5c.275 0 .5.225.5.5v13.932a.3.3 0 01-.412.278l-1.697-.679a3.483 3.483 0 00-1.3-.25 3.53 3.53 0 00-1.565.369l-.961.481a3.51 3.51 0 01-3.13 0l-.961-.481a3.53 3.53 0 00-1.565-.369c-.448 0-.885.084-1.3.25l-1.697.679a.3.3 0 01-.412-.278V2a.5.5 0 01.5-.5h14z" clip-rule="evenodd"></path>
            </svg>
            <span className="sidebar-item-full">
              Vendas
              <svg className="fill-current sidebar-item-arrow" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.75 14a.995.995 0 01-.665-.253l-4.5-4a1.001 1.001 0 010-1.495l4.5-4a1 1 0 111.329 1.495L7.757 9l3.659 3.252A1 1 0 0110.75 14z" clip-rule="evenodd"></path>
               </svg>
            </span>
          </a>
          <div className="sidebar-item-dropdown hidden" id="sidebar-item-dropdown-vendas">
            <a className="" href="//app-qa1.devqa.lojaintegrada.com.br/painel/pedido/listar" id="cat-item-pedidos">Pedidos</a>
            <a className="" href="//app-qa1.devqa.lojaintegrada.com.br/painel/cliente/listar" id="cat-item-clientes">Clientes</a>
            <a href="http://dashboard.awsli.com.br/index.html?source=1e5998f00d9143a12e69fa8a12aea82a" target="_blank" id="cat-item-diario-bordo">Diário de Bordo</a>
            <a className="" href="//app-qa1.devqa.lojaintegrada.com.br/painel/relatorio/" id="cat-item-relatorios">Relatórios</a>
          </div>
        </div>
        <hr />
      </nav>
      <div className="animate__animated animate__fadeIn backdrop"></div>
    </div>
  )
}

export interface SidebarProps {
  /** Size of the button
   * @default regular
   * */
  size?: 'regular' | 'large' | 'small'
  /** Button variant
   * @default primary
   * */
  variant?: 'primary' | 'secondary'
  /**
   * Position of the icon
   * @default start
   */
  iconPosition?: 'start' | 'end'
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: SidebarProps) => React.ReactNode)
}
