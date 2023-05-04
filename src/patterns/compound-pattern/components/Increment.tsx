import { PlusOutlined } from "@ant-design/icons";
import { useCounterContext } from "../useCounterContext";

const Increment = (): JSX.Element => {
	const { handleIncrement } = useCounterContext();

	return (
		<button>
			<PlusOutlined onClick={handleIncrement}></PlusOutlined>
		</button>
	);
};

export { Increment };
