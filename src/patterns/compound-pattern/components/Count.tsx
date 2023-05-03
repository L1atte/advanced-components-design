import { useCounterContext } from "../useCounterContext";

const Count = ({ max }: { max: number }): JSX.Element => {
	const { count } = useCounterContext();

	return <span>{count <= max ? count : max}</span>;
};

export { Count };
