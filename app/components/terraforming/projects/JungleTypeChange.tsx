import Link from "next/link";

export default function JungleTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Jungle Type Change</h1>
                <div className="md:max-w-[750px]"><span className="italic">Transforms a planet into a jungle world — a hot, humid, and densely forested planet teeming with life. Jungle worlds are rich in organics and support substantial agriculture, though their aggressive biospheres can pose hazards.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Planet type change</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a jungle world</li>
                        <li>Atmospheric density is normal <span className="italic opacity-60">(no thin, dense, or missing atmosphere)</span></li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is temperate or <Link href="https://starsector.wiki.gg/wiki/Hot" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link> <span className="italic opacity-60">(cannot be cold, very cold, or very hot)</span></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony</li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>high</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to <span style={{ color: 'rgb(5, 250, 250)' }}>jungle</span></li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> (adequate)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Organics" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> (common)</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Jungle worlds have excellent organics potential — they can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>plentiful</span> via the <Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>organics improvement</Link> project.</li>
                        <li>Jungle worlds <span style={{ color: 'rgb(200, 10, 20)' }}>cannot</span> produce volatiles. If you need volatiles, consider a <Link href="/docs/terraforming/terran-type-change" style={{ color: 'rgb(5, 250, 250)' }}>terran</Link> or <Link href="/docs/terraforming/tundra-type-change" style={{ color: 'rgb(5, 250, 250)' }}>tundra</Link> type change instead.</li>
                        <li>Farmland can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>bountiful</span> via the <Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>farmland improvement</Link> project.</li>
                        <li>The temperature requirement (temperate or hot) means cold or very cold worlds cannot be converted to jungle. The <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> can suppress the cold condition but not very cold.</li>
                        <li>If <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> is built, the <Link href="https://starsector.wiki.gg/wiki/Inimical_Biosphere" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link> condition will be re-added.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
