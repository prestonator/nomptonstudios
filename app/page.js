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
	<section>
		<div className="flex flex-row align-middle">
			<div className="max-w-md">
				<h2 className="text-5xl">Modern Digital Solutions</h2>
				<p>
					Formed to help businesses expand online reach and strive in this ever
					changing world. Nompton Studios is based in Norman, OK and highly
					invests in our clients.
				</p>
			</div>
			<div>
				<Image src={heroImage} alt="hero image" />
			</div>
		</div>
	</section>
);

const ServicesSection = ({ services }) => (
	<section className="pt-10">
		<h3 className="text-4xl">What We Do</h3>
		<div className="flex flex-col w-10/12 gap-10 mx-auto">
			<hr />
			<div className="grid grid-cols-3 px-32 text-3xl">
				<Image
					src={services[0].icon}
					alt="Design Icon"
					className="w-16 h-auto invert justify-self-start aspect-square"
				/>
				<p className="self-center justify-self-start w-max">
					{services[0].title}
				</p>
				<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
			</div>
			<hr />
			<div className="grid grid-cols-3 px-32 text-3xl">
				<Image
					src={services[1].icon}
					alt="Design Icon"
					className="w-16 h-auto invert justify-self-start aspect-square"
				/>
				<p className="self-center justify-self-start w-max">
					{services[1].title}
				</p>
				<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
			</div>
			<hr />
			<div className="grid grid-cols-3 px-32 text-3xl">
				<Image
					src={services[2].icon}
					alt="Design Icon"
					className="w-16 h-auto invert justify-self-start aspect-square"
				/>
				<p className="self-center justify-self-start w-max">
					{services[2].title}
				</p>
				<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
			</div>
			<hr />
			<div className="grid grid-cols-3 px-32 text-3xl">
				<Image
					src={services[3].icon}
					alt="Design Icon"
					className="w-16 h-auto invert justify-self-start aspect-square"
				/>
				<p className="self-center justify-self-start w-max">
					{services[3].title}
				</p>
				<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
			</div>
			<hr />
		</div>
	</section>
);

const WhyPartnerSection = ({ reasons }) => (
	<section>
		<h4 className="pb-4 text-3xl font-thin">Why partner with us?</h4>
		<div className="flex flex-row">
			{reasons.map((reason) => (
				<div key={reason.title} className="flex flex-col basis-2/5">
					<span className="text-2xl font-bold uppercase">{reason.title}</span>
					<p>{reason.description}</p>
				</div>
			))}
		</div>
	</section>
);

const RecentProjectsSection = () => {
	return (
		<section>
			<h4 className="pb-4 text-3xl font-thin">Recent Projects</h4>
		</section>
	);
};

const OurReviewsSection = () => {
	return (
		<section>
			<h4 className="pb-4 text-3xl font-thin">Our Recent Reviews</h4>
		</section>
	);
};

const WhoWeAreSection = () => {
	return (
		<section>
			<h4 className="pb-4 text-3xl font-thin">Who We Are</h4>
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
		<section>
			<h4 className="pb-4 text-3xl font-thin">
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
