import React from 'react'
import { Outlet } from 'react-router-dom'


export const Acceuil = () => {
  return (
    <div className='Accueil'>
        <h1>Gestion des Posts</h1>
        <Outlet />
    </div>
  )
}
