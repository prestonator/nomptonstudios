import { MdWeb, MdScreenSearchDesktop } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { PiCodeBlock } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import Image from "next/image";
import prestonHeadshot from "@/public/prestonHeadshot.webp";
import daltonHeadshot from "@/public/daltonHeadshot.webp";
import daltonBG from "@/public/daltonBG.webp";
import prestonBG from "@/public/prestonBG.webp";

export default function Home() {
	return (
		<main>
			<section>
				<div className="max-w-md">
					<h2 className="text-5xl">Modern Digital Solutions</h2>
					<p>
						Formed to help businesses expand online reach and strive in this
						ever changing world. Nompton Studios is based in Norman, OK and
						highly invests in our clients.
					</p>
				</div>
			</section>
			<section className="pt-10">
				<h3 className="text-4xl">What We Do</h3>
				<div className="flex flex-col w-10/12 gap-10 mx-auto">
					<hr />
					<div className="grid grid-cols-3 px-32 text-3xl">
						<MdWeb className="w-16 h-auto justify-self-start aspect-square" />
						<p className="self-center justify-self-start w-max">Website Design</p>
						<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
					</div>
					<hr />
					<div className="grid grid-cols-3 px-32 text-3xl">
						<MdScreenSearchDesktop className="w-16 h-auto justify-self-start aspect-square" />
						<p className="self-center justify-self-start w-max">Website Development</p>
						<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
					</div>
					<hr />
					<div className="grid grid-cols-3 px-32 text-3xl">
						<PiCodeBlock className="w-16 h-auto justify-self-start aspect-square" />
						<p className="self-center justify-self-start w-max">SEO Marketing</p>
						<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
					</div>
					<hr />
					<div className="grid grid-cols-3 px-32 text-3xl">
						<TfiAnnouncement className="w-16 h-auto justify-self-start aspect-square" />
						<p className="self-center justify-self-start w-max">Traditional Marketing</p>
						<BsArrowUpRight className="w-16 h-auto justify-self-end aspect-square" />
					</div>
					<hr />
				</div>
			</section>
			<section>
				<h4 className="pb-4 text-3xl font-thin">Why partner with us?</h4>
				<div className="flex flex-row">
					<div className="flex flex-col max-w-2xl">
						<div>
							<span className="text-2xl font-bold">
								Effective Communication
							</span>
							<p>
								We prioritize being responsive and quick with communication
								because we value your time. You&apos;ll get a quick turnaround
								from our team.
							</p>
						</div>
						<div>
							<span className="text-2xl font-bold">Technical Excellence</span>
							<p>
								We are up-to-date on the latest digital trends and leverage our
								experience to provide technical excellence. Our expertise
								delivers results.
							</p>
						</div>
					</div>
					<div className="flex flex-col max-w-2xl">
						<div>
							<span className="text-2xl font-bold">Focued on results</span>
							<p>
								We drive real results so our partners can maximize profits and
								see their investments pay off. We are focused on your success.
							</p>
						</div>
						<div>
							<span className="text-2xl font-bold">
								Locally owned and operated
							</span>
							<p>
								Based in Norman, Oklahoma, we understand how to help local
								businesses thrive. Our team is invested in the community.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h4 className="pb-4 text-3xl font-thin">Recent Projects</h4>
			</section>
			<section>
				<h4 className="pb-4 text-3xl font-thin">Our Recent Reviews</h4>
			</section>
			<section>
				<h4 className="pb-4 text-3xl font-thin">Who We Are</h4>
				<div className="flex justify-center gap-64">
					<div>
						<div
							style={{
								backgroundImage: `url(${daltonBG.src})`,
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
					<div>
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
			<section>
				<h4 className="pb-4 text-3xl font-thin">
					Need web-related sercives?
					<br />
					See how we can help
				</h4>
			</section>
			<section>
				<h4>Footer</h4>
			</section>
		</main>
	);
}
