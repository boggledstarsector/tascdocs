import Link from "next/link";

export default function Hydroponics() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Hydroponics</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/hydroponics.png"
                        alt="Hydroponics"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Without soil or natural light, life finds a way. These hydroponic bays represent centuries of agricultural refinement dating back to the first generation ships and O'Neill cylinders of Old Earth's diaspora. Nutrient-rich water circulates through racks of genetically modified crops optimized for minimal space and maximum caloric output, their grow-lights cycling in rhythms that mimic forgotten seasons.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span><span className="italic opacity-60"> (use <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>250,000Â¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>1,500Â¢</span> * (colony size - 2)</div>
                <div className="flex flex-col gap-1">
                    <div>Supply:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Food" className="shrink-0">
                                <img src="/images/commodities/food.png" alt="Food" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" className="shrink-0">
                                <img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10 shrink-0" />
                            </Link>
                            <span>colony size</span>
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
                        <li>Food production is reduced if heavy machinery (or, on non-habitable worlds, organics) demand is unmet.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Food" style={{ color: 'rgb(5, 250, 250)' }}>food</Link> production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>, reduces demand by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> and reduces upkeep by <span style={{ color: 'rgb(255, 210, 0)' }}>25%</span>.</span>
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
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="https://starsector.wiki.gg/wiki/Food" style={{ color: 'rgb(5, 250, 250)' }}>food</Link> production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>0</span></div>
            </section>
        </div>
    );
}
