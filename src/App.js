import { FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Covid-19 Tracker </h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc"></Select>
      </FormControl>
    </div>
  );
}

export default App;
