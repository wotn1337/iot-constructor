import React from 'react';
import s from './Professions.module.scss';
import { IntroImage } from '../../../images';
import { Button } from '../../common/Button/Button';
import { StatisticItem } from './StatisticItem/StatisticItem';
import { Hexagon } from '../../common/Hexagon/Hexagon';

export const Professions = ({ ...props }) => {
	return (
		<section className={s.professionWrapper}>
			<div className={s.profession}>
				<h3 className={s.profession__title}>Востребованные профессии доступнее чем кажется</h3>
				<img className={s.profession__image} src={IntroImage} />
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
					<Button text={'Посмотреть профессии'} type="primary" />
				</div>
			</div>
			<Hexagon size={60} color="#1890FF" style={{ opacity: 0.2, position: 'absolute', bottom: 125, left: 40 }} />
			<Hexagon
				size={60}
				color="linear-gradient(313.44deg, #099BD9 20.92%, #18C8FF 83.47%)"
				style={{ position: 'absolute', bottom: 229, left: 160 }}
			/>
			<Hexagon
				size={130}
				color="linear-gradient(313.44deg, #096DD9 20.92%, #1890FF 83.47%)"
				style={{ position: 'absolute', bottom: -135, left: 160 }}
			/>
			<Hexagon
				size={42}
				color="linear-gradient(313.44deg, #096DD9 20.92%, #1890FF 83.47%)"
				style={{ position: 'absolute', top: -52, right: 940 }}
			/>
			<Hexagon size={37} color="#1890FF" style={{ opacity: 0.2, position: 'absolute', top: -12, right: 830 }} />
			<Hexagon
				size={150}
				color="linear-gradient(313.44deg, #099BD9 20.92%, #18C8FF 83.47%)"
				rotateAngle={60}
				style={{ position: 'absolute', top: -180, right: 500 }}
			/>
			<Hexagon
				size={295}
				color="linear-gradient(313.44deg, #096DD9 20.92%, #1890FF 83.47%)"
				rotateAngle={75}
				style={{ position: 'absolute', top: -120, right: -110 }}
			/>
		</section>
	);
};
