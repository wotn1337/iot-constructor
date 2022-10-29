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
				<div className={s.advantage__marker}>
					{list.map((item, index) => (
						<Space key={index}>
							<div className={s.advantage__marker__dot} />
							<div className={s.advantage__marker__text}>{item}</div>
						</Space>
					))}
				</div>
			)}
		</Space>
	);
};
