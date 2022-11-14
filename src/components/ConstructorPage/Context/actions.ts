import {
	SET_COLUMNS,
	SET_CURRENT_SEMESTER,
	SET_CURRENT_STEP,
	SET_SELECTED_DIRECTION,
	SET_SELECTED_TYPE,
} from './constants';
import { Id } from '../../../common/types';
import { Column } from './types';

type Action<T extends string, U extends any = any> = { type: T; payload: U };

export const setCurrentStep = <T extends number>(step: T): Action<typeof SET_CURRENT_STEP, T> => ({
	type: SET_CURRENT_STEP,
	payload: step,
});

export const setSelectedDirection = <T extends Id>(dirId: T): Action<typeof SET_SELECTED_DIRECTION, T> => ({
	type: SET_SELECTED_DIRECTION,
	payload: dirId,
});

export const setSelectedType = <T extends Id>(typeId: T): Action<typeof SET_SELECTED_TYPE, T> => ({
	type: SET_SELECTED_TYPE,
	payload: typeId,
});

export const setCurrentSemester = <T extends Id>(currSem: T): Action<typeof SET_CURRENT_SEMESTER, T> => ({
	type: SET_CURRENT_SEMESTER,
	payload: currSem,
});

export const setColumns = <T extends Column[]>(columns: T): Action<typeof SET_COLUMNS, T> => ({
	type: SET_COLUMNS,
	payload: columns,
});
