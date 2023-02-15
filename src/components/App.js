import Dropdown from "./Dropdown";
import "../styles/App.css"


function App()
{
  const items=["Option1","Option2","Option3"];
  return(
    <div className="App">
      <h1>Choose your Option</h1>
      <Dropdown items={items}/>
    </div>
  );
}

export default App;