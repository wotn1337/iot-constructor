import React, { useState } from 'react';
import s from './ProfessionCard.module.scss';
import { ProfessionType } from '../../types';
import { Space } from 'antd';
import { SalaryChart } from '../../SalaryChart/SalaryChart';
import { Tag } from '../../../common/Tag/Tag';
import { EducationalProgramsList } from './EducationalProgramsList/EducationalProgramsList';
import { animated, config, useSpring } from '@react-spring/web';
import useMeasure from 'react-use-measure';

type ProfessionCardProps = ProfessionType;

export const ProfessionCard: React.FC<ProfessionCardProps> = ({
	title,
	description,
	photo,
	minimal_salary,
	median_salary,
	maximal_salary,
	vacancies_count,
	area_vacancies_count,
	professionalTrajectories,
	educationalPrograms,
}) => {
	const [measureRef, { height }] = useMeasure();
	const [showSecondary, setShowSecondary] = useState(false);
	const secondaryContentStyle = useSpring({
		config: config.default,
		from: {
			height: 0,
		},
		to: {
			height: showSecondary ? height : 0,
		},
	});

	return (
		<div className={s.professionCard}>
			<div className={s.professionCard__mainContent} onClick={() => setShowSecondary(!showSecondary)}>
				<img src={photo ?? undefined} alt={title} className={s.mainContent__image} />
				<div className={s.mainContent__body}>
					<span className={s.body__title}>{title}</span>
					<Space direction="vertical" size={12}>
						<Space direction="horizontal" align="center" size={8} className={s.body__vacancies}>
							<span className={s.vacancies__title}>Вакансий по РФ</span>
							<span className={s.vacancies__count}>{vacancies_count}</span>
						</Space>
						<Space direction="horizontal" align="center" size={8} className={s.body__vacancies}>
							<span className={s.vacancies__title}>Вакансий по Свердловской области</span>
							<span className={s.vacancies__count}>{area_vacancies_count}</span>
						</Space>
					</Space>
					<div className={s.body__bottom}>
						<div className={s.bottom__salaryChart}>
							<SalaryChart
								minimal_salary={minimal_salary}
								median_salary={median_salary}
								maximal_salary={maximal_salary}
								type="light"
							/>
						</div>
						<Tag
							text={professionalTrajectories[0].abbreviated_name}
							color={professionalTrajectories[0].color}
							shouldShowTooltip={true}
							tooltipText={professionalTrajectories[0].title}
						/>
					</div>
				</div>
			</div>
			<animated.div style={{ ...secondaryContentStyle }}>
				<div className={s.professionCard__secondaryContent} ref={measureRef}>
					<EducationalProgramsList educationalPrograms={educationalPrograms} />
					<p className={s.secondaryContent__description}>{description}</p>
				</div>
			</animated.div>
		</div>
	);
};
