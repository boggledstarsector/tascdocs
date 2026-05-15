import Link from "next/link";

export default function TundraTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Tundra Type Change</h1>
                <div className="flex justify-start">
                    <img src="/images/planets/tundra.jpg" alt="Tundra planet texture" className="w-80 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">A terran-extreme variant world with a nitrogen-oxygen atmosphere maintained by a relatively subdued biosphere that exists largely within the oceans that undergo periodic thaw periods. The surface is very cold indeed, but it is human-viable if precautions are observed. Carbon dioxide may freeze out of the atmosphere at the poles during the local winter.</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a tundra world</li>
                        <li>Atmospheric density is normal</li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is temperate or <Link href="https://starsector.wiki.gg/wiki/Cold" style={{ color: 'rgb(5, 250, 250)' }}>cold</Link> <span className="italic opacity-60">(cannot be hot, very hot, or very cold)</span></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony</li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> or higher</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to <span style={{ color: 'rgb(5, 250, 250)' }}>tundra</span></li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> (adequate)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Volatiles" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> (diffuse) <span className="italic opacity-60">(can be disabled via LunaLib settings)</span></li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Tundra worlds are the best choice for volatiles production alongside frozen worlds — volatiles can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>plentiful</span> via the <Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>volatiles improvement</Link> project.</li>
                        <li>Tundra worlds have very limited organics potential — they can only reach <span style={{ color: 'rgb(255, 210, 0)' }}>trace</span> organics.</li>
                        <li>Farmland can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>bountiful</span> via the <Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>farmland improvement</Link> project.</li>
                        <li>Like the <Link href="/docs/terraforming/arid-type-change" style={{ color: 'rgb(5, 250, 250)' }}>arid type change</Link>, tundra only requires <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> water, making it accessible for desert and tundra worlds without needing a water source building.</li>
                        <li>Ore deposits are <span style={{ color: 'rgb(200, 10, 20)' }}>never modified</span> by terraforming projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
