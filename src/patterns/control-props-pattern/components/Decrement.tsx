import { MinusOutlined } from "@ant-design/icons";
import { useCounterContext } from "../useCounterContext";

const Decrement = (): JSX.Element => {
	const { handleDecrement } = useCounterContext();

	return (
		<button>
			<MinusOutlined onClick={handleDecrement}></MinusOutlined>
		</button>
	);
};

export { Decrement };
