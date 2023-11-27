"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import ShelterShare from "@/public/ShelterShare.webp";
import OrrLaw from "@/public/OrrLaw.webp";
import Image from "next/image";

export default function ProjectSwiper() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
				loop={true}
			>
				<SwiperSlide>
					<div>
						<Image src={ShelterShare} alt="ShelterShare" />
					</div>
					<div className="content">
						<h1>ShelterShare</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
							sequi nihil est laboriosam eveniet hic consequatur officia fuga
							tenetur. Dicta nihil, tenetur distinctio soluta voluptatem
							necessitatibus aut officiis sed. Quasi?
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<Image src={OrrLaw} alt="OrrLaw" />
					</div>
					<div className="content">
						<h1>Orr Law</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
							sequi nihil est laboriosam eveniet hic consequatur officia fuga
							tenetur. Dicta nihil, tenetur distinctio soluta voluptatem
							necessitatibus aut officiis sed. Quasi?
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<Image src={ShelterShare} alt="ShelterShare" />
					</div>
					<div className="content">
						<h1>ShelterShare</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
							sequi nihil est laboriosam eveniet hic consequatur officia fuga
							tenetur. Dicta nihil, tenetur distinctio soluta voluptatem
							necessitatibus aut officiis sed. Quasi?
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<Image src={OrrLaw} alt="OrrLaw" />
					</div>
					<div className="content">
						<h1>Orr Law</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
							sequi nihil est laboriosam eveniet hic consequatur officia fuga
							tenetur. Dicta nihil, tenetur distinctio soluta voluptatem
							necessitatibus aut officiis sed. Quasi?
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
