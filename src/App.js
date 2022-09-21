import { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/notes/Notes';
import Searchbar from './components/ui/searchbar/Searchbar';

function App() {
	//List of all notes
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		console.log(notes);
	}, [notes]);
	return (
		<div className='App'>
			<Searchbar />
			<Notes setNotes={setNotes} notes={notes} />
		</div>
	);
}

export default App;
