import { MinusOutlined } from "@ant-design/icons";

const Decrement = ({ onClick }: { onClick: () => void }): JSX.Element => {
	return <MinusOutlined onClick={onClick}></MinusOutlined>;
};

export { Decrement };
