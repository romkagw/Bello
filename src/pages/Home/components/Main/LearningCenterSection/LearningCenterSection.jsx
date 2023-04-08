import Button from '../../../../../components/Button/Button';

function LearningCenterSection() {
	return (
		<section id='learning-center'>
			<div className='container'>
				<div className='learning-center-block'>
					<div className='learning-center-image' />
					<div className='learning-center-content'>
						<h5>You&apos;ve Got This</h5>
						<h3>Everything you need— completely free</h3>
						<p>
							Here’s the latest info, guides, and, helpful tools, from the Bello
							team. Learn about life insurance, finances, health and wellness.
						</p>
						<Button arrowPointer>Visit Learning Center</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LearningCenterSection;
