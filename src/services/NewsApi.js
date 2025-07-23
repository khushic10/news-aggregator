import axios from "axios";

const API_KEY = "pub_7e4bb1a080914bb097b923b2288ad508";
const BASE_URL = "https://newsdata.io/api/1/news";

export const fetchNews = async (params = {}) => {
	try {
		const queryParams = new URLSearchParams({
			apikey: API_KEY,
			language: "en",
			...params,
		});

		const url = `${BASE_URL}?${queryParams.toString()}`;
		const response = await axios.get(url);
		return response.data.results;
	} catch (error) {
		throw error;
	}
};
