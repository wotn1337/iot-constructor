import React, { useEffect, useState } from 'react';
import { setTracks, useConstructorContext } from '../../Context';
import { TrackProgress } from '../../Context/types';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js/auto';
import { LegendItem } from './LegendItem/LegendItem';
import { Space } from 'antd';
import './TrackProgresses.scss';
import { getBestTrajectory } from '../../../../common/utils';
import { useProfessionalTrajectoryByIdQuery } from '../../../../hooks/useProfessionalTrajectoryByIdQuery';
import { Id } from '../../../../common/types';
import { DiagramPlaceholder } from './../../../../images';

type TrackProgressesProps = {};

ChartJS.defaults.plugins.tooltip.callbacks.label = () => '';
ChartJS.defaults.plugins.legend.display = false;
ChartJS.register(ArcElement);

export const TrackProgresses: React.FC<TrackProgressesProps> = () => {
	const {
		state: { tracks, semesters },
		dispatch,
	} = useConstructorContext();

	const [data, setData] = useState({
		labels: tracks.filter((track) => !!track.points).map((data) => data.title),
		datasets: [
			{
				label: 'tracks',
				data: tracks.filter((track) => !!track.points).map((data) => data.points),
				backgroundColor: tracks.filter((track) => !!track.points).map((track) => track.color),
				borderColor: 'white',
				borderWidth: 2,
				hoverOffset: 4,
				cutout: '75%',
			},
		],
		width: 230,
		height: 230,
	});
	const [legend, setLegend] = useState<TrackProgress[]>([]);
	const [bestTrajectoryId, setBestTrajectoryId] = useState<Id>(2);
	const [bestTrajectoryIcon, setBestTrajectoryIcon] = useState<string>('');
	const { data: trajectory, refetch } = useProfessionalTrajectoryByIdQuery(bestTrajectoryId);

	useEffect(() => {
		const newTracks: TrackProgress[] = tracks.map((t) => ({ ...t, points: 0 }));

		semesters.forEach((semester) =>
			semester.columns?.[2].items.forEach((module) =>
				module.disciplines.forEach((disc) => {
					disc.professional_trajectories?.forEach((track) => {
						const existedTrack = newTracks.find((t) => t.id === track.id);
						if (existedTrack) {
							existedTrack.points += track.discipline_evaluation;
							existedTrack.percent = (existedTrack.points / track.discipline_evaluation) * 100;
						}
					});
				})
			)
		);

		dispatch(setTracks(newTracks.sort((a, b) => Number(b.points) - Number(a.points))));
	}, [semesters]);

	useEffect(() => {
		setLegend(tracks.filter((track) => track.points));
		setData((prevData) => ({
			...prevData,
			labels: tracks.filter((track) => !!track.points).map((data) => data.title),
			datasets: [
				{
					...prevData.datasets[0],
					data: tracks.filter((track) => !!track.points).map((data) => data.points),
					backgroundColor: tracks.filter((track) => !!track.points).map((track) => track.color),
				},
			],
		}));
	}, [tracks]);

	useEffect(() => {
		if (legend.length) {
			setBestTrajectoryId(getBestTrajectory(legend));
		}
	}, [legend]);

	useEffect(() => {
		refetch();
	}, [bestTrajectoryId]);

	useEffect(() => {
		if (trajectory) {
			setBestTrajectoryIcon(trajectory?.icons[0]);
		}
	}, [trajectory]);

	return (
		<Space direction="vertical" size="large" className="wrapper">
			{!legend.length ? (
				<Space size="large" direction="vertical">
					<img className="wrapper__placeholder_image" src={DiagramPlaceholder} alt="DiagramPlaceholder" />
					<div className="wrapper__placeholder_text">Здесь будут ваши траектории</div>
				</Space>
			) : (
				<>
					<div
						style={{
							position: 'relative',
							width: 230,
							height: 230,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div style={{ position: 'absolute', width: 230, height: 230 }}>
							<Doughnut data={data} />
						</div>

						{!!legend.length && (
							<img className="wrapper__track_icon" src={bestTrajectoryIcon} alt={'bestTrajectory'} />
						)}
					</div>
					<Space size="small" direction="vertical" className="legend">
						{legend.map((item) => (
							<LegendItem title={item.title} color={item.color} key={item.id} />
						))}
					</Space>
				</>
			)}
		</Space>
	);
};
