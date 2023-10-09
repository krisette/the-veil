import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://the-veil.onrender.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
