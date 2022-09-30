import { useEffect, useState } from 'react';
import BtnAddNote from '../ui/buttons/BtnAddNote';
import Note from './note/Note';
import './Notes.css';
import AddNotePopup from './addNotePopup/AddNotePopup';
import EditNotePopup from './editNotePopup/EditNotePopup';

const Notes = ({ setNotes, notes, searchedNote }) => {
	const [isAddPopClosed, setIsAddPopClosed] = useState(true);
	const [isEditPopClosed, setIsEditPopClosed] = useState(true);

	const [editedNote, setEditedNote] = useState([]);

	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};

	const editNote = (id) => {
		const note = notes.filter((note) => note.id === id);
		setEditedNote(note);
		setIsEditPopClosed(false);
	};

	return (
		<div
			className='wrapper notes'
			style={{
				zIndex:
					isEditPopClosed === false || isAddPopClosed === false ? '3' : '1',
			}}
		>
			<div className='notes-top'>
				<h1 className='notes-header'>My Notes</h1>
				<BtnAddNote setIsClosed={setIsAddPopClosed} />
			</div>
			<hr className='notes-hr' />
			<div
				className='notes-list'
				style={{ display: !isAddPopClosed && 'none' }}
			>
				{notes &&
					notes
						.filter((note) => {
							return searchedNote.toLowerCase() === ''
								? note
								: note.title.toLowerCase().includes(searchedNote);
						})
						.map((note) => (
							<Note
								key={note.id}
								note={note}
								deleteNote={deleteNote}
								editNote={editNote}
							/>
						))}
			</div>

			{isAddPopClosed === false && (
				<AddNotePopup
					setIsAddPopClosed={setIsAddPopClosed}
					setNotes={setNotes}
					notes={notes}
				/>
			)}

			{isEditPopClosed === false && (
				<EditNotePopup
					editedNote={editedNote}
					setIsEditPopClosed={setIsEditPopClosed}
					setNotes={setNotes}
					notes={notes}
				/>
			)}
		</div>
	);
};

export default Notes;
