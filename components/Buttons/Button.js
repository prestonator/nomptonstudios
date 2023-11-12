import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({ children, ...props }) => {
	return (
		<Link
			className={`${styles.linkGradient} ${styles.buttonStyle} ${styles.buttonLink}`}
			href={props.href}
		>
			<div className={`${styles.gradientInner}`}></div>
			<div className={`${styles.gradientInnerCover}`}></div>
			<div className={styles.buttonTextWrapper}>
				<div className={styles.buttonText}>{children}</div>
			</div>
		</Link>
	);
};

export default Button;
