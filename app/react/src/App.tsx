import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { client } from "./client";

function App() {
	const [count, setCount] = useState(0);

	// const res = await client.api.$get();
	// if (res.ok) {
	// 	const data = await res.json();
	// 	console.log(data);
	// }

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Component />
		</>
	);
}

function Component() {
	const [data, setData] = useState<string>("");
	useEffect(() => {
		async () => {
			const res = await client.index.$get();
			if (res.ok) {
				const data = await res.text();
				console.log(data);
				setData(data);
			}
		};
	});
	return (
		<>
			<h1>Hello Hono!</h1>
			<p>{data}</p>
		</>
	);
}

export default App;
