import { Dropdown } from './'

const items = ["Option 1", "Option 2", "Option 3"];

const App=()=>{
  return (
    <div className="App">
      <Dropdown items={items}/>
    </div>
  );
}

export default App;
