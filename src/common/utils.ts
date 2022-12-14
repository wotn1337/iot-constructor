import { RobotOval, RobotRectangle, RobotTriangle } from '../images';
import { Direction, Id } from './types';

export const getAvatarPlaceholder = () => {
	const avatars = [RobotRectangle, RobotTriangle, RobotOval];
	const randNumber = Math.floor(Math.random() * avatars.length);

	return avatars[randNumber];
};

type Goal =
	| 'create'
	| 'seeProfessions'
	| 'seePartners'
	| 'telephone'
	| 'mailTo'
	| 'vk'
	| 'telegram'
	| 'direction'
	| 'makeTrajectory'
	| 'moreAboutDiscipline'
	| 'lastCreateTrajectory'
	| 'showTrajectories'
	| 'moreAboutDisciplineUP';

export const reachGoal = (name: Goal) => {
	// @ts-ignore
	ym(91451529, 'reachGoal', name);
};

export const getDirectionFullTitle = (directionId: Id | undefined, educationalDirections: Direction[] | undefined) => {
	const direction = educationalDirections?.find((dir) => dir.id === directionId);

	return `${direction?.cipher} ${direction?.title}`;
};
