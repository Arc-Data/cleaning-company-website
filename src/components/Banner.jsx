const Banner = ({src, headingText, subText}) => {
	console.log(src);
	return (
		<img src={src} className="object-cover w-screen" height="522px !important" />
		
	)
}

export default Banner;