import Link from "next/link";

export default function AridTypeChange() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Arid Type Change</h1>
                <div className="md:max-w-[750px]"><span className="italic">Transforms a planet into an arid desert world — a habitable but dry planet with limited water and sparse vegetation. Desert worlds can sustain colonies and support modest agriculture, though their true value often lies in mineral extraction.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Planet type change</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not already a desert world</li>
                        <li>Atmospheric density is normal <span className="italic opacity-60">(no thin, dense, or missing atmosphere)</span></li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li>Temperature is temperate or <Link href="https://starsector.wiki.gg/wiki/Hot" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link> <span className="italic opacity-60">(cannot be cold, very cold, or very hot)</span></li>
                        <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> is operational on the colony</li>
                        <li>Water level is <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> or higher</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Planet type changes to <span style={{ color: 'rgb(5, 250, 250)' }}>arid (desert)</span></li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> (adequate)</li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Organics" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> (trace)</li>
                        <li>Removes all pre-existing atmosphere, weather, biosphere, farmland, organics, and volatiles conditions</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>The arid type change has a lower water requirement than terran, jungle, or water type changes — only <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> water is needed. Desert and tundra worlds naturally have medium water, so they may not need a water source.</li>
                        <li>Desert worlds have limited resource improvement potential: organics can only reach <span style={{ color: 'rgb(255, 210, 0)' }}>common</span>, and volatiles can only reach <span style={{ color: 'rgb(255, 210, 0)' }}>trace</span>.</li>
                        <li>Farmland can be improved up to <span style={{ color: 'rgb(255, 210, 0)' }}>bountiful</span> via the <Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>farmland improvement</Link> project.</li>
                        <li>If <Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link> is built, the <Link href="https://starsector.wiki.gg/wiki/Inimical_Biosphere" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link> condition will be re-added.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
