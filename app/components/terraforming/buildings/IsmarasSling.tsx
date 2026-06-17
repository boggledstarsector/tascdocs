import Link from "next/link";

export default function IsmarasSling() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Ismara&apos;s Sling</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/mass_driver.png"
                        alt="Ismara's Sling"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Surface-to-orbit mass drivers of titanic scale, originally reverse-engineered from the ancient Eridani-Utopia terraforming installations on Ismara. Each driver accelerates ice-laden projectiles to escape velocity, launching them on carefully calculated trajectories toward target worlds in need of additional water for terraforming.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>225,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>90</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>6,000¢</span></div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" className="shrink-0">
                                <img src="/images/commodities/heavymachinery.png" alt="Heavy Machinery" className="h-10 w-10 shrink-0" />
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
                        <li>If the planet Ismara's Sling is located on is terraformed to a type that is not cryovolcanic, frozen, or water-covered, the sling is automatically deconstructed. Any installed <Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> is placed in colony storage.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core" className="shrink-0"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10 shrink-0" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core" className="shrink-0"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10 shrink-0" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: <span className="italic opacity-60"> (none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            Has different versions depending on where it is built:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Ismara&apos;s Sling on cryovolcanic, frozen, and water-covered worlds</li>
                                <li><Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> on stations</li>
                            </ul>
                        </li>
                        <li>Can only be built on cryovolcanic, frozen, and water-covered worlds. If the player terraforms a host world into an incompatible type after construction, the building is automatically removed.</li>
                        <li>Only assists terraforming projects on worlds in the same star system.</li>
                        <li>Disabling Ismara&apos;s Sling and <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> in the <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'rgb(5, 250, 250)' }}>LunaLib</Link> settings will cause <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming projects</Link> that require water from them to no longer require it.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
