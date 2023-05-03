import { Counter } from "./Counter";

const Usage = (): JSX.Element => {
	const label = "Counter";
	const onChange = (count: number) => {
		console.log("count:", count);
	};

	return (
		<Counter
			label={label}
			onChange={onChange}
		></Counter>
	);
};

export { Usage };
