import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Usage as Simple } from "./patterns/simple/usage";
import { Usage as CompoundPattern } from "./patterns/compound-pattern/usage";
import { Usage as ControlProps } from "./patterns/control-props-pattern/useage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src="/vite.svg"
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://reactjs.org"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Components design</h1>
			<div>
				<Simple></Simple>
			</div>
			<div>
				<CompoundPattern></CompoundPattern>
			</div>
			<div>
				<ControlProps></ControlProps>
			</div>
		</div>
	);
}

export default App;
