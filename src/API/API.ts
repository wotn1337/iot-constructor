import axios from 'axios';
import { PartnersResponse, StudentReviewResponse } from './types';

const DOMAIN = 'https://constructor-iot-backend.na4u.ru';
const VERSION = 'v1';
const API_URL = `${DOMAIN}/api/${VERSION}`;
const CONFIG = {
	baseURL: API_URL,
	header: { 'content-type': 'application/json' },
};
const instance = axios.create(CONFIG);

export const partnersAPI = {
	getPartners: async () => {
		const res = await instance.get<PartnersResponse>('partners');
		return res.data.partners;
	},
};

export const studentReviewsAPI = {
	getReviews: async () => {
		const res = await instance.get<StudentReviewResponse>('reviews');
		return res.data.reviews;
	},
};
