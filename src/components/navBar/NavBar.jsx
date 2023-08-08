import './NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () =>  {
  return (
    <nav className='nav'>
        <NavLink className='nav-link' to={'/'}>Входящие</NavLink>
        <NavLink className='nav-link' to={'deleted'}>Удаленные</NavLink>
        <NavLink className='nav-link' to={'completed'}>Завершенные</NavLink>
        <NavLink className='nav-link' to={'projects'}>Проекты</NavLink>
        <NavLink className='nav-link' to={'create-project'}>Создать проект</NavLink>
    </nav>
  )
}
