import Link from "next/link";

export default function SakuraTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Sakura Type Change</h1>
                <div className="flex justify-start">
                    <img src="/images/planets/sakura.jpg" alt="Sakura planet texture" className="w-80 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">A stunningly beautiful terran world covered in a thick forest of perennially blooming pink vegetation. The pleasant atmosphere, abundant water and regular seasonal cycle make the planet a particularly beneficial home.</span></div>
                <div>Requires the <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link> mod.</div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a sakura world</li>
                        <li>Atmospheric density is normal</li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is not <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>very hot</Link> or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>very cold</Link></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony</li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>high</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to sakura</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> (adequate)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Organics_reserves" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> (common)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Volatiles_reserves" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> (trace) <span className="italic opacity-60">(can be disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                        <li>Adds Ever-Blooming Forest condition <span className="italic opacity-60"></span></li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Sakura worlds share the same terraforming requirements and base resources as <Link href="/docs/terraforming/terran-type-change" style={{ color: 'rgb(5, 250, 250)' }}>terran</Link> worlds, with the addition of the Ever-Blooming Forest condition.</li>
                        <li>Planets with low base water will need an <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility in the same system to reach high water level.</li>
                        <li>After the type change, resources start at their base level for sakura worlds. Use <Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link>, <Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link>, and <Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> improvement projects to increase them further.</li>
                        <li>Ore deposits are <span style={{ color: 'rgb(200, 10, 20)' }}>never modified</span> by terraforming projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
