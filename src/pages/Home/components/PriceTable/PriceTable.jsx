import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaSort } from 'react-icons/fa';
import {
	addPriceList,
	setActive,
	setAscendingPrice
} from '../../../../store/modules/PriceList/reducer';
import './priceTable.scss';

class PriceTable extends Component {
	async componentDidMount() {
		document.addEventListener('keydown', this.handleTableActivation);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleTableActivation);
	}

	handleTableActivation = e => {
		e.preventDefault();
		const { active, dispatch, priceList } = this.props;
		const tempPriceList = [...priceList];
		let activeIndex = tempPriceList.findIndex(item => item.active);

		const isActiveRow = bool => {
			tempPriceList[activeIndex] = {
				...tempPriceList[activeIndex],
				active: bool
			};
		};

		if (e.code === 'Space') {
			isActiveRow(false);
			dispatch(addPriceList(tempPriceList));
			dispatch(setActive());
		}

		if ((e.code === 'ArrowDown' || e.code === 'ArrowUp') && active) {
			isActiveRow(false);

			if (e.code === 'ArrowDown') {
				activeIndex =
					activeIndex < tempPriceList.length - 1 ? activeIndex + 1 : 0;
			} else if (e.code === 'ArrowUp') {
				activeIndex =
					activeIndex > 0 ? activeIndex - 1 : tempPriceList.length - 1;
			}

			isActiveRow(true);
			dispatch(addPriceList(tempPriceList));
		}
	};

	/*
        Функция для того чтобы вернуть числовое значение из строки,
        если внутри строки числа нет то вернется 0 
     */
	formatPrice = price => {
		const match = price.match(/\d+/);
		return match ? +match[0] : 0;
	};

	sortData = () => {
		const { priceList, ascendingPrice, dispatch } = this.props;

		const sortedData = [...priceList].sort((a, b) => {
			const priceA = this.formatPrice(a.data.price);
			const priceB = this.formatPrice(b.data.price);

			return !ascendingPrice ? priceA - priceB : priceB - priceA;
		});

		dispatch(addPriceList(sortedData));
		dispatch(setAscendingPrice());
	};

	render() {
		const { priceList, active } = this.props;
		return (
			<div className={`table-container ${active && 'active'}`}>
				<table className='table'>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Description</th>
							<th>
								Price
								<FaSort onClick={this.sortData} />
							</th>
						</tr>
					</thead>

					<tbody>
						{priceList.map((item, index) => (
							<tr className={item.active ? 'selected' : ''} key={item.id}>
								<td>{index + 1}</td>
								<td>{item.data.name}</td>
								<td>{item.data.description}</td>
								<td>{item.data.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

PriceTable.propTypes = {
	dispatch: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired,
	priceList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			data: PropTypes.shape({
				name: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.string.isRequired
			}).isRequired,
			active: PropTypes.bool.isRequired
		})
	).isRequired,
	ascendingPrice: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
	return {
		active: state.price.active,
		priceList: state.price.priceList,
		ascendingPrice: state.price.ascendingPrice
	};
};

export default connect(mapStateToProps)(PriceTable);
