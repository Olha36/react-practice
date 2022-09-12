import React from 'react'

export default function Auth() {
  const isAuth = false

  return <div>{!isAuth && <button>пожалуйста, авторизуйтесь</button>}</div>
}
