import React from 'react';
import { Space } from 'antd';
import { AdvantagesList } from './constants';
import { MobileAdvantageItem } from './AdvantageItem/MobileAdvantageItem';

type MobileAdvantagesProps = {};

export const MobileAdvantages: React.FC<MobileAdvantagesProps> = () => {
	return (
		<Space size={24} direction="vertical" align="center" style={{ width: '100%' }}>
			{AdvantagesList.map((advantage) => (
				<MobileAdvantageItem key={advantage.id} {...advantage} />
			))}
		</Space>
	);
};
