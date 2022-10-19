import React from 'react';
import s from './AdvantageItem.module.scss';
import { Space, Typography } from 'antd';

type AdvantageItemProps = {
	title: string;
	description: string;
	list?: string[];
};

const { Paragraph } = Typography;

export const AdvantageItem: React.FC<AdvantageItemProps> = ({ title, description, list }) => {
	return (
		<Space className={s.advantage} direction="vertical" size="small" align="start">
			<h5 className={s.advantage__title}>{title}</h5>
			<Paragraph className={s.advantage__description}>{description}</Paragraph>
			{list && (
				<div className={s.marker}>
					{list.map((item) => (
						<Space style={{ gap: '5px' }}>
							<div className={s.marker__dot} />
							<div className={s.marker__text}>{item}</div>
						</Space>
					))}
				</div>
			)}
		</Space>
	);
};
