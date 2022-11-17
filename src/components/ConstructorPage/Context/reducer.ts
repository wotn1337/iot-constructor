import { ConstructorContextActions, ConstructorContextState } from './types';
import {
	SET_COLUMNS,
	SET_CURRENT_SEMESTER,
	SET_CURRENT_STEP,
	SET_SELECTED_DIRECTION,
	SET_SELECTED_TYPE,
	SET_SEMESTER_COLUMNS,
	SET_SEMESTER_FINISH,
} from './constants';

export const MainPageContextInitialState: ConstructorContextState = {
	currentStep: 0,
	semesters: [
		{
			id: 1,
			name: '1',
			finish: true,
		},
		{
			id: 2,
			name: '2',
			finish: true,
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
	currentSemester: 1,
	columns: {
		'1': {
			id: 1,
			name: 'Выберите дисциплины',
			items: [],
			extra: true,
		},
		'2': {
			id: 2,
			name: 'Мои дисциплины',
			items: [],
			extra: false,
		},
	},
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
		case SET_SEMESTER_COLUMNS: {
			return {
				...state,
				semesters: state.semesters.map((sem) =>
					sem.id === action.payload.id
						? {
								...sem,
								columns: action.payload.columns,
						  }
						: sem
				),
			};
		}
		case SET_SEMESTER_FINISH: {
			return {
				...state,
				semesters: state.semesters.map((sem) =>
					sem.id === action.payload.id
						? {
								...sem,
								finish: action.payload.isFinished,
						  }
						: sem
				),
			};
		}
		default:
			return state;
	}
};
