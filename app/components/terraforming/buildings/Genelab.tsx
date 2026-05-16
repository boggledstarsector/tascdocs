import Link from "next/link";

export default function Genelab() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Genelab</h1>
                <div className="flex flex-wrap justify-start gap-4">
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/genelab_lobster.png"
                            alt="Genelab lobster variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Lobster variant (<Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'inherit' }}>water-surface</Link> worlds)</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/genelab_trex.png"
                            alt="Genelab T-Rex variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">T-Rex variant (all other worlds)</div>
                    </div>
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Genetic engineering has countless applications, such as remediating <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>pollution</Link> using microbes that consume toxic waste, seeding oceans with delicious crustaceans, and creating realistic copies of extinct Old Earth megafauna.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>90</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10" />
                            </Link>
                            <span>colony size - 2 <span className="italic opacity-60">(4 on NPC-owned colonies; only demanded when Domain-tech content and <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> are enabled)</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Organics">
                                <img src="/images/commodities/organics.png" alt="Organics" className="h-10 w-10" />
                            </Link>
                            <span>colony size - 2 <span className="italic opacity-60">(not demanded on <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>habitable</Link> worlds)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Increases <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> income by <span style={{ color: 'rgb(255, 210, 0)' }}>100%</span> when both buildings are present on the same colony and the Genelab is functional.</li>
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days of continuous operation on a habitable world, removes the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>pollution</Link> condition.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>pollution</Link> remediation project length is configurable in <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings.</li>
                            </ul>
                        </li>
                        <li>Pollution remediation cannot begin while a <Link href="https://starsector.wiki.gg/wiki/Heavy_Industry" style={{ color: 'rgb(5, 250, 250)' }}>Heavy Industry</Link> or <Link href="https://starsector.wiki.gg/wiki/Orbital_Works" style={{ color: 'rgb(5, 250, 250)' }}>Orbital Works</Link> on the same colony has a corrupted or pristine nanoforge installed (the polluting source must be removed first).</li>
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days of continuous operation on a water-surface world, adds the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>Volturnian lobster pens</Link> condition.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The lobster seeding project length is configurable in <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings.</li>
                            </ul>
                        </li>
                        <li>The Mesozoic Park income bonus is reduced by <span style={{ color: 'rgb(255, 210, 0)' }}>50%</span> per unit of deficit in organics or <Link href="/docs/domain-archaeology" style={{ color: 'rgb(5, 250, 250)' }}>domain-era artifacts</Link>, bottoming out at <span style={{ color: 'rgb(255, 210, 0)' }}>0%</span>.</li>
                        <li>Pollution remediation and lobster seeding progress stall while the Genelab is disrupted or while any demanded commodity is in deficit.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" /></Link>
                            <span>Increases <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> income by an additional <span style={{ color: 'rgb(255, 210, 0)' }}>60%</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" /></Link>
                            <span>Increases <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> income by an additional <span style={{ color: 'rgb(255, 210, 0)' }}>30%</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" /></Link>
                            <span>Increases <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> income by an additional <span style={{ color: 'rgb(255, 210, 0)' }}>15%</span>.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> income by an additional <span style={{ color: 'rgb(255, 210, 0)' }}>50%</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>The building appears as a lobster-themed facility on water-surface worlds and as a T-Rex-themed facility on all other worlds. Both variants are functionally identical and differ only in visual presentation.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span> <span className="italic opacity-60">(only on player-owned colonies)</span></div>
            </section>
        </div>
    );
}
