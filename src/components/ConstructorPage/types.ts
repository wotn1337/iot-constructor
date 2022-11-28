export type Step = {
	title?: string;
	content: JSX.Element;
	type: STEP_TYPES;
};

export enum STEP_TYPES {
	DIRECTION_SELECTION = 'direction-selection',
	TYPE_SELECTION = 'type-selection',
	CONSTRUCTOR = 'constructor',
	ACADEMIC_PLAN = 'academic-plan',
}
