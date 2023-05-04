import { MinusOutlined } from "@ant-design/icons";

const Decrement = ({ onClick }: { onClick: () => void }): JSX.Element => {
	return (
		<button>
			<MinusOutlined onClick={onClick}></MinusOutlined>
		</button>
	);
};

export { Decrement };
