import type { Dispatch } from 'react';
import { setStudentReviewsPage } from './actions';

export type MainPageContextState = {
	studentReviewsPage: number;
};

export type MainPageContextActions = ReturnType<typeof setStudentReviewsPage>;

export type MainPageContext = {
	state: MainPageContextState;
	dispatch: Dispatch<MainPageContextActions>;
};
