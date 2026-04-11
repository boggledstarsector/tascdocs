import Link from "next/link";

export default function DomedCities() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Domed Cities</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/domed_cities.png"
                        alt="Domed Cities"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Hermetically sealed domes dozens of kilometers across can enclose the bulk of a colony's population in a relatively Earth-like environment. Hazardous conditions imposed by atmospheric properties, extreme weather and dangerous fauna are mitigated inside the domes. Concentrating industrial and population centers under fragile domes makes the colony almost defenseless against raiding and bombardment.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000¢</span></div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Size" style={{ color: 'rgb(5, 250, 250)' }}>population growth</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span> * (colony size - 1).</li>
                        <li><Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>Ground defense</Link> malus of <span style={{ color: 'rgb(200, 10, 20)' }}>x0.05</span>. <span className="italic opacity-60"> (can be disabled via LunaLib settings)</span></li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>dense atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic atmosphere</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link>.</li>
                        <li>Suppresses the hazard increase from <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>water surface</Link>.</li>
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
                        <li>
                            Has different versions depending on the <Link href="https://starsector.wiki.gg/wiki/Category:Planets" style={{ color: 'rgb(5, 250, 250)' }}>planet type</Link>:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Sky Cities on gas giants</li>
                                <li>Seafloor Cities on water worlds</li>
                            </ul>
                        </li>
                        <li>Cannot be constructed on colonies with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Meteor Impacts</Link> or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link>. If there is an operational Harmonic Damper on the colony, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link> does not prevent construction.</li>
                        <li>The list of conditions suppressed by this building can be configured by the player by modifying the CSV file <Link href="https://github.com/boggledstarsector/TASC/blob/main/data/campaign/terraforming/domed_cities_suppressed_conditions.csv" style={{ color: 'rgb(5, 250, 250)' }}>here</Link> in the TASC mod folder.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
