import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BtnAddNote from '../ui/buttons/BtnAddNote';
import Note from './note/Note';
import AddNotePopup from './popup/addNotePopup/AddNotePopup';
import EditNotePopup from './popup/editNotePopup/EditNotePopup';
import './Notes.css';

const Notes = ({ setNotes, notes, searchedNote }) => {
	const [isAddPopClosed, setIsAddPopClosed] = useState(true);
	const [isEditPopClosed, setIsEditPopClosed] = useState(true);

	const [editedNote, setEditedNote] = useState([]);

	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
		notify('delete');
	};

	const editNote = (id) => {
		const note = notes.filter((note) => note.id === id);
		setEditedNote(note);
		setIsEditPopClosed(false);
	};

	const notify = (popup) => {
		if (popup === 'update')
			toast.success('The note updated', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		if (popup === 'add-success')
			toast.success('The note added', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		if (popup === 'add-error')
			toast.error('Try to add a note again', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		if (popup === 'delete') {
			toast.success('The note deleted', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		}
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
					notify={notify}
				/>
			)}

			{isEditPopClosed === false && (
				<EditNotePopup
					editedNote={editedNote}
					setIsEditPopClosed={setIsEditPopClosed}
					setNotes={setNotes}
					notes={notes}
					notify={notify}
				/>
			)}
			<ToastContainer />
		</div>
	);
};

export default Notes;
