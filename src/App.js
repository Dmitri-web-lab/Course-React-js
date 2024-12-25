import './App.scss';
import CommentsList from './components/CommentsList';
import Message from './components/Message';

function App() {
	return (
		<div className="App">
			<Message name="React" />
			<CommentsList />
		</div>
	);
}

export default App;
