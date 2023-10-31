import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { notoSansDisplay } from "@/utils/fonts";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={notoSansDisplay.variable}>
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
