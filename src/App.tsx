import { Route, Routes } from "react-router-dom";
import { PeopleList } from "./features/peopleList";
import { CharacterInfo } from "./features/personInfo";


function App() {

  return (
    <Routes >
      <Route path="/" element={<PeopleList/>}/>
      <Route path="/character/:id" element={<CharacterInfo/>}/>
    </Routes>
    
  );
}

export default App;
