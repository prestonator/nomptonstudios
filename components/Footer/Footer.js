import Image from "next/image";
import footerImage from "@/public/footerImage.jpg";

const Footer = async () => {
    return (
        <footer class="py-12 responsive-padding">
            <div class="container mx-auto px-4 sm:px-6 py-12">
                <div class="container mx-auto px-4 py-12">
                    <div class="flex flex-col lg:flex-row justify-between gap-12">
                        <div class="lg:w-5/12">
                            <h1 class="text-5xl font-semibold mb-6">
                                Stay up-to-date with our Weekly Blog
                            </h1>
                            <form class="flex flex-col w-full mb-4">
                                <fieldset class="flex flex-row w-full mb-4">
                                    <input class="flex-grow p-2 text-black rounded-l-lg focus:outline-none" name="email"
                                        placeholder="Email Address*" required="" type="email" />
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg whitespace-nowrap"
                                        type="submit">
                                        Subscribe
                                    </button>
                                </fieldset>
                                <fieldset>
                                    <div>
                                        <input type="checkbox" id="terms" name="terms" required />
                                        <label for="terms">I agree to the <a href="terms.html">terms and
                                            conditions</a></label>
                                    </div>
                                </fieldset>
                            </form>
                            <p class="text-gray-400 text-sm">
                                Your privacy matters! Nompton Studios only uses this info to send content and updates. You
                                may
                                unsubscribe anytime. View our privacy policy for more.
                            </p>
                        </div>
                        <div class="lg:w-6/12">
                            <Image alt="A person holding a smartphone with a colorful bokeh effect on the screen"
                                class="rounded-lg shadow-lg w-full" src={footerImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto px-16">
                <div class="flex flex-col items-center">
                    <div class="self-start">
                        <h2 class="text-3xl font-semibold text-center">
                            Get In Touch<i class="pl-4 far fa-envelope"></i>
                        </h2>
                    </div>
                    <div class="w-full flex flex-col lg:flex-row justify-between items-center">
                        <div class="lg:w-1/3 mb-6 lg:mb-0 ">
                            <div class="flex items-center py-3.5">
                                <i class="fas fa-envelope text-xl mr-4"></i>
                                <p class="text-lg">
                                    dalton@nomptonstudios.com
                                </p>
                            </div>
                            <div class="flex items-center py-3.5">
                                <i class="fas fa-phone text-xl mr-4"></i>
                                <p class="text-lg">
                                    (972) 561-7833
                                </p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 mb-6 lg:mb-0">
                            <h2 class="text-3xl font-semibold mb-4 text-center lg:text-left">
                                Norman Location
                            </h2>
                            <p class="text-lg text-center lg:text-left">
                                124 E Main St<br />
                                Norman, OK 73069<br />
                                United States
                            </p>
                        </div>
                        <div class="lg:w-1/3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="368" height="183" viewBox="0 0 368 183"
                                fill="none">
                                <path
                                    d="M361.01 28.6605V0H0V28.6605H128.971V132.83H132.829L134.483 134.484L136.136 136.688L137.79 138.893L141.648 141.649L145.506 143.854L147.711 142.751L149.364 141.649L150.467 142.751H153.222L154.325 141.649L155.978 140.547H158.183L160.387 142.751L162.592 146.058V151.019H163.694L165.899 152.121H167.001H169.206L169.757 153.223H171.411H174.718L176.371 154.326L178.025 155.428H180.229H182.434V157.082H185.19V155.428H190.701V157.082L192.355 158.184L193.457 159.286H195.111L196.213 160.388L197.315 159.286L197.866 158.184H198.969V157.082H208.338V155.428H209.992V160.94L211.094 162.042L212.748 163.695H215.503L217.157 164.798V169.758L222.117 170.309L222.669 168.656H224.873L226.527 168.105L227.078 167.002L228.731 166.451H229.834L230.936 164.798L232.038 167.002L232.589 168.656H234.794V169.758H236.448L236.999 170.861L238.101 171.963L239.754 172.514V173.616H242.51L243.061 172.514H245.817L246.92 170.861L248.573 169.758L249.675 170.861L249.124 172.514V174.719L249.675 176.372H254.636V175.27L255.738 173.616L254.636 170.861H257.392L257.943 170.309L257.392 168.656H259.045V167.554V166.451H262.352L263.454 168.656L264.005 170.309L265.108 170.861L268.415 171.963L270.068 172.514L271.722 170.309L273.375 168.656H275.58V172.514H276.682V173.616H278.336V175.27H283.296V176.372L284.95 177.475L287.154 179.128L288.808 176.372H292.666L293.768 175.27L295.422 174.168V172.514H298.729L300.382 170.861L303.138 170.309H305.342L309.201 170.861L311.405 170.309L311.956 168.656H314.712L315.814 167.554L318.57 166.451L319.673 168.656L322.428 170.861H329.042L332.9 168.656L336.207 166.451L341.719 170.861H344.475L349.986 177.475H353.293L354.947 179.128H357.151L358.805 180.782H362.663V182.986H365.97L367.072 94.8001V78.2652L365.419 65.5884L362.112 39.6838L361.01 28.6605Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer