import Link from "next/link";

export default function PerihelionProject() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Perihelion Project</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/perihelion_project.png"
                        alt="Perihelion Project"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Construct a coronal tap. Building a megastructure of this size and complexity requires a staggering amount of raw materials - far beyond what any of the major factions can muster.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span><span className="italic opacity-60"> (use <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>180</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>96,000¢</span></div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Metals" className="shrink-0">
                                <img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>11</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Transplutonics" className="shrink-0">
                                <img src="/images/commodities/raremetals.png" alt="Transplutonics" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>9</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" className="shrink-0">
                                <img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>7</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology" className="shrink-0">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>7 <span className="italic opacity-60">(only demanded when Domain-tech content and <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days of continuous operation with no shortages (after this building is completed), creates a <Link href="https://starsector.wiki.gg/wiki/Coronal_Hypershunt" style={{ color: 'rgb(5, 250, 250)' }}>coronal tap</Link> in the host star system.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The coronal tap construction length (default <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days) is configurable in <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings.</li>
                            </ul>
                        </li>
                        <li>When <Link href="https://fractalsoftworks.com/forum/index.php?topic=26307.0" style={{ color: 'rgb(5, 250, 250)' }}>Ashes of the Domain</Link> is installed, the Perihelion Project has no commodity demands, the coronal tap is created immediately upon building construction completion, and the player must use the Ashes of the Domain megastructure tab to bring it online.</li>
                        <li>Once construction is complete, the coronal tap appears in the system and the Perihelion Project industry is removed from the colony.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
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
                        <li>Can only be built in a star system with at least one blue star, or a trinary system whose three stars are not all the same color.</li>
                        <li>Cannot be built in a system that already has a coronal tap, or in a system where another colony is already running a Perihelion Project.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>10</span></div>
            </section>
        </div>
    );
}
