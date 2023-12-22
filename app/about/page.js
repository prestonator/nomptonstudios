import styles from "./about.module.css";
import prestonHeadshot from "@/public/prestonHeadshot.webp";
import daltonHeadshot from "@/public/daltonHeadshot.webp";
import daltonBG from "@/public/daltonBG.webp";
import prestonBG from "@/public/prestonBG.webp";
import Image from "next/image";
import aboutHero from "@/public/aboutHero.png";

const About = () => {
	return (
		<main>
			<HeroSection />
			<ValueSection />
			<WhoWeAreSection />
		</main>
	);
};

export default About;

const HeroSection = () => {
	return (
		<section className="mx-auto my-12">
			<div
				className="flex flex-col items-center justify-center w-full gap-8 p-8 rounded-lg shadow-lg md:flex-row about-gradient">
				<div className="flex justify-center flex-1">
					<Image src={aboutHero} alt="Placeholder image with a gradient background"
						className="h-auto max-w-full rounded-lg" />
				</div>
				<div className="flex flex-col items-center flex-1 md:items-start">
					<h1 className="text-4xl font-bold text-center text-white md:text-6xl md:text-left">Connecting, Creating,
						Caring
					</h1>
					<p className="mt-4 text-center text-gray-300 md:text-left">Learn about the people who bring your web
						vision
						to
						life and our values that define us.</p>
				</div>
			</div>
		</section>
	)
}

const ValueSection = () => {
	return (
		<section className="container px-4 mx-auto mt-12">
			<h2 className="text-4xl font-bold text-left">OUR VALUES</h2>
			<div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
				<div className="flex items-center">
					<h3 className="text-xl font-semibold">Transparency</h3>
				</div>
				<div className="flex items-center text-gray-400">
					We believe in open and honest communication, including project timelines, costs, and progress
					updates, to build trust.
				</div>
				<div className="flex items-center">
					<h3 className="text-xl font-semibold">Quality Craftsmanship</h3>
				</div>
				<div className="flex items-center text-gray-400">
					Committed to creating high-quality websites that not only look appealing but also function
					seamlessly and provide real value.
				</div>
				<div className="flex items-center">
					<h3 className="text-xl font-semibold">Long-Term Partnerships</h3>
				</div>
				<div className="flex items-center text-gray-400">
					The desire to build lasting relationships with our clients and support them as they evolve and
					grow.
				</div>
				<div className="flex items-center">
					<h3 className="text-xl font-semibold">Customer-Centric Approach</h3>
				</div>
				<div className="flex items-center text-gray-400">
					Strive to understand the unique needs and goals of each client and delivering solutions that
					meet or exceed their expectations.
				</div>
				<div className="flex items-center">
					<h3 className="text-xl font-semibold">Reliability</h3>
				</div>
				<div className="flex items-center text-gray-400">
					Dedicated to our commitment to meeting deadlines and delivering on promises consistently.
				</div>
			</div>
		</section>
	)
}

const WhoWeAreSection = () => {
	return (
		<section className="px-4 py-12 sm:px-6 md:px-0 lg:px-8">
			<h1 className="mb-12 text-4xl font-bold">Who We Are</h1>
			<div className="flex flex-wrap justify-center gap-8">
				<div className="flex flex-col items-center w-full p-6 bg-gray-800 rounded-lg md:w-2/5 lg:w-2/5">
					<Image
						src={daltonHeadshot}
						alt="Dalton Krueger with his family against a cityscape background"
						className="mb-6 rounded-lg w-80 aspect-square" style={{
							backgroundImage: `url(${daltonBG.src})`,
							backgroundSize: "cover",
							zIndex: 999
						}}
					/>
					<h2 className="mb-2 text-2xl font-bold">Dalton Krueger</h2>
					<p className="mb-4 font-semibold text-pink-500">Owner/Operations</p>
					<p className="mb-4 text-gray-400">
						Dalton, a devoted family man, discovered his passion for web design
						and development while studying business at The University of
						Oklahoma. He is passionate about serving others any way he can.
					</p>
					<p className="mb-4 text-gray-400">
						Now residing in Norman with his wife and one-year-old daughter, he
						is driven by a deep love for entrepreneurship and making a community
						impact.
					</p>
					<p className="text-gray-400">
						With Dalton, you&apos;re not just getting the typical partner for
						web related services; you&apos;re partnering with a dedicated
						family-oriented entrepreneur committed to making a difference.
					</p>
				</div>
				<div className="flex flex-col items-center w-full p-6 bg-gray-800 rounded-lg md:w-2/5 lg:w-2/5">
					<Image
						src={prestonHeadshot}
						alt="Preston Jenkins smiling with a cityscape background"
						className="mb-6 rounded-lg w-80 aspect-square"
						style={{
							backgroundImage: `url(${prestonBG.src})`,
							backgroundSize: "cover",
							zIndex: 999
						}}
					/>
					<h2 className="mb-2 text-2xl font-bold">Preston Jenkins</h2>
					<p className="mb-4 font-semibold text-pink-500">Owner/Developer</p>
					<p className="mb-4 text-gray-400">
						Preston, a Norman native with a passion for crafting exceptional
						websites for local businesses. He&apos;s not just a web developer;
						he&apos;s your neighbor committed to continuous learning and staying
						on the cutting edge of web trends.
					</p>
					<p className="mb-4 text-gray-400">
						When he&apos;s not building websites, you&apos;ll find Preston on
						the tennis court or pickleball court, enjoying some friendly
						competition. He values work-life balance and spends quality time
						with friends.
					</p>
					<p className="text-gray-400">
						Preston&apos;s unwavering commitment to excellence ensures your
						projects shine, making him your trusted partner in the digital
						world.
					</p>
				</div>
			</div>
		</section>
	);
};