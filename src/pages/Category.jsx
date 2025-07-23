import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchNews } from "../services/NewsApi";
import NewsCard from "../components/NewsCard";
import "../styles/category.css"; // Reusing country styles

const categories = [
	"top",
	"business",
	"entertainment",
	"environment",
	"food",
	"health",
	"politics",
	"science",
	"sports",
	"technology",
	"world",
];

export default function Category() {
	const { type } = useParams();
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		fetchNews({ category: type })
			.then((data) => setArticles(data))
			.catch((err) => setError("Failed to load news"))
			.finally(() => setLoading(false));
	}, [type]);

	return (
		<div className="country-page">
			<div className="news-section">
				<h2>Category: {type.toUpperCase()}</h2>
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p style={{ color: "red" }}>{error}</p>
				) : articles.length === 0 ? (
					<p>No articles found.</p>
				) : (
					articles.map((item, idx) => <NewsCard key={idx} article={item} />)
				)}
			</div>

			<aside className="sidebar">
				<h3>Categories</h3>
				<ul>
					{categories.map((cat) => (
						<li key={cat}>
							<Link
								to={`/category/${cat}`}
								className={cat === type ? "active" : ""}
							>
								{cat.charAt(0).toUpperCase() + cat.slice(1)}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
