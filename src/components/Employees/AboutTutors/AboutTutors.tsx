import React from 'react';
import { Tutors } from '../../../images';
import { HexagonList } from '../../common/HexagonList/HexagonList';
import s from './AboutTutors.module.scss';
import { Promo } from '../../common/Promo/Promo';

type AboutEmployeesProps = {};

export const AboutTutors: React.FC<AboutEmployeesProps> = () => {
	const list = [
		'Поможет вам ориентироваться в образовательном пространстве',
		'Познакомит вас с жизнью в университете',
		'Станет вашим навигатором по срокам, местам и ситуациям',
		'Станет проводником вашего успеха: оценки, рейтинги, профориентация',
	];

	return (
		<Promo
			title="Зачем нужен тьютор?"
			image={Tutors}
			content={<HexagonList list={list} className={s.aboutEmployees__list} />}
		/>
	);
};
