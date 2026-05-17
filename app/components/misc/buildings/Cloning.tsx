import Link from "next/link";

export default function Cloning() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Cloning</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/cloning.png"
                        alt="Cloning"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Clones are grown in vats, their developing minds connected to a virtual reality simulation via brain-machine interface. Those that are productive and compliant in the simulation are released into general society. The rest are used for organ harvesting.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span><span className="italic opacity-60"> (use <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>600,000Â¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>120</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>6,000Â¢</span> * (colony size - 2)</div>
                <div className="flex flex-col gap-1">
                    <div>Supply:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Harvested_Organs" className="shrink-0">
                                <img src="/images/commodities/organs.png" alt="Harvested organs" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size - 2</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology" className="shrink-0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size <span className="italic opacity-60">(only demanded when Domain-tech content and <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> are enabled)</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Organics" className="shrink-0">
                                <img src="/images/commodities/organics.png" alt="Organics" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size - 2 <span className="italic opacity-60">(not demanded on <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>habitable</Link> worlds)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Increases colony population growth by <span style={{ color: 'rgb(255, 210, 0)' }}>colony size - 1</span> while functional.</li>
                        <li><Link href="https://starsector.wiki.gg/wiki/Harvested_Organs" style={{ color: 'rgb(5, 250, 250)' }}>Harvested organs</Link> production is reduced if <Link href="/docs/domain-archaeology" style={{ color: 'rgb(5, 250, 250)' }}>Domain-era artifacts</Link> (when enabled) or organics (on non-habitable worlds) demand is unmet.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases harvested organs production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>, reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> and reduces upkeep by <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span>.</span>
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
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases harvested organs production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span></div>
            </section>
        </div>
    );
}
