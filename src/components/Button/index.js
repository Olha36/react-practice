import React from 'react'

export default function Event() {
  // function show1() {
  // 	alert(1);
  // }

  // function show2() {
  // 	alert(2);
  // }

  // return <div>
  // 	<button onClick={show1}>act1</button>
  // 	<button onClick={show2}>act2</button>
  // </div>;
  function showMess(text) {
    // eslint-disable-next-line no-alert
    alert(text)
  }

  return (
    <div id="parent">
      <button type="button" onClick={() => showMess('1')}>
        act1
      </button>
      <button type="button" onClick={() => showMess('2')}>
        act2
      </button>
      <button type="button" onClick={() => showMess('3')}>
        act3
      </button>
    </div>
  )
}
