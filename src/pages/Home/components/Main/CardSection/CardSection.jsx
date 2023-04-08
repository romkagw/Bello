import CardList from './CardList';

function CardSection() {
	const listCards = [
		{
			id: 1,
			order: 1,
			title: 'Calculator',
			textCard: 'How much life insurance do I need?',
			textLink: 'Calculate Coverage',
			hide: false
		},
		{
			id: 2,
			order: 2,
			title: 'Term vs. perm',
			textCard: 'Term vs. whole life insurance. Which is best for you?',
			textLink: 'See the winner',
			hide: false
		},
		{
			id: 3,
			order: 3,
			title: 'Pricing',
			textCard: 'How much does life insurance cost?',
			textLink: 'Tell me more',
			hide: false
		},
		{
			id: 4,
			order: 4,
			title: 'Insurance 101',
			textCard: 'The ultimate guide to life insurance.',
			textLink: 'Become an expert',
			hide: false
		}
	];
	return (
		<section id='section-cards'>
			<div className='container'>
				<CardList list={listCards} />
			</div>
		</section>
	);
}

export default CardSection;
