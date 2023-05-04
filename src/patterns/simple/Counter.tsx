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
			<button>
				<MinusOutlined onClick={handleDecrement} />
			</button>{" "}
			<span>{label ?? ""}</span> {count}{" "}
			<button>
				<PlusOutlined onClick={handleIncrement} />
			</button>
		</>
	);
};

export { Counter };
