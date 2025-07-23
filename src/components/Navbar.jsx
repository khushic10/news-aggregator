import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	FaSearch,
	FaHome,
	FaGlobe,
	FaLanguage,
	FaInfoCircle,
	FaEnvelope,
	FaThLarge,
} from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
			navigate(`/search?q=${encodeURIComponent(query)}`);
			setQuery("");
		}
	};

	return (
		<header className="navbar">
			<div className="navbar-brand">
				<Link to="/" className="brand-link">
					<img src="/logo.png" alt="NewsHub Logo" className="brand-logo" />
					<span>NewsHub</span>
				</Link>
			</div>
			<nav className="navbar-links">
				<Link to="/">
					<FaHome /> Home
				</Link>
				<Link to="/category/technology">
					<FaThLarge /> Category
				</Link>
				<Link to="/country/us">
					<FaGlobe /> Country
				</Link>
				<Link to="/language/en">
					<FaLanguage /> Language
				</Link>
				<Link to="/about">
					<FaInfoCircle /> About
				</Link>
				<Link to="/contact">
					<FaEnvelope /> Contact
				</Link>
			</nav>
			<form onSubmit={handleSearch} className="navbar-search">
				<input
					type="text"
					placeholder="Search news..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">
					<FaSearch />
				</button>
			</form>
		</header>
	);
}
