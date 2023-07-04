const Banner = ({src, headingText, subText}) => {
	console.log(src);
	return (
		<img src={src} className="object-cover w-screen" style={{"height":"522px"}}  />
		
	)
}

export default Banner;