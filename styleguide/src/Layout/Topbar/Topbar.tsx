import React from 'react'

export const Topbar: React.FC<TopbarProps> = ({
  logoHref = '//app.lojaintegrada.com.br/painel',
  logoSrc = 'https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo.svg',
  logoTitle = 'Loja Integrada',
  children,
}) => (
  <div className="flex fixed justify-between items-center top-0 pb-2 pt-2-safe px-4-safe lg:pb-4 lg:px-8-safe lg:pt-4-safe w-full z-20 bg-base-1 shadow h-16">
    <div className="flex">
      <a className="logo flex items-center text-base-1 text-sm" href={logoHref}>
        <img
          src={logoSrc}
          alt={logoTitle}
          style={{
            width: '130px',
          }}
        />
      </a>
    </div>
    <div className="flex items-center">{children}</div>
  </div>
)

export interface TopbarProps {
  /** Link of the logo
   * @default '//app.lojaintegrada.com.br/painel'
   */
  logoHref?: string
  /** Image link of the logo
   * @default 'https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo.svg'
   */
  logoSrc?: string
  /** Title of the logo
   * @default 'Loja Integrada'
   */
  logoTitle?: string
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: TopbarProps) => React.ReactNode)
}
