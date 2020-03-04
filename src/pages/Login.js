import React from 'react'

const Login = (props) => {
  const inputRef = React.createRef()
  const { setAuth } = props
  function login(e){
    e.preventDefault()
    const { value } = inputRef.current
    if (value == 123) {
      localStorage.setItem('token', 123)
      setAuth(true)
    }else{
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }
  return (
    <div>
      {/* 
      TODO: Your login page implementation
      */}
      <form>
        <input data-test='login__pwd' type='password' ref={inputRef}/>
        <button data-test='login__submit' type='submit' onClick={login}>login</button>
      </form>
    </div>
  )
}

export default Login