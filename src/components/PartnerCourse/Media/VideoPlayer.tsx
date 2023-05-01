import React from 'react';
import { MediaType } from '../../../common/types';
import s from './VideoPlayer.module.scss';

type VideoPlayerProps = {
	video: MediaType;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
	return (
		<div className={s.wrapper}>
			<video className={s.player} src={video.url} controls={true} />
		</div>
	);
};
