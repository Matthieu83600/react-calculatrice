import { useState } from "react"
import { divide, multiply, substract, sum } from "utils/math-function";

const OPERATORS = ['+', '-', 'x', '/'];

export function Calculator({ defaultA, defaultB, defaultOperator}) {
    const [inputValueA, setInputValueA] = useState(
        !defaultA || isNaN(defaultA) ? 0 : Number.parseFloat(defaultA));
    const [inputValueB, setInputValueB] = useState(
        !defaultB || isNaN(defaultB) ? 0 : Number.parseFloat(defaultB));
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
                return divideSafely(inputValueA, inputValueB);
            default:
                return "Pas d'opérateur sélectionné."
        };
    };
    const divideSafely = (a, b) => {
        try {
            return divide(a, b)
        } catch (err) {
            return err.message
        }
    };

    
    const renderInputA = () => {
        return (
            <input 
                value={inputValueA}
                type="number" 
                onChange={(e) => 
                    setInputValueA(e.target.value ? Number.parseFloat(e.target.value) : 0
                )} 
                />
        )
    };
    const renderInputB = () => {
        return (
            <input 
                value={inputValueB}
                type="number"
                onChange={(e) => 
                    setInputValueB(e.target.value ? Number.parseFloat(e.target.value) : 0
                )} 
            />
        )
    };
    const renderSelectBox = () => {
        return (
            <div>
                <select
                    className="form-select" 
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                >
                    {OPERATORS.map((op, index) => (
                        <option key={index} value={op}>{op}</option>
                    ))}
                </select>
            </div>
        )
    };
    return (
        <div>
            <h1 style={{ marginBottom: 40 }}>Calculatrice</h1>
            { renderInputA() }
            { renderSelectBox() }
            { renderInputB() }
            <h2 style={{ marginTop: 20 }}>Résultat :</h2>
            { getResult() }
        </div>
    )
};