import React from 'react';
import { MediaType } from '../../../common/types';
import s from './VideoPlayer.module.scss';
import { Space } from 'antd';

type VideoPlayerProps = {
	video: MediaType;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
	return (
		<div className={s.wrapper}>
			<Space className={s.spaceBlock} size={16} direction="vertical">
				<p className={s.title}>Видео</p>
				<video className={s.player} src={video.url} controls={true} />
			</Space>
		</div>
	);
};
