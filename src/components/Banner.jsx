const Banner = ({src, headingText, subText}) => {
	return (
		<img src={src} className="object-cover w-screen" style={{"height":"522px"}}  />
	)
}

export default Banner;