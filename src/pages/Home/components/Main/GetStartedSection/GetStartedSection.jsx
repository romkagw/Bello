import Button from '../../../../../components/Button/Button';
import withModal from '../../../../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function GetStartedSection() {
	return (
		<section id='get-started'>
			<div className='container'>
				<div className='get-started-content'>
					<h3>Get Started Today.</h3>
					<p>
						Join the Bello community of people who are securing their financial
						future.
					</p>
					<ButtonWithModal className='get-my-price' arrowPointer>
						Get my price
					</ButtonWithModal>
				</div>
			</div>
		</section>
	);
}

export default GetStartedSection;
