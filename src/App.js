import data from "./constants/data.json";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [json, setJson] = useState(data);
  return (
    <div>
      <List data={json} />
    </div>
  );
}

export default App;
