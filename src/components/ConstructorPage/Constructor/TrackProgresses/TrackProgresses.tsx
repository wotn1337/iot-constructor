import React from 'react';
import { Space } from 'antd';
import { TitledProgress } from './TitledProgress/TitledProgress';
import s from './TrackProgresses.module.scss';
import { TrackProgress } from '../../Context/types';

type TrackProgressesProps = {
	tracks: TrackProgress[];
};

export const TrackProgresses: React.FC<TrackProgressesProps> = (props) => {
	return (
		<Space direction="vertical" size={8} className={s.wrapper}>
			{props.tracks
				.filter((track) => track.points)
				.map((track) => (
					<TitledProgress key={track.id} {...track} />
				))}
		</Space>
	);
};
