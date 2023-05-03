import { PlusOutlined } from "@ant-design/icons";
import { useCounterContext } from "../useCounterContext";

const Increment = (): JSX.Element => {
	const { handleIncrement } = useCounterContext();

	return <PlusOutlined onClick={handleIncrement}></PlusOutlined>;
};

export { Increment };
