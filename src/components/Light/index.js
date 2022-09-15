import React, { useState } from 'react'
import lighton from './lighton.jpg'
import lightoff from './lightoff.png'

export default function Light() {
  const [toggle, setToggle] = useState(true)

  const toggleButton = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <img
        src={toggle ? lighton : lightoff}
        className={toggle}
        style={{ width: 100 }}
      ></img>
      <button onClick={toggleButton}>{toggle ? 'on' : 'off'}</button>
    </div>
  )
}
