import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { connect } from 'react-redux';
import { hideModal } from '../../store/modules/Modal/reducer';

class Modal extends Component {
	render() {
		const { children, dispatch, isModalVisible } = this.props;
		return (
			<div>
				{isModalVisible && (
					<div className='modal'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								onClick={() => dispatch(hideModal())}
							>
								×
							</button>
							{children}
						</div>
					</div>
				)}
			</div>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	dispatch: PropTypes.func.isRequired,
	isModalVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		isModalVisible: state.modal.isModalVisible
	};
};

export default connect(mapStateToProps)(Modal);
