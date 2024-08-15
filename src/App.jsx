// src/App.jsx
import "./App.css";
import React from "react";
import ContentWrapper from "./components/ContentWrapper";

function App() {
	return (
		<div>
			<ContentWrapper title="Child components opgave" subtitle="React tests">
				<p>Test test test test.</p>
			</ContentWrapper>

			<ContentWrapper title="En anden Sektion" subtitle="En anden undertitel">
				<button>Dette er en knap som et child component</button>
			</ContentWrapper>
		</div>
	);
}

export default App;
