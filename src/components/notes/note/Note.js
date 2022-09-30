import { MdDeleteForever, MdModeEditOutline } from 'react-icons/md';
import Notes from '../Notes';
import './Note.css';

const Note = ({ note, deleteNote, editNote }) => {
	const printData = () => {
		console.log(note);
	};
	return (
		<div className='note-container'>
			<h3 className='note-date'>{note.date}</h3>
			<h2 className='note-title'>{note.title}</h2>
			<p className='note-paragraph'>{note.textArea}</p>
			<div className='note-tools'>
				<MdModeEditOutline
					className='ic-edit-note'
					onClick={() => editNote(note.id)}
				/>
				<MdDeleteForever
					className='ic-delete-note'
					onClick={() => deleteNote(note.id)}
				/>
			</div>
		</div>
	);
};

export default Note;
