import React from 'react';
import { Space } from 'antd';
import s from './Description.module.scss';
import { Trajectory } from '../../../common/types';
import { Tag } from '../../common/Tag/Tag';
import { useMediaQuery } from 'react-responsive';

type DescriptionProps = {
	description?: string;
	tags?: Trajectory[];
};

export const Description: React.FC<DescriptionProps> = ({ description, tags }) => {
	const isMobile = useMediaQuery({ maxWidth: 725 });

	return (
		<Space className={s.descriptionBlock} direction="vertical" size={16}>
			<Space className={s.header} direction="horizontal">
				<span className={s.title}>Описание</span>
				{!isMobile && (
					<Space size="small">
						{tags?.map((tag) => (
							<Tag
								color={tag.color}
								text={tag.abbreviated_name}
								tooltipText={tag.title}
								shouldShowTooltip
								key={tag.id}
							/>
						))}
					</Space>
				)}
			</Space>
			<div className={s.description} dangerouslySetInnerHTML={{ __html: description ?? '' }} />
		</Space>
	);
};
