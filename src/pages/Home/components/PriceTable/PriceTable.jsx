import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSort } from 'react-icons/fa';
import {
	addPriceList,
	setActive,
	setAscendingPrice
} from '../../../../store/modules/PriceList/reducer';
import './priceTable.scss';

function PriceTable() {
	const dispatch = useDispatch();

	const active = useSelector(state => state.price.active);
	const priceList = useSelector(state => state.price.priceList);
	const ascendingPrice = useSelector(state => state.price.ascendingPrice);

	const handleTableActivation = e => {
		e.preventDefault();
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
	useEffect(() => {
		document.addEventListener('keydown', handleTableActivation);

		return () => {
			document.removeEventListener('keydown', handleTableActivation);
		};
	}, []);

	const formatPrice = price => {
		const match = price.match(/\d+/);
		return match ? +match[0] : 0;
	};

	const sortData = () => {
		const sortedData = [...priceList].sort((a, b) => {
			const priceA = formatPrice(a.data.price);
			const priceB = formatPrice(b.data.price);

			return !ascendingPrice ? priceA - priceB : priceB - priceA;
		});

		dispatch(addPriceList(sortedData));
		dispatch(setAscendingPrice());
	};

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
							<FaSort onClick={sortData} />
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

export default PriceTable;
