import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState } from "react";

const Counter = ({ label, onChange }: { label: string; onChange?: (...args: any[]) => void }): JSX.Element => {
	const [count, setCount] = useState<number>(0);

	function handleDecrement() {
		setCount(prev => {
			onChange && onChange(prev);
			return --prev;
		});
	}

	function handleIncrement() {
		setCount(prev => {
			onChange && onChange(prev);
			return ++prev;
		});
	}

	return (
		<>
			<MinusOutlined onClick={handleDecrement} /> <span>{label ?? ""}</span> {count} <PlusOutlined onClick={handleIncrement} />
		</>
	);
};

export { Counter };
