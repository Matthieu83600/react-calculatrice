import { useState } from "react"
import { divide, multiply, substract, sum } from "utils/math-function";

const OPERATORS = ['+', '-', 'x', '/'];

export function Calculator({ defaultA, defaultB, defaultOperator}) {
    const [inputValueA, setInputValueA] = useState(
        !defaultA || isNaN(defaultA) ? 0 : Number(defaultA));
    const [inputValueB, setInputValueB] = useState(
        !defaultB || isNaN(defaultB) ? 0 : Number(defaultB));
    const [operator, setOperator] = useState(
        OPERATORS.includes(defaultOperator)? defaultOperator : '+');
    const getResult = () => {
        switch(operator) {
            case "+":
                return sum(inputValueA, inputValueB);
            case "-":
                return substract(inputValueA, inputValueB);
            case "x":
                return multiply(inputValueA, inputValueB);
            case "/":
                return divide(inputValueA, inputValueB);
            default:
                return "Pas d'opérateur sélectionné."
        };
    };
    return (
        <div>
            <h1 style={{ marginBottom: 40 }}>Calculatrice</h1>
            <h2>Résultat :</h2>
            { getResult() }
        </div>
    )
};