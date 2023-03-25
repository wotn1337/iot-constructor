import { Id } from '../common/types';

export const getQueryParams = (params: Record<string, boolean | number | string | Id[]>) => {
	const urlParams = new URLSearchParams();
	for (const key in params) {
		if (Array.isArray(params[key])) {
			for (const item of params[key] as Id[]) {
				urlParams.append(key + '[]', String(item));
			}
		} else {
			urlParams.append(key, String(params[key]));
		}
	}
	return urlParams;
};
