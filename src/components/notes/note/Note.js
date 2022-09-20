import './Note.css';

const Note = () => {
	return (
		<div className='note-container'>
			<h3 className='note-data'>1 march 2022</h3>
			<h2 className='note-title'>Note Title</h2>
			<p className='note-paragraph'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
				soluta quaerat in et cum aspernatur delectus doloribus ea natus ex.
			</p>
			<div className='note-tools'></div>
		</div>
	);
};

export default Note;
