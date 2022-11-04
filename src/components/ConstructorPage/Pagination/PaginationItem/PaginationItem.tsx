import React from 'react';
import s from './PagintaionItem.module.scss';

type PaginationItemProps = {
	number: number;
	type: 'page' | 'prev' | 'next';
};

export const PaginationItem: React.FC<PaginationItemProps> = ({ number }) => {
	return <div className={s.item}>{number}</div>;
};
