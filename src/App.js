import React, { useState, Suspense } from 'react'
import routes from './config/routes'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import { Menu } from './components/Menu'

function App() {
  const [isAuth, setAuth] = useState(!!window.localStorage.getItem('token'))
  return (
    <div>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}
      <Suspense fallback={<div>loading ...</div>}>
        <BrowserRouter>
          <Switch>
            {routes &&
              routes.map((route) =>
                <Route
                  key={route.title}
                  {...route}
                  component={props1 => {
                    const MyComponent = React.lazy(() =>
                      import(`./pages/${route.component}`)
                    )
                    return (isAuth) ? (
                      !route.isProtected ? (
                        <Redirect to="dashboard"></Redirect>
                      ) : (
                          <div>
                            <MyComponent setAuth={setAuth} {...props1} {...route}/>
                          </div>
                        )
                    ) : (
                        <div>
                          <Redirect to="login"></Redirect>
                          <Login setAuth={setAuth}></Login>
                        </div>
                      )
                  }}
                />
              )}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App