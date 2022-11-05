import { RobotOval, RobotRectangle, RobotTriangle } from '../images';

export const getAvatarPlaceholder = () => {
	const avatars = [RobotRectangle, RobotTriangle, RobotOval];
	const randNumber = Math.floor(Math.random() * avatars.length);

	return avatars[randNumber];
};
