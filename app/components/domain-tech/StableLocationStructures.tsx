import Link from "next/link";

export default function StableLocationStructures() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Stable Location Structures</h1>
                <div className="md:max-w-[750px]">TASC adds the ability to construct Domain-tech stable location structures and upgrade existing sector-tech structures to their Domain-tech equivalents. Additionally, inactive gates can be constructed at stable locations once certain criteria are met.</div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>

                <h2 className="text-2xl font-bold mt-4">Domain-tech Structures</h2>
                <div className="flex flex-row flex-wrap items-start gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/illustrations/comm_relay.jpg" alt="Domain-tech Comm Relay" className="w-48 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                        <div className="text-sm">Comm Relay</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/illustrations/sensor_array.jpg" alt="Domain-tech Sensor Array" className="w-48 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                        <div className="text-sm">Sensor Array</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/illustrations/nav_buoy.jpg" alt="Domain-tech Nav Buoy" className="w-48 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                        <div className="text-sm">Nav Buoy</div>
                    </div>
                </div>
                <div className="md:max-w-[750px]">When interacting with a stable location, the player can construct one of three Domain-tech structure types or upgrade an existing sector-tech (makeshift) structure to its Domain-tech equivalent.</div>

                <div className="flex flex-col gap-1">
                    <div>Structure types:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            <span style={{ color: 'rgb(5, 250, 250)' }}>Domain-tech Comm Relay</span> â€” <span style={{ color: 'rgb(255, 210, 0)' }}>+5</span> <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> for same-faction colonies in system
                        </li>
                        <li>
                            <span style={{ color: 'rgb(5, 250, 250)' }}>Domain-tech Sensor Array</span> â€” <span style={{ color: 'rgb(255, 210, 0)' }}>+700</span> sensor range for all same-faction fleets in system
                        </li>
                        <li>
                            <span style={{ color: 'rgb(5, 250, 250)' }}>Domain-tech Nav Buoy</span> â€” <span style={{ color: 'rgb(255, 210, 0)' }}>+3</span> <Link href="https://starsector.wiki.gg/wiki/Burn_speed" style={{ color: 'rgb(5, 250, 250)' }}>burn level</Link> for all same-faction fleets in system
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Construction cost:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" className="shrink-0">
                                <img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>50</span> heavy machinery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Metals" className="shrink-0">
                                <img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>200</span> metals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Transplutonics" className="shrink-0">
                                <img src="/images/commodities/raremetals.png" alt="Transplutonics" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>20</span> transplutonics</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology" className="shrink-0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>20</span> <Link href="/docs/domain-archaeology" style={{ color: 'rgb(5, 250, 250)' }}>Domain-era artifacts</Link> <span className="italic opacity-60">(only required if <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> is enabled)</span></span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            Existing sector-tech (makeshift) structures controlled by another faction can be upgraded to Domain-tech.
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Upgrading a faction&apos;s structure improves your relationship with that faction by <span style={{ color: 'rgb(255, 210, 0)' }}>5%</span>. <span className="italic opacity-60">(magnitude can be adjusted via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                                <li>Upgrading structures controlled by pirates or Luddic Path does not improve relations.</li>
                            </ul>
                        </li>
                        <li>If you already control a structure of the same type in the system, the game will warn that an additional one would have no effect beyond providing redundancy.</li>
                        <li>All resource costs are configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'rgb(5, 250, 250)' }}>LunaLib</Link> settings.</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Gate Construction</h2>
                <div className="flex flex-row flex-wrap items-start gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/illustrations/inactive_gate.jpg" alt="Inactive gate" className="w-48 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                        <div className="text-sm">Inactive Gate</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/illustrations/active_gate.jpg" alt="Active gate" className="w-48 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                        <div className="text-sm">Active Gate</div>
                    </div>
                </div>
                <div className="md:max-w-[750px]">Inactive gates can be constructed at stable locations. Once built, the gate becomes a neutral entity and functions like any other gate in the Sector.</div>

                <div className="flex flex-col gap-1">
                    <div>Construction cost:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" className="shrink-0">
                                <img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>500</span> heavy machinery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Metals" className="shrink-0">
                                <img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>2,000</span> metals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Transplutonics" className="shrink-0">
                                <img src="/images/commodities/raremetals.png" alt="Transplutonics" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>200</span> transplutonics</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology" className="shrink-0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span><span style={{ color: 'rgb(255, 210, 0)' }}>200</span> Domain-era artifacts <span className="italic opacity-60">(only required if <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> is enabled)</span></span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>The player must have completed the <Link href="https://starsector.wiki.gg/wiki/Mission#Story_missions" style={{ color: 'rgb(5, 250, 250)' }}>main questline</Link>. <span className="italic opacity-60">(can be disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                        <li>The player must own a colony of at least size <span style={{ color: 'rgb(255, 210, 0)' }}>5</span> in the system. <span className="italic opacity-60">(can be disabled or adjusted via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                        <li>There must not already be a <Link href="https://starsector.wiki.gg/wiki/Gates" style={{ color: 'rgb(5, 250, 250)' }}>gate</Link> in the system.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Constructed gates are owned by the neutral faction and function like any other gate.</li>
                        <li>Only one gate can exist per star system.</li>
                        <li>All resource costs and requirements are configurable via LunaLib settings.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
