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
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a frozen world</li>
                        <li>Atmospheric density is normal</li>
                        <li>Temperature is <Link href="https://starsector.wiki.gg/wiki/Very_Cold" style={{ color: 'rgb(5, 250, 250)' }}>very cold</Link></li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>high</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to <span style={{ color: 'rgb(5, 250, 250)' }}>frozen</span></li>
                        <li><span style={{ color: 'rgb(200, 10, 20)' }}>Not habitable</span> — frozen worlds cannot support unprotected human habitation</li>
                        <li><span style={{ color: 'rgb(200, 10, 20)' }}>No farmland</span> — frozen worlds cannot support agriculture</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Volatiles" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> (diffuse)</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Unlike other type changes, the frozen type change does <span style={{ color: 'rgb(5, 250, 250)' }}>not</span> require a <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link>.</li>
                        <li>The frozen type change also does <span style={{ color: 'rgb(5, 250, 250)' }}>not</span> check for toxic or irradiated atmosphere — only normal atmospheric density is required.</li>
                        <li>The requirement for very cold temperature severely limits which worlds can become frozen. Only planets already very cold (far from their star, or around dim stars) qualify.</li>
                        <li>Frozen worlds have the best volatiles potential — they can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>plentiful</span> via the <Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>volatiles improvement</Link> project.</li>
                        <li>Frozen worlds have <span style={{ color: 'rgb(200, 10, 20)' }}>no</span> organics potential.</li>
                        <li>To make a frozen world livable, you will need <Link href="/docs/domed-cities" style={{ color: 'rgb(5, 250, 250)' }}>Domed Cities</Link> to suppress the hazardous conditions.</li>
                        <li>Ore deposits are <span style={{ color: 'rgb(200, 10, 20)' }}>never modified</span> by terraforming projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
