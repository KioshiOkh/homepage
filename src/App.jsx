import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Front, Wetter, Impressum, Privacy_Policy } from "./web";
import {Layout} from "./Layout"

function App(){
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Front />}/>
          <Route path="/wetter" element={<Wetter />}/>
          <Route path="/impressum" element={<Impressum />}/>
          <Route path="/privacy-policy" element={<Privacy_Policy/>}/>
        </Route>
      </Routes>
    </Router>
  )
}


export default App;
