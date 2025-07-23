import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/NewsApi";
import { fetchLatestNews } from "../services/LatestNewsApi";
import NewsCard from "../components/NewsCard";
import LatestNewsCard from "../components/LatestNewsCard";
import LoadingPage from "../components/LoadingPage"; // Your custom loading component
import ErrorPage from "../components/ErrorPage"; // Your custom error component
import "../styles/home.css";

export default function Home() {
	const [articles, setArticles] = useState([]);
	const [latest, setLatest] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadAllNews = async () => {
			setLoading(true);
			setError(null);
			try {
				const [newsData, latestData] = await Promise.all([
					fetchNews(),
					fetchLatestNews(),
				]);
				setArticles(newsData);
				setLatest(latestData);
			} catch (err) {
				setError("Failed to fetch news. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		loadAllNews();
	}, []);

	if (loading) return <LoadingPage />;
	if (error) return <ErrorPage message={error} />;

	return (
		<div className="home-page">
			<section className="top-headlines">
				<h2>📰 Top Headlines</h2>
				<div className="news-grid">
					{articles.map((item, idx) => (
						<NewsCard key={idx} article={item} />
					))}
				</div>
			</section>

			<section className="latest-news">
				<h2>🕒 Latest News</h2>
				<div className="latest-grid">
					{latest.map((item, idx) => (
						<LatestNewsCard key={idx} article={item} />
					))}
				</div>
			</section>
		</div>
	);
}
