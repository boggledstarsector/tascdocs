import Link from "next/link";

export default function MesozoicPark() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Mesozoic Park</h1>
                <div className="flex flex-wrap justify-start gap-4">
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/mesozoic_park_terran.png"
                            alt="Mesozoic Park terran variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Terran variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/mesozoic_park_water.png"
                            alt="Mesozoic Park water variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Water variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/mesozoic_park_jungle.png"
                            alt="Mesozoic Park jungle variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Jungle variant</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/mesozoic_park_desert.png"
                            alt="Mesozoic Park desert variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Desert variant</div>
                    </div>
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Humans have long been fascinated by extinct Old Earth megafauna. Although no DNA from these creatures has survived to the present day, synthetic organisms engineered to approximate them can be created using genetic engineering. Wealthy tourists and trophy hunters are drawn to worlds where these &quot;terrible lizards&quot; roam the wilds, provided the colony is easily accessible and stable enough for visitors to feel safe.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>225,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>90</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>1,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Generates a large amount of income scaled by colony <Link href="https://starsector.wiki.gg/wiki/Colony#Accessibility" style={{ color: 'rgb(5, 250, 250)' }}>accessibility</Link> and <Link href="https://starsector.wiki.gg/wiki/Colony#Stability" style={{ color: 'rgb(5, 250, 250)' }}>stability</Link>.</li>
                        <li>Adds the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link> condition to the colony when construction finishes. This condition is not removed if the Mesozoic Park is closed.</li>
                        <li>Automatically closes and is removed if the planet is later terraformed to a type incompatible with Mesozoic Park (any installed <Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> is returned to storage).</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases income by <span style={{ color: 'rgb(255, 210, 0)' }}>40%</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core" className="shrink-0"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases income by <span style={{ color: 'rgb(255, 210, 0)' }}>20%</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core" className="shrink-0"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10 shrink-0" /></Link>
                            <span>Increases income by <span style={{ color: 'rgb(255, 210, 0)' }}>10%</span>.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases income by <span style={{ color: 'rgb(255, 210, 0)' }}>40%</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Income can be greatly increased by building a <Link href="/docs/genelab" style={{ color: 'rgb(5, 250, 250)' }}>Genelab</Link> on the same colony, which adds a base <span style={{ color: 'rgb(255, 210, 0)' }}>100%</span> income bonus on top of any bonuses from AI cores and improvement on the Genelab itself.</li>
                        <li>The building&apos;s image changes based on the host planet type (terran, water, jungle, or desert). All four variants are functionally identical and differ only in visual presentation.</li>
                        <li>Can only be built on habitable terran, water, jungle, or desert worlds.</li>
                        <li>Cannot be built on worlds with <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>dense atmosphere</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic atmosphere</Link>, or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link>.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
