import { BsSearch } from 'react-icons/bs';
import './Searchbar.css';
const Searchbar = () => {
	return (
		<div className='wrapper searchbar'>
			<div className='searchbar-left-side'>
				<BsSearch className='ic ic-search' />
			</div>
			<div className='searchbar-right-side'>
				<input
					type='text'
					className='searchbar-input'
					placeholder='Search...'
				/>
			</div>
		</div>
	);
};

export default Searchbar;
