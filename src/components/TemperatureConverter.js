import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function TemperatureConverter() {
	const [сelsius, setСelsius] = useState(0);
	const [fahrenheit, setFahrenheit] = useState(32.00);

	const getСelsius = ({ target }) => {
		let enterValue = target.value;
		setСelsius(enterValue);
		let convertTemperature = (enterValue * 1.8) + 32;
		setFahrenheit(convertTemperature.toFixed(2));
	};
	const getFahrenheit = ({ target }) => {
		let enterValue = target.value;
		setFahrenheit(enterValue);
		let convertTemperature = (enterValue - 32) / 1.8;
		setСelsius(convertTemperature.toFixed(2));
	};

	return (
		<>
		<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField type="number" value={сelsius} onChange={getСelsius} id="filled-basic" label="Температура по Цельсия:" variant="filled" />
    </Box>
		<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField type="number" value={fahrenheit} onChange={getFahrenheit} id="filled-basic" label="Температура по Фаренгейту:" variant="filled" />
    </Box>
		</>
	)
}