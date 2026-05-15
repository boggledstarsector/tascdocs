import Link from "next/link";

export default function StormTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Storm Type Change</h1>
                <div className="flex justify-start">
                    <img src="/images/planets/storm.jpg" alt="Storm planet texture" className="w-80 h-auto border" style={{ borderColor: 'rgb(5, 250, 250)' }} />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">A planet that has been gradually shaped into a smooth sphere by relentless, strong winds carrying dense clouds of grit and other abrasive materials. Although habitable, the surface conditions are harsh due to constant equipment wear and the risk of being struck by rogue storm-tossed objects. This makes colonies on them easily defensible, albeit at an ongoing cost.</span></div>
                <div>Requires the <Link href="https://fractalsoftworks.com/forum/index.php?topic=25500.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link> mod.</div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a storm world</li>
                        <li>Atmospheric density is normal</li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is temperate or <Link href="https://starsector.wiki.gg/wiki/Hot" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link> <span className="italic opacity-60">(cannot be cold, very cold, or very hot)</span></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony</li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> or higher</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to <span style={{ color: 'rgb(5, 250, 250)' }}>storm</span></li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> (adequate)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Organics" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> (trace)</li>
                        <li>Adds <span style={{ color: 'rgb(5, 250, 250)' }}>Perpetual Dust Storm</span> condition</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Storm worlds share the same terraforming requirements and base resources as <Link href="/docs/terraforming/arid-type-change" style={{ color: 'rgb(5, 250, 250)' }}>arid (desert)</Link> worlds, with the addition of the <span style={{ color: 'rgb(5, 250, 250)' }}>Perpetual Dust Storm</span> condition.</li>
                        <li>Ore deposits are <span style={{ color: 'rgb(200, 10, 20)' }}>never modified</span> by terraforming projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
