import React from 'react';
import CardSection from './CardSection';
import GetStartedSection from './GetStartedSection';
import HelpSection from './HelpSection';
import InstructionSection from './InstructionSection';
import LearningCenterSection from './LearningCenterSection';
import StatsSection from './StatsSection';
import TopRatedSection from './TopRatedSection';

class Main extends React.Component {
	render() {
		return (
			<main>
				<StatsSection />
				<HelpSection />
				<TopRatedSection />
				<InstructionSection />
				<LearningCenterSection />
				<CardSection />
				<GetStartedSection />
			</main>
		);
	}
}
export default Main;
