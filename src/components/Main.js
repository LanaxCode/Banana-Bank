import { useState } from "react";

const Main = () => {

    const [saldo, setSaldo] = useState("");
    const [inputValue, setInputValue] = useState();

    const inputMoney = () => {
        setSaldo(saldo + inputValue)
    }

    const onChange1 = event => {
        setInputValue(Number(event.target.value));
    };

    const outputMoney = () => {
        setSaldo(saldo - inputValue)
    }


    return (
        <main className="konto">
            <h1>Dein Girokonto</h1>
            <section className="saldo">{saldo}€</section>
            <input
                type="number"
                className="geldbetrag"
                value={inputValue}
                onChange={onChange1}
                placeholder="Gib einen Geldbetrag ein"
            />
            <div>

                <button className="einzahlen"
                    onClick={inputMoney}>
                    Einzahlen
                </button>
                <button
                    onClick={outputMoney}
                    className="auszahlen">
                    Auszahlen
                </button>
            </div>
        </main>
    );
}

export default Main;