import { useState } from "react";
import { Counter } from "./Counter";

const Usage = () => {
	const [value, setValue] = useState<number>(0);

	return (
		<Counter
			value={value}
			onChange={setValue}
		>
			<Counter.Decrement></Counter.Decrement>
			<Counter.Label>{"Counter"}</Counter.Label>
			<Counter.Count></Counter.Count>
			<Counter.Increment></Counter.Increment>
		</Counter>
	);
};

export { Usage };
