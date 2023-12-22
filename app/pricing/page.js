import styles from "./Pricing.module.css"
import Image from "next/image"

const Pricing = () => {
    return (
        <main>
            <HeroSection />
            <BundleSection />
            <CTASection />
            <TechSection />
            <TechStack />
            <ReviewSection />
            <PartnershipsSection />
            <PartnerReasons />
            <CaseStudies />
        </main>
    )
}

export default Pricing

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen overflow-hidden lg:flex-row">
            <div className="px-4 text-center text-white">
                <h1 className="text-3xl font-semibold leading-tight lg:text-6xl">Services developed to make your business
                    thrive</h1>
                <p className={`mt-4 text-xs tracking-widest uppercase lg:mt-8 ${styles.verticalText}`}>Scroll</p>
            </div>
        </section>
    )
}

const BundleSection = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="inline-flex items-baseline space-x-4 tab-heading md:space-x-4">
                <div className="text-center">
                    <h1 className={`inline-block text-4xl font-bold md:text-4xl ${styles.gradientText}`}>Customer Bundles</h1>
                    <div className={`w-full mt-2 ${styles.gradientUnderline}`}></div>
                </div>
                <h2 className="text-4xl font-normal text-gray-300 md:text-4xl">Expertise Based</h2>
            </div>
            <div className="container px-6 py-12 mx-auto">
                <div className="p-6 border border-green-500">
                    <div
                        className="flex flex-col items-start justify-between pb-12 border-b border-green-500 md:flex-row md:items-center">
                        <h1 className="mb-4 text-5xl font-bold md:mb-0">Startups_</h1>
                        <p className="text-lg font-normal">From web and mobile app development to product discovery and
                            building MVPs,
                            we aim to meet the unique needs of startups, fuel innovation, and take your business to the
                            next level.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3">
                        <div className="flex flex-col items-start">
                            <h2 className="mb-4 text-2xl font-bold">Brain Hive</h2>
                            <p className="mb-6 text-base font-normal">A business idea validation to give you customer
                                feedback, a
                                polished PoC, and all necessary materials for increased chances of securing funding and
                                attracting
                                customers.</p>
                            <a href="#" className="font-semibold text-green-400 hover:underline">Learn more <i
                                className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="mb-4 text-2xl font-bold">MVP Forge</h2>
                            <p className="mb-6 text-base font-normal">A swift way to develop an MVP solution, regardless of
                                how far your
                                product is in the discovery phase, the particularities of your industry, and individual
                                requirements.</p>
                            <a href="#" className="font-semibold text-green-400 hover:underline">Learn more <i
                                className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="mb-4 text-2xl font-bold">Launchpad</h2>
                            <p className="mb-6 text-base font-normal">Full suite of premium development services to scale
                                your MVP to a
                                high-quality product - from product design and branding to E2E development and ongoing
                                support.</p>
                            <a href="#" className="font-semibold text-green-400 hover:underline">Learn more <i
                                className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CTASection = () => {
    return (
        <section className="flex items-center justify-center p-4 text-white">
            <div className="w-full max-w-lg mx-auto text-center">
                <p className="mb-8 text-2xl leading-relaxed sm:text-xl sm:mb-6">Now it’s your turn to describe your vision
                    and let us
                    unveil the full potential of your ideas!</p>
                <button
                    className="px-6 py-3 text-sm font-semibold text-black transition-colors bg-green-500 rounded-full hover:bg-green-600 sm:text-base">
                    Get in touch <i className="ml-2 fas fa-arrow-right"></i>
                </button>
            </div>
        </section>
    )
}

const TechSection = () => {
    return (
        <section>
            <div className="max-w-6xl px-4 py-16 mx-auto">
                <h2 className="mb-6 text-2xl font-light">OUR TECH STACK</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-lg">
                        We build ultra-performant and reliable software with the latest technologies under our belt. Let
                        us find a
                        best-matching framework that’ll exceed your product expectations.
                    </p>
                </div>
            </div>
        </section>
    )
}

const TechStack = () => {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="relative">
                        <h1 className="text-4xl font-light tracking-wide tab-active">Frontend</h1>
                    </div>
                    <h1 className="text-4xl font-light tracking-wide">Backend</h1>
                    <h1 className="text-4xl font-light tracking-wide">Infrastructure</h1>
                    <h1 className="text-4xl font-light tracking-wide">Design</h1>
                </div>
            </div>
            <div className="container px-4 py-8 mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <Image alt="React.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            REACT.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <Image alt="Vue.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            VUE.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <Image alt="Gatsby.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            GATSBY.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <Image alt="JavaScript logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            JAVASCRIPT
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <Image alt="Next.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            NEXT.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <Image alt="React Native logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            REACT NATIVE
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ReviewSection = () => {
    return (
        <section className="max-w-6xl px-4 py-16 mx-auto">
            <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
                <div className="mb-8 md:w-1/2 md:mb-0">
                    <h2 className="mb-2 text-lg font-light md:mb-4">
                        WHAT PARTNERS SAY ABOUT US?
                    </h2>
                    <div className="flex items-center mb-4">
                        <span className="inline-block w-10 h-1 mr-2 bg-yellow-400">
                        </span>
                        <span className="inline-block w-40 h-1 bg-green-400">
                        </span>
                    </div>
                    <div className="pl-4 mt-4 md:pl-8">
                        <p className="mb-4 text-lg">
                            AppTension was flexible and professional. When I needed to quickly add capacity, it took a
                            week or two at worst - often days. The cooperation enabled me to slowly scale up my own IT
                            team, and the company was very helpful until the last moments of the transition.
                        </p>
                        <p className="font-semibold">
                            Mateusz Oleksiuk
                        </p>
                        <p>
                            CEO LESS_
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-center md:w-1/2">
                    <div className="flex flex-col items-center justify-start">
                        <Image alt="Portrait of Mateusz Oleksiuk, CEO of LESS_, a man in a white shirt"
                            className="object-cover w-64 mb-4 h-96" src="https://placehold.co/400x600" />
                        <div className="flex">
                            <span className="inline-block w-10 h-1 mr-2 bg-yellow-400">
                            </span>
                            <span className="inline-block w-40 h-1 bg-green-400">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8">
                <button className="mx-4 text-2xl text-white">
                    <i className="fas fa-chevron-left">
                    </i>
                </button>
                <button className="mx-4 text-2xl text-white">
                    <i className="fas fa-chevron-right">
                    </i>
                </button>
            </div>
        </section>
    )
}

const PartnershipsSection = () => {
	return (
		<section className="container px-4 py-12 mx-auto">
			<div className="max-w-md mx-auto mb-20 text-sm text-left md:mx-0 md:max-w-full">
				WE&apos;RE PARTNERING UP WITH LIKE-MINDED FOUNDERS AND BRANDS SINCE 2012
			</div>
			<div className="flex flex-wrap items-center justify-center gap-8">
                <Image
					alt="LESS_ logo placeholder"
					className="h-12"
					src="https://placehold.co/200x100"
				/>
                <Image
					alt="Viu logo placeholder"
					className="h-12"
					src="https://placehold.co/200x100"
				/>
                <Image
					alt="Hoover logo placeholder"
					className="h-12"
					src="https://placehold.co/200x100"
				/>
			</div>
		</section>
	);
};


const PartnerReasons = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl font-light text-left">WHY PARTNERS CHOOSE US?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                <div className="mb-8 md:mb-0">
                    <h3 className="mb-2 text-xl font-semibold md:text-2xl heading-height">Pixel-perfect designs</h3>
                    <p className="font-light">We’re quality-oriented with great attention to detail and design accuracy.</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="mb-2 text-xl font-semibold md:text-2xl heading-height">Crystal clear processes</h3>
                    <p className="font-light">We’re like an open book, not ashamed to show how we’re doing IT.</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="mb-2 text-xl font-semibold md:text-2xl heading-height">On-point and fast communication
                    </h3>
                    <p className="font-light">Our teams are always in the loop of their projects, ready to keep the fast and
                        on-point
                        conversations.</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="mb-2 text-xl font-semibold md:text-2xl heading-height">Fully adjusted to operate
                        internationally</h3>
                    <p className="font-light">We can easily align communication within different time zones.</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="mb-2 text-xl font-semibold md:text-2xl heading-height">Flexible cooperation</h3>
                    <p className="font-light">We’re adjustable to individual needs. Hitting your budget, deadlines, and
                        overall business
                        goals.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-semibold md:text-2xl heading-height">Dedication to innovation</h3>
                    <p className="font-light">We make sure no industry update will go unnoticed past our experts, so you get
                        a
                        cutting-edge, personalized solution.</p>
                </div>
            </div>
        </section>
    )
}

const CaseStudies = () => {
    return (
        <section className="container px-6 py-12 mx-auto">
            <h2 className="mb-12 text-2xl font-semibold text-white">
                RECENT CASE STUDIES
            </h2>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-10 md:w-1/3">
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                        <Image alt="Mobile app interface design with colorful elements and user interface components"
                            className="w-full" src="https://placehold.co/400x600.png?text=Mobile+App+Interface+Design&amp;fontsize=20" />
                    </div>
                </div>
                <div className="w-full px-4 mb-10 md:w-1/3 card-offset" style={{ marginTop: '50px' }}>
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                        <Image alt="Portrait of a smiling woman with hand on her cheek, white background" className="w-full"
                            src="https://placehold.co/400x600.png?text=Portrait+of+a+Woman&amp;fontsize=20" />
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/3">
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                        <Image alt="Product packaging design with pink boxes and modern layout on a vibrant red background"
                            className="w-full"
                            src="https://placehold.co/400x600.png?text=Product+Packaging+Design&amp;fontsize=20" />
                    </div>
                </div>
            </div>
            <div className="my-12 border-b border-gray-700">
            </div>
        </section>
    )
}