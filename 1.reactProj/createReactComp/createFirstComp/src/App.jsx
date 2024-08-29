import Subscribe from "./Subscribe";
import Hello from "./Hello";
import description from "./description";


function App(){
  return <div>
    
    <h1>
        I am learning react right now .
    </h1>
    <Hello></Hello>
    <description></description>{/* but description component is not working  */}
    
    <Subscribe></Subscribe>{/* my subscibe component is working  */}
  </div>
  
}

export default App;
