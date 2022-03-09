import { Route, Routes } from "react-router-dom";
import { PeopleList } from "./features/peopleList";

function App() {

  return (
    <Routes >
      <Route path="/" element={<PeopleList/>}/>
    </Routes>
    
  );
}

export default App;
