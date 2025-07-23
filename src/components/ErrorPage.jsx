import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loadingError.css";

export default function ErrorPage({ message = "Something went wrong!" }) {
	const navigate = useNavigate();

	return (
		<div className="center-page error">
			<h2>⚠️ Oops!</h2>
			<p className="status-text">{message}</p>
			<button onClick={() => navigate("/")} className="back-btn">
				Go Back Home
			</button>
		</div>
	);
}
