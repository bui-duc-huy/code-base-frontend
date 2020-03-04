import React from 'react'
import { Menu } from './../components/Menu'

const Dashboard = (props) => {
  return (
    <div>
      <Menu history = {props.history} setAuth={props.setAuth}></Menu>
      <p data-test='db__welcome'>
        Welcome to dashboard page
      </p>
    </div>
  )
}

export default Dashboard