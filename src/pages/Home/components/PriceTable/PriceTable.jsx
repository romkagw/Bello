import React, { Component } from 'react';
import './priceTable.scss';

class PriceTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			priseList: [
				{
					id: 1,
					data: {
						name: 'Basic',
						description: 'Basic coverage with low premiums',
						price: '$10/month'
					},
					active: false
				},
				{
					id: 2,
					data: {
						name: 'Standard',
						description: 'Standard coverage with reasonable premiums',
						price: '$25/month'
					},
					active: false
				},
				{
					id: 3,
					data: {
						name: 'Ultra',
						description: 'All-inclusive coverage with the highest premiums',
						price: '$100/month'
					},
					active: false
				},
				{
					id: 4,
					data: {
						name: 'Premium',
						description: 'Comprehensive coverage with high premiums',
						price: '$50/month'
					},
					active: false
				},
				{
					id: 5,
					data: {
						name: 'Custom',
						description: 'Tailored coverage to fit your specific needs',
						price: 'Varies'
					},
					active: false
				}
			],
			ascendingPrice: true,
			active: false
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleTableActivation);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleTableActivation);
	}

	handleTableActivation = e => {
		e.preventDefault();
		const { active, priseList } = this.state;
		if (e.code === 'Space') {
			const table = document.querySelector('.table-container');
			if (!active) table.classList.add('active');
			else table.classList.remove('active');
			this.setState(prevState => ({ active: !prevState.active }));
		}

		if ((e.code === 'ArrowDown' || e.code === 'ArrowUp') && active) {
			const tempPriseList = [...priseList];
			let activeIndex = tempPriseList.findIndex(item => item.active);
			if (activeIndex === -1) {
				activeIndex = 0;
			} else {
				tempPriseList[activeIndex].active = false;

				if (e.code === 'ArrowDown') {
					activeIndex =
						activeIndex < tempPriseList.length - 1 ? activeIndex + 1 : 0;
				} else if (e.code === 'ArrowUp') {
					activeIndex =
						activeIndex > 0 ? activeIndex - 1 : tempPriseList.length - 1;
				}
			}

			tempPriseList[activeIndex].active = true;

			this.setState({ priseList: tempPriseList });
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
		const { priseList, ascendingPrice } = this.state;

		const sortedData = [...priseList].sort((a, b) => {
			const priceA = this.formatPrice(a.data.price);
			const priceB = this.formatPrice(b.data.price);

			return ascendingPrice ? priceA - priceB : priceB - priceA;
		});

		this.setState(prevState => ({
			priseList: sortedData,
			ascendingPrice: !prevState.ascendingPrice
		}));
	};

	render() {
		const { priseList } = this.state;

		return (
			<>
				<div className='table-container'>
					<table className='table'>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Description</th>
								<th> Price</th>
							</tr>
						</thead>
						<tbody>
							{priseList.map((item, index) => (
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
				<div className='button-group'>
					<button type='button' onClick={this.sortData}>
						Сортировать по цене
					</button>
				</div>
			</>
		);
	}
}

export default PriceTable;
