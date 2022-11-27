import React, { useEffect } from 'react';
import { Space } from 'antd';
import { TitledProgress } from './TitledProgress/TitledProgress';
import s from './TrackProgresses.module.scss';
import { setTracks, useConstructorContext } from '../../Context';
import { TrackProgress } from '../../Context/types';

type TrackProgressesProps = {};

export const TrackProgresses: React.FC<TrackProgressesProps> = () => {
	const {
		state: { tracks, semesters },
		dispatch,
	} = useConstructorContext();

	useEffect(() => {
		const newTracks: TrackProgress[] = tracks.map((t) => ({ ...t, points: 0 }));

		semesters.forEach((semester) =>
			semester.columns?.[2].items.forEach((module) =>
				module.disciplines.forEach((disc) => {
					disc.professional_trajectories?.forEach((track) => {
						const existedTrack = newTracks.find((t) => t.id === track.id);
						if (existedTrack) {
							existedTrack.points += track.discipline_evaluation;
							existedTrack.percent = (existedTrack.points / track.sum_discipline_levels_points) * 100;
						}
					});
				})
			)
		);

		dispatch(setTracks(newTracks.sort((a, b) => Number(b.points) - Number(a.points))));
	}, [semesters]);

	return (
		<Space direction="vertical" size={8} className={s.wrapper}>
			{tracks
				.filter((track) => track.points)
				.map((track) => (
					<TitledProgress key={track.id} {...track} />
				))}
		</Space>
	);
};
