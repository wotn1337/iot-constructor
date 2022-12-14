import { ConstructorContextActions, ConstructorContextState } from './types';
import {
	SET_COLUMNS,
	SET_CURRENT_SEMESTER,
	SET_CURRENT_STEP,
	SET_SELECTED_DIRECTION,
	SET_SELECTED_TYPE,
	SET_SEMESTER_COLUMNS,
	SET_SEMESTER_FINISH,
	SET_SEMESTERS,
	SET_TRACK_POINTS,
	SET_TRACKS,
	SET_DISCIPLINE_ID,
	SET_SELECTED_TRAJECTORY,
} from './constants';

export const MainPageContextInitialState: ConstructorContextState = {
	currentStep: 0,
	semesters: [],
	tracks: [],
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
		case SET_SELECTED_TRAJECTORY: {
			return { ...state, selectedTrajectory: action.payload };
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
		case SET_SEMESTERS: {
			return {
				...state,
				semesters: action.payload,
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
		case SET_TRACKS: {
			return {
				...state,
				tracks: action.payload,
			};
		}
		case SET_TRACK_POINTS: {
			return {
				...state,
				tracks: state.tracks.map((track) =>
					track.id === action.payload.id
						? {
								...track,
								points: action.payload.points,
								percent: (action.payload.points / track.sum_discipline_levels_points) * 100,
						  }
						: track
				),
			};
		}
		case SET_DISCIPLINE_ID: {
			return { ...state, disciplineId: action.payload };
		}
		default:
			return state;
	}
};
