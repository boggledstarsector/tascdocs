import Link from "next/link";

export default function LimelightNetwork() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Limelight Network</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/limelight.png"
                        alt="Limelight Network"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">A shared virtual reality environment accessed through cybernetic implants. Banned by the Domain and most post-Collapse polities due to its highly addictive nature - many users ignore the real world until they deplete their financial resources and are forced to exit the simulation. Fikenhild&apos;s government grudgingly tolerates the Limelight Network because the fantasies of users serve as excellent inspiration for the holo-entertainment industry.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000Â¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>75</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>4,000Â¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology" className="shrink-0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size - 2 <span className="italic opacity-60">(only demanded when Domain-tech content and <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Generates a large amount of income.</li>
                        <li>On player-owned colonies, reduces production of every commodity at every other industry on the colony by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</li>
                        <li>On player-owned colonies, if the demand for <Link href="/docs/domain-archaeology" style={{ color: 'rgb(5, 250, 250)' }}>Domain-era artifacts</Link> is unmet, the building generates no income and colony stability is reduced by the size of the shortage.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases income by <span style={{ color: 'rgb(255, 210, 0)' }}>30%</span>, reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> and reduces upkeep by <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span>.</span>
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
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases income by <span style={{ color: 'rgb(255, 210, 0)' }}>30%</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Appears pre-built on Fikenhild when the &quot;Add Domain-tech buildings to several colonies&quot; <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'rgb(5, 250, 250)' }}>LunaLib</Link> setting is enabled.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span> <span className="italic opacity-60">(only on player-owned colonies)</span></div>
            </section>
        </div>
    );
}
