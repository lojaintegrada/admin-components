import React from 'react'

// import { Button } from '../../Components/Button'
import './../../tailwind.css'

export const Topbar: React.FC<TopbarProps> = () => (
  <div className="flex fixed justify-between items-center top-0 px-4 py-2 lg:px-8 lg:py-4 w-full z-20 bg-base-1 shadow h-16"></div>
)

export interface TopbarProps {
  user?: {}
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}
