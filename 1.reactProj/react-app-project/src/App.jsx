import KgButton from "./KgButton";
import description from"./description";

function App(){
  return <div>
        <h1>hey!, i am learning react </h1>
        <description></description>{/** this component is not working  */}
        
        <KgButton></KgButton> {/** this component is working  */}
    </div>
}

export default App;