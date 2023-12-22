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
                                high-quality product – from product design and branding to E2E development and ongoing
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
                        <img alt="React.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            REACT.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <img alt="Vue.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            VUE.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <img alt="Gatsby.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            GATSBY.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <img alt="JavaScript logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            JAVASCRIPT
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <img alt="Next.js logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            NEXT.JS
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-4 sm:w-1/3 md:w-1/4 lg:w-40">
                        <img alt="React Native logo placeholder" className="mx-auto" src="https://placehold.co/64x64" />
                        <p className="mt-2 text-sm">
                            REACT NATIVE
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}