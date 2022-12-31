import React from 'react';
import s from './HexagonList.module.scss';
import { Space } from 'antd';
import { Hexagon } from '../Hexagon/Hexagon';

type HexagonListProps = {
	list: string[];
};

export const HexagonList: React.FC<HexagonListProps> = ({ list }) => {
	return (
		<div className={s.list}>
			{list.map((item, index) => (
				<Space key={index} align="start">
					<Hexagon size={10} rotateAngle={90} color="#FA8C16" style={{ marginTop: 2 }} />
					{item}
				</Space>
			))}
		</div>
	);
};
