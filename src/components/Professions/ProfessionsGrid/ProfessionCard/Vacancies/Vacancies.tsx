import React from 'react';
import { Space } from 'antd';
import s from './Vacancies.module.scss';

type VacanciesProps = {
	vacancies_count: number;
	area_vacancies_count: number;
};

export const Vacancies: React.FC<VacanciesProps> = ({ vacancies_count, area_vacancies_count }) => {
	return (
		<Space direction="vertical" size={12} className={s.vacancies}>
			<Space direction="horizontal" align="center" size={8} className={s.vacancies__line}>
				<span className={s.vacancies__title}>Вакансий по РФ</span>
				<span className={s.vacancies__count}>{vacancies_count}</span>
			</Space>
			<Space direction="horizontal" align="center" size={8} className={s.vacancies__line}>
				<span className={s.vacancies__title}>Вакансий по Свердловской области</span>
				<span className={s.vacancies__count}>{area_vacancies_count}</span>
			</Space>
		</Space>
	);
};
