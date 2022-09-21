import './Note.css';

const Note = ({ date, title, textArea }) => {
	return (
		<div className='note-container'>
			<h3 className='note-data'>{date}</h3>
			<h2 className='note-title'>{title}</h2>
			<p className='note-paragraph'>{textArea}</p>
			<div className='note-tools'></div>
		</div>
	);
};

export default Note;
