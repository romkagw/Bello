import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Image from '../Image/Image';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function HeaderTop() {
	return (
		<div className='header-top'>
			<div className='header-container'>
				<Image src={logo} alt='logo' />
				<Link to='/#'>Life insurance</Link>
				<Link to='/#'>Why Bello</Link>
				<Link to='/#'>Help</Link>
				<div className='buttons-header'>
					<Button className='log-in'>Log in</Button>
					<ButtonWithModal className='get-price'>Get my price</ButtonWithModal>
				</div>
			</div>
		</div>
	);
}

export default HeaderTop;
