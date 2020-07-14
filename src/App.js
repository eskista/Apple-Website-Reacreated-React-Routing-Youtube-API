import React, { Component } from "react";
// Importing Router Library here
// BrowserRouter handles the main routing functionality
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home Page
import Alert from "./Component/Alert/Alert";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";

// Pages
import Mac from "./Pages/Mac";
import Iphone from "./Pages/Iphone";
import Ipad from "./Pages/Ipad";
import Watch from "./Pages/Watch";
import Tv from "./Pages/Tv";
import Music from "./Pages/Music";
import Support from "./Pages/Support";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import Productspage from "./Pages/Productspage";
// import Singleproduct from "./Pages/Singleproduct";
import Four04 from "./Pages/Four04";

// Switch Checks for provided paths and stops checking for any path as soon as it finds exact match
// Route defines the path and Renders components based on the URL
// Link to pass additional properties
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Alert} />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/mac" exact component={Mac} />
            <Route path="/iphone" exact component={Iphone} />
            <Route path="/ipad" exact component={Ipad} />
            <Route path="/watch" exact component={Watch} />
            <Route path="/tv" component={Tv} />
            <Route path="/music" exact component={Music} />
            <Route path="/Support" exact component={Support} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/iphone/:pid" component={Productspage} />
            {/* <Route path="/Singleproduct" exact component={Singleproduct} /> */}
            <Route path="/" component={Four04} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
