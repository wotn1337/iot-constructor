export type Step = {
	title?: string;
	content: JSX.Element;
	type: STEP_TYPES;
	pageTitle: string;
};

export enum STEP_TYPES {
	DIRECTION_SELECTION = 'direction-selection',
	TYPE_SELECTION = 'type-selection',
	CONSTRUCTOR = 'choose-disciplines',
	ACADEMIC_PLAN = 'academic-plan',
	TRAJECTORIES = 'trajectories',
	TRAJECTORY_ANALYSIS = 'trajectory-analysis',
}
