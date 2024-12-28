import './App.scss';
import CommentsList from './components/CommentsList';
import Message from './components/Message';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className="App">
			<Message name="React" />
			<CommentsList />
			<TemperatureConverter />
			<TodoList />
		</div>
	);
}

export default App;
