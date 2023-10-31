import Image from "next/image";
import logo from "@/public/logoTrans.webp";

const NavBar = () => {
	return (
		<div className="flex justify-between">
			<div className="max-w-xs">
				<Image src={logo} alt="logo" />
			</div>
			<ul className="flex items-center gap-3">
				<li>
					<p>Services</p>
				</li>
				<li>
					<p>About</p>
				</li>
				<li>
					<p>Portfolio</p>
				</li>
				<li>
					<p>Get in Touch</p>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
