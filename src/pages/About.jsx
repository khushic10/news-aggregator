import React from "react";
import "../styles/about.css";

export default function About() {
	return (
		<div className="about-page">
			<div className="about-header">
				<h1>About NewsHub</h1>
				<p className="tagline">Stay informed, effortlessly.</p>
			</div>

			<div className="about-content">
				<p>
					<strong>NewsHub</strong> is a clean and modern news aggregator app
					designed to keep you updated with the latest news from around the
					world. It uses the powerful{" "}
					<a href="https://newsdata.io/" target="_blank" rel="noreferrer">
						NewsData.io API
					</a>{" "}
					to fetch fresh, relevant articles, ensuring you never miss out on
					what's important.
				</p>

				<p>
					Built with <strong>React</strong> and <strong>React Router</strong>,
					NewsHub provides a seamless browsing experience across different news
					categories and languages, allowing you to explore news tailored to
					your interests.
				</p>

				<p>
					Whether you want to catch up on technology, world affairs, sports, or
					health, NewsHub is designed to bring everything to your fingertips
					with a minimal, distraction-free interface.
				</p>
			</div>

			<div className="about-footer">
				<p>Crafted with ❤️ using React & NewsData.io API.</p>
				<p>© {new Date().getFullYear()} NewsHub. All rights reserved.</p>
			</div>
		</div>
	);
}
