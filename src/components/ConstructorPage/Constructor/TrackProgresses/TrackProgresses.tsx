import React from 'react';
import { Space } from 'antd';
import { TitledProgress, TitledProgressProps } from './TitledProgress/TitledProgress';
import s from './TrackProgresses.module.scss';

type TrackProgressesProps = {
	tracks: TitledProgressProps[];
};

export const TrackProgresses: React.FC<TrackProgressesProps> = (props) => {
	return (
		<Space direction="vertical" size={8} className={s.wrapper}>
			{props.tracks.map((track) => (
				<TitledProgress key={track.id} {...track} />
			))}
		</Space>
	);
};
