export const baseApi = import.meta.env.PROD
	? 'https://alpha.tsearch.tools/api/datava'
	: 'http://localhost:8080';
