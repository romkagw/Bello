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
			ascendingPrice: true,
			buttonText: 'Удалить елемент обьекта'
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
	// customSortData = () => {
	// 	const { priseList, ascendingPrice } = this.state;
	// 	const copyData = [...priseList]; // копируем массив чтобы не менять оригинальный
	// 	for (let i = 0; i < copyData.length; i += 1) {
	// 		for (let j = i + 1; j < copyData.length; j += 1) {
	// 			const priceA = this.formatPrice(copyData[i].data.price);
	// 			const priceB = this.formatPrice(copyData[j].data.price);
	// 			if (ascendingPrice ? priceA > priceB : priceA < priceB) {
	// 				[copyData[i], copyData[j]] = [copyData[j], copyData[i]];
	// 			}
	// 		}
	// 	}
	// 	// обновляем стейт
	// 	this.setState({
	// 		priseList: copyData,
	// 		ascendingPrice: !ascendingPrice
	// 	});
	// };

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

	addElement = () => {
		const { priseList } = this.state;
		const obj = {
			id: priseList.length + 1,
			data: {
				name: 'Lorem',
				description: 'Lorem ipsum dolor sit amet consectetur.',
				price: '$----/month'
			}
		};
		this.setState({ priseList: [...priseList, obj] });
	};

	removeElement = () => {
		const { priseList } = this.state;
		if (priseList.length) {
			const newData = priseList.slice(0, -1);
			this.setState({ priseList: newData });
		}
	};

	/*
	  Функция которая удаляет или добавляет поле - price в первом ряду,
	  самое простое что пришло в голову чтобы показать что понимаю работу с обьектами,
	  и возможно еще рано но пришлось затронуть  использование - event
	*/
	togglePrice = () => {
		const { priseList } = this.state;
		if (priseList.length) {
			const temp = [...priseList];
			if (temp[0].data.price) {
				delete temp[0].data.price;
			} else {
				temp[0].data.price = '$10/month';
			}
			const newText = temp[0].data.price
				? 'Удалить элемент объекта'
				: 'Добавить элемент объекта';
			this.setState({ priseList: temp, buttonText: newText });
		}
	};

	render() {
		const { priseList, buttonText } = this.state;

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
					<button type='button' onClick={this.addElement}>
						Добавить
					</button>
					<button type='button' onClick={this.removeElement}>
						Удалить
					</button>
					<button type='button' onClick={this.togglePrice}>
						{buttonText}
					</button>
				</div>
			</>
		);
	}
}

export default PriceTable;
