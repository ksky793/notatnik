import { AiOutlinePlusCircle } from 'react-icons/ai';
import './Buttons.css';
const BtnAddNote = ({ setIsClosed }) => {
	const handleAddButton = () => {
		setIsClosed(false);
	};
	return (
		<button className='btn-add-note' onClick={handleAddButton}>
			<AiOutlinePlusCircle className='ic ic-plus' />
			<h4 className='header-add-note'>Add a note</h4>
		</button>
	);
};

export default BtnAddNote;
