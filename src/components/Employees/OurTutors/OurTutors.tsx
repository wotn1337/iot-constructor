import React from 'react';
import { Employee } from '../types';
import { EmployeesGrid } from '../EmployeesGrid/EmployeesGrid';

const TUTOR: Employee = {
	id: 1,
	name: 'Валиева Эльмира',
	info: 'Радиотехника, Инфокоммуникационные технологии и системы связи, Управление в технических системах, Технология полиграфического и упаковочного производства, Конструирование и технология электронных средств',
	vk: {
		name: 'ВКонтакте',
		icon: 'https://constructor-iot-backend.na4u.ru/img/icons/vk-icon.svg',
		url: 'https://vk.com',
	},
	contacts: {
		address: 'ул. Мира, 32',
		// audience: 'Р-138а',
		email: 'e.r.valieva@urfu.ru',
		phone: '+71234567890',
	},
};

type OurTutorsProps = {};

export const OurTutors: React.FC<OurTutorsProps> = () => {
	return <EmployeesGrid title="Наши тьюторы" employees={Array(6).fill(TUTOR)} />;
};
