import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchNews } from "../services/NewsApi";
import NewsCard from "../components/NewsCard";
import "../styles/searchResult.css";

export default function SearchResults() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchNews({ q: query }).then((data) => {
			setArticles(data);
			setLoading(false);
		});
	}, [query]);

	return (
		<div className="search-page">
			<h1>
				Search Results for: <span className="highlight-query">"{query}"</span>
			</h1>

			{loading ? (
				<p className="loading">Loading articles...</p>
			) : articles.length === 0 ? (
				<p className="no-results">
					No articles found for <strong>{query}</strong>. Please try a different
					search term.
				</p>
			) : (
				<div className="news-grid">
					{articles.map((item, idx) => (
						<NewsCard key={idx} article={item} />
					))}
				</div>
			)}
		</div>
	);
}
