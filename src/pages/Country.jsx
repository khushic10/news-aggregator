import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNews } from "../services/NewsApi";
import NewsCard from "../components/NewsCard";
import "../styles/country.css";

const countries = [
	{ code: "us", name: "USA" },
	{ code: "in", name: "India" },
	{ code: "np", name: "Nepal" }, // <-- add Nepal here
	{ code: "gb", name: "UK" },
	{ code: "ca", name: "Canada" },
	{ code: "au", name: "Australia" },
	{ code: "de", name: "Germany" },
];

export default function Country() {
	const { countryCode } = useParams();
	const navigate = useNavigate();
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		if (!countryCode) return;
		fetchNews({ country: countryCode }).then(setArticles);
	}, [countryCode]);

	return (
		<div className="country-page">
			<main className="articles-section">
				<h2>Country: {countryCode.toUpperCase()}</h2>
				<div className="news-grid">
					{articles.length > 0 ? (
						articles.map((item, idx) => <NewsCard key={idx} article={item} />)
					) : (
						<p>No articles available for this country.</p>
					)}
				</div>
			</main>

			<aside className="sidebar">
				<h3>Browse by Country</h3>
				<ul className="country-list">
					{countries.map(({ code, name }) => (
						<li
							key={code}
							className={code === countryCode ? "active" : ""}
							onClick={() => navigate(`/country/${code}`)}
						>
							{name}
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
