import React from 'react';
import { MediaType } from '../../../../common/types';
import s from './Presentation.module.scss';
import { Button } from '../../../common/Button/Button';
import { Space } from 'antd';
import { IntroImage } from '../../../../images';

interface SlidePresentationExampleProps {
	file: MediaType;
}

export const Presentation: React.FC<SlidePresentationExampleProps> = ({ file }) => {
	return (
		<section className={s.wrapper}>
			<Space className={s.description} direction="vertical" size={32}>
				<p className={s.text}>
					Наш партнер подготовил презентацию по этому курсу. Вы можете посмотреть ее кликнув на кнопку ниже
				</p>
				<Button href={file.url} target="_blank" type="default">
					Перейти
				</Button>
			</Space>
			<img className={s.image} src={IntroImage} alt="presentation logo" />
		</section>
	);
};
