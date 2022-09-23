import { useState } from 'react';
import BtnAddNote from '../ui/buttons/BtnAddNote';
import Note from './note/Note';
import './Notes.css';
import AddNotePopup from './addNotePopup/AddNotePopup';

const Notes = ({ setNotes, notes }) => {
	const [isClosed, setIsClosed] = useState(true);

	return (
		<div className='wrapper notes'>
			<div className='notes-top'>
				<h1 className='notes-header'>My Notes</h1>
				<BtnAddNote setIsClosed={setIsClosed} />
			</div>
			<hr className='notes-hr' />
			<div className='notes-list' style={{ display: !isClosed && 'none' }}>
				{notes &&
					notes.map((note) => (
						<Note
							key={note.id}
							// id={note.id}
							// date={note.date}
							// title={note.title}
							// textArea={note.textArea}
							note={note}
							notes={notes}
							setNotes={setNotes}
						/>
					))}
			</div>
			<AddNotePopup
				isClosed={isClosed}
				setIsClosed={setIsClosed}
				setNotes={setNotes}
				notes={notes}
			/>
		</div>
	);
};

export default Notes;
