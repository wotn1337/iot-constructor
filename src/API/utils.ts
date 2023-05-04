import { Id } from '../common/types';

export const getQueryParams = (params?: Record<string, boolean | number | string | Id[]>) => {
	if (!params) return '';

	const urlParams = new URLSearchParams();
	for (const key in params) {
		if (Array.isArray(params[key])) {
			for (const item of params[key] as Id[]) {
				urlParams.append(key + '[]', String(item));
			}
		} else {
			params[key] && urlParams.append(key, String(params[key]));
		}
	}
	return urlParams;
};
