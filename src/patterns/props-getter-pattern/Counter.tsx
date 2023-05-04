import { useEffect, useRef, useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Decrement, Increment, Label } from "./components";

const Counter = ({ children, value: count, onChange }: { children: JSX.Element | JSX.Element[]; value: number; onChange?: (...args: any[]) => unknown }): JSX.Element => {
	const firstMounded = useRef<boolean>(true);
	useEffect(() => {
		if (!firstMounded.current) {
			onChange && onChange(count);
		}
		firstMounded.current = false;
	}, [count, onChange]);

	return <CounterProvider value={{ count }}>{children}</CounterProvider>;
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
