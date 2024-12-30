import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function AboutPage() {
	let arrowBoubleRight = ">>";
	return ( 
		<div className="routeContainer">
			<h3>Страница "О нас"</h3>
			<Button variant="contained"><Link className="noStyledLink" to='/'>Перейти на главную страницу {arrowBoubleRight}</Link></Button>
			
		</div>
	 );
}

export default AboutPage;