import Link from "next/link";

export default function DomainArchaeology() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Domain Archaeology</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/domain_archaeology.png"
                        alt="Domain Archaeology"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">The Collapse plunged the Sector into a dark age. Left without the means to replicate the most advanced Domain-era technology, inhabitants of the Sector have been reduced to excavating it from the ruins of Domain colonies.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>150,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>45</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000¢</span> * (colony size - 2)</div>
                <div className="flex flex-col gap-1">
                    <div>Supply:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            <span>scales with colony size and ruins level <span className="italic opacity-60">(scattered &lt; widespread &lt; extensive &lt; vast)</span></span>
                        </div>
                    </div>
                </div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Can only be built on worlds with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Ruins" style={{ color: 'rgb(5, 250, 250)' }}>scattered, widespread, extensive, or vast ruins</Link>.</li>
                        <li>Produces Domain-era artifacts, with the supply amount scaled by the level of ruins on the host world.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases Domain-era artifacts production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>, reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> and reduces upkeep by <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span>.</span>
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
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases Domain-era artifacts production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Domain-era artifacts are demanded by a variety of other buildings in TASC. If you disable Domain Archaeology in the <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'rgb(5, 250, 250)' }}>LunaLib</Link> settings, those buildings will cease to demand them.</li>
                        <li>When Domain-tech content is enabled, Domain Archaeology replaces vanilla Tech-Mining on Agreus in the Arcadia system.</li>
                        <li>Domain-era artifacts are illegal in <Link href="https://starsector.wiki.gg/wiki/Luddic_Church" style={{ color: 'rgb(5, 250, 250)' }}>Luddic Church</Link> and <Link href="https://starsector.wiki.gg/wiki/Luddic_Path" style={{ color: 'rgb(5, 250, 250)' }}>Luddic Path</Link> space.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> for scattered ruins, <span style={{ color: 'rgb(255, 210, 0)' }}>2</span> for widespread, <span style={{ color: 'rgb(255, 210, 0)' }}>3</span> for extensive, <span style={{ color: 'rgb(255, 210, 0)' }}>4</span> for vast <span className="italic opacity-60">(only on player-owned colonies)</span></div>
            </section>
        </div>
    );
}
