export type Step = {
	title?: string;
	content: JSX.Element;
	type: STEP_TYPE;
	pageTitle: string;
};

export enum STEP_TYPE {
	DIRECTION_SELECTION = 'direction-selection',
	TYPE_SELECTION = 'type-selection',
	CONSTRUCTOR = 'choose-disciplines',
	ACADEMIC_PLAN = 'academic-plan',
	TRAJECTORIES = 'trajectories',
	TRAJECTORY_ANALYSIS = 'trajectory-analysis',
}
