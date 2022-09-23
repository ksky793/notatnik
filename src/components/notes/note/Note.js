import { MdDeleteForever } from 'react-icons/md';
import Notes from '../Notes';
import './Note.css';

const Note = ({ note, notes, setNotes }) => {
	const deleteNote = () => {
		setNotes(notes.filter((el) => el.id != note.id));
	};
	return (
		<div className='note-container'>
			<h3 className='note-data'>{note.data}</h3>
			<h2 className='note-title'>{note.title}</h2>
			<p className='note-paragraph'>{note.textArea}</p>
			<div className='note-tools'>
				<MdDeleteForever className='ic-delete-note' onClick={deleteNote} />
			</div>
		</div>
	);
};

export default Note;
