import React, { useState } from 'react';
import { SalaryChart } from '../../../SalaryChart/SalaryChart';
import { Tag } from '../../../../common/Tag/Tag';
import { ProfessionType } from '../../../types';
import { animated, config, useSpring } from '@react-spring/web';
import { EducationalProgramsList } from '../EducationalProgramsList/EducationalProgramsList';
import useMeasure from 'react-use-measure';
import { Vacancies } from '../Vacancies/Vacancies';
import '../ProfessionCard.scss';
import './DesktopCard.scss';

type DesktopCardProps = ProfessionType;

export const DesktopCard: React.FC<DesktopCardProps> = ({
	photo,
	title,
	vacancies_count,
	area_vacancies_count,
	minimal_salary,
	median_salary,
	maximal_salary,
	professionalTrajectories,
	educationalPrograms,
	description,
}) => {
	const [secContentRef, { height: secContentHeight }] = useMeasure();
	const [showSecondary, setShowSecondary] = useState(false);
	const secondaryContentStyle = useSpring({
		config: config.default,
		from: {
			height: 0,
		},
		to: {
			height: showSecondary ? secContentHeight : 0,
		},
	});

	return (
		<div className="profession-card">
			<div className="main-content" onClick={() => setShowSecondary((old) => !old)}>
				<img src={photo ?? undefined} alt={title} className="main-content__image" />
				<div className="main-content__body">
					<span className="body__title">{title}</span>
					<Vacancies vacancies_count={vacancies_count} area_vacancies_count={area_vacancies_count} />
					<div className="body__bottom">
						<div className="bottom__salary-chart">
							<SalaryChart
								minimal_salary={minimal_salary}
								median_salary={median_salary}
								maximal_salary={maximal_salary}
								type="light"
							/>
						</div>
						<div className="bottom__tag">
							<Tag
								text={professionalTrajectories[0].abbreviated_name}
								color={professionalTrajectories[0].color}
								shouldShowTooltip={true}
								tooltipText={professionalTrajectories[0].title}
							/>
						</div>
					</div>
				</div>
			</div>
			<animated.div style={{ ...secondaryContentStyle }}>
				<div className="secondary-content" ref={secContentRef}>
					<EducationalProgramsList educationalPrograms={educationalPrograms} />
					<p className="secondary-content__description">{description}</p>
				</div>
			</animated.div>
		</div>
	);
};
