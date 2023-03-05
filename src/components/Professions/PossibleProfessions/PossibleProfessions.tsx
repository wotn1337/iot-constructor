import React, { useState } from 'react';
import { Switcher } from './Switcher/Switcher';
import s from './PossibleProfessions.module.scss';
import { ProfessionType } from '../types';
import { Profession } from './Profession/Profession';

type PossibleProfessionsProps = {};

export const PossibleProfessions: React.FC<PossibleProfessionsProps> = ({ ...props }) => {
	const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
	const professions: ProfessionType[] = [
		{
			id: 1,
			title: 'Frontend-разработчик',
			description:
				'Наше дело не так однозначно, как может показаться: дальнейшее развитие различных форм деятельности в значительной степени обусловливает важность стандартных подходов. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке неоднозначны и будут подвергнуты целой серии независимых исследований.',
			image: 'https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg',
			salary: {
				minimal: 100,
				median: 88000,
				maximum: 90000,
			},
		},
		{
			id: 2,
			title: 'Backend-разработчик',
			description:
				'Мы тщательно проанализировали твой выбор и подготовили подробный анализ траектории. Не забывай, что система ИОТ позволяет в любой момент передумать и изменить траекторию, чтобы получить желаемые навыки. ',
			image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
			salary: {
				minimal: 15000,
				median: 30000,
				maximum: 120000,
			},
		},
		{
			id: 3,
			title: 'Fullstack-разработчик',
			description:
				'Наше дело не так однозначно, как может показаться: дальнейшее развитие различных форм деятельности в значительной степени обусловливает важность стандартных подходов. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке неоднозначны и будут подвергнуты целой серии независимых исследований.',
			image: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
			salary: {
				minimal: 10000,
				median: 40000,
				maximum: 90000,
			},
		},
	];
	return (
		<section className={s.possibleProfessions}>
			<h3 className={s.title}>Возможные профессии</h3>
			<Switcher
				currentProfessionIndex={currentProfessionIndex}
				setCurrentProfessionIndex={setCurrentProfessionIndex}
				professions={professions.map((p) => ({ title: p.title }))}
			/>
			<Profession {...professions[currentProfessionIndex]} />
		</section>
	);
};
