// @/components/Typing/Typing.js
"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typing = ({ ...props }) => {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
	const { strings } = props;

	const options = {
		strings: strings,
		typeSpeed: 50,
		backSpeed: 50,
        loop: true,
	};

	useEffect(() => {
		const typed = new Typed(el.current, options);

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<div>
			{/* Element to display typing strings */}
			<span ref={el}></span>
		</div>
	);
};

export default Typing;
