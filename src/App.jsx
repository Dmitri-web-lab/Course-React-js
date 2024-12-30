import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CommentsList from './components/CommentsList';
import Message from './components/Message';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
	return (
		<div className="App">
			<Message name="React" />
			<CommentsList />
			<TemperatureConverter />
			<TodoList />
			<Router>
				<div>
					<h1>Home Page</h1>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;