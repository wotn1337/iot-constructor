import { SET_STUDENT_REVIEWS_PAGE } from './constants';

type Action<T extends string, U extends any = any> = { type: T; payload: U };

export const setStudentReviewsPage = <T extends number>(page: T): Action<typeof SET_STUDENT_REVIEWS_PAGE, T> => ({
	type: SET_STUDENT_REVIEWS_PAGE,
	payload: page,
});
