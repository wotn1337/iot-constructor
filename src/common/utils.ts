import { RobotOval, RobotRectangle, RobotTriangle } from '../images';

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
