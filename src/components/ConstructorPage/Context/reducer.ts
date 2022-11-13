import { ConstructorContextActions, ConstructorContextState } from './types';
import {
	SET_COLUMNS,
	SET_CURRENT_SEMESTER,
	SET_CURRENT_STEP,
	SET_SELECTED_DIRECTION,
	SET_SELECTED_TYPE,
} from './constants';

export const MainPageContextInitialState: ConstructorContextState = {
	currentStep: 0,
	semesters: [
		{
			id: 1,
			name: '1',
			disabled: true,
			finish: false,
		},
		{
			id: 2,
			name: '2',
			disabled: true,
			finish: false,
		},
		{
			id: 3,
			name: '3',
			finish: false,
		},
		{
			id: 4,
			name: '4',
			finish: false,
		},
		{
			id: 5,
			name: '5',
			finish: false,
		},
		{
			id: 6,
			name: '6',
			finish: false,
		},
		{
			id: 7,
			name: '7',
			finish: false,
		},
		{
			id: 8,
			name: '8',
			finish: false,
		},
	],
	currentSemester: 3,
	columns: [],
};

export const MainPageContextReducer = (
	state: ConstructorContextState,
	action: ConstructorContextActions
): ConstructorContextState => {
	switch (action.type) {
		case SET_CURRENT_STEP: {
			return { ...state, currentStep: action.payload };
		}
		case SET_SELECTED_DIRECTION: {
			return { ...state, selectedDirection: action.payload };
		}
		case SET_SELECTED_TYPE: {
			return { ...state, selectedType: action.payload };
		}
		case SET_CURRENT_SEMESTER: {
			return { ...state, currentSemester: action.payload };
		}
		case SET_COLUMNS: {
			return { ...state, columns: action.payload };
		}
		default:
			return state;
	}
};
