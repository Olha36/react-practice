import React, { useState } from 'react'

export default function Auth() {
  const isAuth = false

  const [toggle, settoggle] = useState(false)

  const toggleButton = () => {
    settoggle(!toggle)
  }

  return (
    <div>
      {!isAuth && (
        <button onClick={toggleButton}>
          {toggle ? 'good luck' : 'пожалуйста, авторизуйтесь'}
        </button>
      )}
    </div>
  )
}
