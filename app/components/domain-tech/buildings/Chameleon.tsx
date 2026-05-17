import Link from "next/link";

export default function Chameleon() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">CHAMELEON</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/chameleon.png"
                        alt="CHAMELEON"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">The CHAMELEON is a supercomputer composed of specialized Domain-era hardware capable of breaking most forms of encryption used in the Sector. Security forces can leverage the intelligence gleaned using this construct to eradicate <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>decivilized subpopulations</Link> and <Link href="https://starsector.wiki.gg/wiki/Market_condition#Other" style={{ color: 'inherit' }}>rogue AI cores</Link>.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>225,000Â¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,000Â¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology" className="shrink-0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size <span className="italic opacity-60">(only demanded when Domain-tech content and <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Eliminates <Link href="https://starsector.wiki.gg/wiki/Luddic_Path" style={{ color: 'rgb(5, 250, 250)' }}>Luddic Path</Link> cells on the colony and neutralizes all Pather interest from industries on the colony when an alpha core is installed.</li>
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days of uninterrupted operation, eradicates a <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>decivilized subpopulation</Link> on the host world.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The eradication project length is configurable in <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings.</li>
                            </ul>
                        </li>
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days of uninterrupted operation, terminates a <Link href="https://starsector.wiki.gg/wiki/Market_condition#Other" style={{ color: 'rgb(5, 250, 250)' }}>rogue AI core</Link> on the host world.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The termination project length is configurable in <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>, reduces upkeep by <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span>, eliminates <Link href="https://starsector.wiki.gg/wiki/Luddic_Path" style={{ color: 'rgb(5, 250, 250)' }}>Luddic Path</Link> cells on the colony, and neutralizes all Pather interest from other industries on the colony.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core" className="shrink-0"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10 shrink-0" /></Link>
                            <span>Reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> and reduces upkeep by <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core" className="shrink-0"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10 shrink-0" /></Link>
                            <span>Reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span> <span className="italic opacity-60">(neutralized to 0 with an alpha core installed)</span></div>
            </section>
        </div>
    );
}
