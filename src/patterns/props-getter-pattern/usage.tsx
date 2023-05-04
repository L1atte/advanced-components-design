import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

const MAX_COUNT = 10;

const Usage = (): JSX.Element => {
	const { count, getCounterProps, getDecrementProps, getIncrementProps } = useCounter({ initial: 0 });

	const handleBtn1Clicked = (): void => {
		console.log("btn 1 clicked");
	};

	return (
		<>
			<Counter {...getCounterProps()}>
				<Counter.Decrement {...getDecrementProps()} />
				<Counter.Label>Counter</Counter.Label>
				<Counter.Count />
				<Counter.Increment {...getIncrementProps()} />
			</Counter>

			<button {...getIncrementProps({ onClick: handleBtn1Clicked })}>Custom increment btn 1</button>

			<button {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}>Custom increment btn 2</button>
		</>
	);
};

export { Usage };
