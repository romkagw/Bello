import React from 'react';
import Button from '../../../../../components/Button/Button';
import withModal from '../../../../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function StatsSection() {
	return (
		<section id='stats'>
			<div className='container'>
				<div className='stats-block'>
					<div className='image-stats'>
						<div />
						<p>
							<span>*</span>
							Data for illustrative purposes
						</p>
					</div>
					<div className='text-content-stats-block'>
						<h5>Secure your future</h5>
						<h2>It’s more affordable than you think</h2>
						<p>
							Life insurance shouldn’t be confusing or expensive. Bello’s term
							life insurance makes protecting your loved ones easy and
							affordable.
						</p>
						<ButtonWithModal arrowPointer>Get My Price</ButtonWithModal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default StatsSection;
