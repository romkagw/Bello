import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../../../../store/modules/Modal/reducer';
import ArrowButton from '../Buttons/ArrowButton';
import circle from '../../../../assets/images/circle.svg';
import oneNumber from '../../../../assets/images/1.svg';
import twoNumber from '../../../../assets/images/2.svg';
import threeHumber from '../../../../assets/images/3.svg';

class InstructionSection extends React.Component {
	render() {
		const { dispatch } = this.props;

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
							<img src={circle} alt='circle' />
							<img src={circle} alt='circle' />
							<img src={circle} alt='circle' />
						</div>
						<div className='content-list'>
							<img src={oneNumber} alt='1' />
							<img src={twoNumber} alt='2' />
							<img src={threeHumber} alt='3' />
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
					<ArrowButton
						onClick={() => dispatch(showModal())}
						className='get-my-price'
					>
						Get my price
					</ArrowButton>
				</div>
			</section>
		);
	}
}
InstructionSection.propTypes = {
	dispatch: PropTypes.func.isRequired
};
export default connect()(InstructionSection);
