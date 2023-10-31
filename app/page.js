import { MdWeb, MdScreenSearchDesktop } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { PiCodeBlock } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";

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
				<h3 className="text-3xl">What We Do</h3>
				<div className="flex flex-col">
					<div className="flex">
						<MdWeb />
						<p>Website Design</p>
						<BsArrowUpRight />
					</div>
					<div className="flex">
						<MdScreenSearchDesktop />
						<p>Website Development</p>
						<BsArrowUpRight />
					</div>
					<div className="flex">
						<PiCodeBlock />
						<p>SEO Marketing</p>
						<BsArrowUpRight />
					</div>
					<div className="flex">
						<TfiAnnouncement />
						<p>Traditional Marketing</p>
						<BsArrowUpRight />
					</div>
				</div>
			</section>
			<section>
				<h4>Why partner with us?</h4>
				<div>
					<div>
						<span>Effective Communication</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus minima quos placeat rem nisi repudiandae animi,
							reprehenderit saepe qui enim dolor, reiciendis itaque illo totam
							natus eaque magni laboriosam illum. Ipsam quos facilis ea
							distinctio!
						</p>
					</div>
					<div>
						<span>Technical Excellence</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus minima quos placeat rem nisi repudiandae animi,
							reprehenderit saepe qui enim dolor, reiciendis itaque illo totam
							natus eaque magni laboriosam illum. Ipsam quos facilis ea
							distinctio!
						</p>
					</div>
					<div>
						<span>Focued on results</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus minima quos placeat rem nisi repudiandae animi,
							reprehenderit saepe qui enim dolor, reiciendis itaque illo totam
							natus eaque magni laboriosam illum. Ipsam quos facilis ea
							distinctio!
						</p>
					</div>
					<div>
						<span>Locally owned and operated</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus minima quos placeat rem nisi repudiandae animi,
							reprehenderit saepe qui enim dolor, reiciendis itaque illo totam
							natus eaque magni laboriosam illum. Ipsam quos facilis ea
							distinctio!
						</p>
					</div>
				</div>
			</section>
			<section>
				<h4>Recent Projects</h4>
			</section>
			<section>
				<h4>Our Recent Reviews</h4>
			</section>
			<section>
				<h4>Contact Form</h4>
			</section>
			<section>
				<h4>Footer</h4>
			</section>
		</main>
	);
}
