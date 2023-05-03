import { useEffect, useRef, useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Decrement, Increment, Label } from "./components";

const Counter = ({ children, onChange, initialValue = 0 }: { children: JSX.Element | JSX.Element[]; onChange?: (...args: any[]) => unknown; initialValue?: number }): JSX.Element => {
	const [count, setCount] = useState<number>(initialValue);

	const firstMounded = useRef<boolean>(true);
	useEffect(() => {
		if (!firstMounded.current) {
			onChange && onChange(count);
		}
		firstMounded.current = false;
	}, [count, onChange]);

	function handleIncrement() {
		setCount(prev => ++prev);
	}

	function handleDecrement() {
		setCount(prev => --prev);
	}

	return <CounterProvider value={{ count, handleIncrement, handleDecrement }}>{children}</CounterProvider>;
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
