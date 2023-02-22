import React, { Component } from 'react';
import './priceTable.scss';

class PriceTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					name: 'Basic',
					description: 'Basic coverage with low premiums',
					price: '$10/month'
				},
				{
					id: 2,
					name: 'Standard',
					description: 'Standard coverage with reasonable premiums',
					price: '$25/month'
				},
				{
					id: 3,
					name: 'Ultra',
					description:
						'All-inclusive coverage with the highest premiums',
					price: '$100/month'
				},
				{
					id: 4,
					name: 'Premium',
					description: 'Comprehensive coverage with high premiums',
					price: '$50/month'
				},
				{
					id: 5,
					name: 'Custom',
					description: 'Tailored coverage to fit your specific needs',
					price: 'Varies'
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

	/*
         Проходимся циклом по елементам и сравниваем каждый елемент с каждым
         и в зависимости от того какое значение у ascendingPrice выбираем условие 
         и меняем местами переменные  
     */
	customSortData = () => {
		const copyData = [...this.state.data]; // копируем массив чтобы не менять оригинальный
		for (let i = 0; i < copyData.length; i++) {
			for (let j = i + 1; j < copyData.length; j++) {
				const priceA = this.formatPrice(copyData[i].price);
				const priceB = this.formatPrice(copyData[j].price);
				if (
					this.state.ascendingPrice
						? priceA > priceB
						: priceA < priceB
				) {
					[copyData[i], copyData[j]] = [copyData[j], copyData[i]];
				}
			}
		}
		// обновляем стейт
		this.setState({
			data: copyData,
			ascendingPrice: !this.state.ascendingPrice
		});
	};

	sortData = () => {
		const sortedData = this.state.data.sort((a, b) => {
			const priceA = this.formatPrice(a.price);
			const priceB = this.formatPrice(b.price);

			return this.state.ascendingPrice
				? priceA - priceB
				: priceB - priceA;
		});

		this.setState({
			data: sortedData,
			ascendingPrice: !this.state.ascendingPrice
		});
	};

	render() {
		const { data } = this.state;

		return (
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
						{data.map(({ id, name, description, price }, index) => (
							<tr key={id}>
								<td>{index + 1}</td>
								<td>{name}</td>
								<td>{description}</td>
								<td>{price}</td>
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={this.sortData}>Сортировать по цене</button>
			</div>
		);
	}
}

export default PriceTable;
