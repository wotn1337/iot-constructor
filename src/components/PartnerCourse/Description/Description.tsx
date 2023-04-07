import React from 'react';
import { Space } from 'antd';
import s from './Description.module.scss';

type DescriptionProps = {
	description: string;
};

export const Description: React.FC<DescriptionProps> = ({ description }) => {
	return (
		<Space className={s.descriptionBlock} direction="vertical" size={16}>
			<span className={s.title}>Описание</span>
			<div className={s.description} dangerouslySetInnerHTML={{ __html: description }} />
		</Space>
	);
};
