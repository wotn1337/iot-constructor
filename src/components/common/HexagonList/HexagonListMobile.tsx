import React from 'react';
import s from './HexagonList.module.scss';
import { Space } from 'antd';
import { Hexagon } from '../Hexagon/Hexagon';

type HexagonListMobileProps = {
	items: string[];
};

export const HexagonListMobile: React.FC<HexagonListMobileProps> = ({ items }) => {
	return (
		<div className={s.mobile__list}>
			{items.map((item, index) => (
				<Space key={index} direction="vertical" size={8} align="center">
					<Hexagon
						size={30}
						rotateAngle={90}
						color="white"
						border={{ width: 1, color: '#FFD591', padding: 8 }}
						innerContent={<span className={s.hexagon__number}>{index + 1}</span>}
					/>
					<span className={s.item__text}>{item}</span>
				</Space>
			))}
		</div>
	);
};
