import React from 'react';
import { Spin, SpinProps } from 'antd';

type LoaderProps = {
	loading: boolean;
	children?: React.ReactNode;
	size?: SpinProps['size'];
};

export const Loader: React.FC<LoaderProps> = ({ loading, size = 'default', children }) => {
	return (
		<>
			{loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
					<Spin spinning={loading} size={size}></Spin>
				</div>
			) : (
				children
			)}
		</>
	);
};
