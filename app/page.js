import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import prestonHeadshot from "@/public/prestonHeadshot.webp";
import daltonHeadshot from "@/public/daltonHeadshot.webp";
import daltonBG from "@/public/daltonBG.webp";
import prestonBG from "@/public/prestonBG.webp";
import designIcon from "@/public/icons/designIcon.webp";
import seoIcon from "@/public/icons/seoIcon.webp";
import codeIcon from "@/public/icons/codeIcon.webp";
import marketingIcon from "@/public/icons/marketingIcon.webp";
import heroImage from "@/public/heroImage.webp";
import styles from "./Home.module.css";
import Button from "@/components/Buttons/Button";
import ProjectSwiper from "@/components/Swiper/ProjectSwiper";
import ssLogo from "@/public/ssLogo.png";
import robertHeadshot from "@/public/RobertHeadshot.png";
import Typing from "@/components/Typing/Typing";

const Home = () => {
	const services = [
		{
			icon: designIcon,
			title: "Website Design",
		},
		{
			icon: codeIcon,
			title: "Website Development",
		},
		{
			icon: seoIcon,
			title: "SEO Marketing",
		},
		{
			icon: marketingIcon,
			title: "Traditional Marketing",
		},
	];

	const reasons = [
		{
			title: "EFFECTIVE COMMUNICATION",
			description:
				"We prioritize being responsive and quick with communication because we value your time. You'll get a quick turnaround from our team.",
		},
		{
			title: "TECHNICAL EXCELLENCE",
			description:
				"We are up-to-date on the latest digital trends and leverage our experience to provide technical excellence. Our expertise delivers results.",
		},
		{
			title: "FOCUSED ON RESULTS",
			description:
				"We drive real results so our partners can maximize profits and see their investments pay off. We are focused on your success.",
		},
		{
			title: "LOCALLY OWNED & OPERATED",
			description:
				"Based in Norman, Oklahoma, we understand how to help local businesses thrive. Our team is invested in the community.",
		},
	];

	return (
		<main>
			<HeroSection />
			<ServicesSection services={services} />
			<WhyPartnerSection reasons={reasons} />
			<RecentProjectsSection />
			<OurReviewsSection />
			<WhoWeAreSection />
		</main>
	);
};

export default Home;

const HeroSection = () => (
	<section className="section-responsive hero-section">
		<div className="flex items-center justify-center">
			<div className="w-[40vw] flex flex-col gap-3">
				<h2 className="text-5xl">
					Modern Digital
					<br />
					Solutions
				</h2>
				<p className="w-[30vw]">
					Formed to help businesses expand online reach and strive in this ever
					changing world. Nompton Studios is based in Norman, OK and highly
					invests in our clients.
				</p>
				<div>
					<Button href="/">Get in Touch</Button>
				</div>
			</div>
			<div className="w-[35vw] h-[80vh] relative">
				<Image
					src={heroImage}
					alt="hero image"
					fill
					className="object-cover overflow-visible"
				/>
			</div>
		</div>
	</section>
);

const ServicesSection = ({ services }) => (
	<section className="pt-10">
		<h3 className="pb-10 pl-40 text-4xl">What We Do</h3>
		<div className="flex flex-col w-[90vw] mx-auto">
			<div className="border-t items-center grid grid-cols-3 py-8 px-[5vw] 2xl:px-32">
				<Image
					src={services[0].icon}
					alt="Design Icon"
					className="h-auto fluid-icon invert justify-self-start aspect-square"
				/>
				<p className="self-center font-thin fluid-text justify-self-start">
					{services[0].title}
				</p>
				<BsArrowUpRight className="h-auto fluid-icon justify-self-end aspect-square" />
			</div>
			<div className="border-t items-center grid grid-cols-3 py-8 px-[5vw] 2xl:px-32">
				<Image
					src={services[1].icon}
					alt="Design Icon"
					className="h-auto fluid-icon invert justify-self-start aspect-square"
				/>
				<p className="self-center font-thin fluid-text justify-self-start">
					{services[1].title}
				</p>
				<BsArrowUpRight className="h-auto fluid-icon justify-self-end aspect-square" />
			</div>
			<div className="border-t items-center grid grid-cols-3 py-8 px-[5vw] 2xl:px-32">
				<Image
					src={services[2].icon}
					alt="Design Icon"
					className="h-auto fluid-icon invert justify-self-start aspect-square"
				/>
				<p className="self-center font-thin fluid-text justify-self-start">
					{services[2].title}
				</p>
				<BsArrowUpRight className="h-auto fluid-icon justify-self-end aspect-square" />
			</div>
			<div className="border-t border-b items-center grid grid-cols-3 py-8 px-[5vw] 2xl:px-32">
				<Image
					src={services[3].icon}
					alt="Design Icon"
					className="h-auto fluid-icon invert justify-self-start aspect-square"
				/>
				<p className="self-center font-thin fluid-text justify-self-start">
					{services[3].title}
				</p>
				<BsArrowUpRight className="h-auto fluid-icon justify-self-end aspect-square" />
			</div>
		</div>
	</section>
);

const WhyPartnerSection = ({ reasons }) => (
	<section className="pt-10 section-responsive">
		<h4 className="pb-10 pl-40 text-3xl font-thin">Why partner with us?</h4>
		<div className={`${styles.container}`}>
			{reasons.map((reason) => (
				<div key={reason.title} className={`${styles.box}`}>
					<h2
						className={`${styles.boxHeading}`}
					>
						{reason.title}
					</h2>
					<p className={`${styles.boxContent}`}>
						{reason.description}
					</p>
				</div>
			))}
		</div>
	</section>
);

const RecentProjectsSection = () => {
	return (
		<section className="pt-10 section-responsive">
			<h4 className="pb-10 pl-40 text-3xl font-thin">Recent Projects</h4>
			<div>
				<ProjectSwiper />
			</div>
		</section>
	);
};

const OurReviewsSection = () => {
	return (
		<section className="max-w-6xl px-4 py-12 mx-auto text-white sm:px-6 lg:px-8">
			<h2 className="mb-12 text-3xl font-bold text-center">OUR RECENT REVIEWS</h2>
			<div className="flex items-center justify-center">
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<div className="flex items-center mb-4">
						<div className="p-2 text-sm font-bold text-gray-300 uppercase rounded-sm">
							<Image src={ssLogo} alt="Shelter Share logo" className="w-40" />
						</div>
					</div>
					<div className="flex items-center mb-6">
						<Image src={robertHeadshot}
							alt="Placeholder image representing the picture of the person who gave the review"
							className="w-40 max-w-sm mr-4 rounded-full" />
						<div className="text-lg italic">
							“Nompton Studios helped me with my business’ website and social media marketing. They
							exceeded expectations. Would 100% recommend for anyone in the market for web services.”
						</div>
					</div>
					<div className="text-lg font-bold">
						Robert Washington,
					</div>
					<div className="text-lg">
						Founder of Shelter Share
					</div>
					<div className="flex justify-end mt-4">
						<i className="text-2xl text-gray-400 fas fa-arrow-right"></i>
					</div>
				</div>
			</div>
		</section>
	);
};

const WhoWeAreSection = () => {
	return (
		<section className="px-4 py-12 sm:px-6 md:px-0 lg:px-8">
			<h1 className="mb-12 text-4xl font-bold">Who We Are</h1>
			<div className="flex flex-wrap justify-center gap-8">
				<div className="flex flex-col items-center w-full p-6 bg-gray-800 rounded-lg md:w-2/5 lg:w-2/5">
					<Image
						src={daltonHeadshot}
						alt="Dalton Krueger with his family against a cityscape background"
						className="mb-6 rounded-lg w-80 aspect-square"
						style={`background-image: url(${daltonBG}); background-size: cover;`}
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
						style={`background-image: url(${prestonBG}); background-size: cover;`}
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

