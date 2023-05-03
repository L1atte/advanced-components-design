import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

const Usage = (): JSX.Element => {
	const { count, handleDecrement, handleIncrement } = useCounter();

	function onCounterChange(count: number) {
		console.log("onChange", count);
	}

	return (
		<Counter
			value={count}
			onChange={onCounterChange}
		>
			<Counter.Decrement onClick={handleDecrement} />
			<Counter.Label>{"Label"}</Counter.Label>
			<Counter.Count />
			<Counter.Increment onClick={handleIncrement} />
		</Counter>
	);
};

export { Usage };
