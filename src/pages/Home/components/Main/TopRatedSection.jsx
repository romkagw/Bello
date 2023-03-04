import React from 'react';
import TopRatedCard from '../Cards/TopRatedCard';
import card1 from '../../../../assets/images/top-rated-1.svg';
import card2 from '../../../../assets/images/top-rated-2.svg';
import card3 from '../../../../assets/images/top-rated-3.svg';

class TopRatedSection extends React.Component {
	render() {
		return (
			<section id='top-rated'>
				<div className='container'>
					<div className='top'>
						<h5>Top-Rated Term Life Insurance</h5>
						<h3>You’re in safe hands</h3>
						<p>
							We&apos;ve partnered with, [insert underwriter], one of the
							world’s largest, most trusted insurance companies. This means we
							can ensure reliability in paying Claims.
						</p>
					</div>
					<div className='cards'>
						<TopRatedCard classNumber='1' imgSrc={card1} title='Top-Rated'>
							A+ Financial Strength Rating by A.M. Best. What does this mean?
						</TopRatedCard>
						<TopRatedCard
							classNumber='2'
							imgSrc={card2}
							title='Expert guidance'
						>
							We&apos;ve placed millions of dollars in coverage people
							nationwide.
						</TopRatedCard>
						<TopRatedCard classNumber='3' imgSrc={card3} title='We care'>
							We care about you. We’re a 5 star insurance company. Well… Close
							enough!
						</TopRatedCard>
					</div>
				</div>
			</section>
		);
	}
}

export default TopRatedSection;
