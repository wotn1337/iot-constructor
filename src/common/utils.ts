import { RobotOval, RobotRectangle, RobotTriangle } from '../images';
import { EducationalProgram, Id } from './types';
import { TrackProgress } from '../components/ConstructorPage/Context/types';

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

export const getDirectionFullTitle = (
	directionId: Id | undefined,
	educationalDirections: EducationalProgram[] | undefined
) => {
	const direction = educationalDirections?.find((dir) => dir.id === directionId);

	return direction?.educational_direction;
};

export const getBestTrajectory = (tracks: TrackProgress[]) => {
	const tracksCopy = [...tracks];
	return tracksCopy.sort((a, b) => b.points - a.points)[0].id;
};

export const getUTCDateString = () => {
	const now = new Date();
	const nowUTC = Date.UTC(
		now.getUTCFullYear(),
		now.getUTCMonth(),
		now.getUTCDate(),
		now.getUTCHours(),
		now.getUTCMinutes(),
		now.getUTCSeconds()
	);

	const utcDate = new Date(nowUTC);
	const utcString = utcDate.toISOString();
	const [date, time] = utcString.split('T');

	return `${date} ${time.split('.')[0]}`;
};
