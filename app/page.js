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
			<NeedWebRelatedServicesSection />
			<FooterSection />
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
		<section className="pt-10 section-responsive">
			<h4 className="pb-10 pl-40 text-3xl font-thin">Our Recent Reviews</h4>
		</section>
	);
};

const WhoWeAreSection = () => {
	return (
		<section className="pt-10 section-responsive">
			<h4 className="pb-10 pl-40 text-3xl font-thin">Who We Are</h4>
			<div className="flex flex-col justify-center">
				<div className="flex flex-row justify-center">
					<div
						style={{
							backgroundImage: `url(${prestonBG.src})`,
							backgroundSize: "cover",
							backgroundColor: "rgba(250, 0, 255, 0.25)",
							backgroundBlendMode: "multiply",
						}}
						className="relative overflow-hidden rounded-full w-96 h-96"
					>
						<Image
							className="absolute"
							src={prestonHeadshot}
							alt="Preston Headshot"
						/>
					</div>
					<div>
						<span>Preston Jenkins</span>
						<p>Owner & Developer</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center">
					<div
						style={{
							backgroundImage: `url(${daltonBG.src})`,
							backgroundSize: "cover",
							backgroundColor: "rgba(250, 0, 255, 0.25)",
							backgroundBlendMode: "multiply",
						}}
						className="relative overflow-hidden rounded-full h-96 w-96"
					>
						<Image
							className="absolute"
							src={daltonHeadshot}
							alt="Preston Headshot"
						/>
					</div>
					<div>
						<span>Dalton Krueger</span>
						<p>Owner & Operations</p>
					</div>
				</div>
			</div>
		</section>
	);
};

const NeedWebRelatedServicesSection = () => {
	return (
		<section className="pt-10 section-responsive">
			<h4 className="pb-10 pl-40 text-3xl font-thin">
				Need web-related services?
				<br />
				See how we can help
			</h4>
		</section>
	);
};

const FooterSection = () => {
	return (
		<section>
			<h4>Footer</h4>
		</section>
	);
};
