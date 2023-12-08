import React from "react";

import App from "../App";

const Convertisseur = () => {

    const [res, setRes] = React.useState(0);
    const [devise1, setDevise1] = React.useState("EUR");
    const [devise2, setDevise2] = React.useState("EUR");
    const [changeDevise, setChangeDevise] = React.useState({isLoading: false});

    const fetchDevise = async (devise) => {
        setChangeDevise({ isLoading: true });
        const result = await fetch("https://react-starter-api.vercel.app/api/convert/"+devise);
        const resultJson = await result.json();
        console.log(resultJson);
        setChangeDevise({ isLoading: false, data: resultJson.data });
    };

    fetchDevise(devise1);

    const handleAmount = (value) => {
        setRes(value);
    }

    const changeFirstDevise = (devise) => {
        setDevise1(devise);
        fetchDevise(devise);
        if(!changeDevise.isLoading) {
            console.log(changeDevise.data);
        }
    }

    return (
        <>
        <div>
            <App handleAmount={handleAmount} resAmount={res} setDevise1={changeFirstDevise} setDevise2={setDevise2} isLoading={changeDevise.isLoading} />
        </div>
        <input type="text" value={devise1} />
        <input type="text" value={devise2} />
        </>
    );
}

export default Convertisseur;