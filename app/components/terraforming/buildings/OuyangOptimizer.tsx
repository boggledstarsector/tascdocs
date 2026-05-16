import Link from "next/link";

export default function OuyangOptimizer() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Ouyang Optimizer</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/ouyang_optimizer.png"
                        alt="Ouyang Optimizer"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Each gas giant has unique weather patterns. Ouyang optimization permanently alters these patterns to maximize availability of volatiles for extraction - at the cost of making the weather more extreme, and thus more hazardous to inhabitants of the planet. This effect persists even after the Ouyang Optimizer is deconstructed.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span><span className="italic opacity-60"> (use <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>150,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>30</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days of continuous operation, permanently increases the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Volatiles_reserves" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> deposit level on the host gas giant by one step and adds the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link> condition.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The optimization project length is configurable in <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings.</li>
                            </ul>
                        </li>
                        <li>The volatiles improvement and extreme weather condition persist even after the Ouyang Optimizer is deconstructed.</li>
                        <li>Optimization progress is stalled while the building is disrupted.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: <span className="italic opacity-60"> (none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Can only be constructed on a station orbiting a gas giant.</li>
                        <li>Cannot be built if the host gas giant already has the extreme weather condition or a plentiful volatiles deposit.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
