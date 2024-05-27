import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState();
	const [list, setList] = useState([]);
	const [error, setError] = useState();

	let isValueVaild = false;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		if (promptValue === null || promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setValue();
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		const id = Date.now();
		const date = new Date();
		const updatedList = [...list, { id, value, date }];
		setList(updatedList);
		setValue();
		setError();
	};

	error === '' ? (isValueVaild = true) : (isValueVaild = false);

	console.log(list);
	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 && (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}

				<ul className={styles.list}>
					{list.map(({ id, value, date }) => (
						<li className={styles['list-item']} key={id}>
							{value}, {date.toLocaleString('ru-RU')}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
