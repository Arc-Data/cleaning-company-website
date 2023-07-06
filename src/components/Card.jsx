const Card = ({title, src, description}) => {
	console.log(title, src);
	return (
		<div className="bg-white rounded-lg shadow flex-col" style={{"height": "436px"}} >
			<img src={src} alt="Nice" className="object-cover h-3/5 w-full rounded-t-lg"/>
			<div className="flex-1 p-3.5 space-y-10">
				<p className="text-primary text-2xl font-bold">{title}</p>
				<p className="line-clamp-3">{description}</p>
			</div>
		</div>
	)	
}

export default Card;