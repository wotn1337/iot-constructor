import React from 'react';
import { Space } from 'antd';
import { ProfessionType } from '../../types';
import s from './MobilePossibleProfessions.module.scss';
import { MobileSalaryChart } from '../../SalaryChart/MobileSalaryChart/MobileSalaryChart';

type MobilePossibleProfessionsProps = {
	professions: ProfessionType[];
};

export const MobilePossibleProfessions: React.FC<MobilePossibleProfessionsProps> = ({ professions }) => {
	return (
		<Space direction="vertical" size={32} className={s.mobilePossibleProfessions}>
			{professions.map((p) => (
				<div className={s.profession} key={p.id}>
					<div className={s.profession__title}>{p.title}</div>
					<div className={s.profession__card}>
						<img src={p.photo ?? undefined} alt={p.title} className={s.profession__image} />
						<MobileSalaryChart
							minimal_salary={p.minimal_salary}
							median_salary={p.median_salary}
							maximal_salary={p.maximal_salary}
							className={s.salaryChart}
						/>
					</div>
					<div className={s.profession__comment}>Данные о зарплате взяты с сайта hh.ru</div>
					<p className={s.profession__description}>{p.description}</p>
				</div>
			))}
		</Space>
	);
};
