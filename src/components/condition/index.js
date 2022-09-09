export default function Condition() {
    let example;
      const show = true;
  
    if (show) {
          example = 'example1';
      } else {
          example = 'example2';
      }
      
      return <div>
          {example}
      </div>;
  }