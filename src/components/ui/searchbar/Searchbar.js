import { BsSearch } from 'react-icons/bs';
import './Searchbar.css';
const Searchbar = ({ setSearchedNote }) => {
	return (
		<div className='wrapper searchbar'>
			<div className='searchbar-left-side'>
				<BsSearch className='ic-search' />
			</div>
			<div className='searchbar-right-side'>
				<input
					type='text'
					className='searchbar-input'
					placeholder='Search...'
					onChange={(e) => setSearchedNote(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Searchbar;
