import { useState } from "react";

const useCounter = () => {
	const [count, setCount] = useState<number>(0);

	function handleIncrement() {
		setCount(prev => ++prev);
	}

	function handleDecrement() {
		setCount(prev => --prev);
	}

	return {
		count,
		handleIncrement,
		handleDecrement,
	};
};

export { useCounter };
