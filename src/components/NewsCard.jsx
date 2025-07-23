import React from "react";
import "../styles/newsCard.css";

export default function NewsCard({ article }) {
	return (
		<div className="news-card">
			{article.image_url && (
				<img
					src={article.image_url}
					alt={article.title}
					className="news-image"
				/>
			)}
			<h3>{article.title}</h3>
			<p>{article.description}</p>
			<a href={article.link} target="_blank" rel="noreferrer">
				Read more
			</a>
		</div>
	);
}
