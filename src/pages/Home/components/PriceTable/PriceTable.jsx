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
					}
				},
				{
					id: 2,
					data: {
						name: 'Standard',
						description: 'Standard coverage with reasonable premiums',
						price: '$25/month'
					}
				},
				{
					id: 3,
					data: {
						name: 'Ultra',
						description: 'All-inclusive coverage with the highest premiums',
						price: '$100/month'
					}
				},
				{
					id: 4,
					data: {
						name: 'Premium',
						description: 'Comprehensive coverage with high premiums',
						price: '$50/month'
					}
				},
				{
					id: 5,
					data: {
						name: 'Custom',
						description: 'Tailored coverage to fit your specific needs',
						price: 'Varies'
					}
				}
			],
			ascendingPrice: true
		};
	}

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

		const sortedData = priseList.sort((a, b) => {
			const priceA = this.formatPrice(a.data.price);
			const priceB = this.formatPrice(b.data.price);

			return ascendingPrice ? priceA - priceB : priceB - priceA;
		});

		this.setState({
			priseList: sortedData,
			ascendingPrice: !ascendingPrice
		});
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
								<tr key={item.id}>
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
