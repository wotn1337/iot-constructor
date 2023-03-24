import React from 'react';
import { Direction } from '../../../../common/types';
import s from './DirectionCard.module.scss';
import { Space } from 'antd';
import { MoreInfo } from '../../../common/MoreInfo/MoreInfo';
import { useMediaQuery } from 'react-responsive';

type DirectionCardProps = Direction & {
	selected: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const prevYear = new Date().getFullYear() - 1;

export const DirectionCard: React.FC<DirectionCardProps> = ({
	educational_direction,
	budget_places,
	passing_scores,
	training_period,
	selected,
	onClick,
	page_link,
}) => {
	const isDesktop = useMediaQuery({ minWidth: 768 });

	return (
		<MoreInfo onClick={() => window.open(page_link)}>
			<div className={`${s.card} ${selected ? s.selected : ''}`} onClick={onClick}>
				<Space direction="vertical" size={isDesktop ? 24 : 12} className={s.card__info}>
					<p className={s.info__title}>{educational_direction}</p>
					<Space direction="vertical" size={8} className={s.info__list}>
						<Space size={16} className={s.info__statistic}>
							<span className={s.item__title}>Срок обучения</span>
							<span>{training_period}</span>
						</Space>
						{passing_scores[0].passing_score && passing_scores[0].year && (
							<Space size={16} className={s.info__statistic}>
								<span className={s.item__title}>Проходной балл в {passing_scores[0].year ?? prevYear} году</span>
								<span>{passing_scores[0].passing_score}</span>
							</Space>
						)}
						<Space size={16} className={s.info__statistic}>
							<span className={s.item__title}>Бюджетные места</span>
							<span>{budget_places}</span>
						</Space>
					</Space>
				</Space>
			</div>
		</MoreInfo>
	);
};
