import Link from "next/link";

export default function AsteroidProcessing() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Asteroid Processing</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/asteroid_processing.png"
                        alt="Asteroid Processing"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Crashing asteroids rich in water-ice into planets is an effective means of terraforming - except when the asteroid is so large that the impact would be cataclysmic. In this case, the asteroid can be towed to a space station, where the water-ice is safely extracted and shipped to the destination planet.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>225,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>90</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>6,000¢</span></div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery">
                                <img src="/images/commodities/heavymachinery.png" alt="Heavy Machinery" className="h-10 w-10" />
                            </Link>
                            <span>6</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Acts as a water source for terraforming projects that require liquid water. Any such project on a world in the same star system can draw water from this building.</li>
                        <li>If the <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" style={{ color: 'rgb(5, 250, 250)' }}>heavy machinery</Link> demand is in shortage, no water can be supplied for terraforming projects until the shortage is resolved.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: <span className="italic opacity-60"> (none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Asteroid Processing is the variant of <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> that is automatically built on stations instead of the planetary Ismara&apos;s Sling building. The two share the same underlying industry and are distinguished only by whether they are built on a station or a planet.</li>
                        <li>Only assists terraforming projects on worlds in the same star system.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
