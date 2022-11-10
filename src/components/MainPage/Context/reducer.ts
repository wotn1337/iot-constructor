import { SET_STUDENT_REVIEWS_PAGE } from './constants';

import { MainPageContextActions, MainPageContextState } from './types';

export const MainPageContextInitialState: MainPageContextState = {
	studentReviewsPage: 1,
};

export const MainPageContextReducer = (
	state: MainPageContextState,
	action: MainPageContextActions
): MainPageContextState => {
	switch (action.type) {
		case SET_STUDENT_REVIEWS_PAGE: {
			return {
				...state,
				studentReviewsPage: action.payload,
			};
		}
		default:
			return state;
	}
};
