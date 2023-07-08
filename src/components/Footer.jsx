
const Footer = () => {
	return (
		<footer className="relative" >
			<img src="/images/CleaningServiceGroup4Back.jpeg" style={{"height":"364px"}} className="w-full object-cover brightness-50"/>
			<div className="absolute inset-0 w-full h-full flex sm:flex-col p-2 md:p-20">
				<img src="/images/Logo.png" className="" />
				<div className="flex flex-col text-white h-full ml-auto justify-center text-2x space-y-10">
					<div className="flex space-x-8">
						<p className="flex space-x-4"><span className="material-symbols-outlined">mail</span><span>sweepingmasters@gmail.com</span></p>
						<p className="flex space-x-4"><span className="material-symbols-outlined">phone_in_talk</span><span>sweepingmasters@gmail.com</span></p>
					</div>
					<p>Copyright {new Date().getFullYear()}. All rights reserved. Sweeping Masters Co.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;