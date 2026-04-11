import Link from "next/link";

export default function RemnantStation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Remnant Station</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/remnant_station.png"
                        alt="Remnant Station"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">This is a fully armed and operational autonomous AI battlestation. Stations such as this acted as fuel and supply depot, robotic factory, command nexus, and weapon platform in support of AI fleets operating on a strategic level.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000,000¢</span></div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,500¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Supplies">
                                <img src="/images/commodities/supplies.png" alt="Supplies" className="h-10 w-10" />
                            </Link>
                            <span>7</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://fractalsoftworks.com/forum/index.php?topic=25204.0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10" />
                            </Link>
                            <span>4 <span className="italic opacity-60">(only demanded when Domain-tech content and Domain Archaeology are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Occupies the colony&rsquo;s orbital station slot and counts as a tier-3 (starfortress-equivalent) station.</li>
                        <li>
                            Spawns Remnant patrol fleets allied with the colony&rsquo;s faction, up to <span style={{ color: 'rgb(255, 210, 0)' }}>3</span> fast, <span style={{ color: 'rgb(255, 210, 0)' }}>2</span> combat, and <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> heavy patrol active at a time.
                            <ul className="list-[circle] list-inside pl-6">
                                <li>These patrols are separate from and spawned in addition to any patrols produced by a <Link href="https://starsector.wiki.gg/wiki/Patrol_HQ" style={{ color: 'rgb(5, 250, 250)' }}>Patrol HQ</Link>, <Link href="https://starsector.wiki.gg/wiki/Military_Base" style={{ color: 'rgb(5, 250, 250)' }}>Military Base</Link>, or <Link href="https://starsector.wiki.gg/wiki/High_Command" style={{ color: 'rgb(5, 250, 250)' }}>High Command</Link> at the same colony.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" />
                            <span>Installs an alpha core as the station commander.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" />
                            <span>Installs a beta core as the station commander.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" />
                            <span>Installs a gamma core as the station commander.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>:<span className="italic opacity-60"> (none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>The player must have the <Link href="https://starsector.wiki.gg/wiki/Skills#Automated_Ships" style={{ color: 'rgb(5, 250, 250)' }}>Automated Ships</Link> skill to construct this building.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span></div>
            </section>
        </div>
    );
}
