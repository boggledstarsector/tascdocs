import Link from "next/link";

export default function SkyCities() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Sky Cities</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/sky_cities.png"
                        alt="Sky Cities"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Colossal arcologies suspended within the upper atmosphere of a gas giant, held aloft by specialized atmospheric buoyancy systems. These floating cities can provide a habitable environment for millions, shielding them from the crushing pressures and violent storms below.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>900,000Â¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>6,000Â¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Size" style={{ color: 'rgb(5, 250, 250)' }}>population growth</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> * (colony size - 1).</li>
                        <li><Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>Ground defense</Link> malus of <span style={{ color: 'rgb(200, 10, 20)' }}>x0.05</span>. <span className="italic opacity-60"> (can be disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                        <li><Link href="https://starsector.wiki.gg/wiki/Colony#Accessibility" style={{ color: 'rgb(5, 250, 250)' }}>Accessibility</Link> bonus of <span style={{ color: 'rgb(5, 115, 10)' }}>+10%</span>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>dense atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link>.</li>
                        <li>Suppresses the <Link href="https://starsector.wiki.gg/wiki/Colony#Hazard_rating" style={{ color: 'rgb(5, 250, 250)' }}>hazard</Link> increase from <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>water surface</Link>.</li>
                        <li>Suppresses perpetual dust storm. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses military virus. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses psychoactive fungus. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses parasitic spores. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses chaotic structures. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link>)</span></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>3</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core" className="shrink-0"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>2</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core" className="shrink-0"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Sky Cities is the variant of <Link href="/docs/domed-cities" style={{ color: 'rgb(5, 250, 250)' }}>Domed Cities</Link> that is automatically built on gas giants instead of the standard Domed Cities building. It shares the same enable/disable <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'rgb(5, 250, 250)' }}>LunaLib</Link> setting as Domed Cities.</li>
                        <li>Sky Cities has significantly higher build cost (<span style={{ color: 'rgb(255, 210, 0)' }}>3x</span>) and monthly upkeep (<span style={{ color: 'rgb(255, 210, 0)' }}>6x</span>) compared to the standard Domed Cities building, reflecting the difficulty of constructing and maintaining floating arcologies in a gas giant&apos;s atmosphere.</li>
                        <li>Unlike Domed Cities, Sky Cities can be constructed on colonies with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link> without requiring a Harmonic Damper, since the cities are suspended in the atmosphere rather than resting on the surface. It still cannot be constructed on colonies with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Meteor Impacts</Link>.</li>
                        <li>The list of conditions suppressed by this building can be configured by the player by modifying the CSV file <Link href="https://github.com/boggledstarsector/TASC/blob/main/data/campaign/terraforming/domed_cities_suppressed_conditions.csv" style={{ color: 'rgb(5, 250, 250)' }}>here</Link> in the TASC mod folder.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
