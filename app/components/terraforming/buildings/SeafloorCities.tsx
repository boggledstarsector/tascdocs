import Link from "next/link";

export default function SeafloorCities() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Seafloor Cities</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/seafloor_cities.png"
                        alt="Seafloor Cities"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Enclosed megastructures resting on the abyssal plains, these undersea cities withstand crushing pressure and eternal darkness with reinforced hulls and advanced life-support systems. The isolation of these colonies makes them difficult to reach, providing security from external threats but hampering trade.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Size" style={{ color: 'rgb(5, 250, 250)' }}>population growth</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> * (colony size - 1).</li>
                        <li><Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>Ground defense</Link> bonus of <span style={{ color: 'rgb(5, 115, 10)' }}>x6</span>.</li>
                        <li><Link href="https://starsector.wiki.gg/wiki/Colony#Accessibility" style={{ color: 'rgb(5, 250, 250)' }}>Accessibility</Link> penalty of <span style={{ color: 'rgb(200, 10, 20)' }}>-10%</span>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>dense atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link>.</li>
                        <li>Suppresses the hazard increase from <Link href="https://starsector.wiki.gg/wiki/Market_condition#Resource" style={{ color: 'rgb(5, 250, 250)' }}>water surface</Link>.</li>
                        <li>Suppresses perpetual dust storm. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses military virus. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses psychoactive fungus. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses parasitic spores. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link>)</span></li>
                        <li>Suppresses chaotic structures. <span className="italic opacity-60">(this condition is part of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link>)</span></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" />
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>3</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" />
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>2</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" />
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Seafloor Cities is the variant of <Link href="/docs/domed-cities" style={{ color: 'rgb(5, 250, 250)' }}>Domed Cities</Link> that is automatically built on water worlds instead of the standard Domed Cities building. It shares the same enable/disable LunaLib setting as Domed Cities.</li>
                        <li>Unlike Domed Cities, Seafloor Cities can be constructed on colonies with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Meteor Impacts</Link>. It still cannot be constructed on colonies with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link> unless there is an operational Harmonic Damper on the colony.</li>
                        <li>The list of conditions suppressed by this building can be configured by the player by modifying the CSV file <Link href="https://github.com/boggledstarsector/TASC/blob/main/data/campaign/terraforming/domed_cities_suppressed_conditions.csv" style={{ color: 'rgb(5, 250, 250)' }}>here</Link> in the TASC mod folder.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
