import Link from "next/link";

export default function FrozenTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Frozen Type Change</h1>
                <div className="flex justify-start">
                    <img src="/images/planets/frozen.jpg" alt="Frozen planet texture" className="w-80 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Water or ammonia ice is the primary surface feature of this world. Below the surface, there may be a liquid ocean or a rocky crust.</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a frozen world</li>
                        <li>Atmospheric density is normal</li>
                        <li>Temperature is <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>very cold</Link></li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>high</span> <span className="italic opacity-60">(not required if <Link href="/docs/ismaras-sling" style={{ color: 'inherit' }}>Ismara&apos;s Sling</Link> and <Link href="/docs/asteroid-processing" style={{ color: 'inherit' }}>Asteroid Processing</Link> are disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to frozen</li>
                        <li><span style={{ color: 'rgb(200, 10, 20)' }}>Not habitable</span> — frozen worlds cannot support unprotected human habitation</li>
                        <li><span style={{ color: 'rgb(200, 10, 20)' }}>No farmland</span> — frozen worlds cannot support agriculture</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Volatiles_reserves" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> (diffuse)</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planets with low base water will need an <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility in the same system to reach high water level.</li>
                        <li>After the type change, resources start at their base level for frozen worlds. Use the <Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> improvement project to increase it further.</li>
                        <li>Ore deposits are <span style={{ color: 'rgb(200, 10, 20)' }}>never modified</span> by terraforming projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
