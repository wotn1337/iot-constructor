import React from 'react';
import s from './LabelComponent.module.scss';
import { Space } from 'antd';
import { Hexagon } from '../../../../common/Hexagon/Hexagon';

type LabelComponentProps = {
	align: 'left' | 'right';
	image: string;
};

export const LabelComponent: React.FC<LabelComponentProps> = ({ align, image }) => {
	const line = <div className={s.line} />;
	const hexagon = (
		<Hexagon
			size={70}
			rotateAngle={270}
			border={{ width: 3, color: '#1890FF', padding: 6 }}
			color={'linear-gradient(313.44deg, #096DD9 20.92%, #1890FF 83.47%);'}
			image={image}
		/>
	);
	return (
		<Space size="small">
			{align === 'right' ? (
				<>
					{line}
					{hexagon}
				</>
			) : (
				<>
					{hexagon}
					{line}
				</>
			)}
		</Space>
	);
};
