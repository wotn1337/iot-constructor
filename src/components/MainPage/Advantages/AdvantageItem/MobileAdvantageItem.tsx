import React from 'react';
import { Space, Typography } from 'antd';
import { Hexagon } from '../../../common/Hexagon/Hexagon';
import s from './AdvantageItem.module.scss';

const { Text } = Typography;

type MobileAdvantageItemProps = {
	image: string;
	title: string;
	description: string;
	list?: string[];
};

export const MobileAdvantageItem: React.FC<MobileAdvantageItemProps> = ({ title, description, list, image }) => {
	return (
		<Space size={8} direction="vertical" align="center" className={s.mobileAdvantageItem}>
			<div style={{ margin: '8px 0' }}>
				<Hexagon
					size={60}
					rotateAngle={90}
					border={{ width: 3, color: '#1890FF', padding: 6 }}
					color={'linear-gradient(313.44deg, #096DD9 20.92%, #1890FF 83.47%);'}
					image={image}
				/>
			</div>
			<h4 className={s.mobileAdvantageItem__title}>{title}</h4>
			<span className={s.mobileAdvantageItem__description}>{description}</span>
			<Space size={8}>
				{list?.map((item) => (
					<Text type="secondary" key={item}>
						{item}
					</Text>
				))}
			</Space>
		</Space>
	);
};
