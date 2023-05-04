import React from 'react';
import s from './MobilePartnerInfo.module.scss';
import { Partner, Trajectory } from '../../../../common/types';
import { Space } from 'antd';
import { Tag } from '../../../common/Tag/Tag';

type MobilePartnerInfoProps = {
	partner?: Partner;
	tags?: Trajectory[];
};

export const MobilePartnerInfo: React.FC<MobilePartnerInfoProps> = ({ partner, tags }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.leftSide}>
				<a href={partner?.site_link} target="_blank">
					<img src={partner?.logo} className={s.image} alt="logo" />
				</a>
			</div>
			<Space className={s.rightSide} direction="vertical">
				<p>{partner?.title}</p>
				<Space className={s.tagList} size={4}>
					{tags?.map((tag) => (
						<Tag color={tag.color} text={tag.abbreviated_name} key={tag.id} />
					))}
				</Space>
			</Space>
		</div>
	);
};
