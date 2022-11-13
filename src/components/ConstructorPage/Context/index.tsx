import React, { createContext, useContext, useReducer } from 'react';
import { MainPageContextInitialState, MainPageContextReducer } from './reducer';
import { ConstructorContext as ConstructorContextType } from './types';

const constructorInitialContext = {
	state: MainPageContextInitialState,
	dispatch: () => ({}),
};

const ConstructorContext = createContext<ConstructorContextType>(constructorInitialContext);

export * from './actions';
export const ConstructorContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(MainPageContextReducer, MainPageContextInitialState);

	return <ConstructorContext.Provider value={{ state, dispatch }}>{children}</ConstructorContext.Provider>;
};

export const useConstructorContext = () => useContext(ConstructorContext);
