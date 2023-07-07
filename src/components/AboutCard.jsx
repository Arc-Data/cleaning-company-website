const AboutCard = ({card}) => {
	return (
		<div className="about--card">
			<div className="flex flex-col space-y-4">
				<i className="fa-solid fa-square-check text-7xl text-accent"></i>
				<p className="text-3xl font-semibold text-accent">{card.title}</p>
			</div>
			<p className="text-xl text-gray-600 text-justify p-6">{card.description}</p>
		</div>
	)
}

export default AboutCard;