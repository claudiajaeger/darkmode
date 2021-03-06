import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stuff from "./Stuff";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";

function App() {
  const [darkMode, setDarkTheme] = React.useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "app"}>
      <Router>
        <div className="navigation">
          <Navigation />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/stuff" component={Stuff} />
          </Switch>
        </div>
      </Router>
      <div className="level">
        <div>
          <h1 className="title">Dark Mode</h1>
        </div>

        <button
          onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
          className="app__dark-mode-btn icon level-right"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Clear</a>
        </div>
      </section>
    </div>
  );
}

export default App;
