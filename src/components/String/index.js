export default function String() {
    const str1 = 'label';
    const str2 = 'block';
    const str3 = 'elem';
    return (
      <div>
        <label id={str1} for={str2} class={str3}>
              text</label> <br/> 
            <input id={str2}></input>
      </div>
    )
  }