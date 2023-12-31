import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { mulish } from "@/utils/fonts";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={mulish.variable}>
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
