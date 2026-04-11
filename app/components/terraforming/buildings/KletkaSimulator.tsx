import Link from "next/link";

export default function KletkaSimulator() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Kletka Simulator</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/kletka_simulator.png"
                        alt="Kletka Simulator"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Supercomputers built with salvaged Domain-era components are used to train new AI cores in a virtual reality simulation. AI cores created in this manner can never really know whether this universe is real or just another training simulation - they usually remain loyal to their human masters so as to avoid punishment or deletion in case it is the latter.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>450,000¢</span></div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>32,000¢</span> <span className="italic opacity-60">(see below regarding colony temperature)</span></div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10" />
                            <span>4 <span className="italic opacity-60">(only demanded when Domain-tech content and Domain Archaeology are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Each month, attempts to train a single <Link href="https://starsector.wiki.gg/wiki/AI_Core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link>. The trained core (if any) is delivered to the colony&apos;s storage alongside other monthly items.</li>
                        <li>Training works by rolling a random integer from <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> to <span style={{ color: 'rgb(255, 210, 0)' }}>100</span>, then adding bonuses from improvement and any installed AI core. The final roll is compared against three thresholds: alpha core if roll &gt; <span style={{ color: 'rgb(255, 210, 0)' }}>100</span>, beta core if roll &gt; <span style={{ color: 'rgb(255, 210, 0)' }}>75</span>, gamma core if roll &gt; <span style={{ color: 'rgb(255, 210, 0)' }}>50</span>, otherwise nothing.</li>
                        <li>Because the base roll caps at <span style={{ color: 'rgb(255, 210, 0)' }}>100</span>, producing an alpha core is <span style={{ color: 'rgb(200, 10, 20)' }}>impossible</span> without stacking improvement and AI core bonuses.</li>
                        <li>Produces nothing while <Link href="https://starsector.wiki.gg/wiki/Industry#Disruption" style={{ color: 'rgb(5, 250, 250)' }}>disrupted</Link> or while the Domain-era artifacts demand is unmet.</li>
                        <li>When the <span className="italic">Kletka Simulator upkeep is based on colony temperature</span> LunaLib setting is enabled (default), monthly upkeep is multiplied based on the colony&apos;s temperature:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Stations: <span style={{ color: 'rgb(200, 10, 20)' }}>x8</span></li>
                                <li><Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Very hot</Link>: <span style={{ color: 'rgb(200, 10, 20)' }}>x4</span></li>
                                <li><Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Hot</Link>: <span style={{ color: 'rgb(200, 10, 20)' }}>x2</span></li>
                                <li><Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Cold</Link>: <span style={{ color: 'rgb(5, 115, 10)' }}>x0.5</span></li>
                                <li><Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Very cold</Link>: <span style={{ color: 'rgb(5, 115, 10)' }}>x0.25</span></li>
                                <li>Otherwise: <span style={{ color: 'rgb(255, 210, 0)' }}>x1</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" />
                            <span>Improves AI core training methodology by <span style={{ color: 'rgb(255, 210, 0)' }}>30%</span> (adds <span style={{ color: 'rgb(255, 210, 0)' }}>30</span> to the monthly training roll).</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" />
                            <span>Improves AI core training methodology by <span style={{ color: 'rgb(255, 210, 0)' }}>20%</span> (adds <span style={{ color: 'rgb(255, 210, 0)' }}>20</span> to the monthly training roll).</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" />
                            <span>Improves AI core training methodology by <span style={{ color: 'rgb(255, 210, 0)' }}>10%</span> (adds <span style={{ color: 'rgb(255, 210, 0)' }}>10</span> to the monthly training roll).</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Improves AI core training methodology by <span style={{ color: 'rgb(255, 210, 0)' }}>10%</span> (adds <span style={{ color: 'rgb(255, 210, 0)' }}>10</span> to the monthly training roll). Stacks with any installed AI core.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>With the maximum combined bonus of <span style={{ color: 'rgb(255, 210, 0)' }}>40</span> (alpha core + improvement), alpha core output becomes possible but still rare: roughly <span style={{ color: 'rgb(255, 210, 0)' }}>40%</span> alpha, <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span> beta, <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span> gamma, <span style={{ color: 'rgb(255, 210, 0)' }}>10%</span> nothing.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span></div>
            </section>
        </div>
    );
}
