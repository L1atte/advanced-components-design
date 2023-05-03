import { Counter } from "./Counter";

const Usage = (): JSX.Element => {
	const handleChangeCounter = (count: number) => {
		console.log("count", count);
	};

	return (
		<Counter onChange={handleChangeCounter}>
			<Counter.Decrement></Counter.Decrement>
			<Counter.Label>{"Counter"}</Counter.Label>
			<Counter.Count max={10}></Counter.Count>
			<Counter.Increment></Counter.Increment>
		</Counter>
	);
};

export { Usage };
