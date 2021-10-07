import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { Lema } from "./pages/Lema";
import { SobreMim } from "./pages/SobreMim";
import { Trabalho } from "./pages/Trabalho";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={SobreMim} path="/sobremim"/>
        <Route component={Lema} path="/lema"/>
        <Route component={Trabalho} path="/trabalho"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
