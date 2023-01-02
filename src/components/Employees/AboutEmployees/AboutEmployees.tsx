import React from 'react';
import { IntroImage } from '../../../images';
import { HexagonList } from '../../common/HexagonList/HexagonList';
import s from './AboutEmployees.module.scss';

type AboutEmployeesProps = {};

export const AboutEmployees: React.FC<AboutEmployeesProps> = () => {
	const list = [
		'Поможет вам ориентироваться в образовательном пространстве',
		'Познакомит вас с жизнью в университете',
		'Станет вашим навигатором по срокам, местам и ситуациям',
		'Станет проводником вашего успеха: оценки, рейтинги, профориентация',
	];

	return (
		<div className={s.aboutEmployees}>
			<h3 className={s.aboutEmployees__title}>Зачем нужен тьютор?</h3>
			<img src={IntroImage} alt="employees" width={225} className={s.aboutEmployees__image} />
			<HexagonList list={list} className={s.aboutEmployees__list} />
		</div>
	);
};
