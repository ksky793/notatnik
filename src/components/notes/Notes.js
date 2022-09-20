import { useState } from 'react';
import BtnAddNote from '../ui/buttons/BtnAddNote';
import Note from './note/Note';
import './Notes.css';
import AddNotePopup from './addNotePopup/AddNotePopup';

const Notes = () => {
	const [note, setNote] = useState('');
	const [notes, setNotes] = useState([]);

	return (
		<div className='wrapper notes'>
			<div className='notes-top'>
				<h1 className='notes-header'>My Notes</h1>
				<BtnAddNote />
			</div>
			<hr className='notes-hr' />
			<div className='notes-list'>
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
			</div>
			<AddNotePopup />
		</div>
	);
};

export default Notes;
