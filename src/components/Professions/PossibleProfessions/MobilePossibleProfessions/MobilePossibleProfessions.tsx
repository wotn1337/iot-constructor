import React from 'react';
import { Divider, Space } from 'antd';
import { ProfessionType, salaryLocale } from '../../types';
import s from './MobilePossibleProfessions.module.scss';

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
						<div className={s.profession__salaries}>
							<div className={s.profession__salary}>
								<span className={s.salary__number}>{p.minimal_salary}&#8381;</span>
								<span className={s.salary__title}>{salaryLocale.minimal_salary}</span>
							</div>
							<Divider type="vertical" className={s.divider} />
							<div className={`${s.profession__salary} ${s.medianSalary}`}>
								<span className={s.salary__number}>{p.median_salary}&#8381;</span>
								<span className={s.salary__title}>{salaryLocale.median_salary}</span>
							</div>
							<Divider type="vertical" className={s.divider} />
							<div className={s.profession__salary}>
								<span className={s.salary__number}>{p.maximal_salary}&#8381;</span>
								<span className={s.salary__title}>{salaryLocale.maximal_salary}</span>
							</div>
						</div>
					</div>
					<div className={s.profession__comment}>Данные о зарплате взяты с сайта hh.ru</div>
					<p className={s.profession__description}>{p.description}</p>
				</div>
			))}
		</Space>
	);
};
