import { useState } from "react";

const useCounter = ({ initial, max }: { initial?: number; max?: number }) => {
	const [count, setCount] = useState<number>(initial ?? 0);

	//Function which concat all functions together
	const callFnsInSequence =
		(...fns: Function[]) =>
		(...args: unknown[]) =>
			fns.forEach(fn => fn && fn(...args));

	function handleIncrement() {
		const newCount = count === max ? count : count + 1;
		setCount(newCount);
	}

	function handleDecrement() {
		setCount(prev => --prev);
	}

	const getCounterProps = ({ ...otherProps }: Record<string, any> = {}) => ({
		value: count,
		...otherProps,
	});

	const getIncrementProps = ({ onClick, ...otherProps }: Record<string, any> = {}) => ({
		onClick: callFnsInSequence(handleIncrement, onClick),
		disabled: count === 0,
		...otherProps,
	});

	const getDecrementProps = ({ onClick, ...otherProps }: Record<string, any> = {}) => ({
		onClick: callFnsInSequence(handleDecrement, onClick),
		disabled: count === 0,
		...otherProps,
	});

	return {
		count,
		handleIncrement,
		handleDecrement,
		getCounterProps,
		getDecrementProps,
		getIncrementProps,
	};
};

export { useCounter };
