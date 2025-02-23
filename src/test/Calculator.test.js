import { render, screen, fireEvent } from '@testing-library/react';
import { Calculator } from 'components/Calculator';

describe("<Calculator/>", () => {
    it("has 'Calculatrice' displayed somewhere", () => {
        render(<Calculator />);
        const title = screen.getByText('Calculatrice');
        expect(title.textContent).toBe('Calculatrice');
    });
    it("has an h1 that contains 'Calculatrice", () => {
        render(<Calculator />);
        const title = screen.getByRole('heading', {level: 1});
        expect(title.textContent).toBe('Calculatrice');
    });
    it("performs 0+0 by default", () => {
        render(<Calculator />);
        const { getValueA, getValueB, getOperator, getResult } = getCalculator();
        expect(getValueA()).toBe("0");
        expect(getValueB()).toBe("0");
        expect(getOperator()).toBe("+");
        expect(getResult()).toBe("0");
    });
    it("uses correctly the default values", () => {
        render(<Calculator defaultA={12} defaultB={10} defaultOperator={"x"} />);
        const { getValueA, getValueB, getOperator, getResult } = getCalculator();
        expect(getValueA()).toBe("12");
        expect(getValueB()).toBe("10");
        expect(getOperator()).toBe("x");
        expect(getResult()).toBe("120");
    });
    it("calculates correctly when the user updates an input", () => {
        render(<Calculator defaultA={12} defaultB={10} defaultOperator={"x"} />);
        const { getValueA, getValueB, getOperator, getResult } = getCalculator();
        fireEvent.change(screen.getByTestId("inputA"), { target: { value: 3 } });
        expect(getValueA()).toBe("3");
        fireEvent.change(screen.getByTestId("inputB"), { target: { value: 3 } });
        expect(getValueB()).toBe("3");
        fireEvent.change(screen.getByTestId("operator"), { 
            target: { value: "-" } });
        expect(getOperator()).toBe("-");
        expect(getResult()).toBe("0");
    });
    it("displays an error when we divide by 0", () => {
        render(<Calculator defaultA={0} defaultB={0} defaultOperator={"/"} />);
        const { getResult } = getCalculator();
        expect(getResult()).toBe("Tu ne peux pas diviser par 0 !");
    });
    it("displays an error when the operator is invalid", () => {
        render(<Calculator defaultA={0} defaultB={0} defaultOperator={"/"} />);
        const { getResult } = getCalculator();
        fireEvent.change(screen.getByTestId("operator"), { 
            target: { value: " " } });
        expect(getResult()).toBe("Pas d'opérateur sélectionné.");
    });
    it("concidere an empty input as 0", () => {
        render(<Calculator defaultA={12} defaultB={10} defaultOperator={"x"} />);
        const { getResult } = getCalculator();
        fireEvent.change(screen.getByTestId("inputA"), { target: { value: "" } });
        fireEvent.change(screen.getByTestId("inputB"), { target: { value: "" } });
        expect(getResult()).toBe("0");
    });
});

const getCalculator = () => {
    return {
        getValueA: () => screen.getByTestId("inputA").value,
        getValueB: () => screen.getByTestId("inputB").value,
        getOperator: () => screen.getByTestId("operator").value,
        getResult: () => screen.getByTestId("result").textContent
    } 
};