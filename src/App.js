import { BrowserRouter as Router, Route } from "react-router-dom";
import Debt from "./Components/Debt.js";
import Home from "./Components/Home.js";

function App() {
  return (
    <Router >
      <Route path="/" exact component={Home}/>
      <Route path="/debt" component={Debt}/>
      
    </Router>
  );
}

export default App;
