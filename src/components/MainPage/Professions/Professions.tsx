import React from 'react';
import s from './Professions.module.scss';
import { IntroImage } from '../../../images';
import { Button } from '../../common/Button/Button';
import { StatisticItem } from './StatisticItem/StatisticItem';

export const Professions = () => {
	return (
		<section className={s.professionWrapper}>
			<div className={s.profession}>
				<h3 className={s.profession__title}>Востребованные профессии доступнее чем кажется</h3>
				<img className={s.profession__image} src={IntroImage} alt="professions" width={440} />
				<p className={s.profession__description}>
					В современном мире существуют сотни раличных специальностей в сфере IT, от дизайнеров до инженеров
					по машинному обучению. Многие из востребованных профессий вы сможете освоить в ИРИТ-РТФ благодаря
					системе гибкого обучени ИОТ
				</p>
				<span className={s.profession__note}>Прямо сейчас на hh.ru</span>
				<div className={s.profession__statistic}>
					<StatisticItem amount="44 923" caption="Вакансии по всей России" />
					<StatisticItem amount="1 292" caption="Вакансии в Екатеринбурге" />
				</div>
				<div className={s.profession__button}>
					<Button type="primary">Посмотреть профессии</Button>
				</div>
			</div>
		</section>
	);
};
