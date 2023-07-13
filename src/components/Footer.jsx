
const Footer = () => {
	return (
		<footer className="p-6 md:p-12 bg-accent w-full">
			<div className="container grid md:grid-cols-3 mx-auto gap-10 text-white">
				<div className="flex flex-col p-2 space-y-4">
					<div className="space-y-2">
						<p className="font-bold text-3xl">About Us</p>
						<p>Sweeping Masters Cleaning Company is a Cleaning Services Company based in Marikina that is dedicated to making life easier and relaxing for everyone</p>
					</div>
					<p className="font-bold text-3xl space-y-4">Follow Us On</p>
					<div className="flex space-x-4">
						<div className="flex space-x-4 items-center">
							<i className="fa-brands fa-facebook text-3xl text-primary"></i>
							<p className="">Facebook</p>
						</div>
						<div className="flex space-x-4 items-center">
							<i className="fa-brands fa-twitter text-3xl text-primary"></i>
							<p className="">Twitter</p>
						</div>
						<div className="flex space-x-4 items-center">
							<i className="fa-brands fa-instagram text-3xl text-primary"></i>
							<p className="">Instagram</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col p-2 space-y-4">
					<p className="font-bold text-3xl md:text-center">Contact</p>
					<div className="flex flex-col space-y-4">
						<div className="flex space-x-4">
							<i className="fa-solid fa-location-dot text-3xl text-primary m-0 p-0"></i>                         
							<p>Rainbow Street, Hacienda Heights, Concepcion Dos, Marikina City</p>
						</div>
						<div className="flex space-x-4">
							<i className="fa-solid fa-envelope text-3xl text-primary"></i>
							<p className="">sweepingmasters@gmail.com</p>
						</div>
						<div className="flex space-x-4">
							<i className="fa-solid fa-phone text-3xl text-primary"></i>
							<p className="">09202750407</p>
						</div>
					</div>
					
				</div>
				<div className="flex flex-col p-2 space-y-4 justify-between">
					<div className="flex flex-col space-y-2">
						<p className="text-justify">Subscribe to our newsletter to receive the latest updates</p>
						<input type="email" name="email" placeholder = "Enter your email here" className="px-4 py-2.5 rounded text-black w-full"/>
					</div>
					<p>Copyright {new Date().getFullYear()}. All rights reserved. Sweeping Masters Co.</p>
				</div>
			</div>
		</footer>
	)
}



export default Footer;