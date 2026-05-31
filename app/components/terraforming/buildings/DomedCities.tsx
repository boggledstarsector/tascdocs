import Link from "next/link";

export default function DomedCities() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Domed Cities</h1>
                <div className="flex flex-wrap justify-start gap-4">
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_barren.png"
                            alt="Domed Cities barren variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Barren variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_desert.png"
                            alt="Domed Cities desert variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Desert variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_frozen.png"
                            alt="Domed Cities frozen variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Frozen variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_jungle.png"
                            alt="Domed Cities jungle variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Jungle variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_terran.png"
                            alt="Domed Cities terran variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Terran variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_toxic.png"
                            alt="Domed Cities toxic variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Toxic variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_tundra.png"
                            alt="Domed Cities tundra variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Tundra variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/domed_cities_volcanic.png"
                            alt="Domed Cities volcanic variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Volcanic variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/sky_cities.png"
                            alt="Sky Cities gas giant variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm"><Link href="/docs/sky-cities" style={{ color: 'inherit' }}>Sky Cities</Link> (gas giant)</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/seafloor_cities.png"
                            alt="Seafloor Cities water variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm"><Link href="/docs/seafloor-cities" style={{ color: 'inherit' }}>Seafloor Cities</Link> (water)</div>
                    </div>
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Hermetically sealed domes dozens of kilometers across can enclose the bulk of a colony's population in a relatively Earth-like environment. Hazardous conditions imposed by atmospheric properties, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>extreme weather</Link> and dangerous fauna are mitigated inside the domes. Concentrating industrial and population centers under fragile domes makes the colony almost defenseless against raiding and bombardment.</span></div>
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
                        <li><Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>Ground defense</Link> malus of <span style={{ color: 'rgb(200, 10, 20)' }}>x0.05</span>. <span className="italic opacity-60"> (can be disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
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
                        <li>
                            The building&apos;s image changes based on the host <Link href="https://starsector.wiki.gg/wiki/Category:Planets" style={{ color: 'rgb(5, 250, 250)' }}>planet type</Link> (barren, desert, frozen, jungle, terran, toxic, tundra, or volcanic). All variants are functionally identical and differ only in visual presentation. Additionally, there are special versions depending on the planet type:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li><Link href="/docs/sky-cities" style={{ color: 'rgb(5, 250, 250)' }}>Sky Cities</Link> on gas giants</li>
                                <li><Link href="/docs/seafloor-cities" style={{ color: 'rgb(5, 250, 250)' }}>Seafloor Cities</Link> on water worlds</li>
                            </ul>
                        </li>
                        <li>Cannot be constructed on colonies with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Meteor Impacts</Link> or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link>. If there is an operational <Link href="/docs/harmonic-damper" style={{ color: 'rgb(5, 250, 250)' }}>Harmonic Damper</Link> on the colony, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link> does not prevent construction.</li>
                        <li>The list of conditions suppressed by this building can be configured by the player by modifying the CSV file <Link href="https://github.com/boggledstarsector/TASC/blob/main/data/campaign/terraforming/domed_cities_suppressed_conditions.csv" style={{ color: 'rgb(5, 250, 250)' }}>here</Link> in the TASC mod folder.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
