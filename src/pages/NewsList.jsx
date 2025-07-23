import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/NewsApi";

export default function NewsList() {
	const [newsList, setNewsList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getNews = async () => {
			try {
				const data = await fetchNews();
				setNewsList(data);
			} catch (err) {
				setError("Failed to load news.");
			} finally {
				setLoading(false);
			}
		};
		getNews();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<h2>Latest News</h2>
			{newsList.map((news, index) => (
				<div
					key={index}
					style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
				>
					<h3>{news.title}</h3>
					<p>{news.description}</p>
					<a href={news.link} target="_blank" rel="noopener noreferrer">
						Read more
					</a>
				</div>
			))}
		</div>
	);
}
