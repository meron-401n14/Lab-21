import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Home from "./Home";
import Draw from "./Draw";
import About from "./About";



const Main = () => (
<main>


<Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/draw" component={Draw} />
            <Route exact path="/about" component={About} />
          </Switch>




</main>


)



export default Main;