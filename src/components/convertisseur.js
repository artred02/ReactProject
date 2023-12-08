import React from "react";

import App from "../App";

const Convertisseur = () => {

    const [devise1, setDevise1] = React.useState("EUR");
    const [isLoading, setLoading] = React.useState(false);
    const [tabDevise, setTabDevise] = React.useState({"EUR": 0, "CHF": 0, "GBP": 0, "USD": 0});
    
	const [resAmount, setResAmount] = React.useState(0);

    const fetchDevise = async (devise) => {
        setLoading(true);
        const result = await fetch("https://react-starter-api.vercel.app/api/convert/"+devise);
        const resultJson = await result.json();
        setTabDevise({ "EUR": resultJson.data.EUR, "CHF": resultJson.data.CHF, "GBP": resultJson.data.GBP, "USD": resultJson.data.USD })
        setLoading(false);
    };

    React.useEffect(() => {
        fetchDevise(devise1);
    }, []);

    const changeDevise1 = (devise) => {
        fetchDevise(devise);
        setDevise1(devise);
        setResAmount(0);
        document.getElementById("amount").value = 0;
    }

    return (
        <>
            <App setDevise1={changeDevise1} isLoading={isLoading} tabDevise={tabDevise} resAmount={resAmount} setResAmount={setResAmount} />
        </>
    );
}

export default Convertisseur;