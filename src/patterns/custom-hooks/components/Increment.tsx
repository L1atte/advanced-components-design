import { PlusOutlined } from "@ant-design/icons";

const Increment = ({ onClick }: { onClick: () => void }): JSX.Element => {
	return (
		<button>
			<PlusOutlined onClick={onClick}></PlusOutlined>
		</button>
	);
};

export { Increment };
