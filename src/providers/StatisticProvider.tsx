import React, { createContext, useState } from 'react';
import { EventType, Id, StatisticDataType, StatisticItemType, StatisticKey } from '../common/types';
import { getUTCDateString } from '../common/utils';

type StatisticContextType = StatisticDataType & {
	addEvent: (itemId: Id, key: StatisticKey, eventType: EventType) => void;
};

const initData = {
	[StatisticKey.EP]: [],
	[StatisticKey.CA]: [],
	[StatisticKey.PC]: [],
	[StatisticKey.PT]: [],
	[StatisticKey.PR]: [],
};

export const StatisticContext = createContext<StatisticContextType>({
	data: initData,
	addEvent: () => {},
});

type StatisticProviderProps = {
	children: React.ReactNode;
};

export const StatisticProvider: React.FC<StatisticProviderProps> = ({ children }) => {
	const [data, setData] = useState<StatisticDataType['data']>(initData);

	const addEvent = (itemId: Id, key: StatisticKey, eventType: EventType) => {
		const eventItem: StatisticItemType = {
			id: itemId,
			event_type: eventType,
			created_at: getUTCDateString(),
		};

		setData((oldData) => ({
			...oldData,
			[key]: [...oldData[key], eventItem],
		}));
	};

	return <StatisticContext.Provider value={{ data, addEvent }}>{children}</StatisticContext.Provider>;
};
