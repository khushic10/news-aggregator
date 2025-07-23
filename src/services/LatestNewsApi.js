import axios from "axios";

const API_KEY = "pub_7e4bb1a080914bb097b923b2288ad508"; // Replace with your API key
const BASE_URL = "https://newsdata.io/api/1/latest";

export const fetchLatestNews = async (category = "top", language = "en") => {
	const url = `${BASE_URL}?apikey=${API_KEY}&category=${category}&language=${language}`;

	const response = await axios.get(url);
	return response.data.results;
};
