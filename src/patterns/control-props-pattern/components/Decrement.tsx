import { MinusOutlined } from "@ant-design/icons";
import { useCounterContext } from "../useCounterContext";

const Decrement = (): JSX.Element => {
	const { handleDecrement } = useCounterContext();

	return <MinusOutlined onClick={handleDecrement}></MinusOutlined>;
};

export { Decrement };
