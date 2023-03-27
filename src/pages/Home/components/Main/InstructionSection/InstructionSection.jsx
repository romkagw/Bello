import React from 'react';
import circle from '../../../../../assets/images/circle.svg';
import oneNumber from '../../../../../assets/images/1.svg';
import twoNumber from '../../../../../assets/images/2.svg';
import threeHumber from '../../../../../assets/images/3.svg';
import Image from '../../../../../components/Image/Image';
import Button from '../../../../../components/Button/Button';
import withModal from '../../../../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

class InstructionSection extends React.Component {
	render() {
		return (
			<section id='instruction'>
				<div className='container'>
					<div className='instruction-title'>
						<h5>How it works</h5>
						<h4>Affordable life insurance in minutes</h4>
						<p>
							We use technology to save you time and money – no pushy sales
							agents, paperwork, or extra fees. Just a few clicks and you’re
							done.
						</p>
					</div>
					<div className='instruction-content'>
						<div className='block-circle'>
							<Image src={circle} alt='circle' />
							<Image src={circle} alt='circle' />
							<Image src={circle} alt='circle' />
						</div>
						<div className='content-list'>
							<Image src={oneNumber} alt='1' />
							<Image src={twoNumber} alt='2' />
							<Image src={threeHumber} alt='3' />
							<h6>Get My Price</h6>
							<h6>Apply</h6>
							<h6>You’re Covered</h6>
							<p>
								Choose the amount that you would like to be covered for and
								we’ll give you a quote.
							</p>
							<p>Answer a few questions and get your final price.</p>
							<p>
								Congratulations on securing your loved ones financial future!
							</p>
						</div>
					</div>
					<ButtonWithModal className='get-my-price' arrowPointer>
						Get my price
					</ButtonWithModal>
				</div>
			</section>
		);
	}
}

export default InstructionSection;
