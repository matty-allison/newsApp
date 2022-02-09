import Landing from "./Components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
