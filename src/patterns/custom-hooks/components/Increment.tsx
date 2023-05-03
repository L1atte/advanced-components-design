import { PlusOutlined } from "@ant-design/icons";

const Increment = ({ onClick }: { onClick: () => void }): JSX.Element => {
	return <PlusOutlined onClick={onClick}></PlusOutlined>;
};

export { Increment };
