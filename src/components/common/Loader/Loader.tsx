import React from 'react';
import { Spin, SpinProps } from 'antd';

type LoaderProps = {
	loading: boolean;
	children?: React.ReactNode;
	size?: SpinProps['size'];
	style?: React.CSSProperties;
};

export const Loader: React.FC<LoaderProps> = ({ loading, size = 'default', children, style }) => {
	return (
		<>
			{loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, ...style }}>
					<Spin spinning={loading} size={size}></Spin>
				</div>
			) : (
				children
			)}
		</>
	);
};
