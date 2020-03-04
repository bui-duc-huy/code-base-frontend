import React from 'react'
import { Menu } from './../components/Menu'

const Setting = (props) => {
  const { search } = props.location
  if (search.length != 0) {
    const key = search.split('=')[1]
    return (
      <div>
        <Menu history={props.history} setAuth={props.setAuth}></Menu>
        {/* Setting page - Section: FooSection */}
        Setting page - Section: {key}
  </div>
    )
  }
  return <div>
    <Menu history={props.history} setAuth={props.setAuth}></Menu>
    {/* Setting page - Section: FooSection */}
    Setting page
  </div>
}

export default Setting