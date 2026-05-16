import Link from "next/link";

export default function StellarReflectorArray() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Stellar Reflector Array</h1>
                <div className="flex flex-wrap justify-start gap-4">
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/stellar_mirror.png"
                            alt="Stellar Mirror variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Mirror variant (cold / dim worlds)</div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <img
                            src="/images/buildings/terraforming/stellar_shade.png"
                            alt="Stellar Shade variant"
                            className="h-auto border"
                            style={{ borderColor: 'rgb(5, 250, 250)' }}
                        />
                        <div className="italic opacity-60 text-sm">Shade variant (hot worlds)</div>
                    </div>
                </div>
                <div className="md:max-w-[750px]"><span className="italic">A constellation of orbital reflectors that moderates temperatures and improves crop yields. Unable to counteract <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>extreme heat</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>extreme cold</Link> and complete <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>darkness</Link>.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>90</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="/docs/domain-archaeology">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10" />
                            </Link>
                            <span>1 <span className="italic opacity-60">(only demanded when Domain-tech content and <Link href="/docs/domain-archaeology" style={{ color: 'inherit' }}>Domain Archaeology</Link> are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>cold</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>poor light</Link>.</li>
                        <li>Increases <Link href="https://starsector.wiki.gg/wiki/Food" style={{ color: 'rgb(5, 250, 250)' }}>food</Link> production from <Link href="https://starsector.wiki.gg/wiki/Farming" style={{ color: 'rgb(5, 250, 250)' }}>Farming</Link> and <Link href="https://starsector.wiki.gg/wiki/Aquaculture" style={{ color: 'rgb(5, 250, 250)' }}>Aquaculture</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>2</span>.</li>
                        <li>Spawns three reflector entities orbiting the colony.</li>
                        <li>Upkeep is multiplied by <span style={{ color: 'rgb(255, 210, 0)' }}>5</span> when the <Link href="/docs/domain-archaeology" style={{ color: 'rgb(5, 250, 250)' }}>domain-era artifacts</Link> demand is unmet.</li>
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
                        <li>The array appears as three orbital mirrors on cold or dim worlds (poor light, cold, very cold, tundra, frozen) and as three orbital shades on hot worlds (hot, very hot, desert, jungle). Both variants are functionally identical and differ only in visual presentation.</li>
                        <li>Cannot be built on stations or on worlds with the <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>dark</Link> condition.</li>
                        <li>Cannot counteract <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>very hot</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>very cold</Link>, or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>dark</Link>.</li>
                        <li>Starsector distinguishes between <em>suppressing</em> a market condition and <em>removing</em> it. Suppression hides the condition&apos;s effects (<Link href="https://starsector.wiki.gg/wiki/Colony#Hazard_rating" style={{ color: 'rgb(5, 250, 250)' }}>hazard rating</Link>, supply/demand modifiers, and so on) for as long as the suppressing source is active, but the condition itself remains on the market. Removal deletes the condition outright. The Stellar Reflector Array only suppresses hot, cold, and poor light — it does not remove them. Because TASC&apos;s terraforming projects gate their availability on the planet&apos;s underlying temperature condition, building a Stellar Reflector Array will neutralize the hazard from hot or cold worlds but will not unlock terraforming projects that are otherwise blocked by those temperature conditions.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span> <span className="italic opacity-60">(only on player-owned colonies)</span></div>
            </section>
        </div>
    );
}
