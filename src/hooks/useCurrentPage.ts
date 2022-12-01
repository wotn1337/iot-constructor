import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
	const location = useLocation();
	const [page, setPage] = useState<string>('');

	useEffect(() => {
		const pathnameWithoutFirstSlash = location.pathname.slice(1);
		if (pathnameWithoutFirstSlash) {
			if (pathnameWithoutFirstSlash.includes('/')) {
				setPage(pathnameWithoutFirstSlash.split('/')[0]);
			} else {
				setPage(pathnameWithoutFirstSlash);
			}
			return;
		}
		setPage('');
	}, [location]);

	return page;
};
