export default function Adult() {
    let text;
    const isAdult = true;
  
    if(isAdult) {
      text = 'aged 18';
    } else {
      text = 'under 18';
    }
  
    return <div>
      <p>{text}</p>
    </div>
  }