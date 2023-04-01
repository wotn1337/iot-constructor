import React from 'react';
import { ProfessionType } from '../types';
import { Space } from 'antd';
import { ProfessionCard } from './ProfessionCard/ProfessionCard';

type ProfessionsGridProps = {
	professions: ProfessionType[];
};

export const ProfessionsGrid: React.FC<ProfessionsGridProps> = ({ professions }) => {
	return (
		<Space direction="vertical" size={24} style={{ width: '100%' }}>
			{professions.map((profession) => (
				<ProfessionCard key={profession.id} {...profession} />
			))}
		</Space>
	);
};
