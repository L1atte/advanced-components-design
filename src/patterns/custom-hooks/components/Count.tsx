import { useCounterContext } from "../useCounterContext";

const Count = (): JSX.Element => {
	const { count } = useCounterContext();

	return <>{count}</>;
};

export { Count };
