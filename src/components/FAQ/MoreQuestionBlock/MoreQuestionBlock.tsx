import React from 'react';
import s from './MoreQuestionBlock.module.scss';
import { Space } from 'antd';
import { Button } from '../../common/Button/Button';
import { FAQQuestionBackground } from '../../../images';
import { useMediaQuery } from 'react-responsive';

export const MoreQuestionBlock: React.FC = () => {
	const isMobile = useMediaQuery({ maxWidth: 1260 });

	return (
		<section className={s.wrapper}>
			<div className={s.wrapper__background} />
			<div className={s.wrapper__inner}>
				<Space className={s.wrapper__inner__text} direction="vertical" size={isMobile ? 24 : 32}>
					<h3 className={s.info__title}>Ещё остались вопросы?</h3>
					<span className={s.info__text}>Можете написать нам и мы обязательно ответим</span>
					<Button
						href="https://vk.com/iritrtf_urfu"
						type="primary"
						target="_blank"
						style={{ width: isMobile ? 280 : 'fit-content' }}
					>
						Задать вопрос
					</Button>
				</Space>
				<img className={s.wrapper__inner__image} src={FAQQuestionBackground} alt="hexagon" />
			</div>
		</section>
	);
};
