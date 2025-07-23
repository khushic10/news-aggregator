import React from "react";
import "../styles/latestNewsCard.css";

export default function LatestNewsCard({ article }) {
	return (
		<div className="latest-card">
			{article.image_url && (
				<img
					src={article.image_url}
					alt={article.title}
					className="latest-image"
				/>
			)}
			<h4>{article.title}</h4>
			<a href={article.link} target="_blank" rel="noreferrer">
				Read more
			</a>
		</div>
	);
}
