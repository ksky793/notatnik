import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './EditNotePopup.css';
const EditNotePopup = ({ editedNote, notes, setNotes, setIsEditPopClosed }) => {
	const [title, setTitle] = useState(editedNote[0].title);
	const [textArea, setTextArea] = useState(editedNote[0].textArea);

	const closePopup = () => {
		setIsEditPopClosed(true);
	};

	const updateNote = () => {
		const newNotesList = notes.map((note) => {
			if (note.id === editedNote[0].id) {
				note.title = title;
				note.textArea = textArea;
				return note;
			}
			return note;
		});
		setNotes(newNotesList);
		setIsEditPopClosed(true);
	};
	return (
		<div className='edit-note-popup-container'>
			<div className='edit-note-popup'>
				<h1 className='header-popup-edit-note'>Edit Note</h1>
				<input
					className='popup-input-note'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					className='popup-textarea-note'
					value={textArea}
					onChange={(e) => setTextArea(e.target.value)}
				/>
				<button className='popup-btn-edit-note' onClick={updateNote}>
					Update Note
				</button>
				<AiOutlineClose className='ic-close-popup' onClick={closePopup} />
			</div>
		</div>
	);
};

export default EditNotePopup;
