import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import '../Popup.css';

const AddNotePopup = ({ setIsAddPopClosed, notes, setNotes, notify }) => {
	const [title, setTitle] = useState('');
	const [textArea, setTextArea] = useState('');

	const closePopup = () => {
		setIsAddPopClosed(true);
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

		if (title === '' || textArea === '') {
			notify('add-error');
		} else {
			const newNotes = [...notes, noteItem];
			setNotes(newNotes);
			setTitle('');
			setTextArea('');
			setIsAddPopClosed(true);
			notify('add-success');
		}
	};

	return (
		<div
			className='popup-container'
			// style={{ display: isAddPopClosed ? 'none' : 'flex' }}
		>
			<div className='popup'>
				<h1 className='header-popup'>Add Note</h1>
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
				<button className='popup-btn' onClick={addNote}>
					ADD NOTE
				</button>
				<AiOutlineClose className='ic ic-close-popup' onClick={closePopup} />
			</div>
		</div>
	);
};
export default AddNotePopup;
