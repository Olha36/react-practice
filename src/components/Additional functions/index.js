import React from 'react'

export default function GetDigitsSum() {
  function sum1(num1) {
    return num1
  }
  function sum2(num2) {
    return num2
  }
  function sum3(num3) {
    return num3
  }

  const getSum = sum1(1) + sum2(2) + sum3(3)

  return (
    <div>
      <p>{getSum}</p>
    </div>
  )
}
