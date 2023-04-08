import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function FooterLower() {
	return (
		<div id='footer-lower'>
			<div className='container'>
				<div>
					<p>© 2020 Bello insurance Services LLC. All right reserved.</p>
					<ButtonWithModal type='button'>Get my price</ButtonWithModal>
				</div>
			</div>
		</div>
	);
}

export default FooterLower;
