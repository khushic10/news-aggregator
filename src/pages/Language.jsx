import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNews } from "../services/NewsApi";
import NewsCard from "../components/NewsCard";
import "../styles/languagePage.css";

export default function Language() {
	const { langCode } = useParams();
	const [articles, setArticles] = useState([]);
	const navigate = useNavigate();

	const languages = [
		{ code: "en", name: "English" },
		{ code: "ne", name: "Nepali" },
		{ code: "hi", name: "Hindi" },
		{ code: "fr", name: "French" },
	];

	useEffect(() => {
		fetchNews({ language: langCode }).then(setArticles);
	}, [langCode]);

	return (
		<div className="language-page">
			<div className="language-selector">
				{languages.map((lang) => (
					<button
						key={lang.code}
						className={`lang-button ${langCode === lang.code ? "active" : ""}`}
						onClick={() => navigate(`/language/${lang.code}`)}
					>
						{lang.name}
					</button>
				))}
			</div>

			<h2>Language: {langCode.toUpperCase()}</h2>

			<div className="news-grid">
				{articles.map((item, idx) => (
					<NewsCard key={idx} article={item} />
				))}
			</div>
		</div>
	);
}
