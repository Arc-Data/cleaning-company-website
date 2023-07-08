
const Footer = () => {
	return (
		<footer className="relative" >
			<img src="/images/CleaningServiceGroup4Back.jpeg" style={{"height":"364px"}} className="w-full object-cover brightness-50"/>
			<div className="absolute inset-0 w-full h-full flex px-4 py-20">
				<div className="container mx-auto w-full grid md:grid-cols-3 text-white">
					<img src="/images/Logo-Transparent.png" alt="" className="hidden md:block w-2/3 h-auto" />
					<div className="flex flex-col space-y-4">
						<p className="text-2xl font-bold">Sweeping Masters Cleaning Services Company</p>
						<p className="text-2xl font-bold">Subscribe to our newsletter!</p>
						<div>
							<input type="email" id="email" className="bg-transparent border rounded border-white px-4 py-2 outline-none w-full focus:bg-white focus:text-black" placeholder="johndoe@gmail.com" />
						</div>
					</div>
					<div className="flex flex-col space-y-10 items-end">
						<div className="flex space-x-10">
							<i className="fa-brands fa-facebook text-4xl"></i>
							<i className="fa-brands fa-twitter text-4xl"></i>
							<i className="fa-brands fa-instagram text-4xl"></i>
						</div>
						<div className="flex flex-col space-y-4 items-end">
							<p className="flex space-x-4"><span>sweepingmasters@gmail.com</span><span className="material-symbols-outlined">mail</span></p>
							<p className="flex space-x-4"><span>09202750407</span><span className="material-symbols-outlined">phone_in_talk</span></p>
						</div>
					</div>
					{/* <div className="flex justify-end">
					</div> */}
				</div>
				{/* <div className="container mx-auto flex flex-col text-white h-full justify-center text-2x space-y-10">
					<div className="flex space-x-8">
						<p className="flex space-x-4"><span className="material-symbols-outlined">mail</span><span>sweepingmasters@gmail.com</span></p>
						<p className="flex space-x-4"><span className="material-symbols-outlined">phone_in_talk</span><span>sweepingmasters@gmail.com</span></p>
					</div>
					<p>Copyright {new Date().getFullYear()}. All rights reserved. Sweeping Masters Co.</p>
				</div> */}
			</div>
		</footer>
	)
}

export default Footer;