import React, { createContext, useContext, useReducer } from 'react';
import { MainPageContextInitialState, MainPageContextReducer } from './reducer';
import { MainPageContext as MainPageContextType } from './types';

const mainPageContextInitialContext = {
	state: MainPageContextInitialState,
	dispatch: () => ({}),
};

const MainPageContext = createContext<MainPageContextType>(mainPageContextInitialContext);

export * from './actions';
export const MainPageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(MainPageContextReducer, MainPageContextInitialState);

	return <MainPageContext.Provider value={{ state, dispatch }}>{children}</MainPageContext.Provider>;
};

export const useMainPageContext = () => useContext(MainPageContext);
