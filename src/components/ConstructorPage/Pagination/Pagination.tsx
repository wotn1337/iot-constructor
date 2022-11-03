import React from 'react';
import { Pagination as AntdPagination } from 'antd';

type PaginationProps = {
	total: number;
	current: number;
	onChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ total, current, onChange }) => {
	return <AntdPagination total={total} pageSize={1} current={current + 1} onChange={(page) => onChange(page - 1)} />;
};
