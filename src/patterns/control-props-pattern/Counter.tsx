import { useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Decrement, Increment, Label } from "./components";

const Counter = ({ value, onChange, children }: { value?: number; onChange?: (value: number) => unknown; children: JSX.Element | JSX.Element[] }): JSX.Element => {
	const [count, setCount] = useState<number>(0);

	function getCount(): number {
		return value ? value : count;
	}

	function handleSetCount() {
		return onChange ? onChange : setCount;
	}

	function handleIncrement() {
		const setter = handleSetCount();
		let count = getCount();
		setter(++count);
	}

	function handleDecrement() {
		const setter = handleSetCount();
		let count = getCount();
		setter(--count);
	}

	return <CounterProvider value={{ count: getCount(), handleIncrement, handleDecrement }}>{children}</CounterProvider>;
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
