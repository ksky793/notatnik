import './AddNotePopup.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

const AddNotePopup = ({ isClosed, setIsClosed, notes, setNotes }) => {
	const [title, setTitle] = useState('');
	const [textArea, setTextArea] = useState('');

	const closePopup = () => {
		setIsClosed(true);
	};

	const handleNotePopup = (e) => {
		if (e.target.className === 'popup-input-note') setTitle(e.target.value);
		if (e.target.className === 'popup-textarea-note')
			setTextArea(e.target.value);
	};

	const getDate = () => {
		const current = new Date();

		const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' })
			.format;
		const longName = monthName(current);

		return `${current.getDate()} ${longName}, ${current.getFullYear()}`;
	};
	const addNote = () => {
		const noteItem = {
			id: Math.floor(Math.random() * 9999 + 1),
			date: getDate(),
			title: title,
			textArea: textArea,
		};

		const newNotes = [...notes, noteItem];
		setNotes(newNotes);
		setTitle('');
		setTextArea('');
		setIsClosed(true);
	};

	return (
		<div
			className='add-note-popup-container'
			style={{ display: isClosed ? 'none' : 'flex' }}
		>
			<div className='add-note-popup'>
				<h1 className='header-popup-add-note'>Add Note</h1>
				<input
					className='popup-input-note'
					type='text'
					placeholder='Title...'
					required
					onChange={handleNotePopup}
					value={title}
				/>
				<textarea
					className='popup-textarea-note'
					placeholder='Note...'
					required
					onChange={handleNotePopup}
					value={textArea}
				/>
				<button className='popup-btn-add-note' onClick={addNote}>
					ADD NOTE
				</button>
				<AiOutlineClose className='ic-close-popup' onClick={closePopup} />
			</div>
		</div>
	);
};
export default AddNotePopup;
