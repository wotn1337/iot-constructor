import React, { useContext } from 'react';
import { CardBackground } from './CardBackground';
import s from './PartnerCourseCard.module.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { PartnerCourseType, StatisticKey } from '../../../common/types';
import { hexToRGB } from '../../common/Tag/utils';
import { Space } from 'antd';
import { Tag } from '../../common/Tag/Tag';
import { StatisticContext } from '../../../providers/StatisticProvider';

type PartnerCourseCardProps = {
	course: PartnerCourseType;
};

export const PartnerCourseCard: React.FC<PartnerCourseCardProps> = ({
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
			<CardBackground darkColor={hexToRGB(professional_trajectories[0]?.color || '#808080', 0.5)} />
			<div className={s.partnerCourseCard__innerContent}>
				<img src={partner.logo} alt="logo" className={s.partnerCourseCard__innerContent__logo} />
				<span className={s.partnerCourseCard__innerContent__title}>{title}</span>
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
						<div />
					)}
				</Space>
			</div>
		</NavLink>
	);
};
