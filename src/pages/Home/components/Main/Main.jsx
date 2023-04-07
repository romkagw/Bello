import React from 'react';
import CardSection from './CardSection/CardSection';
import GetStartedSection from './GetStartedSection/GetStartedSection';
import HelpSection from './HelpSection/HelpSection';
import InstructionSection from './InstructionSection/InstructionSection';
import LearningCenterSection from './LearningCenterSection/LearningCenterSection';
import StatsSection from './StatsSection/StatsSection';
import TopRatedSection from './TopRatedSection/TopRatedSection';
import { ThemeContext } from '../../../../Provider/ThemeColorProvider';

class Main extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<main className={theme === 'dark' && 'dark'}>
						<StatsSection />
						<HelpSection />
						<TopRatedSection />
						<InstructionSection />
						<LearningCenterSection />
						<CardSection />
						<GetStartedSection />
					</main>
				)}
			</ThemeContext.Consumer>
		);
	}
}
export default Main;
