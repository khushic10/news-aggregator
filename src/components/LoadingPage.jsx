import React from "react";
import "../styles/loadingError.css";

export default function LoadingPage() {
	return (
		<div className="center-page">
			<div className="loader"></div>
			<p className="status-text">Loading news for you...</p>
		</div>
	);
}
