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
					<p>About Us</p>
				</li>
				<li>
					<p>Prices</p>
				</li>
				<li>
					<p>Blog</p>
				</li>
				<li className="px-5 py-2 bg-white rounded-md">
					<p className="text-black">Get in Touch</p>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
