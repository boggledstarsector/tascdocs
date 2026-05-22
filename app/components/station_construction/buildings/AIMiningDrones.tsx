import Link from "next/link";

export default function AIMiningDrones() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">AI Mining Drones</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/mining_drones.png"
                        alt="AI Mining Drones"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Mining activities are more productive when human laborers are replaced by droneships controlled via an <Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'inherit' }}>AI core</Link>.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span> <span className="italic opacity-60">(use <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>225,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Fuel" className="shrink-0">
                                <img src="/images/commodities/fuel.png" alt="Fuel" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Supplies" className="shrink-0">
                                <img src="/images/commodities/supplies.png" alt="Supplies" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Ships_(commodity)" className="shrink-0">
                                <img src="/images/commodities/ships.png" alt="Ships" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Increases production of every commodity supplied by the colony&apos;s <Link href="https://starsector.wiki.gg/wiki/Mining" style={{ color: 'rgb(5, 250, 250)' }}>Mining</Link> industry. The size of the bonus depends on the installed <Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> (see below); without a core the building provides no production bonus.</li>
                        <li>If <Link href="https://starsector.wiki.gg/wiki/Fuel" style={{ color: 'rgb(5, 250, 250)' }}>fuel</Link>, <Link href="https://starsector.wiki.gg/wiki/Supplies" style={{ color: 'rgb(5, 250, 250)' }}>supplies</Link>, or <Link href="https://starsector.wiki.gg/wiki/Ships_(commodity)" style={{ color: 'rgb(5, 250, 250)' }}>ships</Link> demand is in deficit, the production bonus is reduced by the size of the largest deficit (down to a minimum of <span style={{ color: 'rgb(255, 210, 0)' }}>0</span>).</li>
                        <li>Can only be built on stations. Has no effect on planetary markets.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases Mining production by <span style={{ color: 'rgb(255, 210, 0)' }}>3</span> units.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core" className="shrink-0"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases Mining production by <span style={{ color: 'rgb(255, 210, 0)' }}>2</span> units.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core" className="shrink-0"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases Mining production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> unit.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases colony <Link href="https://starsector.wiki.gg/wiki/Colony#Accessibility" style={{ color: 'rgb(5, 250, 250)' }}>accessibility</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>20%</span>.</div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span></div>
            </section>
        </div>
    );
}
