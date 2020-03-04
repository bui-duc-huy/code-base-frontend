import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const Menu = (props) => {
  const { history, setAuth } = props
  function logout(){
    localStorage.clear()
    history.push('login')
    setAuth(false)
  }
  return (
    <div>
      <h3>Menu</h3>
      <ul id='menu'>
        <li onClick={() => history.push('dashboard')}>/dashboard</li>
        <li onClick={() => history.push('setting')} >/setting</li>
        <li><button data-test='logout__btn' onClick={logout}>Logout</button></li>
      </ul>
    </div>
  )
}