import React, { createContext, useState } from 'react';
import { AxiosError } from 'axios';

type ServerErrorContextType = {
	error: AxiosError | undefined;
	setError: React.Dispatch<React.SetStateAction<AxiosError<unknown, any> | undefined>>;
};

export const ServerErrorContext = createContext<ServerErrorContextType>({
	error: undefined,
	setError: () => {},
});

type ServerErrorProviderProps = {
	children: React.ReactNode;
};

export const ServerErrorProvider: React.FC<ServerErrorProviderProps> = ({ children }) => {
	const [error, setError] = useState<AxiosError>();

	return <ServerErrorContext.Provider value={{ error, setError }}>{children}</ServerErrorContext.Provider>;
};
