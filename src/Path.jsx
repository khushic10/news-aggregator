import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Country from "./pages/Country";
import Language from "./pages/Language";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import Layout from "./Layout";

export default function Path() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/category/:type" element={<Category />} />
				<Route path="/country/:countryCode" element={<Country />} />
				<Route path="/language/:langCode" element={<Language />} />
				<Route path="/search" element={<SearchResults />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
