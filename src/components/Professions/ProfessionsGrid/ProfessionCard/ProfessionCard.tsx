import React from 'react';
import { ProfessionType } from '../../types';
import { useMediaQuery } from 'react-responsive';
import { DesktopCard } from './DesktopCard/DesktopCard';
import { MobileCard } from './MobileCard/MobileCard';

type ProfessionCardProps = ProfessionType;

export const ProfessionCard: React.FC<ProfessionCardProps> = (props) => {
	const isLarge = useMediaQuery({ minWidth: 800 });

	if (isLarge) {
		return <DesktopCard {...props} />;
	}

	return <MobileCard {...props} />;
};
