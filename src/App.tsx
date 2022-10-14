import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { MainPage } from './pages';
import { PageRoutes } from './routes';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={PageRoutes.MAIN} element={<MainPage />} />
					<Route path={PageRoutes.CONSTRUCTOR} element={<h1>Конструктор</h1>} />
					<Route path={PageRoutes.PROFESSIONS} element={<h1>Профессии</h1>} />
					<Route path={PageRoutes.EMPLOYEES} element={<h1>Сотрудники</h1>} />
					<Route
						path={PageRoutes.PARTNERS}
						element={<h1>Партнеры (Без СБЕРа, пусть логотип сначала в порядок приведут)</h1>}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
