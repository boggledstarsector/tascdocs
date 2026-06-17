import Link from "next/link";

export default function StormTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Storm Type Change</h1>
                <div className="flex justify-start">
                    <img src="/images/planets/storm.jpg" alt="Storm planet texture" className="w-80 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">A planet that has been gradually shaped into a smooth sphere by relentless, strong winds carrying dense clouds of grit and other abrasive materials. Although <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>habitable</Link>, the surface conditions are harsh due to constant equipment wear and the risk of being struck by rogue storm-tossed objects. This makes colonies on them easily defensible, albeit at an ongoing cost.</span></div>
                <div>Requires the <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link> mod.</div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a storm world</li>
                        <li>Atmospheric density is normal</li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is temperate or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link> <span className="italic opacity-60">(cannot be <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>cold</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>very cold</Link>, or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'inherit' }}>very hot</Link>)</span></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony <span className="italic opacity-60">(not required if the <Link href="/docs/stellar-reflector-array" style={{ color: 'inherit' }}>Stellar Reflector Array</Link> building is disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> or higher <span className="italic opacity-60">(not required if <Link href="/docs/ismaras-sling" style={{ color: 'inherit' }}>Ismara&apos;s Sling</Link> and <Link href="/docs/asteroid-processing" style={{ color: 'inherit' }}>Asteroid Processing</Link> are disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to storm</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> (adequate)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Organics_reserves" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> (trace)</li>
                        <li>Adds Perpetual Dust Storm condition</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Storm worlds share the same terraforming requirements and base resources as <Link href="/docs/terraforming/arid-type-change" style={{ color: 'rgb(5, 250, 250)' }}>arid (desert)</Link> worlds, with the addition of the Perpetual Dust Storm condition.</li>
                        <li>Planets with low base water will need an <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility in the same system to reach medium water level.</li>
                        <li>After the type change, resources start at their base level for storm worlds. Use <Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link>, <Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link>, and <Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> improvement projects to increase them further.</li>
                        <li>Ore deposits are <span style={{ color: 'rgb(200, 10, 20)' }}>never modified</span> by terraforming projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
