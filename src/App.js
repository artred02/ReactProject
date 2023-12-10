import React from "react";
import "./AppBar.css";
import "./App.css";

import M from "materialize-css";
import { useEffect } from "react";

import Spinner from "./components/Spinner/index";
import Header from "./components/header";

const Devise = ({setDevise, name}) => {
	return (
		<div className="col s6">
			<label>{name}</label>
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

const Result = (resAmount, isLoading) => {
	if (isLoading)
		return <Spinner />
	else {
		return resAmount;
	}
}

const Amount = ({isLoading, tabDevise, resAmount, setResAmount, devise2}) => {
	const [valid, setValid] = React.useState("first");

	React.useEffect(() => {
		setResAmount(document.getElementById("amount").value * tabDevise[devise2].value);
	}, [devise2, tabDevise[devise2].value]);

	React.useEffect(() => {
		setResAmount(0);
	}, []);

	React.useEffect(() => {
		if(valid !== "first") {
			if(isNaN(resAmount) || resAmount < 0)
				setValid("invalid");
			else
				setValid("valid");
		} else {
			setValid("none");
		}
	}, [resAmount]);
	
	return (
		<div className="row">
			<div className="input-field col s12">
				<input id="amount" defaultValue={0} type="text" className={valid} onChange={
					(e) => {
						e.target.value = e.target.value.replace(/^(0+)/g, '');
						setResAmount(e.target.value * tabDevise[devise2].value);
					}
				} />
					<span
						className="helper-text"
						data-error="Erreur"
						data-success="Valide"
					></span>
				<label htmlFor="amount">Montant</label>
			</div>
			<div className="input-field col s12">
				<h5>Result : {Result(resAmount, isLoading)}</h5>
			</div>
		</div>
	);
}

const App = ({isLoading, setDevise1, tabDevise, resAmount, setResAmount}) => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  const [devise2, setDevise2] = React.useState("EUR");

  return (
    <div className="App">
	  <Header />
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                {Devise({setDevise: setDevise1, name: "from"})}
                {Devise({setDevise: setDevise2, name: "to"})}
              </div>
              <Amount isLoading={isLoading} tabDevise={tabDevise} devise2={devise2} resAmount={resAmount} setResAmount={setResAmount} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
