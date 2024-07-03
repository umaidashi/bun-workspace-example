import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { client } from "./client";

function useApi() {
	const [message, setMessage] = useState("Loading...");

	const fetchApi = async () => {
		const res = await client.api.$post({
			json: {
				name: "hono",
			},
		});
		const data = await res.json();
		setMessage(data.message);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchApi();
	}, []);

	return {
		data: message,
	};
}

function App() {
	const [count, setCount] = useState(0);

	const { data: message } = useApi();

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
			<h1>{message}</h1>
		</>
	);
}

export default App;
