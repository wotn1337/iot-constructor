import React from 'react';
import s from './Professions.module.scss';
import { Professions as ProfessionsImage } from '../../../images';
import { Button } from '../../common/Button/Button';
import { StatisticItem } from './StatisticItem/StatisticItem';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { reachGoal } from '../../../common/utils';

export const Professions = () => {
	return (
		<section className={s.professionWrapper}>
			<div className={s.profession}>
				<h3 className={s.profession__title}>Востребованные профессии доступнее чем кажется</h3>
				<div className={s.profession__image_wrapper}>
					<img
						className={s.profession__image_wrapper__image}
						src={ProfessionsImage}
						alt="professions"
						width={440}
					/>
				</div>
				<p className={s.profession__description}>
					В современном мире существуют сотни различных специальностей в сфере IT, от дизайнеров до инженеров
					по машинному обучению. Многие из востребованных профессий вы сможете освоить в ИРИТ-РТФ благодаря
					системе гибкого обучения ИОТ
				</p>
				<span className={s.profession__note}>Прямо сейчас на hh.ru</span>
				<div className={s.profession__statistic}>
					<StatisticItem amount="44 923" caption="Вакансии по всей России" />
					<StatisticItem amount="1 292" caption="Вакансии в Екатеринбурге" />
				</div>
				<div className={s.profession__button}>
					<NavLink to={ROUTES.PROFESSIONS} onClick={() => reachGoal('seeProfessions')}>
						<Button type="primary">Посмотреть профессии</Button>
					</NavLink>
				</div>
			</div>
		</section>
	);
};
