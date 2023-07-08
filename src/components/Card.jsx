const Card = ({title, src, description}) => {
	return (
		<div className="bg-white rounded-lg shadow flex-col transform hover:cursor-pointer hover:scale-105 transition-transform duration-300">
			<img src={src} alt="Nice" className="object-cover h-60 w-full rounded-t-lg"/>
			<div className="px-5 py-10 space-y-8">
				<p className="text-primary text-2xl font-bold">{title}</p>
				<p className="line-clamp-3">{description}</p>
			</div>
		</div>
	)	
}

export default Card;