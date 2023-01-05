import React from 'react';
import { Promo } from '../../common/Promo/Promo';
import { IntroImage } from '../../../images';
import s from './AboutROPs.module.scss';

type AboutROPsProps = {};

export const AboutROPs: React.FC<AboutROPsProps> = () => {
	return (
		<Promo
			title="Кто такой РОП?"
			image={IntroImage}
			hideImageOnMobile={true}
			content={
				<p className={s.aboutROPs__content}>
					Руководитель образовательной программы определяет содержание образовательной программы: результаты
					обучения, состав модулей программы, правила формирования индивидуальных траекторий. <br />
					<br />А также, привлекает работодателей к разработке и реализации образовательной программы, в том
					числе и для заданий на проектную работу
				</p>
			}
		/>
	);
};
