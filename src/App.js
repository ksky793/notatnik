import { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/notes/Notes';
import Searchbar from './components/ui/searchbar/Searchbar';

function App() {
	// Searched notes
	const [searchedNote, setSearchedNote] = useState('');
	//List of all notes
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		console.log(searchedNote);
	}, [searchedNote]);

	return (
		<div className='App'>
			<Searchbar setSearchedNote={setSearchedNote} />
			<Notes setNotes={setNotes} notes={notes} searchedNote={searchedNote} />
		</div>
	);
}

export default App;
