import { AiOutlinePlusCircle } from 'react-icons/ai';
import './Buttons.css';
const BtnAddNote = () => {
	return (
		<button className='btn-add-note'>
			<AiOutlinePlusCircle className='ic ic-plus' />
			<h4 className='header-add-note'>Dodaj Notatkę</h4>
		</button>
	);
};

export default BtnAddNote;
