const AboutCard = ({card, inverted}) => {
	const cardStyle = {
		'backgroundColor': inverted ? '#ff6233' : '',
		'color': inverted ? 'white' : 'gray' 
	}

	const iconStyle = {
		'color': inverted ? 'white' : '#ff6233',
	}

	return (
		<div className="about--card" style={cardStyle}>
			<div className="flex flex-col space-y-4">
				<i className="fa-solid fa-square-check text-7xl" style={iconStyle}></i>
				<p className="text-3xl font-semibold text-accent" style={iconStyle}>{card.title}</p>
			</div>
			<p className="text-xl text-justify p-6 font-normal">{card.description}</p>
		</div>
	)
}

export default AboutCard;