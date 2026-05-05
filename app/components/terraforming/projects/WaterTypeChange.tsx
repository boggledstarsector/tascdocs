import Link from "next/link";

export default function WaterTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Water Type Change</h1>
                <div className="md:max-w-[750px]"><span className="italic">Transforms a planet into a water world — a habitable ocean planet with no exposed land masses. Water worlds support abundant marine life and organic deposits but cannot sustain traditional agriculture.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Planet type change</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a water world</li>
                        <li>Atmospheric density is normal <span className="italic opacity-60">(no thin, dense, or missing atmosphere)</span></li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is not <Link href="https://starsector.wiki.gg/wiki/Very_Hot" style={{ color: 'rgb(5, 250, 250)' }}>very hot</Link> or <Link href="https://starsector.wiki.gg/wiki/Very_Cold" style={{ color: 'rgb(5, 250, 250)' }}>very cold</Link></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony</li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>high</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to <span style={{ color: 'rgb(5, 250, 250)' }}>water</span></li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Water_Surface" style={{ color: 'rgb(5, 250, 250)' }}>water surface</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Organics" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> (common)</li>
                        <li><span style={{ color: 'rgb(200, 10, 20)' }}>No farmland</span> — water worlds cannot support farmland</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Water worlds do not receive farmland. If you need food production, consider <Link href="/docs/hydroponics" style={{ color: 'rgb(5, 250, 250)' }}>Hydroponics</Link> or <Link href="/docs/seafloor-cities" style={{ color: 'rgb(5, 250, 250)' }}>Seafloor Cities</Link> (which enables <Link href="https://starsector.wiki.gg/wiki/Aquaculture" style={{ color: 'rgb(5, 250, 250)' }}>aquaculture</Link>).</li>
                        <li>Organics can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>plentiful</span> on water worlds via the <Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>organics improvement</Link> project.</li>
                        <li>Volatiles can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>abundant</span> on water worlds (not plentiful).</li>
                        <li>If <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> is built, the <Link href="https://starsector.wiki.gg/wiki/Inimical_Biosphere" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link> condition will be re-added after the type change.</li>
                        <li>Existing <Link href="/docs/genelab" style={{ color: 'rgb(5, 250, 250)' }}>Volturnian lobster pens</Link> are preserved when the target type is water.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
