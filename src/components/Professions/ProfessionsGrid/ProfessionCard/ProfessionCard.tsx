import React from 'react';
import s from './ProfessionCard.module.scss';
import { ProfessionType } from '../../types';
import { Space } from 'antd';
import { SalaryChart } from '../../SalaryChart/SalaryChart';

type ProfessionCardProps = ProfessionType;

export const ProfessionCard: React.FC<ProfessionCardProps> = ({
	title,
	description,
	photo,
	minimal_salary,
	median_salary,
	maximal_salary,
	vacancies_count,
}) => {
	return (
		<div className={s.professionCard}>
			<div className={s.professionCard__mainContent}>
				<img src={photo ?? undefined} alt={title} className={s.mainContent__image} />
				<div className={s.mainContent__body}>
					<span className={s.body__title}>{title}</span>
					<Space direction="horizontal" size={8} className={s.body__vacancies}>
						<span className={s.vacancies__title}>Вакансий по РФ</span>
						<span className={s.vacancies__count}>{vacancies_count}</span>
					</Space>
					<SalaryChart
						minimal_salary={minimal_salary}
						median_salary={median_salary}
						maximal_salary={maximal_salary}
						type="light"
					/>
				</div>
			</div>
			<div className={s.professionCard__secondaryContent}>secondary content</div>
		</div>
	);
};
