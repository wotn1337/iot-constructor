import React from 'react';
import s from './HexagonList.module.scss';
import { Space } from 'antd';
import { Hexagon } from '../Hexagon/Hexagon';

type HexagonListProps = {
	list: string[];
	className?: string;
};

export const HexagonList: React.FC<HexagonListProps> = ({ list, className }) => {
	return (
		<div className={`${s.list} ${className}`}>
			{list.map((item, index) => (
				<Space key={index} align="start">
					<Hexagon size={10} rotateAngle={90} color="#FA8C16" style={{ marginTop: 2 }} />
					{item}
				</Space>
			))}
		</div>
	);
};
