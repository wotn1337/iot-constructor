import { ElectiveIcon, LevelIcon, TechnologyIcon } from '../../../images';

export const AdvantagesList = [
	{
		title: 'Уровень сложности',
		description: 'Определяется по результатам ЕГЭ или внутреннему тестированию',
		list: ['Базовый', 'Повышенный'],
		align: 'right',
		id: 0,
		image: LevelIcon,
	},
	{
		title: 'Технология реализации',
		description: 'Выбирается самостоятельно после презентации курсов в начале семестра',
		list: ['Очная', 'Онлайн', 'Смешанная'],
		align: 'left',
		id: 1,
		image: TechnologyIcon,
	},
	{
		title: 'Элективные дисциплины',
		description: 'Предметы по выбору, набор которых вы определяете исходя из своих личных потребностей',
		align: 'right',
		id: 2,
		image: ElectiveIcon,
	},
];
