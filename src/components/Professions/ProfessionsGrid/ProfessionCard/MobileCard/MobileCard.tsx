import React, { useState } from 'react';
import { ProfessionType } from '../../../types';
import { MobileSalaryChart } from '../../../SalaryChart/MobileSalaryChart/MobileSalaryChart';
import { Tag } from '../../../../common/Tag/Tag';
import { Divider } from 'antd';
import useMeasure from 'react-use-measure';
import { animated, config, useSpring } from '@react-spring/web';
import { EducationalPrograms } from '../../../../PartnerCourse/EducationalPrograms/EducationalPrograms';
import '../ProfessionCard.scss';
import './MobileCard.scss';
import { Vacancies } from '../Vacancies/Vacancies';

type MobileCardProps = ProfessionType;

export const MobileCard: React.FC<MobileCardProps> = ({
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
		<div className="profession-card" onClick={() => setShowSecondary((old) => !old)}>
			<div
				className="body"
				style={{ filter: showSecondary ? 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))' : undefined }}
			>
				<span className="title">{title}</span>
				<Tag color={professionalTrajectories[0].color} text={professionalTrajectories[0].abbreviated_name} />
			</div>
			{!showSecondary && <Divider className="divider" />}
			<animated.div style={{ ...secondaryContentStyle }}>
				<div className="secondary-content" ref={secContentRef}>
					<Vacancies vacancies_count={vacancies_count} area_vacancies_count={area_vacancies_count} />
					<Divider className="divider" />
					<EducationalPrograms
						educationPrograms={educationalPrograms}
						wrap={true}
						className="educational-programs"
					/>
					<Divider className="divider" />
					<span className="secondary-content__description-title">Описание</span>
					<p className="secondary-content__description">{description}</p>
				</div>
			</animated.div>
			<div style={{ filter: showSecondary ? 'drop-shadow(0px -2px 10px rgba(0, 0, 0, 0.1))' : undefined }}>
				<MobileSalaryChart
					minimal_salary={minimal_salary}
					median_salary={median_salary}
					maximal_salary={maximal_salary}
					className="salary-chart"
				/>
			</div>
		</div>
	);
};
