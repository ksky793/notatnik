import './App.css';
import Notes from './components/notes/Notes';
import Searchbar from './components/ui/searchbar/Searchbar';

function App() {
	return (
		<div className='App'>
			<Searchbar />
			<Notes />
		</div>
	);
}

export default App;
