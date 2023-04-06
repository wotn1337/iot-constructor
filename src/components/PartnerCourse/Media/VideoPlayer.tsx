import React from 'react';
import ReactPlayer from 'react-player';
import { MediaType } from '../../../common/types';
import s from './VideoPlayer.module.scss';

type VideoPlayerProps = {
	video: MediaType | undefined;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
	return (
		<div className={s.wrapper}>
			<ReactPlayer
				className={s.player}
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				controls={true}
				light={true}
				width="100%"
				height="100%"
			/>
		</div>
	);
};
