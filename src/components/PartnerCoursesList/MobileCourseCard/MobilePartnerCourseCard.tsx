import React, { useContext } from 'react';
import s from './MobilePartnerCourseCard.module.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { PartnerCourseType, StatisticKey } from '../../../common/types';
import { Space } from 'antd';
import { Tag } from '../../common/Tag/Tag';
import { StatisticContext } from '../../../providers/StatisticProvider';

type MobilePartnerCourseCardProps = {
	course: PartnerCourseType;
};

export const MobilePartnerCourseCard: React.FC<MobilePartnerCourseCardProps> = ({
	course: { id, title, professional_trajectories, partner },
}) => {
	const { addEvent } = useContext(StatisticContext);

	return (
		<NavLink
			to={`${ROUTES.COURSE}/${id}`}
			target="_blank"
			className={s.partnerCourseCard}
			onClick={() => addEvent(id, StatisticKey.PC, 'click_to_more')}
		>
			<div className={s.partnerCourseCard__innerContent}>
				<span className={s.partnerCourseCard__innerContent__title}>{title}</span>
				<img src={partner.logo} alt="logo" className={s.partnerCourseCard__innerContent__logo} />
				<Space className={s.partnerCourseCard__innerContent__tags}>
					{!!professional_trajectories.length ? (
						professional_trajectories.map((trajectory) => (
							<Tag
								color={trajectory.color}
								text={trajectory.abbreviated_name}
								tooltipText={trajectory.title}
								shouldShowTooltip
								key={trajectory.id}
							/>
						))
					) : (
						<></>
					)}
				</Space>
			</div>
		</NavLink>
	);
};
