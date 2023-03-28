import React from 'react';
import { ProfessionType } from '../types';
import { Space } from 'antd';

type ProfessionsGridProps = {
	professions: ProfessionType[];
};

export const ProfessionsGrid: React.FC<ProfessionsGridProps> = ({ professions }) => {
	return (
		<Space direction="vertical" size={24} style={{ width: '100%' }}>
			{professions.map((profession) => (
				<div style={{ backgroundColor: 'white', padding: 20, textAlign: 'center' }}>{profession.title}</div>
			))}
		</Space>
	);
};
