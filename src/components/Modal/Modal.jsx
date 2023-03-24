import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { connect } from 'react-redux';
import { hideModal } from '../../store/modules/Modal/reducer';

class Modal extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = event => {
		if (event.keyCode === 27) {
			const { hideModalAction } = this.props;
			hideModalAction();
		}
	};

	render() {
		const { children, hideModalAction, isModalVisible } = this.props;
		return (
			<div>
				{isModalVisible && (
					<div className='modal'>
						<div className='modal-content'>
							<button type='button' className='close' onClick={hideModalAction}>
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
	hideModalAction: PropTypes.func.isRequired,
	isModalVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		isModalVisible: state.modal.isModalVisible
	};
};

const mapDispatchToProps = {
	hideModalAction: hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
