import React from 'react';
import { Steps } from 'antd';
import { Hexagon } from '../../../common/Hexagon/Hexagon';
import './Switcher.scss';

type SwitcherProps = {
	currentProfessionIndex: number;
	setCurrentProfessionIndex: React.Dispatch<React.SetStateAction<number>>;
	professions?: {
		title: string;
	}[];
};

export const Switcher: React.FC<SwitcherProps> = ({
	currentProfessionIndex,
	setCurrentProfessionIndex,
	professions,
}) => {
	return (
		<Steps
			className="possible-professions-switcher"
			current={currentProfessionIndex}
			items={professions?.map((p, index) => ({
				...p,
				icon: (
					<Hexagon
						size={11}
						color={currentProfessionIndex === index ? '#1890FF' : 'white'}
						rotateAngle={90}
						style={{
							boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
							borderRadius: 2,
						}}
					/>
				),
				className: 'possible-professions-switcher__item',
			}))}
			size="small"
			labelPlacement="vertical"
			onChange={setCurrentProfessionIndex}
		/>
	);
};
