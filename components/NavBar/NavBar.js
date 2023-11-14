import Image from "next/image";
import logo from "@/public/logoTrans.webp";
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={`${styles.navBarWrapper} flex justify-between`}>
			<div className="w-64 max-w-xs mx-auto">
				<Image src={logo} alt="logo" />
			</div>
			<ul className="flex items-center justify-end w-full gap-3">
				<li className={`${styles.navbarItem}`}>
					<p>About Us</p>
				</li>
				<li className={`${styles.navbarItem}`}>
					<p>Prices</p>
				</li>
				<li className={`${styles.navbarItem}`}>
					<p>Blog</p>
				</li>
				<li className={`${styles.navbarItem}`}>
					<p>Get in Touch</p>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
