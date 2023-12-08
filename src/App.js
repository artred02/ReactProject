import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";

import M from "materialize-css";
import { useEffect } from "react";

import Spinner from "./components/Spinner/index";

const Devise = ({setDevise}) => {
  return (
      <div className="col s6">
        <label>From</label>
        <select
          onChange={(e) => setDevise(e.target.value)}
          defaultValue="EUR"
          className="browser-default"
          name="inputDevises"
          id="inputDevises"
        >
          <option value="EUR">EUR</option>
          <option value="CHF">CHF</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>
  );
}

const Loader = (loading) => {
  if(loading) {
    <Spinner />
  }
}

const App = ({handleAmount, resAmount, setDevise1, setDevise2}) => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <div className="App">
      <header>
        <nav className="AppBar">
          <img
            className="AppBar-logo"
            src={logo}
            aria-label="people"
            alt="People"
          />
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                {Devise({setDevise: setDevise1})}
                {Devise({setDevise: setDevise2})}
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="amount" type="text" className="" onChange={(e) => handleAmount(e.target.value)} />
                  <span
                    className="helper-text"
                    data-error="Erreur"
                    data-success="Valide"
                  ></span>
                  <label htmlFor="amount">Montant</label>
                </div>
                <div className="input-field col s12">
                  <h5>Result : {resAmount}</h5>
                </div>
              </div>
              {Loader({isLoading})}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
