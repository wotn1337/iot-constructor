import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { ConstructorPage, MainPage } from './pages';
import { PageRoutes } from './routes';

export const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={PageRoutes.MAIN} element={<MainPage />} />
					<Route path={PageRoutes.CONSTRUCTOR} element={<ConstructorPage />} />
					<Route path={PageRoutes.PROFESSIONS} element={<h1>Профессии</h1>} />
					<Route path={PageRoutes.EMPLOYEES} element={<h1>Сотрудники</h1>} />
					<Route path={PageRoutes.PARTNERS} element={<h1>Партнеры</h1>} />
				</Route>
			</Routes>
		</HashRouter>
	);
};
