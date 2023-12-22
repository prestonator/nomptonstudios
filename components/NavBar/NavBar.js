import Image from "next/image";
import logo from "@/public/logoTrans.webp";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className={`${styles.navBarWrapper} flex justify-between`}>
			<div className="w-64 max-w-xs mx-auto">
				<Image src={logo} alt="logo" />
			</div>
			<ul className="flex items-center justify-end w-full gap-3">
				<Link href="about">
					<li className={`${styles.navbarItem}`}>
						<p>About Us</p>
					</li>
				</Link>
				<Link href="pricing">
					<li className={`${styles.navbarItem}`}>
						<p>Prices</p>
					</li>
				</Link>
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
