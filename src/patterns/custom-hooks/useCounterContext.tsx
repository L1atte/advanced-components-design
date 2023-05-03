import { createContext, useContext } from "react";

const CounterContext = createContext<{ count: number; handleIncrement: () => unknown; handleDecrement: () => unknown } | undefined>(undefined);

const CounterProvider = ({ children, value }: { children: JSX.Element | JSX.Element[]; value: any }): JSX.Element => {
	return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
};

const useCounterContext = () => {
	const context = useContext(CounterContext);
	if (context === undefined) {
		throw new Error("useCounterContext must be used within a CounterProvider");
	}
	return context;
};

export { CounterProvider, useCounterContext };
