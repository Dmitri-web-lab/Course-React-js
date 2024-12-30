import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function HomePage() {
	let arrowBoubleRight = ">>";
	return ( 
		<div className="routeContainer">
			<h3>Главная страница</h3>
			<Button variant="contained"><Link className="noStyledLink" to='/about'>Перейти на страницу "О нас" {arrowBoubleRight}</Link></Button>
		</div>
	 );
}

export default HomePage;