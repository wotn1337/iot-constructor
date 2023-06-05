import React from 'react';
import { MediaType } from '../../../../common/types';
import s from './Presentation.module.scss';
import { Button } from '../../../common/Button/Button';
import { Space } from 'antd';

interface SlidePresentationExampleProps {
	file: MediaType;
}

export const Presentation: React.FC<SlidePresentationExampleProps> = ({ file }) => {
	return (
		<section className={s.wrapper}>
			<Space className={s.description} direction="vertical" size={16}>
				<p className={s.title}>Презентация</p>
				<p className={s.text}>
					Партнер подготовил презентацию по данному курсу, можете открыть её в новой вкладке.
				</p>
				<Button href={file.url} target="_blank" type="default">
					Смотреть презентацию
				</Button>
			</Space>
		</section>
	);
};
