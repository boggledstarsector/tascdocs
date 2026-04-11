import Link from "next/link";

export default function PlanetCracker() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Planet Cracker</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/planet_cracker.png"
                        alt="Planet Cracker"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Hypervelocity kinetic bombardment platforms, originally designed as weapons of mass destruction during the Domain&apos;s most violent insurgencies. Each &apos;cracker&apos; accelerates a tungsten rod to relativistic speeds on an impact trajectory calculated to maximize tectonic disruption. The result: localized earthquakes, volcanic activation, and upwelling of mineral-rich mantle material that can be mined once the dust settles. The technique is crude, environmentally catastrophic, and brutally effective—exactly the sort of solution that appeals to desperate colonies or unscrupulous mining conglomerates.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span><span className="italic opacity-60"> (use LunaLib settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>75,000¢</span></div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>500¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>After <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days of uninterrupted operation, adds the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>tectonic activity</Link> condition to the orbited planet and improves its <Link href="https://starsector.wiki.gg/wiki/Ore" style={{ color: 'rgb(5, 250, 250)' }}>ore</Link> and <Link href="https://starsector.wiki.gg/wiki/Rare_ore" style={{ color: 'rgb(5, 250, 250)' }}>rare ore</Link> availability by one tier.
                            <ul className="list-disc list-inside pl-6">
                                <li className="italic opacity-60">The cracking project length (default <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days) is configurable in LunaLib settings.</li>
                            </ul>
                        </li>
                        <li>Once cracking is complete, the structure can be deconstructed without risk of regression.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" />
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" />
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" />
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: <span className="italic opacity-60"> (none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Can only be built on orbital stations.</li>
                        <li>The station must orbit a solid planet; gas giants and stars cannot be cracked.</li>
                        <li>Cannot be built if the orbited planet already has tectonic activity, or is already at ultrarich availability for both ore and rare ore.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
