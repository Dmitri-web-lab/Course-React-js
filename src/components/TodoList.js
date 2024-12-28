// Добавляем задания в список дел и отображаем весь список на странице
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';


import { useState } from "react";

export default function TodoList() {
	const [inputText, setinputText] = useState("");
	const [arr, setArr] = useState(["Task 1"]);

	function clickHandler() {
		if (!inputText.trim()) {
			return;
		}
		setArr([...arr, inputText]);
		setinputText("");
	}

	function deleteElem(item) {
		console.log(item);
		let newArr = arr.filter(elem => elem !== item)
		setArr(newArr);
	}

	return (
		<>
			<Box
				component="form"
				sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
				noValidate
				autoComplete="off"
			>
				<TextField
					onChange={(event) => setinputText(event.target.value)}
					type="text" id="standard-basic input"
					value={inputText}
					label="Введите задание:"
					variant="standard"
				/>
			</Box>
			<Button onClick={clickHandler} variant="outlined">Добавить</Button>
			{arr.map((item) => (
				<Box sx={{ minWidth: 275 }}>
					<Card variant="outlined">
						<React.Fragment>
							<CardContent>
								<Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
									Задания на сегодня
								</Typography>
								<Typography key={item} variant="body2">{item}</Typography>
							</CardContent>
							<CardActions>
								<Button onClick={() => { deleteElem(item) }} size="small">
									<DeleteIcon />
								</Button>
							</CardActions>
						</React.Fragment>
					</Card>
				</Box>
			))}
		</>
	);
}

